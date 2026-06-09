"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TIMELINE } from "@/lib/data";
import { SectionWrapper, SectionHeading } from "@/components/section-wrapper";
import { FiBookOpen, FiBriefcase } from "react-icons/fi";

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <SectionWrapper id="experience">
      <SectionHeading
        title="Experience & Education"
        subtitle="My journey through learning and working"
      />

      <div ref={ref} className="mx-auto max-w-3xl">
        <div className="relative">
          {/* Vertical timeline line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ originY: 0 }}
            className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent md:left-1/2 md:-translate-x-px"
          />

          {TIMELINE.map((item, i) => {
            const isLeft = i % 2 === 0;
            const Icon = item.type === "education" ? FiBookOpen : FiBriefcase;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
                }
                transition={{ duration: 0.6, delay: 0.3 + i * 0.2 }}
                className={`relative mb-10 last:mb-0 flex items-start gap-6 md:gap-0 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline node */}
                <div className="absolute left-6 top-5 z-10 -translate-x-1/2 md:left-1/2">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{
                      type: "spring",
                      delay: 0.4 + i * 0.2,
                      bounce: 0.5,
                    }}
                    className={`flex h-12 w-12 items-center justify-center rounded-full border-4 border-background shadow-lg ${
                      item.type === "education"
                        ? "bg-gradient-to-br from-blue-500 to-cyan-500"
                        : "bg-gradient-to-br from-indigo-500 to-purple-500"
                    }`}
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </motion.div>
                </div>

                {/* Content card */}
                <div
                  className={`ml-16 flex-1 md:ml-0 md:w-1/2 ${
                    isLeft ? "md:pr-14" : "md:pl-14"
                  }`}
                >
                  <div className="glass-card glow-hover rounded-xl p-6">
                    {/* Date range */}
                    <span className="mb-2 inline-block rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-600 dark:text-indigo-400">
                      {item.dateRange}
                    </span>

                    <h3 className="mt-2 text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-indigo-500 dark:text-indigo-400">
                      {item.organization}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Spacer */}
                <div className="hidden flex-1 md:block md:w-1/2" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
