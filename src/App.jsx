import React from "react";
import Home from "./pages/Home";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import CustomCursor from "./utils/CursorAnimation";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <div className="font-sora scroll-smooth overflow-x-hidden">
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={12}
        containerStyle={{
          top: 20,
          right: 20,
        }}
        toastOptions={{
          duration: 3000,
          style: {
            background: "rgba(17, 17, 17, 0.9)",
            color: "#fff",
            borderRadius: "16px",
            padding: "14px 18px",
            fontSize: "14px",
            backdropFilter: "blur(10px)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
            border: "1px solid rgba(255,255,255,0.08)",
          },
          success: {
            iconTheme: {
              primary: "#22c55e",
              secondary: "#fff",
            },
          },
          error: {
            iconTheme: {
              primary: "#ef4444",
              secondary: "#fff",
            },
          },
        }}
      />

      <CustomCursor />
      <Navbar />
      <Home />
      <Skills />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
