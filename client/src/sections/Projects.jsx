import { motion } from "framer-motion";
import { ExternalLink, Code2, Clock3 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    title: "Clothify - E-commerce Platform",
    description:
      "A full-stack clothing e-commerce application with product management, authentication, shopping cart functionality and a responsive user interface.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
    github: "https://github.com/Varshil2611/EcommerceWebsite",
    live: "https://ecommerce-website-six-azure.vercel.app/",
    status: "live",
    featured: false,
  },

  {
    title: "Placement Test Platform",
    description:
      "A full-stack placement assessment platform designed for conducting institute-specific online tests with timed MCQs, coding questions and automated submission.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
    github: "https://github.com/Varshil2611/placement-test-system",
    status: "development",
    statusMessage:
      "The placement test platform is currently under active development. The project is being prepared for deployment with additional features and improvements.",
    featured: true,
  },

  {
    title: "Job Portal",
    description:
      "A web application that connects job seekers and recruiters with functionality for job listings, applications and user management.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/Varshil2611/job-portal",
    status: "development",
    statusMessage:
      "The project is currently being prepared for deployment. The live demo will be available soon.",
    featured: false,
  },
];

function Projects() {
  const navigate = useNavigate();

  const handleComingSoon = (project) => {
    navigate("/project-status", {
      state: {
        project,
      },
    });
  };

  return (
    <section id="projects" className="px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        {/* ================= SECTION HEADING ================= */}

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
          className="mb-10 text-center sm:mb-14"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Things I've Built
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:mt-5 sm:text-base">
            A selection of projects where I applied my development, backend and
            database skills to build practical applications.
          </p>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-blue-500 sm:mt-5" />
        </motion.div>

        {/* ================= PROJECT GRID ================= */}

        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              /* ================= ENTRANCE ANIMATION ================= */

              initial={{
                opacity: 0,
                y: 60,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              /* ================= HOVER ANIMATION ================= */

              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] transition-colors duration-300 hover:border-blue-500/40 hover:bg-blue-500/[0.04]"
            >
              {/* ================= PROJECT HEADER ================= */}

              <div className="relative flex h-36 items-center justify-center overflow-hidden bg-slate-900 sm:h-40">
                {/* Background decoration */}

                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10" />

                {/* Project Icon */}

                <motion.div
                  whileHover={{
                    scale: 1.15,
                    rotate: 5,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-blue-400 sm:h-16 sm:w-16"
                >
                  <Code2 size={27} className="sm:hidden" />
                  <Code2 size={30} className="hidden sm:block" />
                </motion.div>

                {/* ================= FEATURED BADGE ================= */}

                {project.featured && (
                  <span className="absolute right-3 top-3 rounded-full border border-blue-400/20 bg-blue-500/10 px-2.5 py-1 text-[10px] font-medium text-blue-400 sm:right-4 sm:top-4 sm:px-3 sm:text-xs">
                    Featured
                  </span>
                )}

                {/* ================= LIVE BADGE ================= */}

                {project.status === "live" && (
                  <span className="absolute left-3 top-3 rounded-full border border-green-400/20 bg-green-400/10 px-2.5 py-1 text-[10px] font-medium text-green-400 sm:left-4 sm:top-4 sm:px-3 sm:text-xs">
                    Live
                  </span>
                )}

                {/* ================= DEVELOPMENT BADGE ================= */}

                {project.status === "development" && (
                  <span className="absolute left-3 top-3 flex items-center gap-1 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-2.5 py-1 text-[10px] font-medium text-yellow-400 sm:left-4 sm:top-4 sm:gap-1.5 sm:px-3 sm:text-xs">
                    <Clock3 size={11} className="sm:hidden" />
                    <Clock3 size={12} className="hidden sm:block" />
                    In Development
                  </span>
                )}
              </div>

              {/* ================= PROJECT CONTENT ================= */}

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                {/* Title */}

                <h3 className="text-lg font-semibold leading-7 text-white transition-colors duration-300 group-hover:text-blue-400 sm:text-xl">
                  {project.title}
                </h3>

                {/* Description */}

                <p className="mt-3 text-sm leading-6 text-slate-400 sm:mt-4 sm:leading-7">
                  {project.description}
                </p>

                {/* ================= TECHNOLOGIES ================= */}

                <div className="mt-4 flex flex-wrap gap-1.5 sm:mt-5 sm:gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-white/10 bg-slate-900/70 px-2 py-1.5 text-[11px] text-slate-300 transition-colors duration-200 hover:border-blue-500/30 hover:text-blue-400 sm:px-2.5 sm:text-xs"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* ================= LINKS ================= */}

                <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 pt-6 sm:pt-7">
                  {/* ================= GITHUB ================= */}

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-medium text-slate-400 transition-colors hover:text-white sm:text-sm"
                  >
                    <FaGithub size={16} className="sm:hidden" />
                    <FaGithub size={17} className="hidden sm:block" />
                    GitHub
                  </a>

                  {/* ================= LIVE PROJECT ================= */}

                  {project.status === "live" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs font-medium text-blue-400 transition-colors hover:text-blue-300 sm:text-sm"
                    >
                      <ExternalLink size={16} className="sm:hidden" />
                      <ExternalLink size={17} className="hidden sm:block" />
                      Live Demo
                    </a>
                  )}

                  {/* ================= DEVELOPMENT PROJECT ================= */}

                  {project.status === "development" && (
                    <button
                      type="button"
                      onClick={() => handleComingSoon(project)}
                      className="flex items-center gap-2 text-xs font-medium text-yellow-400 transition-colors hover:text-yellow-300 sm:text-sm"
                    >
                      <Clock3 size={16} className="sm:hidden" />
                      <Clock3 size={17} className="hidden sm:block" />
                      Coming Soon
                    </button>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
