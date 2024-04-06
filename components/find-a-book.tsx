import Link from 'next/link';
import Image from 'next/image';

export default function FindABook() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text content */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Find Your Next Book</h2>
            <p className="text-lg text-gray-600 mb-6">Explore our vast collection of books and discover your next favorite read. Whether you're into fiction, non-fiction, or something in between, we've got you covered.</p>
            {/* Button with Link */}
            <Link href="/browse-books" legacyBehavior>
  <a className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300">Browse Books</a>
</Link> 
          </div>
          {/* Image */}
        <div className="md:ml-auto max-w-xl">
  <div className="relative rounded-lg overflow-hidden">
    <Image
      src="/images/home-book-1.png"
      alt="Find a Book"
      width={50} 
      height={50}
      layout="responsive"
    />
  </div>
</div>
        </div>
      </div>
    </section>
  );
}
