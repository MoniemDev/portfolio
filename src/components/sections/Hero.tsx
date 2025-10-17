"use client";

import { useTranslations } from 'next-intl';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const t = useTranslations('hero');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 pointer-events-none" />

      {/* Animated circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <motion.div
        className="container mx-auto max-w-6xl relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center space-y-8">
          {/* Greeting */}
          <div className="space-y-4">
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground">
              {t('greeting')}
            </motion.p>
            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-primary via-purple-500 to-secondary bg-clip-text text-transparent">
              {t('name')}
            </motion.h1>
            <motion.h2 variants={itemVariants} className="text-2xl md:text-4xl lg:text-5xl font-semibold text-foreground">
              {t('title')}
            </motion.h2>
          </div>

          {/* Description */}
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('description')}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#contact">
              <Button size="lg" className="w-full sm:w-auto">
                {t('cta')}
              </Button>
            </a>
            <a href="#projects">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                {t('secondaryCta')}
              </Button>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="space-y-2">
              <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                5+
              </p>
              <p className="text-sm md:text-base text-muted-foreground">
                {t('stats.experience')}
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                50+
              </p>
              <p className="text-sm md:text-base text-muted-foreground">
                {t('stats.projects')}
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                40+
              </p>
              <p className="text-sm md:text-base text-muted-foreground">
                {t('stats.clients')}
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-muted-foreground"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
