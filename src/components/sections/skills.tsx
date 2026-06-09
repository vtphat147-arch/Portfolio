"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SKILLS } from "@/lib/data";
import { SectionWrapper, SectionHeading } from "@/components/section-wrapper";
import {
  SiJavascript,
  SiTypescript,
  SiOpenjdk,
  SiSharp,
  SiHtml5,
  SiMysql,
  SiReact,
  SiNextdotjs,
  SiSap,
  SiTailwindcss,
  SiDotnet,
  SiNodedotjs,
  SiGit,
  SiDocker,
  SiPostman,
  SiVscodium,
} from "react-icons/si";
import { FiCode, FiLayers, FiTool, FiServer, FiGitMerge, FiCloud, FiLayout } from "react-icons/fi";
import { type IconType } from "react-icons";

// Map icon string identifiers to actual icon components
const iconMap: Record<string, IconType> = {
  SiJavascript,
  SiTypescript,
  SiOpenjdk,
  SiCsharp: SiSharp,
  SiHtml5,
  SiCss3: FiLayout,
  SiMysql,
  SiReact,
  SiNextdotjs,
  SiSap,
  SiTailwindcss,
  SiDotnet,
  SiNodedotjs,
  SiGit,
  SiDocker,
  SiPostman,
  SiVscodium,
  SiMicrosoftazure: FiCloud,
  // Fallback for methodology items
  workflow: FiGitMerge,
};

const categoryIcons: Record<string, IconType> = {
  code: FiCode,
  layers: FiLayers,
  wrench: FiTool,
  server: FiServer,
  workflow: FiGitMerge,
};

export function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <SectionWrapper id="skills">
      <SectionHeading
        title="Skills & Tech Stack"
        subtitle="Technologies I work with to bring ideas to life"
      />

      <div ref={ref} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((category, catIndex) => {
          const CategoryIcon = categoryIcons[category.icon] || FiCode;

          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 + catIndex * 0.1 }}
              className="glass-card glow-hover rounded-2xl p-6"
            >
              {/* Category Header */}
              <div className="mb-5 flex items-center gap-3">
                <div className="rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 p-2.5">
                  <CategoryIcon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Skill Badges */}
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, skillIndex) => {
                  const SkillIcon = iconMap[skill.icon];

                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={
                        isInView
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0.8 }
                      }
                      transition={{
                        duration: 0.3,
                        delay: 0.3 + catIndex * 0.1 + skillIndex * 0.05,
                        type: "spring",
                        bounce: 0.4,
                      }}
                      className="group flex items-center gap-2 rounded-full border border-border/60 bg-muted/50 px-3.5 py-2 text-sm font-medium text-foreground transition-all hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:text-indigo-600 dark:hover:text-indigo-400"
                    >
                      {SkillIcon && (
                        <SkillIcon className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-indigo-500" />
                      )}
                      <span>{skill.name}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
