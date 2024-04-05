"use client"
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

export default function Bookfeatures() {
  const [books] = useState([
    { title: 'Book 1', price: '$10', rating: 4, image: '/images/home-book-1.png' },
    { title: 'Book 2', price: '$15', rating: 5, image: '/images/home-book-2.png' },
    { title: 'Book 1', price: '$10', rating: 4, image: '/images/home-book-1.png' },
    { title: 'Book 2', price: '$15', rating: 5, image: '/images/home-book-2.png' },
    // Add more book objects as needed
  ]);

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">What we offer</h2>
            {/* Add any additional description here */}
          </div>
          {/* Carousel */}
          <Swiper
            spaceBetween={30}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            className="mySwiper"
          >
            {books.map((book, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded shadow-xl p-4">
                  <Image
                    src={book.image}
                    alt={book.title}
                    width={200}
                    height={250}
                    className="w-full h-auto mb-4"
                  />
                  <h3 className="text-lg font-semibold mb-2">{book.title}</h3>
                  <p className="text-gray-600 mb-2">{book.price}</p>
                  {/* Render star rating here */}
                  <div className="flex text-yellow-400">
                    {Array.from({ length: book.rating }, (_, i) => (
                      <FontAwesomeIcon icon={faStar} key={i} />
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}