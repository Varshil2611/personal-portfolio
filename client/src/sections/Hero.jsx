import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { useEffect, useState } from "react";

const roles = [
  "Software Developer",
  "MERN Stack Developer",
  "Python Developer",
  "AI / ML Enthusiast",
  "Data & Analytics Enthusiast",
];

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-4 pb-12 pt-28 sm:px-6 sm:pt-24 md:pb-16"
    >
      {/* ================= BACKGROUND GLOW ================= */}

      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-3xl sm:h-80 sm:w-80 md:h-96 md:w-96" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-16">
        {/* ================= LEFT CONTENT ================= */}

        <motion.div
          initial={{
            opacity: 0,
            x: -40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="w-full"
        >
          {/* Greeting */}

          <p className="mb-3 text-base font-medium text-blue-400 sm:mb-4 sm:text-lg">
            Hi, I'm
          </p>

          {/* Name */}

          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Varshil Shah
          </h1>

          {/* ================= ANIMATED ROLE ================= */}

          <div className="relative mt-4 h-10 overflow-hidden sm:mt-5 sm:h-12 md:h-14">
            <AnimatePresence mode="wait">
              <motion.h2
                key={roles[roleIndex]}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -25,
                }}
                transition={{
                  duration: 0.4,
                }}
                className="absolute max-w-full text-xl font-semibold leading-tight text-slate-300 sm:text-2xl md:text-3xl"
              >
                {roles[roleIndex]}
              </motion.h2>
            </AnimatePresence>
          </div>

          {/* ================= DESCRIPTION ================= */}

          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:mt-5 sm:text-base sm:leading-8 md:text-lg">
            I build modern web applications and continuously explore Python,
            Artificial Intelligence, Machine Learning and data-driven
            technologies to solve real-world problems.
          </p>

          {/* ================= CURRENT FOCUS ================= */}

          <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
            <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1.5 text-xs font-medium text-blue-400">
              MERN
            </span>

            <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1.5 text-xs font-medium text-blue-400">
              Python
            </span>

            <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1.5 text-xs font-medium text-blue-400">
              AI / ML
            </span>

            <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1.5 text-xs font-medium text-blue-400">
              Data
            </span>
          </div>

          {/* ================= BUTTONS ================= */}

          <div className="mt-7 flex flex-col gap-3 min-[400px]:flex-row sm:mt-8 sm:gap-4">
            {/* Projects */}

            <a
              href="#projects"
              className="group flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/20 sm:px-6 sm:text-base"
            >
              View Projects
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            {/* Resume */}

            <a
              href="https://drive.google.com/file/d/1CHB1TTeUiGYixHYg1xajxIL-yt75Bq2_/view?usp=sharing"
              target="_blank"
              download
              className="flex items-center justify-center gap-2 rounded-lg border border-white/15 px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-white/30 hover:bg-white/10 sm:px-6 sm:text-base"
            >
              View/Download Resume
              <Download size={18} />
            </a>
          </div>

          {/* ================= SOCIAL LINKS ================= */}

          <div className="mt-7 flex items-center gap-5 sm:mt-8">
            {/* GitHub */}

            <a
              href="https://github.com/Varshil2611/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:text-white"
            >
              <FaGithub size={22} />
            </a>

            {/* LinkedIn */}

            <a
              href="https://www.linkedin.com/in/varshil-shah-b2504b30a"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:text-white"
            >
              <FaLinkedinIn size={22} />
            </a>

            {/* Email */}

            <a
              href="mailto:varshilshah25@gmail.com"
              aria-label="Email"
              className="text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:text-white"
            >
              <FaEnvelope size={22} />
            </a>

            {/* Instagram */}

            <a
              href="#"
              aria-label="Instagram"
              className="text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:text-white"
            >
              <FaInstagram size={22} />
            </a>
          </div>
        </motion.div>

        {/* ================= RIGHT CONTENT ================= */}

        <motion.div
          initial={{
            opacity: 0,
            x: 40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="flex justify-center md:flex"
        >
          <div className="relative flex h-64 w-64 items-center justify-center sm:h-72 sm:w-72 md:h-80 md:w-80">
            {/* Outer Glow */}

            <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-2xl" />

            {/* Rotating Outer Circle */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-56 w-56 rounded-full border border-dashed border-blue-500/20 sm:h-64 sm:w-64 md:h-72 md:w-72"
            />

            {/* Main Circle */}

            <div className="relative flex h-56 w-56 items-center justify-center rounded-full border border-blue-500/30 bg-slate-900 shadow-2xl shadow-blue-500/10 sm:h-64 sm:w-64 md:h-72 md:w-72">
              {/* Inner Circle */}

              <motion.div
                animate={{
                  scale: [1, 1.04, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex h-44 w-44 items-center justify-center rounded-full border border-white/10 bg-slate-950 sm:h-52 sm:w-52 md:h-60 md:w-60"
              >
                <div className="text-center">
                  <span className="text-5xl font-bold tracking-wider text-blue-500 sm:text-6xl md:text-7xl">
                    VS
                  </span>

                  <p className="mt-1 text-[9px] uppercase tracking-[0.12em] text-slate-500 sm:mt-2 sm:text-[10px]">
                    • Learn • Build • Grow
                  </p>
                </div>
              </motion.div>
            </div>

            {/* ================= DECORATIVE DOTS ================= */}

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-0 top-8 h-3 w-3 rounded-full bg-blue-500 sm:right-1 sm:top-10"
            />

            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-8 left-0 h-2 w-2 rounded-full bg-blue-400 sm:bottom-10"
            />

            <motion.div
              animate={{
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="absolute bottom-4 right-6 h-2 w-2 rounded-full bg-slate-500 sm:bottom-5 sm:right-8"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
