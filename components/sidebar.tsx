"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  User,
  Briefcase,
  Mail,
  Menu,
  X,
  MessageCircleMore,
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#home", label: "Home", icon: Home },
    { href: "#about", label: "About", icon: User },
    { href: "#work", label: "Work", icon: Briefcase },
    { href: "#contact", label: "Let's Connect", icon: Mail },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-lg border-2 border-blue-300"
      >
        {isOpen ? (
          <X size={24} className="text-slate-900" />
        ) : (
          <Menu size={24} className="text-slate-900" />
        )}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/30 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen w-64 bg-gradient-to-b from-slate-800 to-slate-900 shadow-2xl transition-transform duration-300 z-40 lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:sticky lg:top-0 border-r border-slate-700`}
      >
        <div className="h-full flex flex-col p-6">
          {/* Profile Section */}
          <div className="mb-8 text-center">
            <div className="mb-4 flex justify-center">
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-blue-400 shadow-xl">
                <Image src="/IMG_5227.jpg" alt="Dhruv Solanki" fill />
              </div>
            </div>
            <h1 className="text-xl font-bold text-white">Dhruv Solanki</h1>
            <p className="text-xs text-blue-300 font-semibold mt-2 uppercase tracking-wider">
              Full Stack Developer
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 text-left text-slate-100 hover:bg-blue-600 hover:text-white active:bg-blue-700"
                >
                  <Icon size={20} />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Contact Info */}
          <div className="border-t border-slate-700 pt-6 space-y-3">
            <div className="text-xs text-blue-300 font-semibold uppercase tracking-wider">
              Get In Touch
            </div>
            <a
              href="mailto:solankidhruvahir18@gmail.com"
              className="block text-xs text-slate-300 hover:text-blue-300 transition-colors break-all"
            >
              solankidhruvahir18@gmail.com
            </a>
            <a
              href="tel:+917575898884"
              className="block text-xs text-slate-300 hover:text-blue-300 transition-colors"
            >
              +91 7575898884
            </a>
            <a
              href="https://wa.me/917575898884"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-slate-300 hover:text-green-400 transition-colors"
            >
              <MessageCircleMore size={16} />
              WhatsApp
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
