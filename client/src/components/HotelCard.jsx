import React from 'react'
import { Link } from 'react-router-dom'

const HotelCard = ({ room, index }) => {
  return (
    <Link
      to={`/rooms/${room._id}`}
      onClick={() => scrollTo(0, 0)}
      className="block w-full bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
    >
      <div className="relative">
        {index % 2 === 0 && (
          <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-md text-xs font-medium z-10">
            Best Seller
          </div>
        )}

        <img
          src={room.images[0]}
          alt={room.hotel.name}
          style={{ height: '179px' }} // 20% smaller than h-56
          className="w-full object-cover rounded-t-2xl"
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900 mb-1">{room.hotel.name}</h3>

        <div className="flex items-center text-gray-500 text-sm mb-2">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
          {room.hotel.address}
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-900 font-semibold text-lg">${room.pricePerNight}<span className="text-sm text-gray-500">/night</span></span>

          <button className="px-4 py-2 text-sm font-medium border border-gray-300 rounded hover:bg-gray-50 transition-all cursor-pointer">
            Book Now
          </button>
        </div>
      </div>
    </Link>
  )
}

export default HotelCard
