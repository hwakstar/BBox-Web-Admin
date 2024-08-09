import React from 'react';
import logo from '../logo.svg';
const Header = () => {
  return (
    <header className="bg-yellow-500 h-45 flex items-center justify-between px-8 shadow-md">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-16 rounded-full" />
        <h1 className="font-serif p-6 text-white text-4xl text-center">BBox Employees Admin</h1>
      </div>
      <div>
        <div id="loggedEmployee">Logged Employee: Ahmed Jemmel</div>
        <button id="logoutButton" className="ml-4 py-1 px-3 bg-red-600 text-white rounded">Logout</button>
      </div>
    </header>
  );
};

export default Header;