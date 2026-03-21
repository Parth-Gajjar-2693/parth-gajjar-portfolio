import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BiLogoGmail } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
      className="lg:my-16 lg:px-28 my-10 px-5"
      id="contact"
    >
      {/* HEADING */}
      <motion.h2
        initial={{ y: -40, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        className="text-3xl lg:text-5xl text-center"
      >
        Contact <span className="font-extrabold">Me</span>
      </motion.h2>

      <div className="flex flex-col lg:flex-row gap-12 mt-10 lg:mt-16 items-start">
        {/* LEFT - FORM */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          className="lg:w-1/2 w-full"
        >
          <form className="space-y-4 border border-gray-200 rounded-2xl p-6 shadow-sm">
            <input
              type="text"
              placeholder="Your name"
              required
              className="w-full px-4 py-3 rounded border border-gray-300 focus:border-black outline-none text-sm transition"
            />

            <input
              type="email"
              placeholder="Email"
              required
              className="w-full px-4 py-3 rounded border border-gray-300 focus:border-black outline-none text-sm transition"
            />

            <input
              type="text"
              placeholder="Your website (optional)"
              className="w-full px-4 py-3 rounded border border-gray-300 focus:border-black outline-none text-sm transition"
            />

            <textarea
              placeholder="How can I help?"
              className="w-full px-4 py-3 h-32 rounded border border-gray-300 focus:border-black outline-none text-sm resize-none transition"
            />

            {/* BUTTON */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition"
            >
              Send Message
            </motion.button>

            {/* SOCIAL */}
            <div className="flex justify-center gap-4 pt-3">
              {[BiLogoGmail, IoLogoLinkedin, IoLogoTwitter, BsGithub].map(
                (Icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    whileHover={{ scale: 1.15 }}
                    className="p-2 border border-gray-300 rounded-lg hover:bg-black hover:text-white transition"
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                )
              )}
            </div>
          </form>
        </motion.div>

        {/* RIGHT - INFO */}
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          className="lg:w-1/2 w-full space-y-6"
        >
          <div className="text-3xl lg:text-5xl font-extrabold leading-tight">
            <h2>
              Let’s build something{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-500">
                great
              </span>
            </h2>
          </div>

          <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
            I build scalable systems and high-performance applications. If you
            have an idea, product, or problem — let’s connect and make it happen.
          </p>

          {/* CONTACT INFO */}
          <div className="space-y-4 text-sm lg:text-base font-medium">
            <motion.a
              whileHover={{ x: 5 }}
              href="mailto:youremail@gmail.com"
              className="flex items-center gap-3 group"
            >
              <IoMdMail />
              <span className="group-hover:underline">
                youremail@gmail.com
              </span>
            </motion.a>

            <motion.a
              whileHover={{ x: 5 }}
              href="tel:1234567890"
              className="flex items-center gap-3 group"
            >
              <FaPhone />
              <span className="group-hover:underline">
                +91 1234567890
              </span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}