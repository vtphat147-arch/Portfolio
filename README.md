# 🚀 Personal Portfolio Website

A modern, elegant personal portfolio built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **shadcn/ui**.

![Portfolio Preview](./public/images/preview.png)

## ✨ Features

- **8 Sections**: Hero, About, Skills, Projects, Certifications, Experience, Contact, Footer
- **Dark / Light Mode** with smooth toggle animation
- **Smooth Scroll Animations** powered by Framer Motion
- **Glassmorphism Design** with gradient accents
- **Fully Responsive** — mobile, tablet, desktop
- **SEO Optimized** with meta tags and OpenGraph
- **Clean Architecture** with centralized data management

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 14 (App Router) | Framework |
| TypeScript | Type Safety |
| Tailwind CSS | Styling |
| Framer Motion | Animations |
| shadcn/ui | UI Components |
| next-themes | Theme Toggle |
| react-icons | Icon Library |

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css        # Global styles & CSS custom properties
│   ├── layout.tsx         # Root layout (fonts, theme, metadata)
│   └── page.tsx           # Main page assembling all sections
├── components/
│   ├── sections/
│   │   ├── navbar.tsx     # Sticky navbar with mobile menu
│   │   ├── hero.tsx       # Hero section with animated background
│   │   ├── about.tsx      # About me with photo & quick facts
│   │   ├── skills.tsx     # Skills with animated progress bars
│   │   ├── projects.tsx   # Project cards with filter tabs
│   │   ├── certifications.tsx  # Certification timeline
│   │   ├── experience.tsx # Experience & Education timeline
│   │   ├── contact.tsx    # Contact form & info
│   │   └── footer.tsx     # Footer with social links
│   ├── ui/                # shadcn/ui components
│   ├── section-wrapper.tsx # Reusable scroll animation wrapper
│   └── theme-provider.tsx # next-themes provider
└── lib/
    ├── data.ts            # ⭐ All portfolio data (edit this!)
    └── utils.ts           # Utility functions
```

## ✏️ Customization

### 1. Update Your Data

Edit `src/lib/data.ts` — this is the single source of truth for all your portfolio content:

- **Personal Info**: Name, title, tagline, email, location
- **About Text**: Your bio paragraphs
- **Skills**: Languages, frameworks, tools with proficiency levels
- **Projects**: Title, description, tech tags, links
- **Certifications**: Names, organizations, dates, credential links
- **Timeline**: Education & work experience

### 2. Add Your Photo

Replace the profile photo placeholder:
1. Add your photo to `public/images/`
2. Update `avatarUrl` in `data.ts`

### 3. Add Your Resume

Place your CV/resume PDF at `public/resume.pdf`

### 4. Update Metadata

Edit `src/app/layout.tsx` to update SEO metadata with your real name and info.

## 📦 Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

Or connect your GitHub repo to [Vercel](https://vercel.com) for automatic deployments.

## 📄 License

MIT License — feel free to use this template for your own portfolio!

---

Built with ❤️ using Next.js
