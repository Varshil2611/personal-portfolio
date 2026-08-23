import { motion } from "framer-motion";
import { ArrowLeft, Clock3 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

function ProjectStatus() {
  const location = useLocation();
  const navigate = useNavigate();

  const project = location.state?.project;

  // If someone directly visits the page without project information
  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 px-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white">Project Not Found</h1>

          <button
            onClick={() => navigate("/#projects")}
            className="mt-6 flex items-center gap-2 mx-auto rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-500"
          >
            <ArrowLeft size={18} />
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-6">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-3xl" />

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
          scale: 0.95,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.6,
        }}
        className="w-full max-w-2xl rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center shadow-2xl sm:p-12"
      >
        {/* Icon */}

        <motion.div
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400"
        >
          <Clock3 size={40} />
        </motion.div>

        {/* Status */}

        <div className="mt-7 inline-flex rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-1.5 text-sm font-medium text-yellow-400">
          Live Demo Coming Soon
        </div>

        {/* Project Title */}

        <h1 className="mt-6 text-3xl font-bold text-white sm:text-4xl">
          {project.title}
        </h1>

        {/* Description */}

        <p className="mx-auto mt-5 max-w-xl leading-8 text-slate-400">
          {project.statusMessage ||
            "This project is currently being prepared for deployment. The live demo will be available soon."}
        </p>

        {/* Technologies */}

        <div className="mt-7 flex flex-wrap justify-center gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-md border border-white/10 bg-slate-900/70 px-3 py-1.5 text-xs text-slate-300"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Buttons */}

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          {/* GitHub */}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-white/15 px-5 py-3 text-sm font-medium text-slate-300 transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:text-white"
            >
              <FaGithub size={18} />
              View Source
            </a>
          )}

          {/* Back */}

          <button
            onClick={() => navigate("/#projects")}
            className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-blue-500"
          >
            <ArrowLeft size={18} />
            Back to Projects
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default ProjectStatus;
