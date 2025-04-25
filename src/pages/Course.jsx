import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Course = () => {
  return (
    <>
      <Header />

      <section className="px-4 md:px-6 pt-28 pb-12 [background-color:#4A7C96]">
     
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
           
          {/* Left Section: Topics We Covered */}
          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Topics We Covered</h2>
            <ul className="space-y-3 text-lg text-white">
              <li>1. Web Design and WordPress Development</li>
              <li>2. Google Ads</li>
              <li>3. Email Marketing</li>
              <li>4. Performance Marketing</li>
              <li>5. Social Media Marketing (SMM)</li>
              <li>6. Search Engine Optimization (SEO)</li>
              <li>7. LinkedIn Marketing</li>
              <li>8. Internship</li>
            </ul>
          </div>

          {/* Right Section: Major Tools */}
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Major Tools</h2>
            <img 
              src="https://via.placeholder.com/300" // Replace with your actual image
              alt="Major Tools"
              className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-white object-cover shadow-xl"
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Course;


