"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const About = () => {
  const [activeCard, setActiveCard] = useState(0);
  
  const skills = [
    { name: "React", level: 80 },
    { name: "Next.js", level: 81 },
    { name: "Tailwind CSS", level: 89 },
    { name: "JS", level: 78 },
    { name: "Responsive", level: 94 },
  ];
  
  const timeline = [
    { year: "2023", title: "Started Coding Journey", description: "Began learning Flutter" },
    { year: "2025", title: "First Frontend Position", description: "Joined company as a junior frontend developer" },
    { year: "2026", title: "Mastered React Ecosystem", description: "Became proficient in React and state management" },
    { year: "2026", title: "Mastering Next js and javascript", description: "Focused on creating exceptional user experiences" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % timeline.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [timeline.length]);

  // Create refs for each text element
  const headerRef = useRef(null);
  const paragraph1Ref = useRef(null);
  const paragraph2Ref = useRef(null);
  const paragraph3Ref = useRef(null);
  const skillsRef = useRef(null);
  const timelineRef = useRef(null);
  
  // Check if elements are in view
  const headerInView = useInView(headerRef, { once: true, margin: "-100px 0px 0px 0px" });
  const p1InView = useInView(paragraph1Ref, { once: true, margin: "-100px 0px 0px 0px" });
  const p2InView = useInView(paragraph2Ref, { once: true, margin: "-100px 0px 0px 0px" });
  const p3InView = useInView(paragraph3Ref, { once: true, margin: "-100px 0px 0px 0px" });
  const skillsInView = useInView(skillsRef, { once: true, margin: "-100px 0px 0px 0px" });
  const timelineInView = useInView(timelineRef, { once: true, margin: "-100px 0px 0px 0px" });

  // Animation variants
  const fadeUp = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <section id="about" className="relative bg-gradient-to-br text-white py-20 ">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-soft-light filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-20 w-64 h-64 bg-emerald-500 rounded-full mix-blend-soft-light filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-60 h-60 bg-cyan-500 rounded-full mix-blend-soft-light filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
              
        <div className="container mx-auto">
          <div className="mb-16" ref={headerRef}>
            <motion.h2 
              className="text-center text-4xl gradient-text font-bold"
              variants={fadeUp}
              initial="hidden"
              animate={headerInView ? "visible" : "hidden"}
            >
              About Me
            </motion.h2>
            <motion.p 
              className="text-center text-2xl gradient-text mt-2"
              variants={fadeUp}
              initial="hidden"
              animate={headerInView ? "visible" : "hidden"}
              transition={{ delay: 0.1 }}
            >
              Passionate frontend developer creating elegant solutions for complex problems
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[8fr_5fr] gap-8 px-4 lg:px-12">
            {/* Left Column - Content Section */}
            <div className="rounded-2xl p-6 md:p-8 border border-gray-700/50">
              <div ref={paragraph1Ref}>
                <motion.p 
                  className="text-gray-200 mb-6 text-lg"
                  variants={fadeUp}
                  initial="hidden"
                  animate={p1InView ? "visible" : "hidden"}
                >
                  I m a passionate Frontend Developer focused on creating responsive, user-friendly interfaces with clean code and elegant design. I specialize in React, Next.js, and Tailwind CSS.
                </motion.p>
              </div>
              
              <div ref={paragraph2Ref}>
                <motion.p 
                  className="text-gray-400 mb-6"
                  variants={fadeUp}
                  initial="hidden"
                  animate={p2InView ? "visible" : "hidden"}
                  transition={{ delay: 0.1 }}
                >
                  My coding journey wasnt perfect — I used to hate dealing with responsive layouts! But over time, I realized that tools like Bootstrap grid and Tailwind utility classes make it much easier and even fun.
                </motion.p>
              </div>
              
              <div ref={paragraph3Ref}>
                <motion.p 
                  className="text-gray-400 mb-10"
                  variants={fadeUp}
                  initial="hidden"
                  animate={p3InView ? "visible" : "hidden"}
                  transition={{ delay: 0.2 }}
                >
                  Today, I build modern web apps with performance and user experience in mind. I m always learning, improving, and staying up to date with the latest frontend technologies.
                </motion.p>
              </div>
              
              <div ref={skillsRef} className="mt-10">
                <motion.h3 
                  className="text-xl gradient-text font-bold mb-6"
                  variants={fadeUp}
                  initial="hidden"
                  animate={skillsInView ? "visible" : "hidden"}
                >
                  My Skills
                </motion.h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {skills.map((skill, index) => (
                    <motion.div 
                      key={index}
                      className="bg-gray-800/50 p-4 rounded-xl border border-gray-700 hover:border-cyan-500/30 transition-all hover:scale-[1.03]"
                      variants={fadeUp}
                      initial="hidden"
                      animate={skillsInView ? "visible" : "hidden"}
                      transition={{ delay: 0.1 * (index + 1) }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-cyan-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-cyan-500 to-indigo-500 h-2 rounded-full" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Timeline */}
            <div ref={timelineRef}>
              <motion.h3 
                className="text-xl font-bold mb-6 text-center gradient-text"
                variants={fadeUp}
                initial="hidden"
                animate={timelineInView ? "visible" : "hidden"}
              >
                My Journey
              </motion.h3>
              <motion.div 
                className="relative"
                variants={fadeUp}
                initial="hidden"
                animate={timelineInView ? "visible" : "hidden"}
                transition={{ delay: 0.1 }}
              >
                {/* Vertical line */}
                <div className="absolute left-[7px] top-0 h-full w-0.5 gradient-bg z-0"></div>
                
                <div className="relative space-y-8 pl-12">
                  {timeline.map((item, index) => (
                    <div 
                      key={index}
                      className={`relative transition-all duration-500 transform ${activeCard === index ? 'scale-105' : 'scale-95 opacity-70'}`}
                    >
                      <div className="absolute -left-12 top-0 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-600 to-indigo-600 flex items-center justify-center z-10 shadow-lg">
                        <span className="text-xs font-bold">{item.year}</span>
                      </div>
                      <div 
                        className={`bg-gray-800/50 backdrop-blur-sm p-5 rounded-xl border ${activeCard === index ? 'border-cyan-500/50' : 'border-gray-700'} transition-all cursor-pointer`}
                        onClick={() => setActiveCard(index)}
                      >
                        <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                        <p className="text-gray-400">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;