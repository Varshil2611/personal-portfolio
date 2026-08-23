import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-white/10 px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-6xl">
        {/* ================= MAIN FOOTER ================= */}

        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* ================= LEFT ================= */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center sm:text-left"
          >
            <p className="text-sm text-slate-400">
              © {currentYear}{" "}
              <span className="font-medium text-white">Varshil Shah</span>
            </p>

            <p className="mt-1 text-xs text-slate-600">
              Built with <span className="text-red-400">♥</span> and a lot of
              curiosity.
            </p>
          </motion.div>

          {/* ================= RIGHT ================= */}

          <div className="flex items-center gap-3">
            {/* GitHub */}

            <a
              href="https://github.com/Varshil2611/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-slate-500 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-white"
            >
              <FaGithub size={16} />
            </a>

            {/* LinkedIn */}

            <a
              href="https://www.linkedin.com/in/varshil-shah-b2504b30a"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-slate-500 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-white"
            >
              <FaLinkedinIn size={16} />
            </a>

            {/* Email */}

            <a
              href="mailto:varshilshah25@gmail.com"
              aria-label="Email"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-slate-500 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-white"
            >
              <FaEnvelope size={16} />
            </a>

            {/* Back To Top */}

            <motion.button
              whileHover={{
                y: -3,
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              onClick={scrollToTop}
              aria-label="Back to top"
              className="ml-1 flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-slate-500 transition-all duration-300 hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-blue-400"
            >
              <ArrowUp size={17} />
            </motion.button>
          </div>
        </div>

        {/* ================= BOTTOM MESSAGE ================= */}

        <div className="mt-7 flex items-center justify-center gap-2 text-center text-xs text-slate-700">
          <span className="hidden h-px w-10 bg-white/10 xs:block" />

          <span>Learning • Building • Growing</span>

          <span className="hidden h-px w-10 bg-white/10 xs:block" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
