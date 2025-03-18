import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      footerRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      linksRef.current,
      { opacity: 0, x: 30 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <footer ref={footerRef} className="bg-[#E48664] text-white py-8 px-8 mx-4 rounded-lg">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        {/* Left Section */}
        <div className="max-w-md">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <img src={logo} alt="logo" className='w-[200px]'/>
          </h2>
          <p className="text-sm text-white mt-2 leading-relaxed">
            Discover the power of connection with Communion. Uniting diverse communities through spirituality and innovation, we foster inclusivity, collaboration, and social cohesion for a better world.
          </p>

          <div className="flex gap-4 mt-4">
            <FaFacebookF className="cursor-pointer text-white hover:text-gray-200 transition text-xl" />
            <FaInstagram className="cursor-pointer text-white hover:text-gray-200 transition text-xl" />
            <FaYoutube className="cursor-pointer text-white hover:text-gray-200 transition text-xl" />
          </div>
        </div>

        <div ref={linksRef} className="mt-8 md:mt-0 bg-transparent border border-white rounded-lg px-6 py-4">
          <h3 className="font-semibold text-lg mb-2">Company</h3>
          <ul className="space-y-2 text-sm">
            <Link to="/" className="hover:text-gray-700">
              <li className="cursor-pointer hover:underline">Home</li>
            </Link>
            <Link to="/events" className="hover:text-gray-700">
              <li className="cursor-pointer hover:underline">Events</li>
            </Link>
            <Link to="/about" className="hover:text-gray-700">
              <li className="cursor-pointer hover:underline">About</li>
            </Link>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-white mt-8 pt-4 flex flex-col md:flex-row justify-between text-xs text-white">
        <p>Copyright © 2024. <span className="font-semibold">All rights reserved to Communion</span></p>
        <div className="flex gap-6 mt-2 md:mt-0">
          <p className="cursor-pointer hover:underline">Privacy Policy</p>
          <p className="cursor-pointer hover:underline">Terms & Conditions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
