import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className=" text-white container mx-auto mt-20 ">
      <div className="container mx-auto px-4 grid lg:grid-cols-3 grid-col-1  gap-4">
        <div>
          <p className="text-center text-2xl gradient-text">Community</p>
          <Link href="https://github.com/pervaizdev" target="_blank">
            <div className="flex items-center justify-center gap-3 mt-4 hover-scales" >
              <FaGithub />
              <p>github</p>
            </div>
          </Link>
          <Link href="https://www.linkedin.com/in/pervaiz1250/" target="_blank">
            <div className="flex items-center justify-center gap-3 mt-4 hover-scales" >
              <FaLinkedin />
              <p>LinkedIn</p>
            </div>
          </Link>
        </div>
        <div>
          <p className="text-center text-2xl gradient-text mt-8 lg:mt-0">
            Social Media
          </p>
          <Link href="https://www.linkedin.com/in/pervaiz1250/" target="_blank">
            <div className="flex items-center justify-center gap-3 mt-4 hover-scales">
              <FaInstagram />
              <p>Instagram</p>
            </div>
          </Link>
          <Link href="https://wa.me/+923431157074" target="_blank">
            <div className="flex items-center justify-center gap-3 mt-4 hover-scales">
              <FaWhatsapp />
              <p>Whatsapp</p>
            </div>
          </Link>
        </div>
        <div>
          <p className="text-center text-2xl gradient-text mt-8 lg:mt-0">
            About
          </p>
          <p className="text-center mt-4">Let Work Together</p>
          <a
            href="mailto:pervaizdev01@gmail.com"
            className="text-center mt-4 text-blue-500 block hover:underline"
          >
            pervaizdev01@gmail.com
          </a>
        </div>
      </div>
      <p className="text-center mt-7 mb-4 text-sm text-gray-400">
        © 2026 Muhammad Pervaiz Inc. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
