import React, { useState } from "react";
import { TbExternalLink } from "react-icons/tb";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "AgriGuru Online",
    duration: "Apr 2025 – Present",
    description:
      "A global agricultural commodity trading platform used across web, Android, and iOS with real-time trading, analytics, and subscription workflows.",
    features: [
      "Optimized large dataset rendering for smooth performance across 10+ years of data in chart",
      "Built complete inquiry and negotiation workflows including document management",
      "Implemented Google, Apple, and JWT authentication",
      "Integrated Razorpay & PayPal subscriptions",
      "Built scalable modules for product, freight & analytics",
      "Handled real-time workflows and API integrations",
      "Multilingual support (EN, AR, FR, CN)",
      "Used Redis caching & BullMQ queues",
    ],
    image: "/assets/agriguru-logo.png",
    link: "https://agriguruonline.com/",
  },
  {
    id: 2,
    title: "Diamond Sales Platform",
    duration: "Jan 2025 – Mar 2025",
    description:
      "A multi-role diamond sales and purchase platform supporting vendors, brokers, employees, and customers.",
    features: [
      "Built React-based sales & inventory workflows",
      "Real-time dashboards and stock tracking",
      "Role-based UI rendering",
      "Backend architecture + API development",
      "Performance optimization across workflows",
    ],
    image: "/assets/diamond-sales-logo.png",
    link: "#",
  },
];

export default function Projects() {
  const [openId, setOpenId] = useState(null);

  return (
    <div className="bg-black px-5 lg:px-28 py-10 lg:py-20">
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
                  <h3 className="text-xl font-bold">
                    {project.title}
                  </h3>
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
                    onClick={() =>
                      setOpenId(isOpen ? null : project.id)
                    }
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