"use client";

import { useTranslations } from 'next-intl';
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  const t = useTranslations('about');

  const technologies = [
    { name: t('tools.html'), icon: "🌐" },
    { name: t('tools.css'), icon: "🎨" },
    { name: t('tools.javascript'), icon: "⚡" },
    { name: t('tools.react'), icon: "⚛️" },
    { name: t('tools.vue'), icon: "💚" },
    { name: t('tools.wordpress'), icon: "📝" },
    { name: t('tools.luancy'), icon: "🎯" },
    { name: t('tools.vscode'), icon: "💻" },
    { name: t('tools.cursor'), icon: "🖱️" },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">{t('title')}</h2>
          <p className="text-xl text-muted-foreground">{t('subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="border-border/40 bg-card/50 backdrop-blur">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed mb-6">{t('description')}</p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {t('commitment')}
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/40 bg-card/50 backdrop-blur">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6">{t('technologies')}</h3>
              <div className="grid grid-cols-3 gap-4">
                {technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center p-4 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                  >
                    <span className="text-3xl mb-2">{tech.icon}</span>
                    <span className="text-xs text-center">{tech.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
