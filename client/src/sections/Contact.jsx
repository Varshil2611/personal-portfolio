import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMapPin,
  FaPaperPlane,
} from "react-icons/fa";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // ================= HANDLE INPUT =================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ================= SUBMIT FORM =================

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus({
      type: "",
      message: "",
    });

    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong.");
      }

      setStatus({
        type: "success",
        message: "Thanks! Your message has been sent successfully.",
      });

      // Clear form

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error.message || "Unable to send your message. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        {/* ================= HEADING ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mb-12 text-center sm:mb-14"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Let's Connect
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            I'm always open to discussing software development opportunities,
            projects and interesting ideas.
          </p>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-blue-500" />
        </motion.div>

        {/* ================= CONTENT ================= */}

        <div className="grid gap-8 md:grid-cols-2">
          {/* ================= LEFT ================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            <h3 className="text-2xl font-semibold text-white">Get in Touch</h3>

            <p className="mt-5 max-w-lg text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
              Whether you have a job opportunity, project idea or simply want to
              connect, feel free to reach out.
            </p>

            {/* Contact Information */}

            <div className="mt-8 space-y-5">
              {/* Email */}

              <a
                href="mailto:varshilshah25@gmail.com"
                className="group flex items-center gap-4"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 transition-all duration-300 group-hover:scale-110">
                  <FaEnvelope size={20} />
                </div>

                <div className="min-w-0">
                  <p className="text-sm text-slate-500">Email</p>

                  <p className="mt-1 break-all text-sm text-slate-300 transition-colors group-hover:text-blue-400 sm:text-base">
                    varshilshah25@gmail.com
                  </p>
                </div>
              </a>

              {/* Location */}

              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                  <FaMapPin size={20} />
                </div>

                <div>
                  <p className="text-sm text-slate-500">Location</p>

                  <p className="mt-1 text-sm text-slate-300 sm:text-base">
                    Gujarat, India
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}

            <div className="mt-8 flex items-center gap-3">
              <a
                href="https://github.com/Varshil2611/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:text-white"
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/varshil-shah-b2504b30a"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:text-white"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:text-white"
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </a>
            </div>
          </motion.div>

          {/* ================= FORM ================= */}

          <motion.form
            onSubmit={handleSubmit}
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-8"
          >
            {/* Name */}

            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                maxLength={100}
                className="w-full rounded-lg border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-slate-600 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30"
              />
            </div>

            {/* Email */}

            <div className="mt-5">
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
                maxLength={150}
                className="w-full rounded-lg border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-slate-600 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30"
              />
            </div>

            {/* Message */}

            <div className="mt-5">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                maxLength={2000}
                required
                placeholder="Tell me about your project or opportunity..."
                className="w-full resize-none rounded-lg border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-slate-600 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30"
              />
            </div>

            {/* Status */}

            {status.message && (
              <div
                className={`mt-4 rounded-lg border px-4 py-3 text-sm ${
                  status.type === "success"
                    ? "border-green-500/20 bg-green-500/10 text-green-400"
                    : "border-red-500/20 bg-red-500/10 text-red-400"
                }`}
              >
                {status.message}
              </div>
            )}

            {/* Submit */}

            <button
              type="submit"
              disabled={loading}
              className="group mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/20 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}

              {!loading && (
                <FaPaperPlane
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
