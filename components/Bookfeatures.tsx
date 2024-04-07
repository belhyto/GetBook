"use client"
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import './hero.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { faStar, faInfoCircle, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Bookfeatures() {
  const [books] = useState([
    {
      title: 'Book 1',
      price: '$10',
      rating: 4,
      image: '/images/home-book-1.png',
      buttonText: 'Add to Cart',
      buttonLink: '#',
    },
    {
      title: 'Book 2',
      price: '$15',
      rating: 5,
      image: '/images/home-book-2.png',
      buttonText: 'Add to Cart',
      buttonLink: '#',
    },
    {
      title: 'Book 1',
      price: '$10',
      rating: 4,
      image: '/images/home-book-1.png',
      buttonText: 'Add to Cart',
      buttonLink: '#',
    },
    {
      title: 'Book 2',
      price: '$15',
      rating: 5,
      image: '/images/home-book-2.png',
      buttonText: 'Add to Cart',
      buttonLink: '#',
    },
    {
      title: 'Book 1',
      price: '$10',
      rating: 4,
      image: '/images/home-book-1.png',
      buttonText: 'Add to Cart',
      buttonLink: '#',
    },
    {
      title: 'Book 2',
      price: '$15',
      rating: 5,
      image: '/images/home-book-2.png',
      buttonText: 'Add to Cart',
      buttonLink: '#',
    },
    {
      title: 'Book 1',
      price: '$10',
      rating: 4,
      image: '/images/home-book-1.png',
      buttonText: 'Add to Cart',
      buttonLink: '#',
    },
    {
      title: 'Book 2',
      price: '$15',
      rating: 5,
      image: '/images/home-book-2.png',
      buttonText: 'Add to Cart',
      buttonLink: '#',
    },
    // Add more book objects as needed
  ]);

  const [slidesPerView, setSlidesPerView] = useState(4);
  const [bookHover, setBookHover] = useState(new Array(books.length).fill(false));

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
    const handleBookHover = (index: number) => {
      const newBookHover = [...bookHover];
      newBookHover[index] = !newBookHover[index];
      setBookHover(newBookHover);
    }
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
             <div className="relative bg-teal-100 rounded shadow-xl p-6 flex flex-col items-center">
             <div className="flex flex-col right-0 mt-auto">
                 <div className="mb-2">
                   <FontAwesomeIcon icon={faInfoCircle} className="text-blue-600 mr-2 text-2xl" />
                   <FontAwesomeIcon icon={faHeart} className="text-blue-600 text-2xl" />
                 </div>
                 <div>
                  
                 </div>
               </div>
               <div className="mb-4">
                 <Image
                   src={book.image}
                   alt={book.title}
                   width={300} // Increase the width
                   height={375} // Increase the height
                   className="w-full h-auto"
                 />
               </div>
               <h3 className="text-xl font-semibold mb-2 text-teal-200">{book.title}</h3>
               <p className="text-gray-600 mb-2">{book.price}</p>
               {/* Render buttons here */}
               <div>
                 <a
                   className="btn text-white bg-blue-600 hover:bg-blue-600 w-full mb-4 sm:w-auto sm:mb-0"
                   href={book.buttonLink}
                 >
                   {book.buttonText}
                 </a>
               </div>
               {/* Icons */}
              
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
        .fa-info-circle,
 .fa-heart {
    font-size: 20 px;
    color: #4960D4;
  }
      `}</style>
    </section>
  );
}
