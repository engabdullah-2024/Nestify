"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 text-center bg-white text-blue-900 dark:bg-black dark:text-white transition-colors duration-500">
      {/* Animated Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-extrabold mb-6"
      >
        Welcome to{" "}
        <span className="text-blue-600 dark:text-blue-400">Nestify</span>
      </motion.h1>

      {/* Animated Subtext */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="max-w-2xl text-lg md:text-xl mb-8 text-blue-700 dark:text-blue-300"
      >
        A special space where our family of 9 celebrates memories, stories,
        and love — all in one digital home.
      </motion.p>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <Link href="/members">
          <Button className="text-base px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600 transition">
            Meet the Family
          </Button>
        </Link>
      </motion.div>
    </main>
  );
}
