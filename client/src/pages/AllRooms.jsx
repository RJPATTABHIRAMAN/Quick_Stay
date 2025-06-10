import React, { useState } from 'react';
import { assets, facilityIcons, roomsDummyData } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import { StarRating } from '../components/StarRating';

const CheckBox = ({ label, selected = false, onChange = () => {} }) => {
  return (
    <label className='flex gap-3 items-center cursor-pointer pt-2 text-sm'>
      <input
        type='checkbox'
        checked={selected}
        onChange={(e) => onChange(e.target.checked, label)}
      />
      <span className='font-light select-none'>{label}</span>
    </label>
  );
};

const RadioButton = ({ label, selected = false, onChange = () => {} }) => {
  return (
    <label className='flex gap-3 items-center cursor-pointer pt-2 text-sm'>
      <input
        type='radio'
        name='sortOption'
        checked={selected}
        onChange={() => onChange(label)}
      />
      <span className='font-light select-none'>{label}</span>
    </label>
  );
};

export const AllRooms = () => {
  const navigate = useNavigate();
  const [openFilter, setOpenFilter] = useState(false);
  
  const roomTypes = [
    "Single Bed",
    "Double Bed",
    "Luxury Room",
    "Family Suite",
  ];
  
  const priceRanges = [
    '0 to 500',
    '500 to 1000',
    '1000 to 2000',
    '2000 to 3000',
  ];
  
  const sortOptions = [
    "Price Low to High",
    "Price High to Low",
    "Newest First"
  ];

  return (
    <div className='pt-28 md:pt-36 px-4 md:px-8 lg:px-24 xl:px-32'>
      {/* Header Section */}
      <div className='mb-6'>
        <h1 className='font-playfair text-4xl md:text-[40px]'>Hotel Rooms</h1>
        <p className='text-sm md:text-base text-gray-500/90 mt-2'>
          Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.
        </p>
      </div>

      <div className='flex flex-col lg:flex-row items-start justify-between gap-6'>
        {/* Filter Sidebar - Shows first on mobile, right side on desktop */}
        <div className='w-full lg:w-1/4 lg:order-2'>
          <div className='bg-white border border-gray-300 text-gray-600 lg:mt-0'>
            <div className={`flex items-center justify-between px-5 py-2.5 border-b border-gray-300`}>
              <p>FILTERS</p>
              <div 
                className='text-xs cursor-pointer lg:hidden'
                onClick={() => setOpenFilter(!openFilter)}
              >
                <span>{openFilter ? 'HIDE' : 'SHOW'}</span>
              </div>
              <div className='text-xs cursor-pointer hidden lg:block'>
                <span>CLEAR</span>
              </div>
            </div>
            
            <div className={`${openFilter ? 'block' : 'hidden'} lg:block`}>
              <div className='px-5 pt-5'> 
                <p className='font-medium text-gray-800 pb-2'>Popular Filters</p>
                {roomTypes.map((room, index) => (
                  <CheckBox key={index} label={room} />
                ))}
              </div>
              
              <div className='px-5 pt-5'> 
                <p className='font-medium text-gray-800 pb-2'>Price Range</p>
                {priceRanges.map((range, index) => (
                  <CheckBox key={index} label={`$ ${range}`} />
                ))}
              </div>
              
              <div className='px-5 pt-5 pb-5'> 
                <p className='font-medium text-gray-800 pb-2'>Sort Options</p>
                {sortOptions.map((option, index) => (
                  <RadioButton key={index} label={option} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Room List Section */}
        <div className='w-full lg:w-3/4 lg:order-1'>

          {roomsDummyData.map((room, index) => (
            <div key={index} className='flex flex-col md:flex-row items-start py-10 gap-6 border-b border-gray-300 last:pb-30 last:border-0'>
              <img
                onClick={() => {
                  navigate(`/rooms/${room._id}`);
                  scrollTo(0, 0);
                }}
                src={room.images[0]}
                alt="hotel-img"
                title='View Room Details'
                className='max-h-64 md:w-1/2 rounded-xl shadow-lg object-cover cursor-pointer'
              />

              <div className='mt-4'>
                <p className='text-gray-500'>{room.hotel.city}</p>
                <p
                  onClick={() => {
                    navigate(`/rooms/${room._id}`);
                    scrollTo(0, 0);
                  }}
                  className='text-gray-800 text-3xl font-playfair cursor-pointer'
                >
                  {room.hotel.name}
                </p>

                <div className='flex items-center mt-2'>
                  <StarRating />
                  <p className='ml-2'>200+ reviews</p>
                </div>

                <div className='flex items-center mt-1 text-gray-600'>
                  <img src={assets.locationIcon} alt="location-icon" className='w-4 h-4 mr-1' />
                  <span>{room.hotel.address}</span>
                </div>

                {/* Room Amenities */}
                <div className='flex flex-wrap items-center mt-3 mb-6 gap-4'>
                  {room.amenities.map((item, index) => (
                    <div key={index} className='flex items-center gap-2 px-3 py-2 rounded-lg bg-[#F5F5FF]/70'>
                      <img src={facilityIcons[item]} alt={item} className='w-5 h-5' />
                      <p className='text-xs'>{item}</p>
                    </div>
                  ))}
                </div>

                {/* Room price per night */}
                <p className='text-xl font-medium text-gray-700'>${room.pricePerNight} /night</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};