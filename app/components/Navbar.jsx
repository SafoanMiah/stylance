"use client";

import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { navItems } from '../constants';

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  // Function to toggle the mobile drawer
  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  // Navbar component, with a mobile drawer that opens when the user clicks the menu button
  return (
    <nav className="custom-effect sticky top-0 z-50 py-3 bg-[#eaded0] border-b border-neutral-700/80">
      <div className="container mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">

          {/* NAVBAR MENU */}
          <ul className="hidden lg:flex space-x-4">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>

          {/* LOGO */}
          <div className="flex items-center flex-shrink-0 pr-40">
              <span className="text-lg md:text-xl lg:text-2xl tracking-tight text-bold">STYLANCE.</span>
          </div>
          {/* NAVBAR BUTTONS */}
          <div className="lg:flex justify-center space-x-12 items-center">
            <a href="#" className="hidden lg:flex bg-[#4a3a2e] py-2 px-7 rounded-md text-[#cfbeae]">Sign In</a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* MOBILE DRAWER */}
        {mobileDrawerOpen && (
          <div className="items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>

            <div className="flex space-x-6 justify-between">
              <a href="#" className="py-2 px-3 rounded-md bg-gradient-to-r bg-[#4a3a2e] w-full text-center text-[#cfbeae]">
                Sign In
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
