import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { BiLogoGmail } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { toast } from "react-hot-toast";

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
    icon: FaPhone,
    href: "tel:+918320054936",
    label: "Call",
  },
  {
    icon: BsGithub,
    href: "https://github.com/Parth-Gajjar-2693",
    label: "GitHub",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      website: e.target.website.value,
      message: e.target.message.value,
    };

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("success");
        toast.success("Message sent 🚀");
        e.target.reset();
      } else {
        setStatus("error");
        toast.error("Something went wrong ❌");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

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
        {/* FORM */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          className="lg:w-1/2 w-full"
        >
          <form
            onSubmit={handleSubmit}
            className="space-y-4 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-md backdrop-blur bg-white/60 dark:bg-white/5"
          >
            {/* INPUTS */}
            {["name", "email", "website"].map((field) => (
              <input
                key={field}
                name={field}
                type={field === "email" ? "email" : "text"}
                placeholder={
                  field === "name"
                    ? "Your name"
                    : field === "email"
                      ? "Email"
                      : "Your website (optional)"
                }
                required={field !== "website"}
                disabled={loading}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-2 focus:ring-black dark:focus:ring-white outline-none text-sm transition"
              />
            ))}

            <textarea
              name="message"
              placeholder="How can I help?"
              required
              disabled={loading}
              className="w-full px-4 py-3 h-32 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-2 focus:ring-black dark:focus:ring-white outline-none text-sm resize-none transition"
            />

            {/* BUTTON */}
            <motion.button
              whileHover={{ scale: loading ? 1 : 1.03 }}
              whileTap={{ scale: loading ? 1 : 0.97 }}
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition disabled:opacity-50"
            >
              {loading && (
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              )}
              {loading ? "Sending..." : "Send Message"}
            </motion.button>

            {/* SOCIAL */}
            <div className="flex justify-center gap-4 pt-3">
              {socialLinks.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -2 }}
                    className="p-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-black hover:text-white transition"
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                );
              })}
            </div>
          </form>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          className="lg:w-1/2 w-full space-y-6"
        >
          <div className="text-3xl lg:text-5xl font-extrabold leading-tight">
            Let’s build something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-500">
              great
            </span>
          </div>

          <p className="text-gray-600 dark:text-gray-400 text-sm lg:text-base">
            I build scalable systems and high-performance applications. If you
            have an idea, product, or problem — let’s connect.
          </p>

          <div className="space-y-4 text-sm lg:text-base font-medium">
            <motion.a
              whileHover={{ x: 5 }}
              href="mailto:parthgajjar127@gmail.com"
              className="flex items-center gap-3 group"
            >
              <IoMdMail />
              <span className="group-hover:underline">
                parthgajjar127@gmail.com
              </span>
            </motion.a>

            <motion.a
              whileHover={{ x: 5 }}
              href="tel:8320054936"
              className="flex items-center gap-3 group"
            >
              <FaPhone />
              <span className="group-hover:underline">+91 8320054936</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
