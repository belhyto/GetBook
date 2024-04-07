import Link from 'next/link';
import Header from '../components/ui/header';
import Footer from '../components/ui/footer';
import '../app/css/style.css';

export default function Profile() {
  // Mock data
  const userData = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  };

  return (
    <>
      <Header />
      <section className="bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            {/* Page header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h1 className="h1">My Profile</h1>
            </div>

            {/* Profile information */}
            <div className="max-w-sm mx-auto">
              <div className="mb-6">
                <p className="block text-gray-800 text-sm font-medium mb-1">Name</p>
                <p className="text-gray-800">{userData.name}</p>
              </div>
              <div className="mb-6">
                <p className="block text-gray-800 text-sm font-medium mb-1">Email</p>
                <p className="text-gray-800">{userData.email}</p>
              </div>
              <div className="mb-6">
                <p className="block text-gray-800 text-sm font-medium mb-1">Bio</p>
                <p className="text-gray-800">{userData.bio}</p>
              </div>
            </div>

            {/* Edit profile button */}
            <div className="max-w-sm mx-auto">
              <Link href="/">
                <button className="btn text-white bg-blue-600 hover:bg-blue-700 w-full">Back to Home</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

// Set the page metadata
export const metadata = {
  title: 'My Profile - Simple',
  description: 'Page description',
};
