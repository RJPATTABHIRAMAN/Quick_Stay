import React from 'react'
import { assets, cities } from '../assets/assets'

export const HotelReg = () => {
  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center bg-black/70'>
      <form className="flex bg-white rounded-xl max-w-4xl max-md:mx-2 relative">
        <img src={assets.regImage} alt="reg-image" className='w-1/2 rounded-l-xl hidden md:block'/>
        <div className='p-6 flex-1'>
          <img 
            src={assets.closeIcon} 
            alt="close-icon" 
            className='absolute top-4 right-4 h-4 w-4 cursor-pointer'
          />
          <p className='text-2xl font-semibold mt-2 mb-6'>Register Your Hotel</p>
          
          <div className='w-full mb-4'>
            <label htmlFor='name' className='block font-medium text-gray-500 mb-1'>
              Hotel Name
            </label>
            <input 
              id='name' 
              type="text" 
              placeholder='Type here' 
              className='border border-gray-200 rounded w-full px-3 py-2.5 outline-indigo-500 font-light' 
              required
            />
          </div>
          
          {/* Phone */}
          <div className='w-full mb-4'>
            <label htmlFor='contact' className='block font-medium text-gray-500 mb-1'>
              Phone
            </label>
            <input 
              id='contact' 
              type="tel" 
              placeholder='Type here' 
              className='border border-gray-200 rounded w-full px-3 py-2.5 outline-indigo-500 font-light' 
              required
            />
          </div>
          
          {/* Address */}
          <div className='w-full mb-4'>
            <label htmlFor='address' className='block font-medium text-gray-500 mb-1'>
              Address
            </label>
            <input 
              id='address' 
              type="text" 
              placeholder='Type here' 
              className='border border-gray-200 rounded w-full px-3 py-2.5 outline-indigo-500 font-light' 
              required
            />
          </div>
          
          {/* Select City Dropdown */}
          <div className='w-full mb-6'>
            <label htmlFor="city" className="block font-medium text-gray-500 mb-1">
              City
            </label>
            <select 
              id="city"
              className='border border-gray-200 rounded w-full px-3 py-2.5 outline-indigo-500 font-light' 
              required
            >
              <option value="">Select City</option>
              {cities.map((city, index) => (
                <option key={index} value={city}>{city}</option>
              ))}
            </select>
          </div>
          
          <button 
            type="submit"
            className='bg-indigo-500 hover:bg-indigo-600 transition-all text-white px-6 py-2 rounded cursor-pointer w-full md:w-auto'
          >
            Register
          </button>
        </div>
      </form>
    </div>
  )
}