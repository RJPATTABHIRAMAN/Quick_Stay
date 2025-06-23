import React, { useState } from 'react'
import Title from '../../components/Title'

export const AddRoom = () => {
    const [images, setImages] = useState({
        1: null,
        2: null,
        3: null,
        4: null,
    })
    
    const [inputs, setInputs] = useState({
        roomType: '',
        PricePerNight: 0,
        amenities: {
            'Free Wifi': false,
            'Free Breakfast': false,
            'Room Service': false,
            'Mountain View': false, 
            'Pool Access': false
        }
    })

    return (
        <div className='pb-8'>
            <div>
                <Title 
                    align='left' 
                    font='outfit' 
                    title='Add Room' 
                    subTitle='Fill in the details carefully and accurate room details, pricing, and amenities, to enhance the user booking experience.'
                />
                <p className='text-gray-800 mt-10 mb-4'>
                    Images
                </p>
                <div className='flex gap-4 flex-wrap'>
                    {Object.keys(images).map((key) => (
                        <label htmlFor={`roomImage${key}`} key={key} className='cursor-pointer'>
                            <img 
                                className='w-24 h-24 object-cover border-2 border-dashed border-gray-300 rounded-lg hover:border-gray-400 transition-colors' 
                                src={images[key] ? URL.createObjectURL(images[key]) : 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik01MCA2MEw0MCA0MEg2MEw1MCA2MFoiIGZpbGw9IiM5Q0EzQUYiLz4KPHN2Zz4K'} 
                                alt={`Upload area ${key}`}
                            />
                            <input 
                                type="file" 
                                accept='image/*' 
                                id={`roomImage${key}`} 
                                hidden 
                                onChange={e => setImages({...images, [key]: e.target.files[0]})}
                            />
                        </label>
                    ))}
                </div>
                <div className='w-full flex max-sm:flex-col sm:gap-4 mt-4'>
                    <div className='flex-1 max-w-48'>
                        <p className='text-gray-800 mt-4'>Room Type</p>
                        <select onChange={e=> setInputs({...inputs,roomType:e.target.value})} className='border opacity-70 border-gray-300 mt-1 rounded p-2 w-full'>
                            <option value="">Select Room Type</option>                                         
                            <option value="Single Bed">Single Bed</option> 
                            <option value="Double Bed">Double Bed</option>                                        
                            <option value="Luxury Bed">Luxury Bed</option>
                            <option value="Family Suite">Family Suite</option>
                        </select>
                    </div>
                  <div>
                     <p className='mt-4 text-gray-800'>
                         Price 
                         <span className='text-xs'>Night</span>
                     </p>
                     <input type="number" placeholder='0' className='border border-gray-300 mt-1 rounded p-2 w-24' value={inputs.PricePerNight} onChange={e=> setInputs({...inputs,PricePerNight:e.target.value})} />
                  </div>
                </div>
                <p className='text-gray-800 mt-4'>Amenities</p>
               <div className=' gap-4 mt-1 text-gray-400 overflow-x-auto whitespace-nowrap pb-2'>
                     {Object.keys(inputs.amenities).map((amenity,index)=>(
                   <div key={index} className='flex items-center whitespace-nowrap'>
                        <input type="checkbox" id={`amenities${index+1}`} checked={inputs.amenities[amenity]} onChange={()=>setInputs({...inputs,amenities:{...inputs.amenities,[amenity]:!inputs.amenities[amenity]}})}/>
                        <label htmlFor={`amenities${index+1}`} className='ml-2'>{amenity}</label>
                    </div>
                    ))}
                </div>
            </div>
            <button className='bg-primary text-white px-8 py-2 rounded  mb-4'>Add Room</button>
        </div>  
    )
}