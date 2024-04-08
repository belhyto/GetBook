// pages/browse.tsx
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import '../app/css/style.css';
import Header from '../components/ui/header';
import Footer from '../components/ui/footer';

//import { getBookListings } from '../api/bookApi'; // Example API function to fetch book listings

const BrowseBooks: React.FC = () => {
  const [bookListings, setBookListings] = useState<any[]>([]);

  useEffect(() => {
    // Fetch book listings when the component mounts
    fetchBookListings();
  }, []);

  const fetchBookListings = async () => {
    try {
      // Call API function to fetch book listings
      //const data = await getBookListings(); // Assuming this function returns book listings from the database
     // setBookListings(data);
    } catch (error) {
      console.error('Error fetching book listings:', error);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl font-bold text-gray-800 mt-8 mb-4">Browse Books</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bookListings.map((book, index) => (
              <div key={index} className="bg-white shadow-md rounded-md p-4">
                <h2 className="text-lg font-semibold text-gray-800">{book.bookName}</h2>
                <p className="text-sm text-gray-600">{book.authorName}</p>
                <p className="text-sm text-gray-600">{book.bookDescription}</p>
                {/* Add more details as needed */}
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BrowseBooks;
