import React, { useState } from "react";
import { TbExternalLink } from "react-icons/tb";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "AgriGuru Online – Global B2B Agri-Commodities Platform",
    duration: "Apr 2025 – Nov 2026",
    description:
      "AgriGuru Online is a global B2B web and mobile platform connecting agri-commodity exporters, importers, buyers, and sellers. It provides real-time commodity prices, ocean freight rates, product inquiries, offers, and smart trade documentation. The ecosystem includes a public-facing website and two dedicated admin panels for managing marketing activities and core business operations.",
    features: [
      "Developed responsive frontend interfaces using React.js, Next.js, and TypeScript based on project requirements.",
      "Built the public-facing website to showcase agricultural commodities, services, and platform features.",
      "Developed a Marketing Admin Panel to manage website content, marketing modules, banners, and promotional sections.",
      "Developed a Business Management Admin Panel for managing products, inquiries, offers, and smart trade documentation.",
      "Implemented dynamic dashboards, data tables, filters, and reusable components for efficient administration.",
      "Integrated Google, Apple, and JWT authentication.",
      "Integrated Razorpay and PayPal payment gateways for subscription management.",
      "Implemented complex forms, API integrations, and interactive workflows to streamline business operations.",
      "Focused on responsive design, maintainable component architecture, and application performance.",
    ],
    image: "/assets/agriguru-logo.png",
    link: "https://agriguruonline.com/",
  },
  {
    id: 2,
    title: "MyMemo Admin Panel – Web‑based Admin Dashboard",
    duration: "Jan 2025 – Mar 2025",
    description:
      "A comprehensive admin dashboard powering the MyMemo platform, enabling teams to manage users, content, analytics, and configurations across web & mobile applications with real-time insights and role-based access.",
    features: [
      "Complete React.js admin UI with responsive dashboards, tables, forms, and modals",
      "Real-time user & content management with search, pagination, filters, and bulk actions",
      "Role-based UI rendering (admin, moderator, support) with conditional access controls",
      "Interactive workflows for user lifecycle (onboard, monitor, suspend, analytics)",
      "Performance-optimized components with React hooks, memoization, and API caching",
      "Secure form handling, validation, and file upload interfaces for content management",
    ],
    image: "/assets/diamond-sales-logo.png",
    link: "https://www.mymemo.in/",
  },
];

export default function Projects() {
  const [openId, setOpenId] = useState(null);

  return (
    <div className="bg-black px-5 lg:px-28 py-10 lg:py-20" id="projects">
      <h2 className="text-3xl lg:text-5xl text-center text-white mb-12">
        My <span className="font-extrabold">Projects</span>
      </h2>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => {
          const isOpen = openId === project.id;

          return (
            <motion.div
              key={project.id}
              whileHover={{ y: -6 }}
              className="bg-[#111] rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              {/* IMAGE */}
              <div className="h-[260px] flex items-center justify-center bg-black">
                <img
                  src={project.image}
                  alt={project.title}
                  className="max-h-full max-w-full object-contain transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 text-white space-y-4">
                <div>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-xs text-gray-400 mt-1">
                    {project.duration}
                  </p>
                </div>

                <p className="text-sm text-gray-400 leading-relaxed">
                  {project.description}
                </p>

                {/* FEATURES */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="list-disc pl-5 text-gray-400 space-y-1 text-sm overflow-hidden"
                    >
                      {project.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>

                {/* ACTIONS */}
                <div className="border-t border-white/10 pt-4 flex items-center justify-between">
                  {/* SHOW MORE */}
                  <button
                    onClick={() => setOpenId(isOpen ? null : project.id)}
                    className="text-xs text-gray-400 hover:text-white transition"
                  >
                    {isOpen ? "Show less ↑" : "Show more ↓"}
                  </button>

                  {/* VISIT BUTTON */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white text-black px-4 py-1.5 rounded-lg text-sm font-medium hover:bg-gray-200 transition"
                  >
                    Visit <TbExternalLink size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
