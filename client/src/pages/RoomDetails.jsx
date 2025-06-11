import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { assets, facilityIcons, roomsDummyData } from '../assets/assets';
import { StarRating } from '../components/StarRating';
import { roomCommonData } from '../assets/assets';
export const RoomDetails = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [mainImage, setMainImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('Room ID from params:', id); // Debug log
    console.log('Available rooms:', roomsDummyData); // Debug log
    
    if (!roomsDummyData || roomsDummyData.length === 0) {
      setError('No rooms data available');
      setLoading(false);
      return;
    }

    const selectedRoom = roomsDummyData.find(room => room._id === id);
    console.log('Selected room:', selectedRoom); // Debug log
    
    if (selectedRoom) {
      setRoom(selectedRoom);
      if (selectedRoom.images && selectedRoom.images.length > 0) {
        setMainImage(selectedRoom.images[0]);
      }
      setError(null);
    } else {
      setError(`Room with ID ${id} not found`);
    }
    setLoading(false);
  }, [id]);

  // Loading state
  if (loading) {
    return (
      <div className='py-28 md:py-36 px-4 md:px-16 lg:px-24 xl:px-32'>
        <div className='text-center'>Loading room details...</div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className='py-28 md:py-36 px-4 md:px-16 lg:px-24 xl:px-32'>
        <div className='text-center text-red-500'>
          <p>Error: {error}</p>
          <p className='mt-2'>Available room IDs: {roomsDummyData?.map(r => r._id).join(', ')}</p>
        </div>
      </div>
    );
  }

  // No room found
  if (!room) {
    return (
      <div className='py-28 md:py-36 px-4 md:px-16 lg:px-24 xl:px-32'>
        <div className='text-center'>Room not found</div>
      </div>
    );
  }

  return (
    <div className='py-28 md:py-36 px-4 md:px-16 lg:px-24 xl:px-32'>
      {/* Room Title and Offer */}
      <div className='flex flex-col md:flex-row items-start md:items-center gap-2'>
        <h1 className='text-3xl md:text-4xl font-playfair'>
          {room.hotel?.name || 'Hotel Name'}{' '}
          <span className='font-inter text-sm text-gray-600'>({room.roomType || 'Room Type'})</span>
        </h1>
        <p className='text-xs font-inter py-1.5 px-3 text-white bg-orange-500 rounded-full'>
          20% OFF
        </p>
      </div>

      {/* Room Rating */}
      <div className='flex items-center gap-1 mt-2'>
        <StarRating />
        <p className='ml-2'>200+ reviews</p>
      </div>

      {/* Room Address */}
      <div className='flex items-center gap-1 text-gray-500 mt-2'>
        <img src={assets?.locationIcon} alt='location-icon' className='w-4 h-4' />
        <span>{room.hotel?.address || 'Address not available'}</span>
      </div>

      {/* Room Images */}
      {room.images && room.images.length > 0 && (
        <div className='flex flex-col lg:flex-row mt-6 gap-6'>
          <div className='lg:w-1/2 w-full'>
            <img
              src={mainImage}
              alt='Room'
              className='w-full rounded-xl shadow-lg object-cover h-64 lg:h-96'
            />
          </div>
          <div className='grid grid-cols-2 gap-2 lg:w-1/2'>
            {room.images.length > 1 &&
              room.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Room thumbnail ${index}`}
                  className={`w-full h-32 rounded-xl shadow-md object-cover cursor-pointer transition-all ${
                    mainImage === image ? 'outline outline-3 outline-orange-500' : ''
                  }`}
                  onClick={() => setMainImage(image)}
                />
              ))}
          </div>
        </div>
      )}

      {/* Room Highlights */}
      <div className='flex flex-col md:flex-row md:justify-between mt-10'>
        <div className='flex flex-col'>
          <h1 className='text-xl font-semibold mb-4'>Experience Luxury Like Never Before</h1>
          {/* Fixed: Changed "ameities" to "amenities" and consolidated duplicate code */}
          {(room.amenities || room.ameities) && (room.amenities || room.ameities).length > 0 && (
            <div className='flex flex-wrap items-center mt-3 mb-6 gap-4'>
              {(room.amenities || room.ameities).map((item, index) => (
                <div key={index} className='flex flex-col items-center'>
                  <img 
                    src={facilityIcons?.[item]} 
                    alt={item} 
                    className='w-5 h-5 mb-1' 
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <p className='text-xs text-center'>{item}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        {/* Room price */}
        <div className='flex items-start'>
          <p className='text-2xl font-medium'>
            ${room.pricePerNight || 'N/A'}/night
          </p>
        </div>
      </div>

      {/* Booking Form */}
      <form className='bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.15)] p-6 rounded-xl mx-auto mt-16 max-w-6xl'>
        <div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6'>
          {/* Check-In */}
          <div className='flex flex-col w-full md:w-auto'>
            <label htmlFor="checkInDate" className='font-medium text-gray-500 mb-2'>Check-In</label>
            <input 
              type="date" 
              id="checkInDate" 
              placeholder='dd-mm-yyyy' 
              className='w-full md:w-40 rounded border border-gray-300 px-3 py-2 outline-none placeholder:text-gray-300'
            />
          </div>
          
          {/* Check-Out */}
          <div className='w-px h-16 bg-gray-300/70 max-md:hidden'></div>
          <div className='flex flex-col w-full md:w-auto'>
            <label htmlFor="checkOutDate" className='font-medium text-gray-500 mb-2'>Check-Out</label>
            <input 
              type="date" 
              id="checkOutDate" 
              placeholder='dd-mm-yyyy' 
              className='w-full md:w-40 rounded border border-gray-300 px-3 py-2 outline-none placeholder:text-gray-300'
            />
          </div>
          <div className='w-px h-16 bg-gray-300/70 max-md:hidden'></div>
          
          {/* Guests - Fixed: Removed extra "fl" and "ex-col" typo */}
          <div className='flex flex-col w-full md:w-auto'>
            <label htmlFor="guests" className='font-medium text-gray-500 mb-2'>Guests</label>
            <input 
              type="number" 
              id="guests" 
              placeholder='0' 
              className='w-full md:w-32 rounded border border-gray-300 px-3 py-2 outline-none'
              required
            />
          </div>
          
          {/* Book Now Button - Fixed: Corrected "Availablity" to "Availability" */}
          <div className='flex flex-col w-full md:w-auto'>
            <div className='mb-2 md:mb-0'></div> {/* Spacer to align with inputs */}
            <button 
              type='submit' 
              className='bg-blue-500 hover:bg-blue-600 active:scale-95 transition-all text-white rounded-md w-full md:w-auto md:px-8 py-3 md:py-4 text-base cursor-pointer'
            >
              Check Availability
            </button>
          </div>
        </div>
      </form>

      {/* Common Specifications - Fixed: Added proper margin and corrected class name */}
      <div className='mt-16 space-y-4'>
        {roomCommonData.map((spec, index) => (
          <div key={index} className='flex items-start gap-3'>
            {spec.icon ? (
              <img 
                src={spec.icon} 
                alt={`${spec.title}-icon`} 
                className='w-6 h-6 mt-1'
                onError={(e) => {
                  // Hide image if it fails to load
                  e.target.style.display = 'none';
                  // Show a fallback icon container
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
            ) : null}
            {/* Fallback icon container */}
            <div 
              className='w-6 h-6 mt-1 bg-gray-200 rounded flex items-center justify-center text-gray-500 text-xs font-bold'
              style={{ display: spec.icon ? 'none' : 'flex' }}
            >
              {spec.title.charAt(0)}
            </div>
            <div>
              <p className='text-base font-medium'>{spec.title}</p>
              <p className='text-gray-500 text-sm'>{spec.description}</p>
            </div>
          </div>
        ))}
      </div>
     <div className='max-w-3xl border-y border-gray-300 my-15 py-10 text-gray-500'>
  <p>Guests will be allocated on the ground floor according to availability. You get a comfortable Two bedroom apartment has a true city feeling. The price quoted is for two guest, at the guest slot please mark the number of guests to get the exact price for groups. The Guests will be allocated ground floor according to availability. You get the comfortable two bedroom apartment that has a true city feeling.</p>
</div>
{/* Hoted By */}
<div className='flex flex-col items-start gap-4'>
  <div className='flex gap-4'>
    <img src={room.hotel.owner.image} alt="Host" className='h-14 w-14 md:h-18 md:w-18 rounded-full'/>
    <div>
      <p className='text-lg md:text-xl'>Hosted by {room.hotel.name}</p>
      <div className='flex item-center mt-1'>
        <StarRating/>
        <p className='ml-2'>200+ reviews </p>
      </div>
    </div>
  </div>
      <button className='px-6 py-2.5 mt-4 rounded text-white bg-primary hover:bg-primary-dull tranistion-al cursor-poniter'>Contact Now</button>

</div>
    </div>
  );
};