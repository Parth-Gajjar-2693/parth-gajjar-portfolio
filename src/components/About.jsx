import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div
      className="px-5 lg:px-20 flex flex-col lg:flex-row items-center gap-10 lg:gap-16"
      id="about"
    >
      {/* Image */}
      <motion.div
        className="w-full lg:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10 }}
        viewport={{ once: true }}
      >
        <img
          src="/assets/about-me.svg"
          alt="About Me Illustration"
          className="w-full max-w-md lg:max-w-lg object-contain"
        />
      </motion.div>

      {/* Content */}
      <motion.div
        className="w-full lg:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="lg:text-4xl text-2xl font-semibold">
          About <span className="font-extrabold">Me</span>
        </h2>

        <div className="space-y-4 lg:space-y-6 mt-5 lg:mt-8">
          <p className="text-[#71717A] text-sm lg:text-base leading-relaxed">
            Frontend Engineer with 1.5+ years of experience building scalable
            and high-performance web applications using React.js and TypeScript.
            Skilled in developing dynamic user interfaces, handling complex
            state management, and optimizing application performance.
          </p>

          <p className="text-[#71717A] text-sm lg:text-base leading-relaxed">
            Experienced in working on real-world projects including dashboards,
            data visualization, and form-heavy workflows. Integrated third-party
            services such as Razorpay and PayPal, and implemented secure
            authentication systems using JWT, Google, and Apple login.
          </p>

          <p className="text-[#71717A] text-sm lg:text-base leading-relaxed">
            Strong focus on reusable component architecture, responsive design,
            and delivering clean, maintainable code. Comfortable collaborating
            with teams and clients to solve real business problems and deliver
            production-ready solutions.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
