"use client";

import { PERSONAL_INFO, SOCIAL_LINKS } from "@/lib/data";
import { FiGithub, FiLinkedin, FiMail, FiHeart } from "react-icons/fi";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FiGithub, href: SOCIAL_LINKS.github, label: "GitHub", value: "vtphat147-arch" },
    { icon: FiLinkedin, href: SOCIAL_LINKS.linkedin, label: "LinkedIn", value: "vtphat147" },
    { icon: FiMail, href: SOCIAL_LINKS.email, label: "Email", value: "vtphat147@gmail.com" },
  ];

  return (
    <footer className="relative border-t border-border/40">
      {/* Gradient top border */}
      <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <Tooltip key={social.label}>
                <TooltipTrigger
                  render={
                    <motion.a
                      href={social.href}
                      target={social.label !== "Email" ? "_blank" : undefined}
                      rel={
                        social.label !== "Email" ? "noopener noreferrer" : undefined
                      }
                      whileHover={{ scale: 1.15, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="rounded-full p-2 text-muted-foreground transition-colors hover:text-foreground"
                      aria-label={social.label}
                    />
                  }
                >
                  <social.icon className="h-5 w-5" />
                </TooltipTrigger>
                <TooltipContent className="bg-indigo-600 text-white font-semibold shadow-md px-3 py-1.5 rounded-lg text-xs border border-indigo-400/20 dark:bg-indigo-500">
                  <span className="font-bold">{social.label}</span>
                  <span className="opacity-80 ml-1">({social.value})</span>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>

          {/* Built with note */}
          <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
            Built with
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <FiHeart className="h-4 w-4 text-pink-500" />
            </motion.span>
            using{" "}
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground transition-colors hover:text-indigo-500"
            >
              Next.js
            </a>
          </p>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground/60">
            © {currentYear} {PERSONAL_INFO.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
