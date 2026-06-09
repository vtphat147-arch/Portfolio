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

// SEO Metadata
export const metadata: Metadata = {
  title: "Võ Thành Phát — Software Engineer Portfolio",
  description:
    "Personal portfolio of Võ Thành Phát, a Software Engineer with experience in building enterprise SAP Fiori solutions, ReactJS, and ASP.NET. Explore my projects, skills, and achievements.",
  keywords: [
    "Võ Thành Phát",
    "Software Engineer",
    "SAP Fiori",
    "ReactJS",
    "ASP.NET",
    "developer",
    "portfolio",
    "web development",
    "next.js",
    "typescript",
  ],
  authors: [{ name: "Võ Thành Phát" }],
  openGraph: {
    title: "Võ Thành Phát — Software Engineer Portfolio",
    description:
      "Personal portfolio of Võ Thành Phát showcasing enterprise projects, skills, and experience in software engineering.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Võ Thành Phát — Software Engineer Portfolio",
    description:
      "Personal portfolio of Võ Thành Phát showcasing enterprise projects, skills, and experience in software engineering.",
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
