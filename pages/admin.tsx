import Link from 'next/link';
import Logo from '../components/ui/logo';
import Header from '../components/ui/header';
import Footer from '../components/ui/footer';
import '../app/css/style.css';



export default function Admin() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="px-4 py-8 sm:px-6 lg:px-8">
        {/* Add your admin page content here */}
      </main>

      <Footer>
        {/* Include the footer here, or wrap the entire page with a layout component that includes the footer */}
      </Footer>
    </div>
  );
}