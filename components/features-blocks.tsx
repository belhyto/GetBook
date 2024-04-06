import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faLock, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

export default function FeaturesBlocks() {
  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">What we offer</h2>
            <p className="text-xl text-gray-600"></p>
          </div>
          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-blue rounded">
              <FontAwesomeIcon icon={faTruck} className="w-16 h-16 p-1 -mt-1 mb-2 text-blue-600" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Free Shipping</h4>
              <p className="text-gray-600 text-center">Order More Than ₹100</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-blue rounded">
              <FontAwesomeIcon icon={faLock} className="w-16 h-16 p-1 -mt-1 mb-2 text-blue-600" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Secure Payment</h4>
              <p className="text-gray-600 text-center">100% Secure Payment</p>
            </div>
            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-blue rounded">
              <FontAwesomeIcon icon={faPhoneAlt} className="w-16 h-16 p-1 -mt-1 mb-2 text-blue-600" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">24/7 Support</h4>
              <p className="text-gray-600 text-center">Call us anytime</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
