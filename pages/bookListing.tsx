import React, { useState } from 'react';
import Link from 'next/link';
import Header from '../components/ui/header';
import Footer from '../components/ui/footer';
import '../app/css/style.css';
import { faStar, faInfoCircle, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BookListing: React.FC = () => {
  // State variables for form data
  const [formData, setFormData] = useState({
    bookPicture: '',
    bookName: '',
    authorName: '',
    bookDescription: '',
    marketPrice: '',
    sellingPrice: '',
    dimensions: '',
    weight: '',
    condition: '',
    genre: '',
    language: '',
    advertiseOnHomepageDate: '',
    advertiseOnFeaturedPageDate: '',
    ageGroup: '',
    educationStandard: '',
  });

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add code to handle form submission, such as saving data to a database
    console.log(formData);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl font-bold text-gray-800 mt-8 mb-4">List a Book</h1>
          {/* Form for listing a book */}
          <form onSubmit={handleSubmit} className="space-y-6" autoComplete="off">
            {/* Book Picture */}
            <div className="flex flex-col">
              <label htmlFor="bookPicture" className="text-lg font-medium text-gray-800 mb-1">Book Picture</label>
              <input type="file" id="bookPicture" name="bookPicture" onChange={handleInputChange} accept="image/*" />
            </div>

            {/* Book Name */}
            <div className="flex flex-col">
              <label htmlFor="bookName" className="text-lg font-medium text-gray-800 mb-1">Book Name</label>
              <input type="text" id="bookName" name="bookName" onChange={handleInputChange} className="form-input" />
            </div>

            {/* Author Name */}
            <div className="flex flex-col">
              <label htmlFor="authorName" className="text-lg font-medium text-gray-800 mb-1">Author Name</label>
              <input type="text" id="authorName" name="authorName" onChange={handleInputChange} className="form-input" />
            </div>

            {/* Book Description */}
            <div className="flex flex-col">
              <label htmlFor="bookDescription" className="text-lg font-medium text-gray-800 mb-1">Book Description</label>
              <textarea id="bookDescription" name="bookDescription" onChange={handleInputChange} className="form-textarea" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="marketPrice" className="text-lg font-medium text-gray-800 mb-1">
                Book Market Price
                <ul> <li> <span className="tooltip">
                <FontAwesomeIcon icon={faInfoCircle} className="text-blue-600 mr-2 text-2xl" />

                  <span className="">This is the price that will be striked and your selling price will be shown. Lower is your price from the market price, quicker the book sells.</span>
                </span> </li></ul>
               
              </label>
              <input type="text" id="marketPrice" name="marketPrice" onChange={handleInputChange} className="form-input" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="sellingPrice" className="text-lg font-medium text-gray-800 mb-1">Book Selling Price</label>
              <input type="text" id="sellingPrice" name="sellingPrice" onChange={handleInputChange} className="form-input" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="dimensions" className="text-lg font-medium text-gray-800 mb-1">Approximate Dimensions (length x breadth x width in cms)</label>
              <input type="text" id="dimensions" name="dimensions" onChange={handleInputChange} className="form-input" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="weight" className="text-lg font-medium text-gray-800 mb-1">Approximate Weight (in gms)</label>
              <input type="text" id="weight" name="weight" onChange={handleInputChange} className="form-input" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="condition" className="text-lg font-medium text-gray-800 mb-1">Condition of Book</label>
              <input type="text" id="condition" name="condition" onChange={handleInputChange} className="form-input" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="genre" className="text-lg font-medium text-gray-800 mb-1">Book Genre</label>
              <input type="text" id="genre" name="genre" onChange={handleInputChange} className="form-input" />
            </div>

            <div className="flex flex-col">
  <label htmlFor="language" className="text-lg font-medium text-gray-800 mb-1">Book Language</label>
  <select id="language" name="language" onChange={handleInputChange} className="form-select">
    <option value="en">English</option>
    <option value="hi">Hindi</option>
    <option value="bn">Bengali</option>
    <option value="te">Telugu</option>
    <option value="ma">Marathi</option>
    <option value="ta">Tamil</option>
    <option value="ur">Urdu</option>
    <option value="gu">Gujarati</option>
    <option value="pa">Punjabi</option>
    <option value="or">Odia</option>
    <option value="kn">Kannada</option>
    <option value="ml">Malayalam</option>
    <option value="as">Assamese</option>
    <option value="sa">Sanskrit</option>
    <option value="mr">Marathi</option>
    <option value="si">Sinhala</option>
    <option value="ne">Nepali</option>
    <option value="bo">Tibetan</option>
    <option value="pa">Pali</option>
    <option value="pr">Prakrit</option>
    <option value="de">German</option>
    <option value="fr">French</option>
    <option value="es">Spanish</option>
    <option value="ja">Japanese</option>
    <option value="ko">Korean</option>
    <option value="zh">Mandarin</option>
  </select>
</div>

            {/* Additional fields */}
            <div className="flex flex-col">
              <label htmlFor="advertiseOnHomepageDate" className="text-lg font-medium text-gray-800 mb-1">Advertise on Homepage Date</label>
              <input type="date" id="advertiseOnHomepageDate" name="advertiseOnHomepageDate" onChange={handleInputChange} className="form-input" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="advertiseOnFeaturedPageDate" className="text-lg font-medium text-gray-800 mb-1">Advertise on Featured Page Date</label>
              <input type="date" id="advertiseOnFeaturedPageDate" name="advertiseOnFeaturedPageDate" onChange={handleInputChange} className="form-input" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="ageGroup" className="text-lg font-medium text-gray-800 mb-1">Suggested Age Group</label>
              <input type="text" id="ageGroup" name="ageGroup" onChange={handleInputChange} className="form-input" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="educationStandard" className="text-lg font-medium text-gray-800 mb-1">Suggested Education Standard</label>
              <input type="text" id="educationStandard" name="educationStandard" onChange={handleInputChange} className="form-input" />
            </div>

            {/* Submit button */}
            <button type="submit" className="btn text-white bg-blue-600 hover:bg-blue-700 w-full">Submit</button>
          </form>
        
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default BookListing;
