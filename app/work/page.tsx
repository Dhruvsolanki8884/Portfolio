"use client";

import { Sidebar } from "@/components/sidebar";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Work() {
  const projects = [
    {
      title: "Streamify – Real-Time Chat & Video Calling App",
      description:
        "A full-stack platform for 1-on-1 and group video calls using Stream SDK with real-time chat functionality.",
      technologies: [
        "React",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Stream SDK",
      ],
      features: [
        "Real-time chat with typing indicators",
        "Emoji reactions and message history",
        "1-on-1 and group video calls",
        "User authentication and profiles",
        "Responsive design",
      ],
      highlights:
        "Built dynamic UIs with React, managed state with Redux Toolkit, and developed scalable backend services",
      status: "Completed",
      github: "https://github.com",
      image: null,
    },
    {
      title: "CivilCare – Digital Society Management System",
      description:
        "A comprehensive digital system designed to manage notices, billing, and resident tracking for residential societies.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
      ],
      features: [
        "Secure admin panel",
        "Resident verification modules",
        "Notice management system",
        "Billing and payment tracking",
        "Resident database management",
      ],
      highlights:
        "Developed complete digital ecosystem for society management with role-based access control",
      status: "Completed",
      github: "https://github.com",
      website: "https://civilcare.vercel.app/",
      image: "/projects/civilcare.jpg",
    },
    {
      title: "Hotel Krishna - Authentic Kathiawadi Cuisine",
      description:
        "Modern restaurant website featuring menu showcase, special thali offerings, and online ordering integration.",
      technologies: ["Next.js", "React", "Tailwind CSS", "Node.js"],
      features: [
        "Dynamic menu display with categories",
        "Thali meal plans and pricing",
        "Special cuisines showcase (Gujarati, Punjabi, Indo-Chinese)",
        "Customer testimonials",
        "Contact and location information",
        "Responsive mobile design",
      ],
      highlights:
        "Created engaging restaurant website with authentic cultural touch and seamless user experience",
      status: "Live",
      website: "https://krishna-hotel.vercel.app/",
      github: "https://github.com",
      image: "/projects/krishna-hotel.jpg",
    },
    {
      title: "Personal Portfolio Website",
      description:
        "Professional portfolio showcasing projects, skills, and experience with modern design and smooth interactions.",
      technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
      features: [
        "Responsive sidebar navigation",
        "Project showcase section",
        "About and skills section",
        "Contact form integration",
        "Dark mode support",
        "SEO optimized",
      ],
      highlights:
        "Clean and professional portfolio with excellent UX and performance optimization",
      status: "Live",
      website: "https://example.com",
      github: "https://github.com",
      image: null,
    },
  ];

  const technologies = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "Tailwind CSS",
    "Redux Toolkit",
    "Git",
    "GitHub",
    "Vercel",
  ];

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <Sidebar />

      <main className="flex-1 lg:ml-64">
        <div className="min-h-screen px-4 py-20">
          <div className="w-full max-w-4xl mx-auto space-y-12">
            {/* Header */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
                My Work
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                Showcasing my latest projects and technical expertise in
                full-stack development
              </p>
            </div>

            {/* Projects Grid */}
            <div className="space-y-6">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="overflow-hidden bg-white dark:bg-slate-800 rounded-lg shadow hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700"
                >
                  {/* Project Image */}
                  {project.image && (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block relative w-full h-48 md:h-64 cursor-pointer group overflow-hidden"
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-center justify-center">
                        <div className="text-white text-center">
                          <ExternalLink size={40} className="mx-auto mb-2" />
                          <p className="font-semibold">Click to view live</p>
                        </div>
                      </div>
                    </a>
                  )}

                  <div className="p-8 space-y-4">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                            {project.title}
                          </h3>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              project.status === "Live"
                                ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300"
                                : "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                            }`}
                          >
                            {project.status}
                          </span>
                        </div>
                        <p className="text-slate-600 dark:text-slate-300">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded border-l-4 border-blue-500">
                      <p className="text-sm text-slate-700 dark:text-slate-200 italic">
                        ✨ {project.highlights}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="space-y-2">
                      <h4 className="font-semibold text-slate-900 dark:text-white text-sm">
                        Key Features:
                      </h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {project.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400"
                          >
                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-2 pt-4 border-t border-slate-200 dark:border-slate-700">
                      {project.website && (
                        <a
                          href={project.website}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button variant="default" size="sm" className="gap-2">
                            <ExternalLink size={16} />
                            View Live
                          </Button>
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button variant="outline" size="sm" className="gap-2">
                            <Github size={16} />
                            View Code
                          </Button>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Technologies Used */}
            <section className="p-8 bg-white dark:bg-slate-800 rounded-lg shadow space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Technologies I Use
              </h2>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium hover:shadow transition-shadow"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* CTA Section */}
            <div className="p-8 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 rounded-lg shadow text-white space-y-4 text-center">
              <h2 className="text-2xl font-bold">
                Interested in working together?
              </h2>
              <p className="text-blue-100">
                Let's discuss how I can help bring your project to life
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50"
                >
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
