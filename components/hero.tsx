// hero.tsx
"use client"
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './hero.css'; // Import CSS file for styling

export default function Hero() {

  const [swiperParams] = useState({
    slidesPerView: 3  ,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  
  return (
    
    <section className="relative">

      {/* Illustration behind hero content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Browse & Select <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Books</span></h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">Find the best books from your favorite writers, explore hundreds of books with all possible categories, take advantage of the 50% discount and much more.</p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <div>
                  <a className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0" href="#0">Explore Now</a>
                </div>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="swiper-container">
              <Swiper {...swiperParams}>
                <SwiperSlide>
                  <img className="swiper-image current" src="/images/home-book-1.png" alt="Slide 1" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="swiper-image previous" src="/images/home-book-2.png" alt="Slide 2" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="swiper-image next" src="/images/home-book-3.png" alt="Slide 3" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="swiper-image previous" src="/images/home-book-4.png" alt="Slide 4" />
                </SwiperSlide>
              </Swiper>
              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>
            </div>
          </div>

        </div>

      </div>
      
    </section>
  );
}
