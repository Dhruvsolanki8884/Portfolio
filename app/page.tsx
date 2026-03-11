"use client";

import { useState } from "react";
import { Sidebar } from "@/components/sidebar";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Github,
  Linkedin,
  Download,
  Mail,
  Phone,
  ExternalLink,
  MessageCircleMore,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Modal } from "@/components/modal";

export default function Home() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);

  const projects = [
    {
      title: "Hotel Krishna - Authentic Kathiawadi Cuisine",
      description:
        "Modern restaurant website with menu, ordering system, and authentic cuisine showcase",
      image: "/projects/krishna-hotel.jpg",
      link: "https://krishna-hotel.vercel.app/",
      tags: ["Next.js", "React", "Tailwind CSS"],
    },
    {
      title: "CivilCare – Society Management System",
      description:
        "Comprehensive digital system for managing notices, billing, and residents",
      image: "/projects/civilcare.jpg",
      link: "https://civilcare.vercel.app/",
      tags: ["React", "Node.js", "MongoDB"],
    },
  ];

  const skills = [
    {
      category: "Frontend",
      items: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "MongoDB", "REST APIs"],
    },
    {
      category: "Tools",
      items: ["Git", "GitHub", "VS Code", "Figma", "Firebase"],
    },
  ];

  const experience = [
    {
      role: "Full Stack Developer",
      company: "Technical Core Engineers",
      duration: "Jan 2024 - Present",
      description:
        "Developing and maintaining full-stack web applications using React, Next.js, and Node.js. Collaborated with clients to build scalable solutions and responsive user interfaces.",
      responsibilities: [
        "Frontend Development with React & Next.js",
        "Backend API Development with Node.js",
        "Database Design with MongoDB",
        "Responsive UI Design",
      ],
    },
    {
      role: "Internship",
      company: "Web Development",
      duration: "Jun 2023 - Dec 2023",
      description:
        "Learned and practiced web development fundamentals. Built projects using React, HTML, CSS, and JavaScript. Gained hands-on experience with version control and Git workflow.",
      responsibilities: [
        "HTML & CSS Development",
        "JavaScript Programming",
        "React Component Development",
        "Git Version Control",
      ],
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 lg:ml-64">
        {/* Hero Section */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center px-4 py-20 lg:py-0 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100"
        >
          <div className="w-full max-w-4xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6 animate-slide-in-left">
                <div>
                  <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">
                    Welcome to my portfolio
                  </h2>
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight mb-4">
                    Dhruv <span className="gradient-text">Solanki</span>
                  </h1>
                  <p className="text-xl text-slate-600 mb-6">
                    Full Stack Developer crafting modern web experiences with
                    React, Next.js, and Node.js
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <a href="#contact" className="inline-block">
                    <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-smooth">
                      Get In Touch
                      <ArrowRight className="ml-2" size={20} />
                    </Button>
                  </a>
                  <a
                    href="/resume/Dhruv-Solanki-Resume.txt"
                    download
                    className="inline-block"
                  >
                    <Button className="glass px-8 py-6 text-lg rounded-lg text-slate-700 hover:bg-blue-100 border-2 border-blue-300 transition-smooth">
                      <Download className="mr-2" size={20} />
                      Resume
                    </Button>
                  </a>
                </div>

                <div className="flex gap-4 pt-4">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass p-3 rounded-lg text-slate-700 hover:text-blue-600 hover:bg-blue-100 transition-smooth hover-lift"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass p-3 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-200 transition-smooth hover-lift"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href="https://wa.me/917575898884"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass p-3 rounded-lg text-slate-700 hover:text-green-600 hover:bg-green-100 transition-smooth hover-lift"
                    title="WhatsApp"
                  >
                    <MessageCircleMore size={24} />
                  </a>
                </div>
              </div>

              <div className="animate-slide-in-right flex justify-center hidden md:flex">
                <div
                  onClick={() => {
                    setSelectedPhoto("/dhruv-photo.jpg");
                    setIsPhotoModalOpen(true);
                  }}
                  className="relative w-64 h-80 md:w-72 md:h-96 cursor-pointer group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity" />
                  <div className="relative w-full h-full rounded-2xl overflow-hidden glass shadow-xl hover-lift">
                    <Image
                      src="/dhruv-photo.jpg"
                      alt="Dhruv Solanki"
                      fill
                      className="object-cover brightness-95 contrast-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/40 transition-all flex items-end justify-center p-4">
                      <p className="text-white font-semibold">Click to view</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mt-12 md:mt-16 pt-12 md:pt-16 border-t border-slate-300">
              <div className="glass p-4 md:p-6 rounded-xl text-center hover-lift">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold gradient-text break-words">
                  4+
                </div>
                <p className="text-slate-600 text-xs md:text-sm mt-2 break-words">
                  Projects Done
                </p>
              </div>
              <div className="glass p-4 md:p-6 rounded-xl text-center hover-lift">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold gradient-text break-words">
                  100%
                </div>
                <p className="text-slate-600 text-xs md:text-sm mt-2 break-words">
                  Commitment
                </p>
              </div>
              <div className="glass p-4 md:p-6 rounded-xl text-center hover-lift">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold gradient-text break-words">
                  24h
                </div>
                <p className="text-slate-600 text-xs md:text-sm mt-2 break-words">
                  Response
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="min-h-screen flex items-center justify-center px-4 py-20"
        >
          <div className="w-full max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12 animate-fade-in">
              About Me
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass rounded-2xl p-8 animate-slide-in-left border-2 border-blue-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Who I Am
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  I'm a passionate Full Stack Developer based in India with a
                  strong foundation in web technologies. Currently pursuing
                  Master of Computer Applications while actively developing
                  scalable web applications.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  I specialize in creating seamless digital experiences that
                  combine robust backend systems with beautiful, responsive
                  frontends. Every project is built with clean code and user
                  experience in mind.
                </p>
              </div>

              <div className="glass rounded-2xl p-8 animate-slide-in-right border-2 border-blue-200 space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    Education
                  </h3>
                  <div className="space-y-3">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <p className="font-semibold text-slate-900">
                        M.C.A (Pursuing)
                      </p>
                      <p className="text-slate-600 text-sm">
                        GTU - Lokmanya College
                      </p>
                    </div>
                    <div className="border-l-4 border-blue-400 pl-4">
                      <p className="font-semibold text-slate-900">
                        B.C.A (67%)
                      </p>
                      <p className="text-slate-600 text-sm">
                        KSV University - NPCCSM College, Kadi
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 animate-fade-in">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">
                Skills & Tools
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {skills.map((skillGroup, idx) => (
                  <div
                    key={idx}
                    className="glass rounded-xl p-6 hover-lift border-2 border-blue-100"
                  >
                    <h4 className="font-bold text-blue-600 mb-4">
                      {skillGroup.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-blue-100 rounded-full text-xs sm:text-sm text-slate-700 border border-blue-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-16 animate-fade-in border-t border-slate-300 pt-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="text-blue-600">
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                    <polyline points="13 2 13 9 20 9"></polyline>
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                  Professional Experience
                </h3>
              </div>
              <div className="glass rounded-2xl p-6 md:p-8 border-l-4 border-blue-600 border-r-2 border-r-blue-200 border-t-2 border-t-blue-200 border-b-2 border-b-blue-200 hover-lift">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div>
                    <h4 className="text-2xl font-bold text-slate-900">
                      Full Stack Developer Intern
                    </h4>
                    <p className="text-blue-600 font-semibold text-lg">
                      Technical Core Engineers, Gota, Ahmedabad
                    </p>
                  </div>
                  <p className="text-sm text-slate-600 sm:text-right whitespace-nowrap font-semibold">
                    July 2021 – Present
                  </p>
                </div>
                <ul className="space-y-3 ml-4">
                  <li className="text-slate-700 text-sm md:text-base flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span>
                      Gained hands-on experience in MERN stack using TypeScript,
                      Next.js, and Redux Toolkit
                    </span>
                  </li>
                  <li className="text-slate-700 text-sm md:text-base flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span>
                      Built dynamic UIs and managed application state
                      efficiently
                    </span>
                  </li>
                  <li className="text-slate-700 text-sm md:text-base flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span>
                      Developed scalable backend services with Node.js and
                      Express
                    </span>
                  </li>
                  <li className="text-slate-700 text-sm md:text-base flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span>
                      Tested and debugged REST APIs using Postman for
                      reliability and performance
                    </span>
                  </li>
                  <li className="text-slate-700 text-sm md:text-base flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span>
                      Integrated third-party APIs and libraries to expand
                      functionality
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Work Section */}
        <section
          id="work"
          className="flex items-center justify-center px-4 py-16 md:py-20 bg-gradient-to-b from-slate-100 to-slate-50"
        >
          <div className="w-full max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 md:mb-12 animate-fade-in">
              Featured Work
            </h2>

            <div className="space-y-6 md:space-y-8">
              {projects.map((project, idx) => (
                <a
                  key={idx}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`glass rounded-2xl overflow-hidden hover-lift group border-2 border-blue-200 ${idx % 2 === 0 ? "animate-slide-in-left" : "animate-slide-in-right"}`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className="relative h-40 md:h-64 bg-slate-200">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="md:col-span-2 p-4 md:p-8 flex flex-col justify-center">
                      <h3 className="text-lg md:text-2xl font-bold text-slate-900 mb-2 md:mb-3 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-slate-600 mb-3 md:mb-4 text-xs md:text-base leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-3 md:mb-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 md:px-3 py-1 bg-blue-100 rounded-full text-xs text-blue-700 border border-blue-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center text-blue-600 group-hover:translate-x-2 transition-transform font-semibold text-sm md:text-base">
                        <span className="mr-2">View Live</span>
                        <ExternalLink size={16} className="md:w-5 md:h-5" />
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="flex items-center justify-center px-4 py-16 md:py-20"
        >
          <div className="w-full max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 md:mb-12 animate-fade-in">
              Get In Touch
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="glass rounded-2xl p-6 md:p-8 animate-slide-in-left border-2 border-blue-200">
                <form
                  onSubmit={handleSubmit}
                  className="space-y-3 md:space-y-4"
                >
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-blue-50 border-2 border-blue-300 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-500 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-all"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-blue-50 border-2 border-blue-300 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-500 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-all"
                      required
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Your Message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full bg-blue-50 border-2 border-blue-300 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-500 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-all resize-none"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all"
                  >
                    Send Message
                  </button>
                  {submitted && (
                    <p className="text-green-600 text-center text-sm">
                      Message sent successfully!
                    </p>
                  )}
                </form>
              </div>

              <div className="space-y-6 animate-slide-in-right">
                <div className="glass rounded-xl p-6 hover-lift border-2 border-blue-200">
                  <div className="flex items-start gap-4">
                    <Mail
                      className="text-blue-600 flex-shrink-0 mt-1"
                      size={24}
                    />
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Email</h4>
                      <a
                        href="mailto:solankidhruvahir18@gmail.com"
                        className="text-slate-600 hover:text-blue-600 transition-colors break-all"
                      >
                        solankidhruvahir18@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="glass rounded-xl p-6 hover-lift border-2 border-blue-200">
                  <div className="flex items-start gap-4">
                    <Phone
                      className="text-blue-600 flex-shrink-0 mt-1"
                      size={24}
                    />
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Phone</h4>
                      <a
                        href="tel:+917575898884"
                        className="text-slate-600 hover:text-blue-600 transition-colors"
                      >
                        +91 7575898884
                      </a>
                    </div>
                  </div>
                </div>

                <div className="glass rounded-xl p-6 hover-lift border-2 border-blue-200">
                  <div className="flex items-start gap-4">
                    <MessageCircleMore
                      className="text-green-600 flex-shrink-0 mt-1"
                      size={24}
                    />
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">
                        WhatsApp
                      </h4>
                      <a
                        href="https://wa.me/917575898884"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-600 hover:text-green-600 transition-colors"
                      >
                        Start a conversation
                      </a>
                    </div>
                  </div>
                </div>

                <a
                  href="/resume/Dhruv-Solanki-Resume.txt"
                  download
                  className="glass rounded-xl p-6 hover-lift block border-2 border-blue-200"
                >
                  <div className="flex items-start gap-4">
                    <Download
                      className="text-blue-600 flex-shrink-0 mt-1"
                      size={24}
                    />
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Resume</h4>
                      <p className="text-slate-600 hover:text-blue-600 transition-colors">
                        Download my full resume
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-slate-300 py-8 px-4 text-center text-slate-600 bg-gradient-to-br from-slate-50 to-slate-100">
          <p>Crafted with passion by Dhruv Solanki © 2024</p>
        </footer>
      </main>

      <Modal
        isOpen={isPhotoModalOpen}
        onClose={() => setIsPhotoModalOpen(false)}
      >
        {selectedPhoto && (
          <div className="relative w-full h-96 md:h-[500px] bg-white">
            <Image
              src={selectedPhoto}
              alt="Dhruv Solanki"
              fill
              className="object-contain"
            />
          </div>
        )}
      </Modal>
    </div>
  );
}
