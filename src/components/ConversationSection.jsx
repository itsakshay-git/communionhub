import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import conversationImage from "../assets/conversation.png";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";


gsap.registerPlugin(ScrollTrigger);

const ConversationSection = () => {
  const textRefs = useRef([]);
  const imageRef = useRef(null);
  const statsRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    // Text fade-in animation
    textRefs.current.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Image animation
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Title animation
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Stats bar animation
    gsap.fromTo(
      statsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 95%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section className="bg-black text-white px-4 pb-4">
      <div className="flex flex-col lg:flex-row bg-[#C2D3FD] rounded-lg p-6 items-center gap-6 overflow-hidden">
        <div className="flex-1 pl-4">
          <span className="text-white px-2 py-2 rounded-[50px] mb-2 inline-block text-[9px] bg-blue-300">
            Build Connections
          </span>
          <h2
            ref={(el) => el && textRefs.current.push(el)}
            className="text-5xl font-semibold mb-2 text-black"
          >
            Join the Conversation
          </h2>
          <p
            ref={(el) => el && textRefs.current.push(el)}
            className="text-black mb-8 w-[400px] max-sm:w-full"
          >
            Discover a vibrant community, share your thoughts, and connect with
            like-minded individuals. Together, we grow.
          </p>
          <Link to="/events" className="hover:text-gray-700">
          <button className="bg-black text-white px-6 py-2 rounded-full flex justify-center items-center gap-4 cursor-pointer">
            View our services <FaArrowRight />
          </button>
          </Link>
        </div>

        <img
          ref={imageRef}
          src={conversationImage}
          alt="Community"
          className="w-[400px] h-[250px] rounded-lg object-cover max-sm:w-full"
        />
      </div>

      <div className="bg-[#E48664] text-white mt-4 rounded-lg">
        <h2 ref={titleRef} className="text-center text-3xl font-semibold pt-4">
            Where Connections Thrive and Ideas Flourish ✦ 2x
        </h2>

        <div ref={statsRef} className="text-white mt-4 p-4 rounded-lg grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <p className="flex items-center justify-center gap-2">
            😊 <span>Happy Community</span>
            </p>
            <p className="flex items-center justify-center gap-2">
            📈 <span>210% Boost in Engagement</span>
            </p>
            <p className="flex items-center justify-center gap-2">
            🏆 <span>172+ Ranked Communities</span>
            </p>
        </div>
      </div>

    </section>
  );
};

export default ConversationSection;
