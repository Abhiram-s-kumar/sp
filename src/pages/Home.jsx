import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Header />

      <section className="px-6 py-12 [background-color:#4A7C96]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
          {/* Left Section: Heading and Description */}
          <div className="flex flex-col justify-center space-y-6">
            <h1 className="text-3xl md:text-4xl mt-10 font-bold text-blue-900">
              Premier Digital Marketing <br /> Institute in Chengannor
            </h1>
            <p className="text-lg text-white md:text-xl  md:text-left">
              We provide high-quality, industry-recognized digital marketing courses in Chengannor. Our expert-led programs cover everything from SEO to social media marketing, equipping students with practical skills to succeed.
            </p>
          </div>

          {/* Right Section: Round Image */}
          <div className="flex justify-center items-center ">
            <img 
              src="https://via.placeholder.com/300" // Replace with your actual image
              alt="Institute"
              className="w-64 h-64 mt-12 md:w-80 md:h-80 rounded-full bg-white object-cover shadow-xl"
            />
          </div>
        </div>

        {/* Small White Box with Paragraphs */}
        <div className="bg-white p-10 mt-16 shadow-lg rounded-lg md:w-full mx-auto">
          <p className="text-base text-gray-600 font-bold mb-6 flex justify-between">
            <span>4 Months Course With 1 Month Internship</span>
            <span>12 Seats Per Batch Now For Just 27000/- Only</span>
          </p>
        </div>

        {/* Location of the Company */}
        {/* Enroll Now Button Section */}
        <div className="mt-16 flex justify-center">
          <Link to='./contact'>
            <button className="text-white bg-blue-900 px-8 py-3 text-lg font-semibold rounded-full shadow-lg transition-all duration-300 transform hover:bg-blue-400 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Enroll Now
            </button>
          </Link>
        </div>

        {/* Social Media Icons */}
        <div className="mt-8 flex justify-center space-x-6">
          {/* Instagram Icon */}
          <a
            href="https://instagram.com/yourusername" // Replace with your Instagram handle
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 rounded-full bg-pink-500 text-white flex justify-center items-center transition-all duration-300 hover:bg-pink-700 hover:scale-110 shadow-lg"
          >
            <i className="fab fa-instagram text-3xl"></i> {/* FontAwesome Instagram icon */}
          </a>

          {/* WhatsApp Icon */}
          <a
            href="https://wa.me/11234567890" // Replace with your WhatsApp number (including country code)
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 rounded-full bg-green-500 text-white flex justify-center items-center transition-all duration-300 hover:bg-green-700 hover:scale-110 shadow-lg"
          >
            <i className="fab fa-whatsapp text-3xl"></i> {/* FontAwesome WhatsApp icon */}
          </a>

          {/* Twitter Icon */}
          <a
            href="https://twitter.com/yourusername" // Replace with your Twitter handle
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 rounded-full bg-blue-500 text-white flex justify-center items-center transition-all duration-300 hover:bg-blue-700 hover:scale-110 shadow-lg"
          >
            <i className="fab fa-twitter text-3xl"></i> {/* FontAwesome Twitter icon */}
          </a>
        </div>

      </section>

      <Footer />
    </>
  );
};

export default Home;




