import React from 'react'
import { roomsDummyData } from '../assets/assets'
import HotelCard from './HotelCard'
import Title from './Title'
import { useNavigate } from 'react-router-dom'

export const FeatureDestination = () => {
  const navigate = useNavigate();
  return (
    <div className="px-6 py-10 bg-gray-50">
      <Title 
        title='Featured Destination' 
        subTitle='Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences' 
      />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-6">
        {roomsDummyData.slice(0, 4).map((room, index) => (
          <HotelCard key={room._id} room={room} index={index} />
        ))}
      </div>

      <div className="flex justify-center">
        <button 
          onClick={() => {
            navigate('/rooms');
            scrollTo(0, 0);
          }} 
          className='my-16 px-4 py-2 text-sm font-medium border border-gray-300 rounded bg-white hover:bg-gray-50 transition-all cursor-pointer'
        >
          View All Destinations
        </button>
      </div>
    </div>
  )
}
