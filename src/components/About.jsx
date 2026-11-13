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
            Frontend Developer with 2+ years of experience building scalable,
            responsive, and high-performance web applications using React.js,
            Next.js, and TypeScript. Skilled in developing dynamic user
            interfaces, managing complex application states, and optimizing
            performance.
          </p>

          <p className="text-[#71717A] text-sm lg:text-base leading-relaxed">
            Experienced in developing real-world applications involving dynamic
            dashboards, data visualization, API integrations, and complex form
            workflows. Proficient in using modern UI libraries and CSS
            frameworks such as Tailwind CSS, Material UI, and Bootstrap to
            create intuitive user experiences.
          </p>

          <p className="text-[#71717A] text-sm lg:text-base leading-relaxed">
            Passionate about writing clean, reusable, and maintainable code
            while solving practical business problems. Currently strengthening
            my backend development skills with Node.js and learning NestJS to
            grow into a well-rounded Full-Stack Developer.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
