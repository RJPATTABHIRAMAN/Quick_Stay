import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";
import { clerkMiddleware } from '@clerk/express';
import clerkWebhooks from "./controllers/clerkWebHooks.js"; // ✅ Fixed extension

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());

// ✅ Use POST method for webhook
app.post("/api/clerk", clerkWebhooks);

app.get('/', (req, res) => res.send("APs is working"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
