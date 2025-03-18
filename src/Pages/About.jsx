import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="text-white py-20 md:px-6 mx-4 mb-4 flex max-sm:block">
      <div className="mr-9">
      <motion.h1
        className="text-3xl md:text-4xl font-extrabold mb-6 fade-in"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About <span className="text-[#E48664]">Communion</span>
      </motion.h1>


      <motion.p
        className="text-lg md:text-xl fade-in pb-10 w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        Communion is a platform that brings people together through faith, conversation, and community-driven events. 
        Our goal is to create meaningful connections and foster unity among diverse groups.
      </motion.p>

      <motion.div
        className="mt-12"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.3 }}
      >
        <a
          href="/events"
          className="bg-[#E48664] text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-[#c96b50] transition-all duration-300"
        >
          Explore Events
        </a>
      </motion.div>
      </div>


      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 max-sm:grid-cols-1 gap-8 w-full">
        <motion.div
          className="bg-[#A9E2EB] p-6 rounded-lg shadow-lg text-black max-sm:col-span-1"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-2xl font-semibold">🌍 Connect</h3>
          <p className="mt-2 text-sm">
            Engage with people from different backgrounds, cultures, and beliefs.
          </p>
        </motion.div>

        <motion.div
          className="bg-[#E48664] p-6 rounded-lg shadow-lg text-white max-sm:col-span-1"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-2xl font-semibold">📢 Conversations</h3>
          <p className="mt-2 text-sm">
            Participate in discussions that inspire, educate, and bring people together.
          </p>
        </motion.div>

        <motion.div
          className="bg-blue-300 p-6 rounded-lg shadow-lg text-black col-span-2 max-sm:col-span-1"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-2xl font-semibold">🤝 Events</h3>
          <p className="mt-2 text-sm">
            Attend or host events that promote faith, charity, and social causes.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
