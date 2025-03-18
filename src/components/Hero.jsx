import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import image1 from "../assets/headerImages/image1.png"
import image2 from "../assets/headerImages/image2.png"
import image3 from "../assets/headerImages/image3.png"
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";


gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const heroRef = useRef(null);
    const textRef = useRef(null);
    const imagesRef = useRef([]);
  
    useEffect(() => {
      let ctx = gsap.context(() => {
        // Hero section fade-in
        gsap.from(heroRef.current, {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
  
        // Text animation
        gsap.from(textRef.current, {
          opacity: 0,
          y: 30,
          duration: 1,
          stagger: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 85%",
          },
        });
  
        // Images animation
        imagesRef.current.forEach((img, index) => {
          if (img) {
            gsap.from(img, {
              opacity: 0,
              scale: 0.8,
              duration: 1,
              delay: index * 0.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: img,
                start: "top 90%",
              },
            });
          }
        });
      });
  
      return () => ctx.revert(); // Cleanup GSAP animations
    }, []);

  return (
    <section ref={heroRef} className="flex-grow p-4 text-black bg-[#A9E2EB] rounded-lg mx-4 flex flex-col justify-between">
      <div className="header-title mx-[20px]" ref={textRef}>
        <div className="flex">
          <p className="font-[350] lg:text-[70px] sm:text-[30px] max-sm:text-[30px] tracking-widest">
            Unite, Innovate,
          </p>
          <p className="flex items-center text-[12px] font-medium w-[350px] ml-[50px] max-sm:hidden">
            Join us to be part of a community where spirituality meets
            innovation. Together, we'll build a world that's more inclusive,
            engaging, and connected than ever before!
          </p>
        </div>
        <div className="flex items-center">
          <p className="font-[350] lg:text-[70px] md:text-[50px] sm:text-[30px] max-sm:text-[30px] grow tracking-widest flex items-end sm:block max-sm:block">
            Connect, Inspires Together
            <span className="flex items-center text-[12px] font-medium w-[350px] my-[10px] max-sm:block tracking-tight md:hidden lg:hidden xl:hidden 2xl:hidden">
            Join us to be part of a community where spirituality meets
            innovation. Together, we'll build a world that's more inclusive,
            engaging, and connected than ever before!
          </span>
          <Link to="/events" className="hover:text-gray-700">
            <button className="bg-black rounded-full text-white p-[10px] text-[16px] tracking-normal md:ml-[50px] md:mb-[15px] lg:ml-[50px] lg:mb-[15px] sm:mb-0 sm:ml-0 max-sm:mb-0 max-sm:ml-0 cursor-pointer">
              View our servies
            </button>
          </Link>
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-4 mt-5 mx-[20px]">
          <img ref={(el) => (imagesRef.current[0] = el)} src={image1} alt="Community" className="w-full h-[250px] object-cover rounded-lg" />
          <img ref={(el) => (imagesRef.current[1] = el)} src={image2} alt="Event" className="w-full h-[250px] object-cover rounded-lg" />
          <img ref={(el) => (imagesRef.current[2] = el)} src={image3} alt="Networking" className="w-full h-[250px] object-cover rounded-lg" />
      </div>
    </section>
  );
};

export default Hero;
