"use client";
import React, { useState } from "react";
import { useRef, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();
  const pathname = usePathname();
  const toggleMenu = () => setIsOpen(!isOpen);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header className="fixed top-0 shadow-lg shadow-[#2A0E61]/50 backdrop-blur-md w-full z-50   text-white">
      <div className="flex justify-between items-center py-3 px-6 lg:px-12">
        {/* Left: Logo + Text */}
        <Link href="/">
          <div className="flex items-center gap-2">
           
            <span className="text-xl font-semibold">My Portfolio</span>
          </div>
        </Link>
        {/* Center: Nav Links */}
        <nav className="hidden lg:flex gap-8 text-md font-medium border border-[#7042f861] bg-[#0300145e] px-[20px] py-[10px] rounded-3xl">
      <Link
        href="/about-me"
        className={`transition hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-500 hover:bg-clip-text hover:text-transparent ${
          pathname === "/about-me" ? "active" : ""
        }`}
      >
        About Me
      </Link>

      <Link
        href="/projects"
        className={`transition hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-500 hover:bg-clip-text hover:text-transparent ${
          pathname === "/projects" ? "active" : ""
        }`}
      >
        Projects
      </Link>

      <Link
        href="/contact-us"
        className={`transition hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-500 hover:bg-clip-text hover:text-transparent ${
          pathname === "/contact-us" ? "active" : ""
        }`}
      >
        Contact Us
      </Link>
    </nav>

        {/* Right: Social Icons */}
        <div className="hidden lg:flex gap-4 text-xl">
          {[
            {
              href: "https://www.instagram.com/mr_pallu_1250/",
              icon: <FaInstagram />,
            },
            {
              href: "https://www.linkedin.com/in/pervaiz1250/",
              icon: <FaLinkedin />,
            },
            { href: "https://github.com/pervaizdev", icon: <FaGithub /> },
            { href: "https://wa.me/+923431157074", icon: <FaWhatsapp /> },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target="_blank"
              whileHover={{ scale: 1.6 }}
              whileTap={{ scale: 0.95 }}
              className="transition-transform duration-300"
            >
              {item.icon}
            </motion.a>
          ))}
        </div>

        {/* Hamburger: Mobile */}
        <div className="lg:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          ref={menuRef}
          className="flex flex-col absolute right-6 gradient-bg top-16 w-[250px] lg:hidden  items-center gap-6 py-6  text-white rounded-lg shadow-lg z-50"
        >
          <Link href="/about-me" onClick={toggleMenu}>
            About Me
          </Link>

          <Link href="/projects" onClick={toggleMenu}>
            Projects
          </Link>
          <Link href="/contact-us" onClick={toggleMenu}>
            Contact Us
          </Link>
          <div className="flex gap-4 text-xl mt-2">
            <Link
              href="https://www.instagram.com/mr_pallu_1250/"
              target="_blank"
            >
              <FaInstagram />
            </Link>
            <Link
              href="https://www.linkedin.com/in/pervaiz1250/"
              target="_blank"
            >
              <FaLinkedin />
            </Link>
            <Link href="https://github.com/pervaizdev" target="_blank">
              <FaGithub />
            </Link>

            <Link href="https://wa.me/+923431157074" target="_blank">
              <FaWhatsapp />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
