"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: ReactNode;
  id: string;
  className?: string;
  /** Whether to use full-width (no max-width container) */
  fullWidth?: boolean;
}

/**
 * Reusable section wrapper that provides:
 * - Scroll-triggered fade-in/slide-up animation via Framer Motion
 * - Consistent section padding and max-width
 * - Section ID for nav anchor linking
 */
export function SectionWrapper({
  children,
  id,
  className,
  fullWidth = false,
}: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={cn(
        "relative py-20 md:py-28",
        !fullWidth && "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8",
        className
      )}
    >
      {children}
    </motion.section>
  );
}

/**
 * Section heading with consistent styling and gradient accent
 */
export function SectionHeading({
  title,
  subtitle,
  className,
}: {
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={cn("mb-12 text-center md:mb-16", className)}>
      <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && (
        <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">
          {subtitle}
        </p>
      )}
      <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
    </div>
  );
}
