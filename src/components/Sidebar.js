import React,{  }  from 'react';

const Sidebar = () => {
  return (    
    <aside className="w-64 bg-gray-800 text-white h-screen">
      <nav className="mt-4">
        <ul>
          <li className="py-2 px-4 hover:bg-gray-700"><a href="./#"> Admin Employees</a></li>
          <li className="py-2 px-4 hover:bg-gray-700"><a href="./#"> Marketing</a></li>          
          <li className="py-2 px-4 hover:bg-gray-700"><a href="./#"> Accounting</a></li>
          <li className="py-2 px-4 hover:bg-gray-700"><a href="./#"> Sales</a></li>
          <li className="py-2 px-4 hover:bg-gray-700"><a href="./#"> Logs</a></li>
        </ul>
      </nav>
    </aside>  
  );
};

export default Sidebar;