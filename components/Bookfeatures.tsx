"use client"
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import './hero.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Bookfeatures() {
  const [books] = useState([
    { title: 'Book 1', price: '$10', rating: 4, image: '/images/home-book-1.png' },
    { title: 'Book 2', price: '$15', rating: 5, image: '/images/home-book-2.png' },
    { title: 'Book 1', price: '$10', rating: 4, image: '/images/home-book-1.png' },
    { title: 'Book 2', price: '$15', rating: 5, image: '/images/home-book-2.png' },
    { title: 'Book 2', price: '$15', rating: 5, image: '/images/home-book-2.png' },
    { title: 'Book 2', price: '$15', rating: 5, image: '/images/home-book-2.png' },
    { title: 'Book 2', price: '$15', rating: 5, image: '/images/home-book-2.png' },

    // Add more book objects as needed
  ]);

  const [slidesPerView, setSlidesPerView] = useState(4);

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(4);
      }
    };

    window.addEventListener('resize', updateSlidesPerView);
    updateSlidesPerView();

    return () => {
      window.removeEventListener('resize', updateSlidesPerView);
    };
  }, []);

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Featured Books </h2>
            {/* Add any additional description here */}
          </div>
          {/* Carousel */}
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={30}
            slidesPerView={slidesPerView}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            className="mySwiper"
            scrollbar={{ draggable: true }}
          >
            {/* Navigation Buttons */}
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>

            {/* Book Slides */}
            {books.map((book, index) => (
     <SwiperSlide key={index}>
  <div className="bg-teal-100 rounded shadow-xl p-4 flex flex-col items-center"> {/* Add flex and items-center classes */}
    <Image
      src={book.image}
      alt={book.title}
      width={200}
      height={250}
      className="w-full h-auto mb-4"
    />
    <h3 className="text-lg font-semibold mb-2 text-teal-200">{book.title}</h3> {/* Add text-teal-200 class */}
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
      <style jsx>{`
        .swiper-button-prev,
        .swiper-button-next {
          width: 40px;
          height: 40px;
          background: #ffff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .swiper-button-prev:hover,
        .swiper-button-next:hover {
          background-color: #f5f5f5;
        }

        .swiper-button-prev::after,
        .swiper-button-next::after {
          font-size: 14px;
          color: #333;
        }
      `}</style>
    </section>
  );
}