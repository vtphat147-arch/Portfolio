"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CERTIFICATIONS } from "@/lib/data";
import { SectionWrapper, SectionHeading } from "@/components/section-wrapper";
import { FiAward, FiExternalLink } from "react-icons/fi";

export function Certifications() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <SectionWrapper id="certifications">
      <SectionHeading
        title="Certifications"
        subtitle="Professional credentials and achievements"
      />

      <div ref={ref} className="mx-auto max-w-3xl">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-indigo-500/50 via-purple-500/50 to-transparent md:left-1/2 md:-translate-x-px" />

          {CERTIFICATIONS.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className={`relative mb-8 flex items-start gap-6 md:gap-0 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 top-6 z-10 -translate-x-1/2 md:left-1/2">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{
                    type: "spring",
                    delay: 0.3 + i * 0.15,
                    bounce: 0.5,
                  }}
                  className="flex h-10 w-10 items-center justify-center rounded-full border-4 border-background bg-gradient-to-br from-indigo-500 to-purple-500 shadow-lg"
                >
                  <FiAward className="h-4 w-4 text-white" />
                </motion.div>
              </div>

              {/* Card */}
              <div
                className={`ml-16 flex-1 md:ml-0 md:w-1/2 ${
                  i % 2 === 0 ? "md:pr-12" : "md:pl-12"
                }`}
              >
                <div className="glass-card glow-hover rounded-xl p-5">
                  <div className="mb-2 flex items-start justify-between">
                    <div>
                      <h3 className="text-base font-semibold text-foreground">
                        {cert.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {cert.organization}
                      </p>
                    </div>
                    <Badge date={cert.date} />
                  </div>

                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-indigo-500 transition-colors hover:text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-300"
                    >
                      View Credential
                      <FiExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden flex-1 md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

/** Small date badge component */
function Badge({ date }: { date: string }) {
  return (
    <span className="whitespace-nowrap rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-600 dark:text-indigo-400">
      {date}
    </span>
  );
}
