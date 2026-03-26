import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { toast } from "react-hot-toast";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const [loading, setLoading] = useState(false);
  const [lastSentTime, setLastSentTime] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 🚫 simple spam protection (5 sec cooldown)
    const now = Date.now();
    if (now - lastSentTime < 5000) {
      toast.error("Wait a few seconds before sending again ⏳");
      return;
    }

    setLoading(true);

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      website: e.target.website.value,
      message: e.target.message.value,
    };

    try {
      await emailjs.send(
        "service_zouqyid",        
        "template_2u5t76r",      
        formData,
        "CJEiMNDg7d8NYxJkV"       
      );

      toast.success("Message sent 🚀");
      e.target.reset();
      setLastSentTime(now);
    } catch (err) {
      console.error(err);
      toast.error("Failed to send ❌");
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
          </form>
        </motion.div>

        {/* RIGHT SIDE */}
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
              <span className="group-hover:underline">
                +91 8320054936
              </span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}