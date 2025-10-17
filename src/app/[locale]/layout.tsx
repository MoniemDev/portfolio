import type { Metadata } from "next";
import { Geist, Geist_Mono, Cairo } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic"],
});

export const metadata: Metadata = {
  title: {
    default: "Moniem - Front-end Web Developer | Portfolio",
    template: "%s | Moniem Portfolio"
  },
  description: "Professional web development services by Moniem. Specialized in creating stunning, responsive websites with React, Next.js, and modern technologies. Custom web development, e-commerce solutions, and UI/UX design.",
  keywords: ["web developer", "front-end developer", "React developer", "Next.js developer", "web design", "UI/UX design", "e-commerce development", "portfolio", "responsive websites", "مطور مواقع", "تصميم مواقع"],
  authors: [{ name: "Moniem", url: "https://yourwebsite.com" }],
  creator: "Moniem",
  publisher: "Moniem",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://yourwebsite.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en': '/en',
      'ar': '/ar',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['ar_SA'],
    url: 'https://yourwebsite.com',
    title: 'Moniem - Front-end Web Developer | Portfolio',
    description: 'Professional web development services. Specialized in React, Next.js, and modern web technologies.',
    siteName: 'Moniem Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Moniem Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moniem - Front-end Web Developer',
    description: 'Professional web development services with modern technologies',
    images: ['/twitter-image.jpg'],
    creator: '@yourusername',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Moniem',
    jobTitle: 'Front-end Web Developer',
    url: 'https://yourwebsite.com',
    sameAs: [
      'https://github.com/yourusername',
      'https://linkedin.com/in/yourusername',
      'https://twitter.com/yourusername',
    ],
    knowsAbout: ['Web Development', 'React', 'Next.js', 'TypeScript', 'UI/UX Design'],
    email: 'contact@example.com',
    description: 'Professional web developer specialized in creating stunning, responsive websites with modern technologies.',
  };

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cairo.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main>{children}</main>
            <Footer />
            <Toaster />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
