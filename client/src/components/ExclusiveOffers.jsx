import React from 'react';
import Title from './Title';
import { assets, exclusiveOffers } from '../assets/assets';

export const ExclusiveOffers = () => {
  return (
    <div className="w-full px-6 md:px-12 lg:px-24 py-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <Title
          align="left"
          title="Exclusive Offers"
          subTitle="Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories"
        />
        <button className="group flex items-center gap-2 font-medium cursor-pointer max-md:mt-12">
          View All Offers
          <img
            src={assets.arrowIcon}
            alt="arrow-icon"
            className="group-hover:translate-x-1 transition-all"
          />
        </button>
      </div>

      {/* Offers List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {exclusiveOffers.map((item) => (
          <div
            key={item._id}
            className="group relative w-full h-[200px] rounded-2xl overflow-hidden text-white bg-cover bg-center"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            {/* Discount badge */}
            <p className="absolute top-4 left-4 px-3 py-1 text-xs bg-white text-gray-800 font-medium rounded-full">
              {item.priceOff}% OFF
            </p>

            {/* Overlay for better text visibility */}
            <div className="absolute inset-0 bg-black/30 p-6 flex flex-col justify-between">
              {/* TEXT content block */}
              <div>
                <p className="text-2xl font-playfair font-semibold mt-7 mr-7">{item.title}</p>
                <p className="text-sm mb-2">{item.description}</p>
                <p className="text-xs text-white/70">Expires {item.expiryDate}</p>
              </div>

              {/* Button block */}
              <div className="flex items-center gap-2 mt-4">
                <button className="text-sm font-medium flex items-center gap-2">
                  View Offers
                  <img
                    className="invert group-hover:translate-x-1 transition-all"
                    src={assets.arrowIcon}
                    alt="arrow-icon"
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
