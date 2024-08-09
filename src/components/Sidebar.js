import React from 'react';

const Sidebar = () => {
  return (
    
    <aside className="w-64 bg-gray-800 text-white h-screen">
      <nav className="mt-4">
        <ul>
          <li className="py-2 px-4 hover:bg-gray-700"><a href="./home.html"> Home</a></li>
          <li className="py-2 px-4 hover:bg-gray-700"><a href="./newemployees.html">New employee</a></li>
          <li className="py-2 px-4 hover:bg-gray-700"><a href="./editEmployee.html">Edit and status</a></li>
        </ul>
      </nav>
    </aside>
  
  );
};

export default Sidebar;