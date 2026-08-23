import { motion } from "framer-motion";
import { GraduationCap, Briefcase, CalendarDays } from "lucide-react";

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institute: "Charotar University Of Science And Technology",
    duration: "2025 – 2027",
    description:
      "Currently pursuing a Master of Computer Applications (MCA) with a growing focus on Artificial Intelligence and Machine Learning, while developing skills in Python, data analysis, problem-solving, and modern software development through practical projects.",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institute: "Veer Narmad South Gujarat University",
    duration: "2022 – 2025",
    description:
      "Completed a Bachelor of Computer Applications (BCA), building a strong foundation in programming, object-oriented programming, databases, web development, software engineering, and computer science fundamentals through academic projects.",
  },
];

const experience = [
  {
    title: "Software Development Projects",
    company: "Personal & Academic Projects",
    duration: "2024 – Present",
    description:
      "Developing full-stack applications using MERN, Java/Spring Boot and Django. Working on REST APIs, authentication, database design and responsive user interfaces.",
  },
];

function Education() {
  return (
    <section id="education" className="px-4 py-20 sm:px-6 sm:py-24">
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
          className="mb-12 text-center sm:mb-14"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            My Journey
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:mt-5 sm:text-base">
            My academic background and hands-on development experience.
          </p>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-blue-500" />
        </motion.div>

        {/* ================= EDUCATION ================= */}

        <div className="mb-14 sm:mb-16">
          {/* Education Heading */}

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
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
            className="mb-7 flex items-center gap-3 sm:mb-8 sm:gap-4"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 sm:h-12 sm:w-12">
              <GraduationCap size={23} />
            </div>

            <h3 className="text-xl font-semibold text-white sm:text-2xl">
              Education
            </h3>
          </motion.div>

          {/* Education Cards */}

          <div className="space-y-5 sm:space-y-6">
            {education.map((item, index) => (
              <motion.div
                key={item.degree}
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
                {/* Card Top */}

                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                  {/* Degree + Institute */}

                  <div className="min-w-0">
                    <h4 className="text-lg font-semibold leading-7 text-white transition-colors duration-300 group-hover:text-blue-400 sm:text-xl">
                      {item.degree}
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-slate-300 sm:text-base">
                      {item.institute}
                    </p>
                  </div>

                  {/* Duration */}

                  <div className="flex shrink-0 items-center gap-2 text-xs text-slate-500 sm:text-sm">
                    <CalendarDays size={15} />

                    <span>{item.duration}</span>
                  </div>
                </div>

                {/* Description */}

                <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400 sm:mt-5">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= EXPERIENCE ================= */}

        <div>
          {/* Experience Heading */}

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
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
            className="mb-7 flex items-center gap-3 sm:mb-8 sm:gap-4"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 sm:h-12 sm:w-12">
              <Briefcase size={23} />
            </div>

            <h3 className="text-xl font-semibold text-white sm:text-2xl">
              Experience
            </h3>
          </motion.div>

          {/* Experience Cards */}

          <div className="space-y-5 sm:space-y-6">
            {experience.map((item, index) => (
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
                {/* Card Top */}

                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                  {/* Experience */}

                  <div className="min-w-0">
                    <h4 className="text-lg font-semibold leading-7 text-white transition-colors duration-300 group-hover:text-blue-400 sm:text-xl">
                      {item.title}
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-slate-300 sm:text-base">
                      {item.company}
                    </p>
                  </div>

                  {/* Duration */}

                  <div className="flex shrink-0 items-center gap-2 text-xs text-slate-500 sm:text-sm">
                    <CalendarDays size={15} />

                    <span>{item.duration}</span>
                  </div>
                </div>

                {/* Description */}

                <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400 sm:mt-5">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
