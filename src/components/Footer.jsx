import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  const socials = [
    {
      icon: FaGithub,
      link: "https://github.com/Parth-Gajjar-2693",
      label: "GitHub",
    },
    {
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/parth-gajjar-b1b547274/",
      label: "LinkedIn",
    },
    {
      icon: FaEnvelope,
      link: "mailto:parthgajjar127@gmail.com",
      label: "Email",
    },
    {
      icon: FaPhone,
      link: "tel:+918320054936", 
      label: "Call",
    },
  ];

  return (
    <footer className="bg-black text-white px-6 lg:px-28 py-8 mt-16 border-t border-gray-800">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
        
        {/* Left */}
        <div className="text-center lg:text-left">
          <p className="font-semibold text-base">Parth Gajjar</p>
          <p className="text-gray-400 text-sm mt-1">
            Building modern web experiences 🚀
          </p>
        </div>

        {/* Center - Socials */}
        <div className="flex items-center gap-6 text-xl">
          {socials.map(({ icon: Icon, link, label }, index) => (
            <a
              key={index}
              href={link}
              target={label === "Call" ? "_self" : "_blank"} // call shouldn't open new tab
              rel="noreferrer"
              aria-label={label}
              className="hover:text-gray-400 hover:scale-110 transition-all duration-300"
            >
              <Icon />
            </a>
          ))}
        </div>

        {/* Right */}
        <div className="text-center lg:text-right text-sm text-gray-400">
          <p>© {year} Personal Portfolio</p>
          <p className="mt-1">
            Made with <span className="text-red-500">❤️</span> by Parth
          </p>
        </div>
      </div>
    </footer>
  );
}