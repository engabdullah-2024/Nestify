"use client";

import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("✅ Message sent successfully! (Demo only)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-4 pt-28 pb-16 flex flex-col items-center transition-colors duration-500">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-4 text-center"
      >
        Contact Nestify Family
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-lg text-gray-600 dark:text-gray-400 text-center mb-10 max-w-2xl"
      >
        We’d love to hear from you — whether it’s feedback, questions, or just a
        warm hello. Drop us a message and we’ll get back to you!
      </motion.p>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="w-full max-w-xl space-y-5 bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
      >
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200"
        />
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200"
        />
        <Textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
          className="bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200"
        />
        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
          Send Message
        </Button>
      </motion.form>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-8"
      >
        <a
          href="https://wa.me/252613169435"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="outline"
            className="flex items-center gap-2 text-green-600 border-green-500 hover:bg-green-50 dark:hover:bg-green-900"
          >
            <FaWhatsapp size={20} />
            Chat on WhatsApp
          </Button>
        </a>
      </motion.div>
    </main>
  );
}
