"use client";

import { useTranslations } from 'next-intl';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, ShoppingCart, Layers, Palette, Wordpress, Wrench } from "lucide-react";
import { AnimatedSection, ScaleIn } from "@/components/shared/AnimatedSection";

export default function Services() {
  const t = useTranslations('services');

  const services = [
    {
      key: "webDevelopment",
      icon: Code,
    },
    {
      key: "ecommerce",
      icon: ShoppingCart,
    },
    {
      key: "webApps",
      icon: Layers,
    },
    {
      key: "uiux",
      icon: Palette,
    },
    {
      key: "wordpress",
      icon: Wordpress,
    },
    {
      key: "maintenance",
      icon: Wrench,
    },
  ];

  return (
    <section id="services" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
              {t('title')}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">{t('subtitle')}</p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <ScaleIn key={service.key} delay={index * 0.1}>
                <Card className="group border-border/40 bg-card/50 backdrop-blur hover:border-purple-500/50 transition-all h-full">
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-purple-500" />
                  </div>
                  <CardTitle>{t(`items.${service.key}.title`)}</CardTitle>
                  <CardDescription>{t(`items.${service.key}.description`)}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {[0, 1, 2, 3].map((index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">✓</span>
                        <span className="text-sm">{t(`items.${service.key}.features.${index}`)}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                </Card>
              </ScaleIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
