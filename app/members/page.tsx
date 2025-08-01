"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const members = [
  {
    name: "Dr Ali Nor",
    role: "TB Specialist",
    image: "/ali.jpg",
    objectPosition: "top",
    bio: "Dr Ali Nor is a dedicated TB specialist with over 15 years of experience in treating infectious diseases.",
  },
  {
    name: "Amina Ibrahim Hayd",
    role: "Mother",
    image: "/amina.jpg",
    objectPosition: "top",
    bio: "Amina is the heart of the family, nurturing everyone with her warmth and wisdom.",
  },
  {
    name: "Eng Abdalla Ali",
    role: "Software Engineer",
    image: "/eng.jpg",
    objectPosition: "center",
    bio: "Eng Abdalla Ali is a senior software engineer passionate about building scalable web applications.",
  },
    {
    name: "Mumtaz Ali",
    role: "Yaraanka",
    image: "/mumtaz.jpg",
    objectPosition: "top",
    bio: "Mumtaz is the youngest girl in the family.",
  },
];

export default function MembersPage() {
  const [selectedMember, setSelectedMember] = useState<typeof members[0] | null>(null);

  return (
    <main className="min-h-screen px-4 pt-24 pb-12 bg-white text-blue-900 dark:bg-gray-900 dark:text-blue-200 transition-colors duration-500">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800 dark:text-blue-300 mb-2">
          Meet Our Family
        </h1>
        <p className="text-blue-600 dark:text-blue-400 text-lg">
          The heartbeat of <span className="font-semibold">The9Nest</span>
        </p>
      </div>

      {/* Card Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {members.map(({ name, role, image, objectPosition }, index) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <Card className="rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-blue-100 dark:border-blue-700 bg-blue-50 dark:bg-gray-800">
              <CardHeader className="p-0">
                <div className="relative w-full h-64 rounded-t-2xl overflow-hidden">
                  <Image
                    src={image}
                    alt={name}
                    fill
                    style={{ objectFit: "cover", objectPosition: objectPosition }}
                    priority={index === 0}
                  />
                </div>
              </CardHeader>
              <CardContent className="pt-4 text-center">
                <CardTitle className="text-xl font-semibold text-blue-900 dark:text-blue-200">
                  {name}
                </CardTitle>
                <CardDescription className="text-blue-600 dark:text-blue-400 mb-3">
                  {role}
                </CardDescription>
              </CardContent>
              <CardFooter className="flex justify-center pb-6">
                <Button
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6"
                  onClick={() => setSelectedMember(members[index])}
                >
                  View Profile
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Modal for Profile Summary */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-gray-900 rounded-2xl max-w-md w-full p-6 shadow-xl"
            >
              <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden mb-6">
                <Image
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  fill
                  style={{ objectFit: "cover", objectPosition: selectedMember.objectPosition }}
                />
              </div>
              <h2 className="text-3xl font-bold text-center mb-1 text-blue-900 dark:text-blue-200">
                {selectedMember.name}
              </h2>
              <p className="text-center text-blue-600 dark:text-blue-400 mb-4">{selectedMember.role}</p>
              <p className="text-center text-gray-700 dark:text-gray-300 mb-6 px-4">
                {selectedMember.bio}
              </p>
              <div className="flex justify-center">
                <Button onClick={() => setSelectedMember(null)} className="px-6 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600">
                  Close
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
