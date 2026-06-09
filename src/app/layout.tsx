import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// TODO: Update metadata with your actual information
export const metadata: Metadata = {
  title: "Your Name — Full-Stack Developer Portfolio", // TODO: Replace with your name
  description:
    "Personal portfolio of a passionate full-stack developer. Explore projects, skills, and experience in modern web development.", // TODO: Customize
  keywords: [
    "developer",
    "portfolio",
    "full-stack",
    "web development",
    "react",
    "next.js",
    "typescript",
  ],
  authors: [{ name: "Your Name" }], // TODO: Replace with your name
  openGraph: {
    title: "Your Name — Full-Stack Developer Portfolio",
    description:
      "Personal portfolio showcasing projects, skills, and experience in modern web development.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Name — Full-Stack Developer Portfolio",
    description:
      "Personal portfolio showcasing projects, skills, and experience.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            {children}
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
