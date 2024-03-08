import React from 'react';
import "../App.css";
import { FaArrowCircleUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className='footer'>
      <footer className="bg-gray-800 text-white mt-24">
        <div className="container mx-auto py-10">
          <h1 className='text-4xl text-center mb-4'>Thank you for watching!!</h1>
          <div className="text-center">
            <button
              onClick={scrollToTop}
              className="text-white bg-blue-700 hover:bg-blue-800 font-bold py-3 px-6 rounded-full cursor-pointer focus:outline-none focus:shadow-outline inline-flex items-center justify-center"
            >
              <FaArrowCircleUp className='text-white text-3xl'/>
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer;
