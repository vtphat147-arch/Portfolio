"use client";

import { motion } from "framer-motion";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowRight } from "react-icons/fi";

export function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-20"
    >
      {/* Animated Background Orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="hero-gradient-1 absolute -left-40 -top-40 h-[500px] w-[500px] animate-float rounded-full opacity-60" />
        <div className="hero-gradient-2 absolute -right-20 top-1/4 h-[600px] w-[600px] animate-float-delayed rounded-full opacity-50" />
        <div className="hero-gradient-3 absolute -bottom-20 left-1/3 h-[400px] w-[400px] animate-float-slow rounded-full opacity-40" />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Greeting Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-block"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-accent/50 px-4 py-1.5 text-sm font-medium text-muted-foreground backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            Available for opportunities
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          <span className="text-foreground">Hi, I&apos;m </span>
          <span className="gradient-text">{PERSONAL_INFO.name}</span>
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 text-xl font-medium text-muted-foreground sm:text-2xl md:text-3xl"
        >
          {PERSONAL_INFO.title}
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mb-10 max-w-2xl text-base text-muted-foreground/80 sm:text-lg"
        >
          {PERSONAL_INFO.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button
            size="lg"
            onClick={() => handleScroll("#projects")}
            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-8 text-white shadow-lg shadow-indigo-500/25 transition-all hover:shadow-xl hover:shadow-indigo-500/30"
          >
            View Projects
            <FiArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>

          <a
            href={PERSONAL_INFO.resumeUrl}
            download
            className="inline-flex h-9 items-center justify-center gap-1.5 rounded-full border border-border/60 bg-background px-8 text-sm font-medium backdrop-blur-sm transition-all hover:border-indigo-500/50 hover:bg-accent"
          >
            <FiDownload className="mr-2 h-4 w-4" />
            Download CV
          </a>

          <Button
            size="lg"
            variant="ghost"
            onClick={() => handleScroll("#contact")}
            className="rounded-full px-8 transition-all hover:bg-accent"
          >
            Contact Me
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center justify-center gap-4"
        >
          {[
            { icon: FiGithub, href: SOCIAL_LINKS.github, label: "GitHub" },
            { icon: FiLinkedin, href: SOCIAL_LINKS.linkedin, label: "LinkedIn" },
            { icon: FiMail, href: SOCIAL_LINKS.email, label: "Email" },
          ].map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target={social.label !== "Email" ? "_blank" : undefined}
              rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full border border-border/60 p-3 text-muted-foreground transition-colors hover:border-indigo-500/50 hover:bg-accent hover:text-foreground"
              aria-label={social.label}
            >
              <social.icon className="h-5 w-5" />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-muted-foreground/50"
        >
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <div className="h-8 w-5 rounded-full border-2 border-muted-foreground/30 p-1">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="h-1.5 w-1.5 rounded-full bg-muted-foreground/50"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
