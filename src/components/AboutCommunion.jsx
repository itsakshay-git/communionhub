import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LuUsers, LuRecycle, LuTrendingUp } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const AboutCommunion = () => {
    const textRefs = useRef([]);

    useEffect(() => {
        textRefs.current.forEach((el) => {
            if (el) {
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
            }
        });
    }, []);

    return (
        <section className="bg-black text-white py-8 px-4">
            <h2
                ref={(el) => el && textRefs.current.push(el)}
                className="text-4xl md:text-5xl font-semibold pb-8 md:pb-10 text-center md:text-left"
            >
                Why Communion Rocks!
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                <div className="bg-[#A9E2EB] text-black p-6 rounded-lg flex flex-col justify-between md:col-span-2">
                    <p
                        ref={(el) => el && textRefs.current.push(el)}
                        className="text-[16px] pb-6 md:pb-20"
                    >
                        Communion is not just another platform—it's a vibrant space that
                        unites diverse faiths, beliefs, and traditions. By promoting
                        collaboration and connection, we're fostering a world where
                        differences become strengths and unity becomes the norm.
                    </p>
                    <div className="flex justify-center md:justify-end">
                        <button className="text-black py-2 px-4 rounded-lg border border-black flex items-center gap-2">
                            Why Join Us?
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:col-span-3">
                    {[
                        {
                            icon: <LuUsers className="text-3xl mb-4" />,
                            title: "Unifying Communities",
                            text: "Communion bridges diverse religious communities, becoming the social hub for faith-driven discussions and collaborations.",
                        },
                        {
                            icon: <LuRecycle className="text-3xl mb-4" />,
                            title: "Innovative and Fun",
                            text: "Experience faith in a fresh way through our interactive features, engaging events, and modern approach to spiritual connection.",
                        },
                        {
                            icon: <LuTrendingUp className="text-3xl mb-4" />,
                            title: "Promoting Unity",
                            text: "We foster understanding and harmony between different faith communities through shared experiences and meaningful conversations.",
                        },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="bg-[#E48664] p-6 rounded-lg text-white flex flex-col"
                        >
                            {item.icon}
                            <h3
                                ref={(el) => el && textRefs.current.push(el)}
                                className="text-lg md:text-xl font-semibold mb-2"
                            >
                                {item.title}
                            </h3>
                            <p ref={(el) => el && textRefs.current.push(el)} className="flex-grow text-sm md:text-base">
                                {item.text}
                            </p>
                            <div className="flex justify-end items-center">
                                <button className="border border-white py-2 px-4 rounded-lg mt-4 flex items-center gap-2">
                                    Learn More <FaArrowRight />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutCommunion;
