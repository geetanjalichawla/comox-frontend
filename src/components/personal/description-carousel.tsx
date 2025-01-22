'use client';
import React from 'react';
import Slider from 'react-slick';

const GearProducts = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
    };

    const products = [
        {
            name: "iPhone Case",
            price: "$29.99",
            image: "/assets/banner-image.webp", // Replace with actual image path
        },
        {
            name: "Backpack",
            price: "$39.99",
            image: "/assets/banner-image.webp", // Replace with actual image path
        },
    ];

    return (
        <div className="p-8 w-full max-w-screen-base mx-auto grid grid-cols-2 py-24">
            <div className='flex flex-col items-start justify-center' >
                <h2 className="text-3xl font-semibold mb-4">Gear Products</h2> 
                <p className="text-gray-500 mb-6">Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus libero</p>

                <button className="bg-black text-white py-2 px-6 rounded-lg hover:bg-gray-800 transition-all">
                    Browse all products →
                </button>

            </div>

            <div className="">
        <Slider {...settings}>
          {products.map((product, index) => (
            <div key={index} className="flex justify-center items-center">
              <div className="bg-white p-6 rounded-lg shadow-md w-80">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4" />
                <div className="card-content">
                  <h4 className="text-lg font-bold text-gray-700">GEAR</h4>
                  <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
                  <p className="text-lg text-gray-600">{product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
        </div>
    );
};

export default GearProducts;
