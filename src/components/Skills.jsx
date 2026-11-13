import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaJs, FaReact, FaNodeJs, FaBootstrap, FaHtml5 } from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiRedux,
  SiReactquery,
  SiNestjs,
  SiMui,
  SiPostman,
  SiOpenai,
  SiChartdotjs,
  SiExpress,
} from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { MdSecurity, MdDevices } from "react-icons/md";
import { RiTailwindCssFill } from "react-icons/ri";

export default function Skills() {
  const [skills] = useState([
    // Frontend Development
    { id: 1, name: "JavaScript", category: "Core", icon: <FaJs size={50} /> },
    {
      id: 2,
      name: "TypeScript",
      category: "Core",
      icon: <SiTypescript size={50} />,
    },
    {
      id: 3,
      name: "React.js",
      category: "Frontend",
      icon: <FaReact size={50} />,
    },
    {
      id: 4,
      name: "Next.js",
      category: "Frontend",
      icon: <SiNextdotjs size={50} />,
    },

    // UI & Styling
    {
      id: 5,
      name: "Tailwind CSS",
      category: "Styling",
      icon: <RiTailwindCssFill size={50} />,
    },
    {
      id: 6,
      name: "Material UI",
      category: "UI Library",
      icon: <SiMui size={50} />,
    },
    {
      id: 7,
      name: "Bootstrap",
      category: "Styling",
      icon: <FaBootstrap size={50} />,
    },
    {
      id: 8,
      name: "HTML5 / CSS3",
      category: "Frontend",
      icon: <FaHtml5 size={50} />,
    },

    // State Management
    {
      id: 9,
      name: "Redux Toolkit",
      category: "State",
      icon: <SiRedux size={50} />,
    },
    {
      id: 10,
      name: "React Query",
      category: "Data Fetching",
      icon: <SiReactquery size={50} />,
    },

    // Backend Development
    {
      id: 11,
      name: "Node.js",
      category: "Backend Basics",
      icon: <FaNodeJs size={50} />,
    },
    {
      id: 12,
      name: "NestJS",
      category: "Learning",
      icon: <SiNestjs size={50} />,
    },

    // Tools & Integrations
    {
      id: 13,
      name: "Git / GitHub",
      category: "Tools",
      icon: <BsGithub size={50} />,
    },
    {
      id: 14,
      name: "REST API",
      category: "Integration",
      icon: <SiPostman size={50} />,
    },
    {
      id: 15,
      name: "JWT Authentication",
      category: "Security",
      icon: <MdSecurity size={50} />,
    },
    {
      id: 16,
      name: "AI Integration",
      category: "AI",
      icon: <SiOpenai size={50} />,
    },
    {
      id: 17,
      name: "Data Visualization",
      category: "Charts",
      icon: <SiChartdotjs size={50} />,
    },
    {
      id: 18,
      name: "Responsive Design",
      category: "UI/UX",
      icon: <MdDevices size={50} />,
    },
    {
      id: 19,
      name: "Express.js",
      category: "Backend",
      icon: <SiExpress size={50} />,
    },
    {
      id: 20,
      name: "Postman",
      category: "API Testing",
      icon: <SiPostman size={50} />,
    },
  ]);

  const [experiences] = useState([
    {
      id: 1,
      company: "Nstack Softech",
      role: "Software Developer",
      period: "Jan 2025 - Present",
      points: [
        "Developed scalable and high-performance web applications using React.js, TypeScript, and modern frontend technologies",
        "Worked with React.js and Next.js based on project requirements to build responsive and SEO-friendly applications",
        "Built complex dashboards with dynamic charts, data visualization, filters, and API integrations",
        "Implemented reusable UI components and scalable frontend architectures using Tailwind CSS, Material UI, and other styling libraries",
        "Developed complex form workflows with Formik, React Hook Form, and schema-based validation",
        "Integrated third-party services including Razorpay, PayPal, Google Authentication, and Apple Sign-In",
        "Implemented efficient state management using Redux Toolkit, Zustand, and React Query",
        "Optimized application performance through lazy loading, code splitting, and efficient rendering techniques",
        "Collaborated directly with clients to understand business requirements and deliver practical software solutions",
      ],
      logo: "/assets/nstack.png",
    },
    {
      id: 2,
      company: "Nstack Softech",
      role: "Frontend Developer Intern",
      period: "Jul 2024 - Dec 2024",
      points: [
        "Developed responsive and user-friendly interfaces using React.js, JavaScript, HTML, and CSS",
        "Created reusable components to maintain consistency and improve development efficiency",
        "Integrated REST APIs and implemented dynamic data rendering",
        "Worked with form validation, state management, and API error handling",
        "Improved UI responsiveness, debugging, and cross-browser compatibility",
        "Collaborated with senior developers to deliver production-ready features",
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
                duration: 0.5,
                ease: "easeOut",
                delay: (skill.id - 1) * 0.05,
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
