import React, { useState } from 'react';
import Card from '../components/card';
import Image from 'next/image';
import '../node_modules/font-awesome/css/font-awesome.min.css';

const Sales = () => {
  const [showSellerDetails, setShowSellerDetails] = useState(false);
  const [showBuyerDetails, setShowBuyerDetails] = useState(false);

  const handleToggleDetails = (setShowDetails: (value: boolean) => void, showDetails: boolean) => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="pt-10 container mx-auto px-4">
      <Card>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Image src="/images/home-book-1.png" width={80} height={120} alt="Book cover" className="rounded-md" />
            <div className="ml-4">
              <h3 className="text-lg font-medium">Book Title</h3>
              <p className="text-gray-600">$19.99</p>
              <p className="text-gray-600">Date and Time</p>
            </div>
          </div>
          <div className="relative">
            <button
              onClick={() => handleToggleDetails(setShowSellerDetails, showSellerDetails)}
              className="text-gray-600 focus:outline-none"
            >
              {showSellerDetails ? 'Hide Seller Details' : 'Show Seller Details'}
            </button>
            {showSellerDetails && (
              <div className="absolute z-10 mt-2 py-2 w-48 bg-white shadow-md rounded-md">
                <p className="text-gray-600">Seller Name</p>
                <p className="text-gray-600">Seller ID & Address</p>
              </div>
            )}
          </div>
          <div className="ml-4">
            <i className="fa fa-user-circle-o fa-2x"></i>
          </div>
          <div className="relative">
            <button
              onClick={() => handleToggleDetails(setShowBuyerDetails, showBuyerDetails)}
              className="text-gray-600 focus:outline-none"
            >
              {showBuyerDetails ? 'Hide Buyer Details' : 'Show Buyer Details'}
            </button>
            {showBuyerDetails && (
              <div className="absolute z-10 mt-2 py-2 w-48 bg-white shadow-md rounded-md">
                <p className="text-gray-600">Buyer Name</p>
                <p className="text-gray-600">Buyer ID & Address</p>
              </div>
            )}
          </div>
          <div className="ml-4">
            <i className="fa fa-user-circle-o fa-2x"></i>
          </div>
        </div>
      </Card>
      <div> </div>
      <Card>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Image src="/images/home-book-1.png" width={80} height={120} alt="Book cover" className="rounded-md" />
            <div className="ml-4">
              <h3 className="text-lg font-medium">Book Title</h3>
              <p className="text-gray-600">$19.99</p>
              <p className="text-gray-600">Date and Time</p>
            </div>
          </div>
          <div className="relative">
            <button
              onClick={() => handleToggleDetails(setShowSellerDetails, showSellerDetails)}
              className="text-gray-600 focus:outline-none"
            >
              {showSellerDetails ? 'Hide Seller Details' : 'Show Seller Details'}
            </button>
            {showSellerDetails && (
              <div className="absolute z-10 mt-2 py-2 w-48 bg-white shadow-md rounded-md">
                <p className="text-gray-600">Seller Name</p>
                <p className="text-gray-600">Seller ID & Address</p>
              </div>
            )}
          </div>
          <div className="ml-4">
            <i className="fa fa-user-circle-o fa-2x"></i>
          </div>
          <div className="relative">
            <button
              onClick={() => handleToggleDetails(setShowBuyerDetails, showBuyerDetails)}
              className="text-gray-600 focus:outline-none"
            >
              {showBuyerDetails ? 'Hide Buyer Details' : 'Show Buyer Details'}
            </button>
            {showBuyerDetails && (
              <div className="absolute z-10 mt-2 py-2 w-48 bg-white shadow-md rounded-md">
                <p className="text-gray-600">Buyer Name</p>
                <p className="text-gray-600">Buyer ID & Address</p>
              </div>
            )}
          </div>
          <div className="ml-4">
            <i className="fa fa-user-circle-o fa-2x"></i>
          </div>
        </div>
      </Card>
      {/* Add more cards as needed */}
    </div>
  );
};

export default Sales;