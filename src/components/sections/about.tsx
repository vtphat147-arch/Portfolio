"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { PERSONAL_INFO, ABOUT_TEXT } from "@/lib/data";
import { SectionWrapper, SectionHeading } from "@/components/section-wrapper";
import { FiMapPin, FiBookOpen, FiBriefcase } from "react-icons/fi";

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const quickFacts = [
    {
      icon: FiMapPin,
      label: "Location",
      value: PERSONAL_INFO.location,
    },
    {
      icon: FiBookOpen,
      label: "Education",
      value: PERSONAL_INFO.education,
    },
    {
      icon: FiBriefcase,
      label: "Experience",
      value: `${PERSONAL_INFO.yearsOfExperience} years`,
    },
  ];

  return (
    <SectionWrapper id="about">
      <SectionHeading
        title="About Me"
        subtitle="A little bit about who I am and what drives me"
      />

      <div ref={ref} className="grid gap-12 md:grid-cols-5 md:gap-16 items-center">
        {/* Profile Photo */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center md:col-span-2"
        >
          <div className="relative">
            {/* Decorative ring */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-xl" />
            <div className="relative h-56 w-56 overflow-hidden rounded-full border-4 border-background shadow-xl sm:h-64 sm:w-64 lg:h-72 lg:w-72">
              {PERSONAL_INFO.avatarUrl ? (
                <Image
                  src={PERSONAL_INFO.avatarUrl}
                  alt={PERSONAL_INFO.name}
                  fill
                  sizes="(max-width: 768px) 224px, 288px"
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
                  <span className="text-6xl font-bold text-white sm:text-7xl">
                    {PERSONAL_INFO.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
              )}
            </div>
            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -bottom-2 -right-2 rounded-xl border border-indigo-500/30 bg-card px-4 py-2 text-sm font-semibold shadow-xl"
            >
              <span className="flex items-center gap-1.5">
                <span>💻</span>
                <span className="gradient-text">{PERSONAL_INFO.title}</span>
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="md:col-span-3"
        >
          <div className="space-y-4">
            {ABOUT_TEXT.map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="text-base leading-relaxed text-muted-foreground sm:text-lg"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          {/* Quick Facts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3"
          >
            {quickFacts.map((fact) => (
              <div
                key={fact.label}
                className="glass-card glow-hover rounded-xl p-4 text-center"
              >
                <fact.icon className="mx-auto mb-2 h-5 w-5 text-indigo-500" />
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {fact.label}
                </p>
                <p className="mt-1 text-sm font-semibold text-foreground">
                  {fact.value}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
