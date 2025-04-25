import React, { useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const [form, setForm] = useState({ name: '', number: '', email: '' });
  const [errors, setErrors] = useState({ email: '', number: '' });
  const [downloadComplete, setDownloadComplete] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^[0-9]{10}$/;
    let isValid = true;
    let newErrors = { email: '', number: '' };

    if (!emailRegex.test(form.email)) {
      newErrors.email = 'Invalid email format';
      isValid = false;
    }

    if (!phoneRegex.test(form.number)) {
      newErrors.number = 'Phone number must be 10 digits';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    if (name === 'email' && errors.email) {
      setErrors((prevErrors) => ({ ...prevErrors, email: '' }));
    }
    if (name === 'number' && errors.number) {
      setErrors((prevErrors) => ({ ...prevErrors, number: '' }));
    }
  };

  const handleDownload = async () => {
    if (!validateForm()) return;

    try {
      // Submit the form data to the backend
      await axios.post(
        "http://localhost:5000/api/contact", // Update to your backend URL
        form
      );

      // Request the PDF for download
      const response = await axios.get("http://localhost:5000/brochure.pdf", {
        responseType: 'blob', // Ensure the response is treated as a file
      });

      // Create a URL for the PDF Blob
      const url = window.URL.createObjectURL(new Blob([response.data]));

      // Create a temporary anchor element and trigger the download
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'brochure.pdf'); // Name the file for download
      document.body.appendChild(link);
      link.click();

      // Clean up by removing the link
      document.body.removeChild(link);

      // Set download complete state
      setDownloadComplete(true);
      setTimeout(() => {
        navigate("/"); // Redirect to home page
      }, 3000);
    } catch (error) {
      console.error("Error submitting contact form:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <>
      <Header />

      <div className=" [background-color:#4A7C96] pt-24 md:pt-16 px-4 hidden md:flex justify-between items-center text-white">
        <h1 className="text-2xl ms-8 mt-4 md:text-3xl font-bold">Contact Us</h1>
        <h1 className="text-2xl me-80 mt-4 md:text-3xl font-bold">Enroll Now</h1>
      </div>

      <div className="min-h-screen  [background-color:#4A7C96] pt-24 md:pt-8 p-4 flex flex-col md:flex-row md:justify-between md:items-start gap-6">
        <div className="flex flex-col gap-6 w-full md:w-1/2">
          <h2 className="text-white text-2xl font-bold mb-2 md:hidden">Contact Us</h2>

          <div className="bg-white p-6 rounded-2xl mt-12 text-black text-lg min-h-[200px]">
            <p>Address</p>
            <p>Email</p>
            <p>mob:</p>
          </div>

          <div className="flex justify-center items-center">
            <div className="w-120 h-120 overflow-hidden rounded-full border-4 border-white">
              {/* Clicking the iframe will open Google Maps with the location */}
              <a
                href="https://maps.app.goo.gl/5hctW9eAWKP4RjY8A" // Update with the actual Google Maps location link
                target="_blank"
                rel="noopener noreferrer"
              >
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31496.788365011642!2d76.59195874248033!3d9.324535807925495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0622eb1a82ef97%3A0xf573ccb29d01a039!2sChengannur%2C%20Kerala!5e0!3m2!1sen!2sin!4v1745568365705!5m2!1sen!2sin" // Embed link for the map (replace with your location)
                  width="100%"
                  height="100%"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full mt-12 md:w-1/2 justify-center items-center gap-4">
          <h2 className="text-white text-2xl font-bold mb-2 md:hidden">Enroll Now</h2>

          <input
            name="name"
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className="w-full max-w-md p-4 rounded-sm text-lg font-semibold text-[#33668a] focus:outline-none"
          />

          <input
            name="number"
            type="text"
            placeholder="Phone Number"
            value={form.number}
            onChange={handleChange}
            className="w-full max-w-md p-4 rounded-sm text-lg font-semibold text-[#33668a] focus:outline-none"
          />
          {errors.number && <p className="text-red-500 text-sm">{errors.number}</p>}

          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full max-w-md p-4 rounded-sm text-lg font-semibold text-[#33668a] focus:outline-none"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

          {form.name && form.number && form.email && !errors.email && !errors.number ? (
            <button
              onClick={handleDownload}
              className="mt-4 bg-white text-[#33668a] font-semibold text-xl px-6 py-4 rounded-2xl shadow-md text-center"
            >
              Download <br /> brochure
            </button>
          ) : (
            <button
              disabled
              className="mt-4 bg-white/50 text-[#33668a] font-semibold text-xl px-6 py-4 rounded-2xl shadow-md cursor-not-allowed"
            >
              Fill all fields <br /> to download
            </button>
          )}

          {downloadComplete && (
            <div className="mt-4 text-white text-xl">
              <p>Download Complete! Redirecting to homepage...</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;














