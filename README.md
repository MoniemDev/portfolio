# Moniem Portfolio Website

A modern, bilingual (English/Arabic) portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Features a space black theme, smooth animations, and a responsive design.

## Features

- ✨ Modern, clean design with space black theme
- 🌐 Bilingual support (English & Arabic) with RTL layout
- 🎨 Smooth animations and transitions
- 📱 Fully responsive design
- 🌙 Dark/Light mode support
- 📧 Contact form with API integration
- 📝 Blog section
- 🚀 Built with Next.js 15 (App Router)
- 💎 TypeScript for type safety
- 🎯 SEO optimized

## Sections

1. **Hero** - Eye-catching introduction with gradient text and stats
2. **About Me** - Personal information and technologies used
3. **Services** - Six service cards showcasing what you offer
4. **Projects** - Portfolio of work with links and dates
5. **CTA** - Call-to-action section to encourage contact
6. **Contact** - Contact form and contact information
7. **Blog** - Blog page with articles
8. **Footer** - Social links and quick navigation

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Custom components inspired by shadcn/ui
- **Animations:** CSS animations
- **Internationalization:** Built-in bilingual support

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/        # Contact form API route
│   │   ├── blog/              # Blog page
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── components/
│   │   ├── layout/            # Layout components (Header, Footer)
│   │   ├── sections/          # Page sections (Hero, About, etc.)
│   │   ├── shared/            # Shared components
│   │   └── ui/                # UI components (Button, Card)
│   ├── lib/
│   │   └── utils.ts           # Utility functions
│   ├── messages/
│   │   ├── en.json            # English translations
│   │   └── ar.json            # Arabic translations
│   └── types/
│       └── index.ts           # TypeScript type definitions
```

## Customization

### Update Personal Information

1. **Projects**: Edit the `projects` array in `src/app/page.tsx` to add your real projects with links and dates.

2. **Contact Information**: Update email, phone, and social media links in:
   - `src/components/sections/Contact.tsx`
   - `src/components/layout/Footer.tsx`

3. **About Me**: Edit the content in `src/messages/en.json` and `src/messages/ar.json`.

4. **Stats**: Update the numbers in `src/components/sections/Hero.tsx` (years of experience, projects completed, clients).

5. **Blog Posts**: Add real blog posts in `src/app/blog/page.tsx`.

### Color Theme

The color scheme is defined in `src/app/globals.css`. Main colors:
- Primary: `#8B5CF6` (Purple)
- Secondary: `#06B6D4` (Cyan)
- Background Dark: `#0A0A0A` (Space Black)
- Background Light: `#FFFFFF`

## Email Integration

To enable actual email sending for the contact form:

1. Install an email service (Resend recommended):
```bash
npm install resend
```

2. Update `src/app/api/contact/route.ts` with your email service configuration.

3. Add environment variables to `.env.local`:
```env
EMAIL_API_KEY=your_api_key_here
EMAIL_FROM=noreply@yourdomain.com
EMAIL_TO=contact@yourdomain.com
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy!

### Other Platforms

Build the production version:
```bash
npm run build
npm start
```

## To-Do / Future Enhancements

- [ ] Implement full next-intl for complete i18n support
- [ ] Add theme toggle for dark/light mode switching
- [ ] Integrate Framer Motion for advanced animations
- [ ] Add blog post detail pages
- [ ] Connect to a CMS for blog content
- [ ] Add testimonials section with real client feedback
- [ ] Implement Google Analytics
- [ ] Add SEO metadata for all pages
- [ ] Create sitemap and robots.txt

## License

This project is created for Moniem's personal portfolio.

## Support

For questions or support, contact: contact@moniem.dev
