import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-16 bg-black h-screen fixed left-0 top-0 flex flex-col items-center py-4">
      <div className="w-8 h-8 bg-green-500 mb-8"></div>
      <NavItem icon="lightning" />
      <NavItem icon="image" />
      <NavItem icon="link" />
      <NavItem icon="shirt" />
      <NavItem icon="layout" />
      <NavItem icon="settings" className="mt-auto" />
    </nav>
  );
};

const NavItem = ({ icon, className = '' }) => (
  <button className={`w-10 h-10 mb-4 text-gray-400 hover:text-white ${className}`}>
    <i className={`fas fa-${icon}`}></i>
  </button>
);

export default Navbar;