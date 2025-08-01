"use client";

import Link from "next/link";
import { useState } from "react";
import { FaHome, FaInfoCircle, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { ModeToggle } from "../components/ModeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home", icon: <FaHome /> },
    { href: "/about", label: "About", icon: <FaInfoCircle /> },
    { href: "/contact", label: "Contact", icon: <FaEnvelope /> },
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-blue-700 dark:text-blue-300 font-bold text-2xl"
        >
          Nestify
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 text-blue-700 dark:text-blue-300 font-semibold">
          <ul className="flex space-x-6">
            {links.map(({ href, label, icon }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="flex items-center gap-1 hover:text-blue-900 dark:hover:text-white transition"
                >
                  <span className="text-lg">{icon}</span> {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mode Toggle */}
          <ModeToggle />
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-blue-700 dark:text-blue-300 text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-900 border-t border-blue-100 dark:border-gray-700 shadow-lg overflow-hidden"
          >
            <ul>
              {links.map(({ href, label, icon }) => (
                <li key={href} className="border-b border-blue-100 dark:border-gray-700">
                  <Link
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2 px-6 py-4 text-blue-700 dark:text-blue-300 font-semibold hover:bg-blue-50 dark:hover:bg-gray-800 transition"
                  >
                    <span className="text-xl">{icon}</span> {label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mode Toggle on Mobile */}
            <div className="flex justify-end px-6 py-4">
              <ModeToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
