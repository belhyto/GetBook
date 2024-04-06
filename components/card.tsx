import React from 'react';
import Image from 'next/image';

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="pt-10 bg-blue-100 shadow-md rounded-md p-4">
      {children}
    </div>
  );
};

export default Card;