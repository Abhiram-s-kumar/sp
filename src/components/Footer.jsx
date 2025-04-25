import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className=" [background-color:#4A7C96] text-white px-6 py-10 mt-1">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {/* About Section */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold mb-4">SpiralED</h2>
          <p className="text-sm leading-relaxed">
            SpiralED is dedicated to providing quality education with a modern approach. Join us to explore knowledge like never before.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <Link to='/'><li className="hover:text-black transition duration-300 cursor-pointer">Home</li></Link>
          <Link to='/about'>  <li className="hover:text-black transition duration-300 cursor-pointer">About</li></Link>
            <Link to='course'><li className="hover:text-black transition duration-300 cursor-pointer">Course</li></Link>
            <Link to='downloads'><li className="hover:text-black transition duration-300 cursor-pointer">Downloads</li></Link>
         <Link to='/contact'>   <li className="hover:text-black transition duration-300 cursor-pointer">Contact</li></Link>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <p className="text-sm">Email: info@spiraled.com</p>
          <p className="text-sm">Phone: +1 234 567 890</p>
          <p className="text-sm mt-2">123 Spiral Lane, Edutown, ED 45678</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 border-t border-white/20 pt-4 text-center text-sm text-white/80">
        © {new Date().getFullYear()} SpiralED. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;



