"use client";

import { useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { PROJECTS } from "@/lib/data";
import { SectionWrapper, SectionHeading } from "@/components/section-wrapper";
import { Badge } from "@/components/ui/badge";
import { FiGithub, FiExternalLink } from "react-icons/fi";

type FilterType = "all" | "completed" | "in-progress";

export function Projects() {
  const [filter, setFilter] = useState<FilterType>("all");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredProjects = PROJECTS.filter((project) => {
    if (filter === "all") return true;
    return project.status === filter;
  });

  const filters: { label: string; value: FilterType }[] = [
    { label: "All Projects", value: "all" },
    { label: "Completed", value: "completed" },
    { label: "In Progress", value: "in-progress" },
  ];

  return (
    <SectionWrapper id="projects">
      <SectionHeading
        title="Projects"
        subtitle="A showcase of my recent work and ongoing adventures"
      />

      {/* Filter Tabs */}
      <div className="mb-10 flex justify-center">
        <div className="inline-flex rounded-full border border-border/60 bg-muted/50 p-1 backdrop-blur-sm">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className="relative rounded-full px-4 py-2 text-sm font-medium transition-colors"
            >
              {filter === f.value && (
                <motion.span
                  layoutId="projectFilter"
                  className="absolute inset-0 rounded-full bg-background shadow-sm"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span
                className={`relative z-10 ${
                  filter === f.value
                    ? "text-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {f.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div ref={ref} className="grid gap-6 sm:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                isInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.9 }
              }
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass-card glow-hover overflow-hidden rounded-2xl"
            >
              {/* Project Image / Placeholder */}
              <div className={`relative h-48 overflow-hidden border-b border-border/40 ${
                project.id === "portfolio"
                  ? "bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5"
                  : "bg-white"
              }`}>
                {project.image ? (
                  <div className={project.id !== "portfolio" ? "absolute inset-6" : "absolute inset-0"}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className={`transition-transform duration-500 group-hover:scale-105 ${
                        project.id === "portfolio"
                          ? "object-cover object-top"
                          : "object-contain"
                      }`}
                      priority={i < 2}
                    />
                  </div>
                ) : (
                  /* Decorative geometric pattern */
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="grid grid-cols-4 gap-3 opacity-20">
                      {Array.from({ length: 16 }).map((_, j) => (
                        <div
                          key={j}
                          className="h-6 w-6 rounded-md bg-gradient-to-br from-indigo-500 to-purple-500"
                          style={{
                            opacity: 0.2 + Math.random() * 0.6,
                            transform: `rotate(${Math.random() * 45}deg)`,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Status badge */}
                {project.status === "in-progress" && (
                  <div className="absolute left-4 top-4 z-10">
                    <Badge
                      variant="secondary"
                      className="border border-amber-500/30 bg-amber-500/20 text-amber-600 dark:text-amber-400"
                    >
                      🚧 In Progress
                    </Badge>
                  </div>
                )}

                {/* Hover overlay with links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 bg-background/80 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="rounded-full border border-border bg-background p-3 shadow-lg transition-colors hover:bg-accent"
                      aria-label={`${project.title} Live Demo`}
                    >
                      <FiExternalLink className="h-5 w-5" />
                    </motion.a>
                  )}
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="rounded-full border border-border bg-background p-3 shadow-lg transition-colors hover:bg-accent"
                      aria-label={`${project.title} GitHub`}
                    >
                      <FiGithub className="h-5 w-5" />
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="mb-2 text-lg font-semibold text-foreground group-hover:text-indigo-500 transition-colors">
                  {project.liveUrl || project.githubUrl ? (
                    <a
                      href={project.liveUrl || project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="rounded-full bg-accent/80 text-xs font-medium"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
}
