"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/lib/data";
import { SectionWrapper, SectionHeading } from "@/components/section-wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  FiSend,
  FiMail,
  FiGithub,
  FiLinkedin,
  FiMapPin,
  FiLoader,
} from "react-icons/fi";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

export function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Integrate with your email service (Formspree, EmailJS, or API route)
    // For now, simulate a submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <SectionWrapper id="contact">
      <SectionHeading
        title="Get In Touch"
        subtitle="Have a project in mind or want to chat? I'd love to hear from you!"
      />

      <div
        ref={ref}
        className="mx-auto grid max-w-4xl gap-10 md:grid-cols-5 md:gap-14"
      >
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:col-span-3"
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <label
                  htmlFor="contact-name"
                  className="text-sm font-medium text-foreground"
                >
                  Name
                </label>
                <Input
                  id="contact-name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="rounded-xl border-border/60 bg-muted/30 backdrop-blur-sm focus:border-indigo-500 focus:ring-indigo-500/20"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="contact-email"
                  className="text-sm font-medium text-foreground"
                >
                  Email
                </label>
                <Input
                  id="contact-email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="rounded-xl border-border/60 bg-muted/30 backdrop-blur-sm focus:border-indigo-500 focus:ring-indigo-500/20"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="contact-message"
                className="text-sm font-medium text-foreground"
              >
                Message
              </label>
              <Textarea
                id="contact-message"
                placeholder="Tell me about your project or just say hi..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                rows={6}
                className="rounded-xl border-border/60 bg-muted/30 backdrop-blur-sm focus:border-indigo-500 focus:ring-indigo-500/20"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="w-full rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg shadow-indigo-500/25 transition-all hover:shadow-xl hover:shadow-indigo-500/30 disabled:opacity-70"
            >
              {isSubmitting ? (
                <>
                  <FiLoader className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : submitted ? (
                "✓ Message Sent!"
              ) : (
                <>
                  <FiSend className="mr-2 h-4 w-4" />
                  Send Message
                </>
              )}
            </Button>

            {submitted && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-sm font-medium text-green-600 dark:text-green-400"
              >
                Thank you! I&apos;ll get back to you soon. ✨
              </motion.p>
            )}
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col gap-6 md:col-span-2"
        >
          <div>
            <h3 className="mb-4 text-lg font-semibold text-foreground">
              Let&apos;s connect
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              I&apos;m always open to discussing new projects, creative ideas,
              or opportunities to be part of your vision.
            </p>
          </div>

          {/* Contact details */}
          <div className="space-y-4">
            {[
              {
                icon: FiMail,
                label: "Email",
                value: PERSONAL_INFO.email,
                href: SOCIAL_LINKS.email,
              },
              {
                icon: FiMapPin,
                label: "Location",
                value: PERSONAL_INFO.location,
              },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10">
                  <item.icon className="h-4 w-4 text-indigo-500" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm font-medium text-foreground transition-colors hover:text-indigo-500"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-foreground">
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Social
            </p>
            <div className="flex gap-3">
              {[
                {
                  icon: FiGithub,
                  href: SOCIAL_LINKS.github,
                  label: "GitHub",
                  value: "vtphat147-arch",
                },
                {
                  icon: FiLinkedin,
                  href: SOCIAL_LINKS.linkedin,
                  label: "LinkedIn",
                  value: "vtphat147",
                },
                {
                  icon: FiMail,
                  href: SOCIAL_LINKS.email,
                  label: "Email",
                  value: "vtphat147@gmail.com",
                },
              ].map((social) => (
                <Tooltip key={social.label}>
                  <TooltipTrigger
                    render={
                      <motion.a
                        href={social.href}
                        target={social.label !== "Email" ? "_blank" : undefined}
                        rel={
                          social.label !== "Email"
                            ? "noopener noreferrer"
                            : undefined
                        }
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/60 text-muted-foreground transition-colors hover:border-indigo-500/50 hover:bg-accent hover:text-foreground"
                        aria-label={social.label}
                      />
                    }
                  >
                    <social.icon className="h-4 w-4" />
                  </TooltipTrigger>
                  <TooltipContent className="bg-indigo-600 text-white font-semibold shadow-md px-3 py-1.5 rounded-lg text-xs border border-indigo-400/20 dark:bg-indigo-500">
                    <span className="font-bold">{social.label}</span>
                    <span className="opacity-80 ml-1">({social.value})</span>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
