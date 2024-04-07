// pages/browse.tsx

import React from 'react';
import Link from 'next/link';
import '../app/css/style.css';
import Header from '../components/ui/header';
import Footer from '../components/ui/footer';

const BookListing: React.FC = () => {
  return (
    <div className="min-h-screen">
    <Header />
    <main className="px-4 py-8 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <h1 className="text-3xl font-bold text-gray-800 mt-8 mb-4">List a Book</h1>
      <p className="text-lg text-gray-600 mb-8">This is the browse books page content.</p>
      {/* Add more content as needed */}
      <Link href="/" legacyBehavior>
        <a className="text-blue-500 hover:text-blue-700">Go back to Home</a>
      </Link>
    </div>
    </main>
    <Footer>
        {/* Include the footer here, or wrap the entire page with a layout component that includes the footer */}
      </Footer>
    </div>
  );
}

export default BookListing;
