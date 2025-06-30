"use client";

import React from "react";
import { 
  FaGraduationCap, 
  FaBriefcase, 
  FaCode, 
  FaMedal, 
  FaReact, 
  FaMobile 
} from "react-icons/fa";
import { 
  SiNextdotjs, 
  SiFlutter, 
  SiTailwindcss, 
  SiBootstrap 
} from "react-icons/si";
import { motion } from "framer-motion";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const AboutMe = () => {
  return (
    <div className="container mx-auto text-gray-100 mt-20">
      {/* Hero Section */}
      <div className="mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <motion.div 
            className="relative inline-block mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur opacity-75"></div>
            <div className="relative bg-gray-900 border border-gray-800 rounded-full p-2">
              <div className="bg-gray-800 rounded-full p-3">
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 w-24 h-24 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-4xl font-bold">MP</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <span className="bg-clip-text text-transparent gradient-text">
              Muhammad Pervaiz
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            Passionate Web &amp; Mobile Developer | React &amp; Flutter Specialist | Gold Medalist
          </motion.p>

          <motion.div 
            className="flex flex-wrap justify-center gap-4 mt-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={container}
          >
            <motion.a
              href="https://wa.me/+923431157074"
              className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all flex items-center gap-2"
              variants={fadeInUp}
            >
              <span>WhatsApp</span>
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/pervaiz1250/"
              target="_blank"
              className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all flex items-center gap-2"
              variants={fadeInUp}
            >
              <span>LinkedIn</span>
            </motion.a>
            <motion.a
              href="https://github.com/pervaizdev"
              className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all flex items-center gap-2"
              variants={fadeInUp}
            >
              <span>GitHub</span>
            </motion.a>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* About Me Section */}
          <motion.section 
            className="lg:col-span-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 shadow-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <motion.h2 
              className="text-3xl font-bold mb-6 flex items-center gap-3"
              variants={fadeInUp}
            >
              <div className="w-2 h-8 gradient-bg rounded-full"></div>
              <p className="gradient-text">About Me</p>
            </motion.h2>

            <motion.div 
              className="space-y-4 text-gray-300"
              variants={container}
            >
              <motion.p variants={fadeInUp}>
                Hi, I&apos;m <span className="font-semibold text-indigo-300">Muhammad Pervaiz</span>, a passionate <span className="font-semibold text-indigo-300">web and mobile developer</span> with a strong foundation in <span className="font-semibold text-indigo-300">front-end technologies</span> and <span className="font-semibold text-indigo-300">cross-platform app development</span>.
              </motion.p>

              <motion.p variants={fadeInUp}>
                At <span className="font-semibold text-indigo-300">SevenKoncepts</span>, I build <span className="font-semibold text-indigo-300">responsive, user-centric applications</span> using React.js, Next.js, Tailwind CSS, and Bootstrap, converting Figma designs into clean, functional frontends.
              </motion.p>

              <motion.p variants={fadeInUp}>
                My projects span healthcare platforms, company portfolios, food service applications and more. I previously worked as a <span className="font-semibold text-indigo-300">Flutter Developer Intern</span> at Internship Pakistan, creating cross-platform mobile apps.
              </motion.p>

              <motion.p variants={fadeInUp}>
                Beyond development, I&apos;ve taught Android development to over 50 students, led video editing teams, and earned a <span className="font-semibold text-amber-300">Gold Medal</span> for my Final Year Project, &quot;Green Zone Monitor,&quot; at NUTECH University.
              </motion.p>
            </motion.div>
          </motion.section>

          {/* Skills Highlights */}
          <motion.section 
            className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 shadow-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <motion.h2 
              className="text-3xl font-bold mb-6 flex items-center gap-3"
              variants={fadeInUp}
            >
              <div className="w-2 h-8 gradient-bg rounded-full"></div>
              <p className="gradient-text">Core Skills</p>
            </motion.h2>

            <motion.div 
              className="space-y-6"
              variants={container}
            >
              <motion.div variants={fadeInUp}>
                <h3 className="text-lg font-semibold gradient-text mb-2">Frontend Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-indigo-900/50 text-indigo-200 rounded-full">React.js</span>
                  <span className="px-3 py-1 bg-indigo-900/50 text-indigo-200 rounded-full">Next.js</span>
                  <span className="px-3 py-1 bg-indigo-900/50 text-indigo-200 rounded-full">Tailwind CSS</span>
                  <span className="px-3 py-1 bg-indigo-900/50 text-indigo-200 rounded-full">Bootstrap</span>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <h3 className="text-lg font-semibold gradient-text mb-2">Mobile Development</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-indigo-900/50 text-indigo-200 rounded-full">Flutter</span>
                  <span className="px-3 py-1 bg-indigo-900/50 text-indigo-200 rounded-full">Dart</span>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <h3 className="text-lg font-semibold gradient-text mb-2">Additional Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-indigo-900/50 text-indigo-200 rounded-full">API Integration</span>
                  <span className="px-3 py-1 bg-indigo-900/50 text-indigo-200 rounded-full">Context API</span>
                  <span className="px-3 py-1 bg-indigo-900/50 text-indigo-200 rounded-full">Responsive Design</span>
                  <span className="px-3 py-1 bg-indigo-900/50 text-indigo-200 rounded-full">Swiper.js</span>
                  <span className="px-3 py-1 bg-indigo-900/50 text-indigo-200 rounded-full">Strapi</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.section>

          {/* Education */}
          <motion.section 
            className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 shadow-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <motion.h2 
              className="text-3xl font-bold mb-6 flex items-center gap-3"
              variants={fadeInUp}
            >
              <div className="w-2 h-8 gradient-bg rounded-full"></div>
              <p className="gradient-text">Education</p>
            </motion.h2>

            <motion.div 
              className="space-y-8"
              variants={container}
            >
              <motion.div variants={fadeInUp}>
                <h3 className="text-xl font-bold">National University of Technology (NUTECH)</h3>
                <p className="text-cyan-300">Bachelor of Science in Computer Science</p>
                <p className="text-gray-400">2020-2024 | Islamabad, Pakistan</p>
                <p className="mt-2 text-amber-300 font-semibold">Gold Medalist</p>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <h3 className="text-xl font-bold">Cadet College Skardu</h3>
                <p className="text-cyan-300">Matriculation and FSc</p>
                <p className="text-gray-400">2014-2019 | Skardu, Pakistan</p>
              </motion.div>
            </motion.div>
          </motion.section>

          {/* Experience */}
          <motion.section 
            className="lg:col-span-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 shadow-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <motion.h2 
              className="text-3xl font-bold mb-6 flex items-center gap-3"
              variants={fadeInUp}
            >
              <div className="w-2 h-8 gradient-bg rounded-full"></div>
              <p className="gradient-text">Professional Experience</p>
            </motion.h2>

            <motion.div 
              className="space-y-8"
              variants={container}
            >
              <motion.div variants={fadeInUp}>
                <h3 className="text-xl font-bold">Web Developer</h3>
                <p className="text-amber-300">SevenKoncepts | Sep 2024 - Present</p>
                <ul className="mt-3 space-y-2 text-gray-300 list-disc list-inside">
                  <li>Develop and maintain responsive web applications using React.js and Next.js</li>
                  <li>Collaborate with cross-functional teams including designers and backend developers</li>
                  <li>Ensure high-quality code implementation following best practices</li>
                  <li>Convert Figma designs into clean, functional frontends</li>
                </ul>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <h3 className="text-xl font-bold">Flutter Developer Intern</h3>
                <p className="text-amber-300">Internship Pakistan</p>
                <ul className="mt-3 space-y-2 text-gray-300 list-disc list-inside">
                  <li>Gained remote experience in cross-platform mobile application development</li>
                  <li>Contributed to multiple project deliverables throughout the internship</li>
                  <li>Collaborated with team members to design and optimize user-friendly apps</li>
                </ul>
              </motion.div>
            </motion.div>
          </motion.section>
        </div>

        {/* Achievements */}
        <motion.section 
          className="mt-16 bg-gradient-to-r from-indigo-900/30 to-purple-900/30 border border-indigo-500/30 rounded-2xl p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <motion.h2 
            className="text-3xl font-bold mb-8 text-center"
            variants={fadeInUp}
          >
            Key Achievements
          </motion.h2>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={container}
          >
            <motion.div 
              className="bg-gray-800/50 p-6 rounded-xl border border-indigo-500/30"
              variants={fadeInUp}
            >
              <h3 className="text-xl font-bold mb-2">Gold Medalist</h3>
              <p className="text-gray-300">
                Awarded Gold Medal for Final Year Project &quot;Green Zone Monitor&quot; at NUTECH University - a WEBGIS portal for land use analysis processing over 1,000 images monthly.
              </p>
            </motion.div>

            <motion.div 
              className="bg-gray-800/50 p-6 rounded-xl border border-indigo-500/30"
              variants={fadeInUp}
            >
              <h3 className="text-xl font-bold mb-2">App Development Lead</h3>
              <p className="text-gray-300">
                As App Development Lead at GDSC NUTECH, taught Android development to 50+ students and led initiatives resulting in 10+ completed projects.
              </p>
            </motion.div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default AboutMe;
