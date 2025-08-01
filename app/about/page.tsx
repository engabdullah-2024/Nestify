"use client";

import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";

export default function AboutPage() {
  return (
    <main className="min-h-screen px-4 pt-28 pb-12 bg-white text-blue-900 dark:bg-gray-950 dark:text-blue-100 transition-colors duration-500">
      {/* Header Section */}
      <section className="max-w-4xl mx-auto text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          About Our Family
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg text-blue-700 dark:text-blue-300"
        >
          A glimpse into the roots, the journey, and the values that bind Nestify together.
        </motion.p>
      </section>

      {/* Family Story */}
      <motion.section
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto mb-16"
      >
        <h2 className="text-2xl font-semibold mb-3">Our Story</h2>
        <p className="text-blue-800 dark:text-blue-200 leading-relaxed text-lg">
          Our family&apos;s journey began in 2003 with a promise of love, faith, and unity. Over time,
          we&apos;ve grown into a strong and connected family of 9. Guided by our loving parents, we&apos;ve
          embraced joy, learned from challenges, and shared beautiful memories together. Every moment,
          every laugh, every prayer — they all shape the home we proudly call <strong>Nestify</strong>.
        </p>
      </motion.section>

      <Separator className="max-w-4xl mx-auto my-8 bg-blue-100 dark:bg-blue-900" />

      {/* Family Timeline */}
      <motion.section
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto mb-16"
      >
        <h2 className="text-2xl font-semibold mb-6">Family Timeline</h2>
        <ul className="space-y-6 border-l-2 border-blue-300 dark:border-blue-700 pl-6">
          <li>
            <div className="font-semibold text-blue-800 dark:text-blue-200">2003 - Marriage</div>
            <p className="text-blue-700 dark:text-blue-400">Our story began with love, unity, and faith.</p>
          </li>
          <li>
            <div className="font-semibold text-blue-800 dark:text-blue-200">2004 - First Child</div>
            <p className="text-blue-700 dark:text-blue-400">
              Welcomed Eng Abdalla — the first light of The9Nest.
            </p>
          </li>
          <li>
            <div className="font-semibold text-blue-800 dark:text-blue-200">2005–2015 - Expansion</div>
            <p className="text-blue-700 dark:text-blue-400">
              One by one, our family grew into a full team of 9.
            </p>
          </li>
          <li>
            <div className="font-semibold text-blue-800 dark:text-blue-200">2024 - Family Website</div>
            <p className="text-blue-700 dark:text-blue-400">
              Built this digital home to preserve our bond and memories.
            </p>
          </li>
        </ul>
      </motion.section>

      <Separator className="max-w-4xl mx-auto my-8 bg-blue-100 dark:bg-blue-900" />

      {/* Family Values */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-2xl font-semibold mb-4">What We Stand For</h2>
        <ul className="grid md:grid-cols-3 gap-6 text-center">
          <li className="bg-blue-50 dark:bg-gray-800 p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-200 mb-2">Faith</h3>
            <p className="text-blue-700 dark:text-blue-400">
              Our strength begins with faith and prayer.
            </p>
          </li>
          <li className="bg-blue-50 dark:bg-gray-800 p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-200 mb-2">Unity</h3>
            <p className="text-blue-700 dark:text-blue-400">
              We grow and stand together in love and peace.
            </p>
          </li>
          <li className="bg-blue-50 dark:bg-gray-800 p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-200 mb-2">Respect</h3>
            <p className="text-blue-700 dark:text-blue-400">
              We honor each other with kindness and dignity.
            </p>
          </li>
        </ul>
      </motion.section>
    </main>
  );
}
