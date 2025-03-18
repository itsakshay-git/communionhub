import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import img1 from "../assets/cummunities/img1.png";
import img2 from "../assets/cummunities/img2.png";
import img3 from "../assets/cummunities/img3.png";
import img4 from "../assets/cummunities/img4.png";
import img5 from "../assets/cummunities/img5.png";
import img6 from "../assets/cummunities/img6.png";

gsap.registerPlugin(ScrollTrigger);

const CommunityEvents = () => {
  const textRef = useRef(null);
  const imagesRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    imagesRef.current.forEach((img) => {
      gsap.fromTo(
        img,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: img,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section className="bg-black text-white py-16 px-6">
      <div ref={textRef} className="flex flex-col md:flex-row justify-between items-start mb-10">
        <h2 className="text-5xl font-semibold pl-8 max-sm:pl-0 max-sm:text-center max-sm:my-4">Uniting Communities Through</h2>
        <p className="text-gray-300 max-w-md text-sm md:text-base">
          At Communion, we’re committed to organizing events that foster
          connections, inspire personal and professional growth, and bring
          people together to share meaningful experiences. From workshops to
          conferences, every event is designed to leave a lasting impact on our
          attendees.
        </p>
      </div>

      <div className="grid grid-cols-4 gap-4 max-w-7xl mx-auto">
        <div className="col-span-1 row-span-2">
          <img ref={(el) => (imagesRef.current[0] = el)} src={img1} alt="Event 1" className="w-full h-[400px] object-cover rounded-lg" />
        </div>
        <div className="col-span-1 row-span-1">
          <img ref={(el) => (imagesRef.current[1] = el)} src={img2} alt="Event 2" className="w-full h-[190px] object-cover rounded-lg" />
        </div>
        <div className="col-span-1 row-span-1">
          <img ref={(el) => (imagesRef.current[2] = el)} src={img3} alt="Event 3" className="w-full h-[190px] object-cover rounded-lg" />
        </div>
        <div className="col-span-1 row-span-2">
          <img ref={(el) => (imagesRef.current[3] = el)} src={img4} alt="Event 4" className="w-full h-[400px] object-cover rounded-lg" />
        </div>
        <div className="col-span-1 row-span-1">
          <img ref={(el) => (imagesRef.current[4] = el)} src={img5} alt="Event 5" className="w-full h-[190px] object-cover rounded-lg" />
        </div>
        <div className="col-span-1 row-span-1">
          <img ref={(el) => (imagesRef.current[5] = el)} src={img6} alt="Event 6" className="w-full h-[190px] object-cover rounded-lg" />
        </div>
      </div>
    </section>
  );
};

export default CommunityEvents;
