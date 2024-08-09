// src/components/RegisterPage.js
import React from 'react';

const RegisterPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form className="bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl mb-4">Register</h2>
        <input type="text" placeholder="Username" className="block w-full p-2 mb-4 border" required />
        <input type="email" placeholder="Email" className="block w-full p-2 mb-4 border" required />
        <input type="password" placeholder="Password" className="block w-full p-2 mb-4 border" required />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;