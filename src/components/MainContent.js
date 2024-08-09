import React from 'react';
import VendorForm from './VendorForm';

const MainContent = () => {
  return (
    <main className="flex-grow p-8">
      <h2 className="text-2xl font-bold text-gray-700 mb-4">Employee Admin</h2>
      <p className="text-gray-600">Welcome to the Admin dashboard. Please use the menu to navigate through the Operations' task.</p>
      <VendorForm />
    </main>
  );
};

export default MainContent;