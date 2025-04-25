import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <>
      <Header />

      <div className="min-h-screen [background-color:#4A7C96] flex items-center justify-center p-6">
        <div className="w-full max-w-7xl flex flex-col md:flex-row items-center gap-10">
          
          {/* Left Side - Text */}
          <div className="bg-white text-black py-10 px-4 sm:px-6 lg:px-8">
  <div className="max-w-2xl mx-auto flex flex-col items-center gap-6">
    
    {/* Title Section */}
    <h2 className="text-3xl sm:text-4xl font-bold text-[#2f6186] text-center mb-6">
      Why Choose Spiral Ed?
    </h2>
    
    {/* Description Section */}
    <div className="text-center">
      <h3 className="text-lg font-semibold text-gray-700 mb-3">Description</h3>
      <p className="text-gray-600 leading-relaxed max-w-prose mx-auto">
        Spiral Ed provides a comprehensive learning journey—from choosing your
        career path to becoming a certified digital marketing expert and landing
        a high-paying job. Learn, upskill, and grow with us!
      </p>
    </div>
  </div>
</div>


          {/* Right Side - Image */}
          <div className="md:w-1/2 flex items-center justify-center">
            <img
              src="https://img.freepik.com/free-vector/business-share-market-growth-green-arrow-background_1017-37130.jpg?t=st=1745251813~exp=1745255413~hmac=11a13046f1fcf35874d3324d09af0293b182456575cb2cc8dc806a9b07dd67c7&w=1380" // Make sure this path is correct
              alt="Learning Path"
              className="w-full max-w-md object-contain rounded-xl shadow-lg"
            />
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;

