import Image from 'next/image'
import TestimonialImage from '@/public/images/testimonial-perfil-1.png'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Testimonials() {
  return (
    <section className="relative">

      {/* Illustration behind content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32" aria-hidden="true">
        <svg width="1760" height="518" viewBox="0 0 1760 518" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-02">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g transform="translate(0 -3)" fill="url(#illustration-02)" fillRule="evenodd">
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4">Customer Opinions</h2>
            <p className="text-gray-600"></p>
          </div>

          {/* Items */}
          <div className="grid grid-cols-3 gap-6">

            {/* Testimonials */}
            <div className="max-w-3xl mx-auto mt-20" data-aos="zoom-y-out">
              <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">

                {/* Testimonial */}
                <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0 col-span-1">
                  <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                    
                    <Image className="relative rounded-full" src={TestimonialImage} width={96} height={96} alt="Testimonial 01" />
                  </div>
                  <blockquote className="text-xl font-medium mb-4">
                    “ Best Website to buy books, the purchase is very easy to make and has great discounts. “
                  </blockquote>
                  <cite className="block font-bold text-lg not-italic mb-1">Ananya Pandey </cite>
                  <div className="text-gray-600">
                    <span></span> <a className="text-blue-600 hover:underline" href="#0"></a>
                  </div> 
                  <FontAwesomeIcon icon={faStar} className="w-5 h-5 fill-current text-yellow-500 mr-1" />
                  <FontAwesomeIcon icon={faStar} className="w-5 h-5 fill-current text-yellow-500 mr-1" />
                  <FontAwesomeIcon icon={faStar} className="w-5 h-5 fill-current text-yellow-500 mr-1" />
                  <FontAwesomeIcon icon={faStar} className="w-5 h-5 fill-current text-yellow-500 mr-1" />
                  <FontAwesomeIcon icon={faStar} className="w-5 h-5 fill-current text-yellow-500 mr-1" />

                </div>

              </div>
            </div>

            {/* Testimonials */}
            <div className="max-w-3xl mx-auto mt-20" data-aos="zoom-y-out">
              <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">

                {/* Testimonial */}
                <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0 col-span-1">
                  <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                    
                    <Image className="relative rounded-full" src={TestimonialImage} width={96} height={96} alt="Testimonial 01" />
                  </div>
                  <blockquote className="text-xl font-medium mb-4">
                    “ Best Website to buy books, the purchase is very easy to make and has great discounts. “
                  </blockquote>
                  <cite className="block font-bold text-lg not-italic mb-1">Ananya Pandey</cite>
                  <div className="text-gray-600">
                    <span></span> <a className="text-blue-600 hover:underline" href="#0"></a>
                  </div>
                  <FontAwesomeIcon icon={faStar} className="w-5 h-5 fill-current text-yellow-500 mr-1" />
                  <FontAwesomeIcon icon={faStar} className="w-5 h-5 fill-current text-yellow-500 mr-1" />
                  <FontAwesomeIcon icon={faStar} className="w-5 h-5 fill-current text-yellow-500 mr-1" />
                  <FontAwesomeIcon icon={faStar} className="w-5 h-5 fill-current text-yellow-500 mr-1" />
                  <FontAwesomeIcon icon={faStar} className="w-5 h-5 fill-current text-yellow-500 mr-1" />

                </div>

              </div>
            </div>

            {/* Testimonials */}
            <div className="max-w-3xl mx-auto mt-20" data-aos="zoom-y-out">
              <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">

                {/* Testimonial */}
                <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0 col-span-1">
                  <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                   
                    <Image className="relative rounded-full" src={TestimonialImage} width={96} height={96} alt="Testimonial 01" />
                  </div>
                  <blockquote className="text-xl font-medium mb-4">
                    “ Best Website to buy books, the purchase is very easy to make and has great discounts. “
                  </blockquote>
                  <cite className="block font-bold text-lg not-italic mb-1">Ananya Pandey</cite>
                  <div className="text-gray-600">
                    <span></span> <a className="text-blue-600 hover:underline" href="#0"></a>
                </div>
                <FontAwesomeIcon icon={faStar} className="w-5 h-5 fill-current text-yellow-500 mr-1" />
                <FontAwesomeIcon icon={faStar} className="w-5 h-5 fill-current text-yellow-500 mr-1" />    
                <FontAwesomeIcon icon={faStar} className="w-5 h-5 fill-current text-yellow-500 mr-1" />
                <FontAwesomeIcon icon={faStar} className="w-5 h-5 fill-current text-yellow-500 mr-1" />
                <FontAwesomeIcon icon={faStar} className="w-5 h-5 fill-current text-yellow-500 mr-1" />
                </div>
                
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}