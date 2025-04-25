import React, { useEffect } from 'react';
import AOS from 'aos'; // Correct import
import 'aos/dist/aos.css'; // Import the AOS CSS styles

const Landing = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Animation duration
      easing: 'ease-in-out',  // Easing function
      once: true,  // Animates only once
    });
  }, []);

  return (
    <div className="h-screen bg-[#4A7C96] flex justify-center items-center">
      <div className="text-center text-white p-8" data-aos="fade-up">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 font-poppins">
          Spiral ED
        </h1>
        <p className="text-lg md:text-2xl mb-8 font-roboto">
          Transforming Education through Digital Excellence
        </p>
        <a
          href="/"
          className="inline-block bg-white text-blue-900 px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 transform hover:bg-blue-100 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          data-aos="zoom-in"
        >
          Learn More
        </a>
      </div>

      <div className="absolute bottom-10 w-full text-center text-white">
        <div className="flex justify-center space-x-8">
          {/* Instagram Icon */}
          <a
            href="https://instagram.com/yourusername" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-pink-500 rounded-full flex justify-center items-center transition-all duration-300 hover:bg-pink-700 hover:scale-110"
            data-aos="fade-up"
          >
            <i className="fab fa-instagram text-2xl"></i>
          </a>

          {/* WhatsApp Icon */}
          <a
            href="https://wa.me/11234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-green-500 rounded-full flex justify-center items-center transition-all duration-300 hover:bg-green-700 hover:scale-110"
            data-aos="fade-up"
          >
            <i className="fab fa-whatsapp text-2xl"></i>
          </a>

          {/* Twitter Icon */}
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-blue-500 rounded-full flex justify-center items-center transition-all duration-300 hover:bg-blue-700 hover:scale-110"
            data-aos="fade-up"
          >
            <i className="fab fa-twitter text-2xl"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Landing;

