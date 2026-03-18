import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaJs, FaReact, FaPaypal, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import {
  SiTypescript,
  SiRedux,
  SiChartdotjs,
  SiRazorpay,
  SiOpenai,
} from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import {
  MdSecurity,
  MdDevices,
  MdViewModule,
  MdDesignServices,
} from "react-icons/md";
import { RiTailwindCssFill } from "react-icons/ri";

export default function Skills() {
  const [skills] = useState([
    // Core Frontend
    { id: 1, name: "JavaScript", category: "Core", icon: <FaJs size={50} /> },
    {
      id: 2,
      name: "TypeScript",
      category: "Core",
      icon: <SiTypescript size={50} />,
    },
    { id: 3, name: "React.js", category: "Core", icon: <FaReact size={50} /> },
    {
      id: 4,
      name: "Tailwind CSS",
      category: "Core",
      icon: <RiTailwindCssFill size={50} />,
    },
    {
      id: 5,
      name: "Redux Toolkit",
      category: "State",
      icon: <SiRedux size={50} />,
    },
    // Tools
    {
      id: 6,
      name: "Git / GitHub",
      category: "Tools",
      icon: <BsGithub size={50} />,
    },
    {
      id: 7,
      name: "Razorpay",
      category: "Payment",
      icon: <SiRazorpay size={50} />,
    },
    {
      id: 8,
      name: "PayPal",
      category: "Payment",
      icon: <FaPaypal size={50} />,
    },
    {
      id: 9,
      name: "Google Auth",
      category: "Auth",
      icon: <FcGoogle size={50} />,
    },
    {
      id: 10,
      name: "Apple Auth",
      category: "Auth",
      icon: <FaApple size={50} />,
    },
    {
      id: 11,
      name: "JWT Auth Flow",
      category: "Auth",
      icon: <MdSecurity size={50} />,
    },
    {
      id: 12,
      name: "AI Integration (Gemini / ChatGPT)",
      category: "AI",
      icon: <SiOpenai size={50} />,
    },
    {
      id: 13,
      name: "Data Visualization",
      category: "Charts",
      icon: <SiChartdotjs size={50} />,
    },
    {
      id: 14,
      name: "Responsive Design",
      category: "UI/UX",
      icon: <MdDevices size={50} />,
    },
    {
      id: 15,
      name: "Reusable Components",
      category: "Architecture",
      icon: <MdViewModule size={50} />,
    },
    {
      id: 16,
      name: "UI/UX Thinking",
      category: "Design",
      icon: <MdDesignServices size={50} />,
    },
  ]);

  const [experiences] = useState([
    {
      id: 1,
      company: "Nstack Softech",
      role: "Frontend Engineer",
      period: "Jan 2025 - Present",
      points: [
        "Developed scalable and high-performance web applications using React and TypeScript",
        "Built dynamic dashboards with charts, filters, and real-time data handling",
        "Implemented complex form workflows with validation and optimized user experience",
        "Integrated payment gateways including Razorpay and PayPal for secure transactions",
        "Developed authentication systems using JWT, Google, and Apple login",
        "Collaborated directly with clients, including on-site work, to deliver real-world solutions",
        "Designed reusable component architecture to improve development efficiency and maintainability",
        "Optimized application performance through code splitting, lazy loading, and state management improvements",
      ],
      logo: "/assets/nstack.png",
    },
    {
      id: 2,
      company: "Nstack Softech",
      role: "Frontend Developer Intern",
      period: "Jul 2024 - Dec 2024",
      points: [
        "Built responsive and user-friendly interfaces using React and Tailwind CSS",
        "Developed reusable UI components to ensure consistency across the application",
        "Integrated REST APIs and handled dynamic data rendering",
        "Implemented form validation and managed complex form states",
        "Debugged UI issues and improved application performance",
        "Collaborated with the development team to deliver production-ready features",
      ],
      logo: "/assets/nstack.png",
    },
  ]);

  return (
    <div className="mt-3 lg:mt-16" id="skills">
      <div className="px-5 lg:px-28">
        <motion.h2
          className="text-2xl lg:text-4xl text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">Skills</span>
        </motion.h2>

        {/* Skill Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 text-lg font-bold mt-7 lg:mt-16 w-full place-items-center gap-y-6 lg:gap-y-12">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              className="bg-white border-2 hover:bg-black hover:text-white transition-all cursor-pointer border-black rounded p-3 h-36 w-36 lg:h-44 lg:w-44 flex flex-col items-center justify-center gap-2"
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: skill.id * 0.1,
              }}
              viewport={{ once: true }}
            >
              {skill.icon}

              <div className="text-center">
                <p>{skill.name}</p>
                <p className="text-xs text-gray-400">{skill.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div className="bg-black w-full my-8 py-8 lg:my-16 lg:py-16">
        <motion.h2
          className="text-2xl lg:text-4xl text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">Experience</span>
        </motion.h2>

        {/* Experience Cards */}
        <div className="px-5 lg:px-28 my-8 lg:mt-16 space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="bg-black p-5 border border-[#D4D4D8] rounded-md hover:bg-[#27272A] transition-all cursor-pointer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between flex-col items-start lg:flex-row lg:items-center">
                <div className="flex items-center gap-5">
                  <img className="w-24" src={exp.logo} alt="" />
                  <h2 className="font-semibold text-white text-lg lg:text-xl">
                    {exp.role} at {exp.company}
                  </h2>
                </div>
                <span className="text-[#D4D4D8] font-semibold text-sm mt-4 lg:mt-0 lg:text-base">
                  {exp.period}
                </span>
              </div>
              <ul className="text-[#D4D4D8] mt-6 text-sm lg:text-base font-light list-disc pl-5 space-y-2">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
