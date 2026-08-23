import { useState } from "react";
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6">

        {/* ================= LOGO ================= */}

        <a
          href="#home"
          onClick={closeMenu}
          className="text-xl font-bold"
        >
          <span className="text-blue-500">V</span>
        </a>


        {/* ================= DESKTOP NAVIGATION ================= */}

        <div className="hidden items-center gap-7 md:flex">

          <a
            href="#about"
            className="text-sm text-slate-300 transition-colors duration-300 hover:text-white"
          >
            About
          </a>

          <a
            href="#skills"
            className="text-sm text-slate-300 transition-colors duration-300 hover:text-white"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="text-sm text-slate-300 transition-colors duration-300 hover:text-white"
          >
            Projects
          </a>

          <a
            href="#education"
            className="text-sm text-slate-300 transition-colors duration-300 hover:text-white"
          >
            Education
          </a>

          <a
            href="#contact"
            className="text-sm text-slate-300 transition-colors duration-300 hover:text-white"
          >
            Contact
          </a>

        </div>


        {/* ================= DESKTOP SOCIAL LINKS ================= */}

        <div className="hidden items-center gap-4 sm:flex">

          <a
            href="https://github.com/Varshil2611/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-slate-400 transition-all duration-300 hover:-translate-y-0.5 hover:text-white"
          >
            <FaGithub size={19} />
          </a>

          <a
            href="https://www.linkedin.com/in/varshil-shah-b2504b30a"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-slate-400 transition-all duration-300 hover:-translate-y-0.5 hover:text-blue-400"
          >
            <FaLinkedinIn size={19} />
          </a>

          <a
            href="mailto:varshilshah25@gmail.com"
            aria-label="Email"
            className="text-slate-400 transition-all duration-300 hover:-translate-y-0.5 hover:text-blue-400"
          >
            <FaEnvelope size={19} />
          </a>

          <a
            href="#"
            aria-label="Instagram"
            className="text-slate-400 transition-all duration-300 hover:-translate-y-0.5 hover:text-pink-400"
          >
            <FaInstagram size={19} />
          </a>

        </div>


        {/* ================= MOBILE MENU BUTTON ================= */}

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-slate-300 transition-all duration-300 hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-white md:hidden"
        >
          {isMenuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

      </div>


      {/* ================= MOBILE MENU ================= */}

      <div
        className={`overflow-hidden border-t border-white/10 bg-slate-950/95 backdrop-blur-md transition-all duration-300 md:hidden ${
          isMenuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 border-t-transparent opacity-0"
        }`}
      >
        <div className="mx-auto max-w-6xl px-5 py-5 sm:px-6">

          {/* Navigation Links */}

          <div className="flex flex-col">

            <a
              href="#about"
              onClick={closeMenu}
              className="border-b border-white/5 py-3.5 text-sm text-slate-300 transition-colors hover:text-blue-400"
            >
              About
            </a>

            <a
              href="#skills"
              onClick={closeMenu}
              className="border-b border-white/5 py-3.5 text-sm text-slate-300 transition-colors hover:text-blue-400"
            >
              Skills
            </a>

            <a
              href="#projects"
              onClick={closeMenu}
              className="border-b border-white/5 py-3.5 text-sm text-slate-300 transition-colors hover:text-blue-400"
            >
              Projects
            </a>

            <a
              href="#education"
              onClick={closeMenu}
              className="border-b border-white/5 py-3.5 text-sm text-slate-300 transition-colors hover:text-blue-400"
            >
              Education
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="py-3.5 text-sm text-slate-300 transition-colors hover:text-blue-400"
            >
              Contact
            </a>

          </div>


          {/* Mobile Social Links */}

          <div className="mt-5 flex items-center gap-3 border-t border-white/10 pt-5">

            <a
              href="https://github.com/Varshil2611/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-slate-400 transition-all duration-300 hover:border-blue-500/30 hover:text-white"
            >
              <FaGithub size={17} />
            </a>

            <a
              href="https://www.linkedin.com/in/varshil-shah-b2504b30a"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-slate-400 transition-all duration-300 hover:border-blue-500/30 hover:text-blue-400"
            >
              <FaLinkedinIn size={17} />
            </a>

            <a
              href="mailto:varshilshah25@gmail.com"
              aria-label="Email"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-slate-400 transition-all duration-300 hover:border-blue-500/30 hover:text-blue-400"
            >
              <FaEnvelope size={17} />
            </a>

            <a
              href="#"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-slate-400 transition-all duration-300 hover:border-pink-500/30 hover:text-pink-400"
            >
              <FaInstagram size={17} />
            </a>

          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;