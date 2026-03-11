"use client";

import { Sidebar } from "@/components/sidebar";
import {
  Code2,
  Database,
  Zap,
  Terminal,
  GitBranch,
  BookOpen,
} from "lucide-react";
import Image from "next/image";

export default function About() {
  const skills = [
    {
      category: "Frontend",
      icon: Code2,
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "Redux Toolkit",
      ],
    },
    {
      category: "Backend",
      icon: Terminal,
      technologies: [
        "Node.js",
        "Express.js",
        "RESTful APIs",
        "MongoDB",
        "MySQL",
      ],
    },
    {
      category: "Tools & Technologies",
      icon: Zap,
      technologies: [
        "Git",
        "GitHub",
        "Vercel",
        "VS Code",
        "Postman",
        "TypeScript",
      ],
    },
    {
      category: "Database",
      icon: Database,
      technologies: [
        "MongoDB",
        "MySQL",
        "Database Design",
        "Query Optimization",
      ],
    },
  ];

  const strengths = [
    "Quick Learner & Self-Motivated",
    "Problem Solving with modern development tools",
    "Strong willingness to learn and adapt to new technologies",
    "Full Stack Development",
    "Real-time Applications",
    "Responsive Design",
  ];

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <Sidebar />

      <main className="flex-1 lg:ml-64">
        <div className="min-h-screen px-4 py-20">
          <div className="w-full max-w-3xl mx-auto space-y-12">
            {/* Header with Photo */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1 space-y-4">
                <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
                  About Me
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-300">
                  I'm a passionate Full Stack Developer with a strong interest
                  in building scalable web applications. I thrive in creating
                  clean, responsive, and user-friendly digital experiences.
                </p>
              </div>

              {/* Profile Photo */}
              <div className="flex-shrink-0">
                <div className="relative w-32 h-40 md:w-40 md:h-48 rounded-lg overflow-hidden shadow-lg border-4 border-blue-600">
                  <Image
                    src="/dhruv-photo.jpg"
                    alt="Dhruv Solanki"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Introduction */}
            <section className="space-y-6 p-8 bg-white dark:bg-slate-800 rounded-lg shadow">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <BookOpen className="text-blue-600" size={28} />
                Who I Am
              </h2>
              <div className="space-y-4 text-slate-600 dark:text-slate-300">
                <p>
                  I'm a motivated Full Stack Developer with a strong focus on
                  building scalable and high-performance web applications. With
                  expertise in modern JavaScript frameworks and backend
                  technologies, I create clean, maintainable code that drives
                  real business value.
                </p>
                <p>
                  Currently pursuing my Master of Computer Applications while
                  working as a Full Stack Developer Intern at Technical Core
                  Engineers, where I've gained hands-on experience with the MERN
                  stack and contributed to production applications serving real
                  users.
                </p>
                <p>
                  My passion lies in staying at the forefront of web
                  development, continuously learning new technologies, and
                  applying best practices to deliver exceptional user
                  experiences. I believe in writing code that is not just
                  functional, but elegant and maintainable.
                </p>
              </div>
            </section>

            {/* Skills Section */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Technical Skills
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.category}
                      className="p-6 bg-white dark:bg-slate-800 rounded-lg shadow hover:shadow-lg transition-shadow border border-slate-200 dark:border-slate-700"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                          <Icon
                            className="text-blue-600 dark:text-blue-400"
                            size={24}
                          />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                          {skill.category}
                        </h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {skill.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Strengths Section */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Key Strengths
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {strengths.map((strength) => (
                  <div
                    key={strength}
                    className="p-4 bg-white dark:bg-slate-800 rounded-lg shadow border-l-4 border-blue-600 hover:shadow-lg transition-shadow"
                  >
                    <p className="text-slate-900 dark:text-white font-medium">
                      {strength}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Experience */}
            <section className="space-y-6 p-8 bg-white dark:bg-slate-800 rounded-lg shadow">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <GitBranch className="text-blue-600" size={28} />
                Experience
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-6 py-2">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Full Stack Developer Intern
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold">
                    Technical Core Engineers, Gota, Ahmedabad
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                    July 2021 – Present
                  </p>
                  <ul className="mt-3 space-y-2 text-slate-600 dark:text-slate-300 text-sm">
                    <li>
                      • Gained hands-on experience in MERN stack using
                      TypeScript, Next.js, and Redux Toolkit
                    </li>
                    <li>
                      • Built dynamic UIs and managed application state
                      efficiently
                    </li>
                    <li>
                      • Developed scalable backend services with Node.js and
                      Express
                    </li>
                    <li>
                      • Tested and debugged REST APIs using Postman for
                      reliability and performance
                    </li>
                    <li>
                      • Integrated third-party APIs and libraries to expand
                      functionality
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Tools Section */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Tools & Software
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  "Git",
                  "GitHub",
                  "VS Code",
                  "Postman",
                  "Vercel",
                  "MongoDB",
                  "MySQL",
                  "Terminal",
                ].map((tool) => (
                  <div
                    key={tool}
                    className="p-4 bg-white dark:bg-slate-800 rounded-lg shadow text-center hover:shadow-lg transition-shadow border border-slate-200 dark:border-slate-700"
                  >
                    <p className="font-semibold text-slate-900 dark:text-white">
                      {tool}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
