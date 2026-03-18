import React from "react";
import { motion } from "framer-motion";
import { IoLogoLinkedin } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { BiLogoGmail } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { TypeAnimation } from "react-type-animation";

const socialLinks = [
  {
    icon: BiLogoGmail,
    href: "mailto:parthgajjar127@gmail.com",
    label: "Email",
  },
  {
    icon: IoLogoLinkedin,
    href: "https://www.linkedin.com/in/parth-gajjar-b1b547274/",
    label: "LinkedIn",
  },
  {
    icon: FiPhone,
    href: "tel:+918320054936", 
    label: "Call",
  },
  {
    icon: BsGithub,
    href: "https://github.com/Parth-Gajjar-2693",
    label: "GitHub",
  },
];

export default function Home() {
  return (
    <div className="mt-20" id="home">
      <div className="flex justify-between py-10 items-center px-5 lg:px-28 lg:flex-row flex-col-reverse">
        <motion.div
          className="lg:w-[45%]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <motion.div
            className="text-2xl lg:text-5xl flex flex-col mt-8 lg:mt-0 gap-2 lg:gap-5 text-nowrap"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.2, ease: "easeInOut" },
              },
            }}
          >
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              Hello,{" "}
              <TypeAnimation
                sequence={[
                  "I am Parth Gajjar",
                  1000,
                  "I build scalable UIs",
                  1000,
                  "I solve real problems",
                  1000,
                ]}
                speed={20}
                style={{ fontWeight: 600 }}
                repeat={Infinity}
              />
            </motion.h2>
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <span className="font-extrabold">Frontend</span>{" "}
              <span
                className="text-white font-extrabold"
                style={{ WebkitTextStroke: "1px black" }}
              >
                Developer
              </span>
            </motion.h2>
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              Based In <span className="font-extrabold">India.</span>
            </motion.h2>
          </motion.div>

          <motion.p
            className="text-[#71717A] text-sm lg:text-base mt-5"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            I’m a frontend developer with 1.5+ years of experience building
            scalable, high-performance web applications using React and modern
            JavaScript. I specialize in crafting clean UI architectures,
            handling complex state management, and optimizing performance for
            large-scale applications. I’ve worked on real-world products
            involving dynamic charts, real-time data handling, form-heavy
            workflows, and role-based systems. I focus on writing maintainable
            code, improving user experience, and solving practical business
            problems — not just building screens. Currently, I’m expanding into
            backend development with Node.js and exploring system design to
            become a more complete full-stack engineer.
          </motion.p>

          <motion.div
            className="flex items-center gap-x-5 mt-10 lg:mt-14"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            {socialLinks.map(({ icon: Icon, href, label }, index) => (
              <motion.a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="bg-white p-2 lg:p-3 rounded border-2 border-black"
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "#000",
                  color: "#fff",
                }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="w-4 h-4 lg:w-5 lg:h-5" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="lg:w-[55%] w-full"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <img
            className="h-full w-full"
            src="/assets/hero-vector.svg"
            alt="Hero Vector"
          />
        </motion.div>
      </div>
    </div>
  );
}
