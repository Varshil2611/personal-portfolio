import { motion } from "framer-motion";
import { Code2, Database, Server, Wrench, Layers, Brain } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["Java", "JavaScript", "Python", "SQL"],
  },
  {
    title: "Frontend",
    icon: Layers,
    skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MongoDB", "MySQL", "Mongoose"],
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "Postman"],
  },
  {
    title: "Core Computer Science",
    icon: Brain,
    skills: [
      "OOP",
      "Data Structures",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="px-4 py-20 sm:px-6 sm:py-24">
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
            Technologies I Work With
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:mt-5 sm:text-base">
            A collection of technologies and computer science concepts that I
            use while building projects and improving my development skills.
          </p>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-blue-500 sm:mt-5" />
        </motion.div>

        {/* ================= SKILLS CARDS ================= */}

        <div className="grid grid-cols-1 gap-4 min-[500px]:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
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
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group rounded-xl border border-white/10 bg-white/[0.03] p-5 transition-colors duration-300 hover:border-blue-500/40 hover:bg-blue-500/[0.04] sm:p-6"
              >
                {/* ================= CATEGORY HEADER ================= */}

                <div className="flex items-center gap-3 sm:gap-4">
                  {/* Icon */}

                  <motion.div
                    initial={{
                      scale: 0.7,
                      rotate: -10,
                    }}
                    whileInView={{
                      scale: 1,
                      rotate: 0,
                    }}
                    whileHover={{
                      scale: 1.15,
                      rotate: 5,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.15 + 0.2,
                    }}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 sm:h-12 sm:w-12"
                  >
                    <Icon size={21} className="sm:hidden" />
                    <Icon size={24} className="hidden sm:block" />
                  </motion.div>

                  {/* Title */}

                  <h3 className="text-base font-semibold leading-6 text-white transition-colors duration-300 group-hover:text-blue-400 sm:text-lg">
                    {category.title}
                  </h3>
                </div>

                {/* ================= SKILL TAGS ================= */}

                <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-white/10 bg-slate-900/70 px-2.5 py-1.5 text-xs text-slate-300 transition-all duration-200 hover:border-blue-500/40 hover:text-blue-400 sm:px-3 sm:py-2 sm:text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
