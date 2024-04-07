import Link from 'next/link';
import Header from '../components/ui/header';
import Footer from '../components/ui/footer';
import '../app/css/style.css';

export default function Profile() {
  // Mock data
  const userData = {
    fullName: 'John Doe',
    email: 'johndoe@example.com',
    mobileNumber: '+1234567890',
    address: {
      firstLine: '123 Main Street',
      secondLine: 'Apt 101',
      street: 'Main Street',
      landmark: 'Nearby Park',
      district: 'Sample District',
      city: 'Sample City',
      state: 'Sample State',
    },
    paymentDetails: {
      bankAccountNumber: '1234567890123456',
      ifscCode: 'ABCD0123456',
      bankName: 'Sample Bank',
      upiId: 'johndoe@upi',
      upiNumber: '+1234567890',
    },
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
                <p className="block text-gray-800 text-sm font-medium mb-1">Full Name</p>
                <p className="text-gray-800">{userData.fullName}</p>
              </div>
              <div className="mb-6">
                <p className="block text-gray-800 text-sm font-medium mb-1">Email</p>
                <p className="text-gray-800">{userData.email}</p>
              </div>
              <div className="mb-6">
                <p className="block text-gray-800 text-sm font-medium mb-1">Mobile Number</p>
                <p className="text-gray-800">{userData.mobileNumber}</p>
              </div>
              <div className="mb-6">
                <p className="block text-gray-800 text-sm font-medium mb-1">Address</p>
                <p className="text-gray-800">{userData.address.firstLine}</p>
                <p className="text-gray-800">{userData.address.secondLine}</p>
                <p className="text-gray-800">{userData.address.street}</p>
                <p className="text-gray-800">{userData.address.landmark}</p>
                <p className="text-gray-800">{userData.address.district}, {userData.address.city}, {userData.address.state}</p>
              </div>
              <div className="mb-6">
                <p className="block text-gray-800 text-sm font-medium mb-1">Payment Details</p>
                <p className="text-gray-800">Bank Account Number: {userData.paymentDetails.bankAccountNumber}</p>
                <p className="text-gray-800">IFSC Code: {userData.paymentDetails.ifscCode}</p>
                <p className="text-gray-800">Bank Name: {userData.paymentDetails.bankName}</p>
                <p className="text-gray-800">UPI ID: {userData.paymentDetails.upiId}</p>
                <p className="text-gray-800">UPI Number: {userData.paymentDetails.upiNumber}</p>
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
