import React, { useState } from 'react';
import Link from 'next/link';
import Logo from '../components/ui/logo';
import Header from '../components/ui/header';
import Footer from '../components/ui/footer';
import '../app/css/style.css';
import Sales from './sales';
import Complaints from './complaints';

export default function Admin() {
  const [activeTab, setActiveTab] = useState('sales');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-4 px-4 sm:px-6 lg:px-8">
        <div className="pt-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="h2">Admins Panel</h2>
            </div>
            <nav className="flex space-x-4">
              <a
                href="#"
                className={`text-gray-600 hover:text-gray-900 ${activeTab === 'sales' ? 'font-bold' : ''}`}
                onClick={(e) => { e.preventDefault(); handleTabChange('sales'); }}
              >
                Sales
              </a>
              <a
                href="#"
                className={`text-gray-600 hover:text-gray-900 ${activeTab === 'complaints' ? 'font-bold' : ''}`}
                onClick={(e) => { e.preventDefault(); handleTabChange('complaints'); }}
              >
                Complaints
              </a>
            </nav>
          </div>
          {activeTab === 'sales' && <Sales />}
          {activeTab === 'complaints' && <Complaints />}
        </div>
      </main>
      <Footer>
        {/* Include the footer here, or wrap the entire page with a layout component that includes the footer */}
      </Footer>
    </div>
  );
}
