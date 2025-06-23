import User from '../models/User.js';
import { Webhook } from 'svix';

const clerkWebhooks = async (req, res) => {
  try {
    const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    // Construct Svix headers from the request
    const headers = {
      'svix-id': req.headers['svix-id'],
      'svix-timestamp': req.headers['svix-timestamp'],
      'svix-signature': req.headers['svix-signature'],
    };

    // Convert request body to string (needed for verification)
    const payload = JSON.stringify(req.body);

    // Verify the payload and headers
    wh.verify(payload, headers);

    // Extract event data and type
    const { data, type } = req.body;

    // Prepare user data
    const userData = {
      _id: data.id,
      email: data.email_addresses?.[0]?.email_address || '',
      username: `${data.first_name || ''} ${data.last_name || ''}`.trim(),
      image: data.image_url,
    };

    // Handle different event types
    switch (type) {
      case 'user.created':
        await User.create(userData);
        break;
      case 'user.updated':
        await User.findByIdAndUpdate(data.id, userData, { new: true });
        break;
      case 'user.deleted':
        await User.findByIdAndDelete(data.id);
        break;
      default:
        break;
    }

    return res.json({ success: true, message: 'Webhook received successfully' });
  } catch (error) {
    console.error('Webhook Error:', error.message);
    return res.status(400).json({ success: false, message: error.message });
  }
};

export default clerkWebhooks;
