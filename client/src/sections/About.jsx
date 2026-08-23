import { motion } from "framer-motion";
import { Code2, Brain, Database, BarChart3 } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description:
      "Building modern web applications using React, Node.js, Express.js, MongoDB and REST APIs.",
  },
  {
    icon: Brain,
    title: "Python & AI/ML",
    description:
      "Expanding my skills in Python, Artificial Intelligence and Machine Learning through continuous learning and practical projects.",
  },
  {
    icon: Database,
    title: "Data & Databases",
    description:
      "Working with SQL and NoSQL databases while developing a strong foundation in data management and data processing.",
  },
  {
    icon: BarChart3,
    title: "Data & Analytics",
    description:
      "Exploring Data Science, Data Analytics and Big Data concepts to understand and extract meaningful insights from data.",
  },
];

function About() {
  return (
    <section id="about" className="px-4 py-20 sm:px-6 sm:py-24">
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
            Get to Know Me
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            A little about my development journey, interests and the areas I'm
            currently exploring.
          </p>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-blue-500" />
        </motion.div>

        {/* ================= MAIN CONTENT ================= */}

        <div className="grid gap-10 md:grid-cols-2 md:gap-12">
          {/* ================= ABOUT TEXT ================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
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
            <h3 className="text-xl font-semibold text-white sm:text-2xl">
              Who I Am
            </h3>

            <div className="mt-5 space-y-4 text-sm leading-7 text-slate-400 sm:mt-6 sm:space-y-5 sm:text-base sm:leading-8">
              <p>
                I'm a software developer focused on building modern web
                applications using the MERN stack. I enjoy working across both
                frontend and backend development and understanding how different
                parts of an application work together.
              </p>

              <p>
                Alongside full-stack development, I'm expanding my skills in
                Python, Data Science, Artificial Intelligence and Machine
                Learning. I'm particularly interested in how software
                engineering and data-driven technologies can be combined to
                solve real-world problems.
              </p>

              <p>
                I'm continuously improving my knowledge of Data Structures,
                Databases, Data Analytics, Big Data and AI/ML while building
                practical projects and preparing for software and technology
                opportunities.
              </p>
            </div>

            {/* ================= QUICK INFO ================= */}

            <div className="mt-7 grid grid-cols-1 gap-3 min-[400px]:grid-cols-2 sm:mt-8 sm:gap-4">
              <motion.div
                whileHover={{
                  y: -4,
                }}
                transition={{
                  duration: 0.2,
                }}
                className="rounded-lg border border-white/10 bg-white/[0.03] p-4 transition-colors duration-300 hover:border-blue-500/30 hover:bg-blue-500/[0.04]"
              >
                <p className="text-xs text-slate-500 sm:text-sm">
                  Current Focus
                </p>

                <p className="mt-1 text-sm font-medium text-white sm:text-base">
                  Full Stack Development
                </p>
              </motion.div>

              <motion.div
                whileHover={{
                  y: -4,
                }}
                transition={{
                  duration: 0.2,
                }}
                className="rounded-lg border border-white/10 bg-white/[0.03] p-4 transition-colors duration-300 hover:border-blue-500/30 hover:bg-blue-500/[0.04]"
              >
                <p className="text-xs text-slate-500 sm:text-sm">Exploring</p>

                <p className="mt-1 text-sm font-medium text-white sm:text-base">
                  AI / ML & Data
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* ================= HIGHLIGHT CARDS ================= */}

          <div className="grid grid-cols-1 gap-4 min-[500px]:grid-cols-2 sm:gap-5">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
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
                  {/* ================= ICON ================= */}

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
                    className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 sm:h-11 sm:w-11"
                  >
                    <Icon size={21} />
                  </motion.div>

                  {/* ================= TITLE ================= */}

                  <h4 className="text-sm font-semibold text-white transition-colors duration-300 group-hover:text-blue-400 sm:text-base">
                    {item.title}
                  </h4>

                  {/* ================= DESCRIPTION ================= */}

                  <p className="mt-2.5 text-xs leading-6 text-slate-400 sm:mt-3 sm:text-sm">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
