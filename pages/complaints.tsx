import React, { useState } from 'react';
import Card from '../components/card';
import Image from 'next/image';
import TestimonialImage from '@/public/images/testimonial-perfil-1.png'

const Complaints = () => {
  const [showComplaintDetails, setShowComplaintDetails] = useState(false);

  
  const handleToggleDetails = (setShowDetails: (value: boolean) => void, showDetails: boolean) => {
    setShowDetails(!showDetails);
  };


  return (
    <div className="pt-10 px-4 py-8 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold mb-4">Complaints and Reports</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <div className="flex items-center">
            <h3 className="text-lg font-medium">Complaint or Report Title</h3>
            <div className="ml-4">
            <Image className="relative rounded-full" src={TestimonialImage} width={96} height={96} alt="Testimonial 01" />

            </div>
            <div className="ml-4">
              <button
                onClick={() => handleToggleDetails(setShowComplaintDetails, showComplaintDetails)}
                className="text-gray-600 focus:outline-none"
              >
                {showComplaintDetails ? 'Hide Complaint Details' : 'Show Complaint Details'}
              </button>
              {showComplaintDetails && (
                <div className="absolute z-10 mt-2 py-2 w-48 bg-white shadow-md rounded-md">
                  <p className="text-gray-600">User Name</p>
                  <p className="text-gray-600">User ID & Address</p>
                  <p className="text-gray-600">Description of the issue</p>
                  <p className="text-gray-600">Date and Time</p>
                </div>
              )}
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex items-center">
            <h3 className="text-lg font-medium">Complaint or Report Title</h3>
            <div className="ml-4">
            <Image className="relative rounded-full" src={TestimonialImage} width={96} height={96} alt="Testimonial 01" />

            </div>
            <div className="ml-4">
              <button
                onClick={() => handleToggleDetails(setShowComplaintDetails, showComplaintDetails)}
                className="text-gray-600 focus:outline-none"
              >
                {showComplaintDetails ? 'Hide Complaint Details' : 'Show Complaint Details'}
              </button>
              {showComplaintDetails && (
                <div className="absolute z-10 mt-2 py-2 w-48 bg-white shadow-md rounded-md">
                  <p className="text-gray-600">User Name</p>
                  <p className="text-gray-600">User ID & Address</p>
                  <p className="text-gray-600">Description of the issue</p>
                  <p className="text-gray-600">Date and Time</p>
                </div>
              )}
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex items-center">
            <h3 className="text-lg font-medium">Complaint or Report Title</h3>
            <div className="ml-4">
            <Image className="relative rounded-full" src={TestimonialImage} width={96} height={96} alt="Testimonial 01" />

            </div>
            <div className="ml-4">
              <button
                onClick={() => handleToggleDetails(setShowComplaintDetails, showComplaintDetails)}
                className="text-gray-600 focus:outline-none"
              >
                {showComplaintDetails ? 'Hide Complaint Details' : 'Show Complaint Details'}
              </button>
              {showComplaintDetails && (
                <div className="absolute z-10 mt-2 py-2 w-48 bg-white shadow-md rounded-md">
                  <p className="text-gray-600">User Name</p>
                  <p className="text-gray-600">User ID & Address</p>
                  <p className="text-gray-600">Description of the issue</p>
                  <p className="text-gray-600">Date and Time</p>
                </div>
              )}
            </div>
          </div>
        </Card>
        
        {/* Add more cards as needed */}
      </div>
    </div>
  );
};

export default Complaints;