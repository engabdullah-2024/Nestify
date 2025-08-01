"use client";

import Image from "next/image";
import { motion } from "framer-motion";
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
    // Fix cropping by shifting image focus to top (shows head)
    objectPosition: "top",
  },
  {
    name: "Amina Ibrahim Hayd",
    role: "Mother",
    image: "/amina.jpg",
    objectPosition: "top",
  },
  {
    name: "Eng Abdalla Ali",
    role: "Software Engineer",
    image: "/eng.jpg",
    objectPosition: "center",
  },
];

export default function MembersPage() {
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
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6">
                  View Profile
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
