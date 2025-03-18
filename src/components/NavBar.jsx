import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/logo.png";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="h-[10vh] bg-[#A9E2EB] rounded-lg flex justify-between items-center px-6 py-4 text-black relative shadow-md">
            <Link  to={"/"}>
                <img src={logo} alt="logo" className="w-[160px] md:w-[200px]" />
            </Link>

            <ul className="hidden md:flex gap-8 text-lg font-medium">
                {["Home", "Events", "About"].map((item, index) => (
                    <li key={index}>
                        <Link
                            to={item == "Home" ? `/` : `/${item.toLowerCase()}`}
                            className="relative after:block after:content-[''] after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full"
                        >
                            {item}
                        </Link>
                    </li>
                ))}
            </ul>


            <div className="md:hidden z-30">
                <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
                    {isOpen ? <HiX size={35} className="text-black hover:rotate-90 transition-transform duration-300" /> : <HiMenu size={35} className="text-black" />}
                </button>
            </div>
            
            {isOpen && (
                <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="fixed top-0 right-0 h-full w-[75%] bg-[#E48664] backdrop-blur-lg shadow-2xl flex flex-col items-center justify-center gap-6 text-xl font-semibold md:hidden z-20 rounded-l-lg"
                >

                    <ul className="flex flex-col gap-6">
                        {["Home", "Events", "About"].map((item, index) => (
                            <li key={index} onClick={() => setIsOpen(false)}>
                                <Link
                                    to={item == "Home" ? `/` : `/${item.toLowerCase()}`}
                                    className="hover:text-gray-700 transition-colors duration-300"
                                >
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            )}
        </nav>
    );
};

export default NavBar;
