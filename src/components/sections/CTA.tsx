"use client";

import { useTranslations } from 'next-intl';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  const t = useTranslations('cta');

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="relative rounded-2xl bg-gradient-to-br from-purple-500 via-purple-600 to-cyan-500 p-12 text-center text-white overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">{t('title')}</h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              {t('description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" variant="secondary" className="group">
                <a href="#contact">
                  {t('button')}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <p className="text-sm text-white/80">{t('guarantee')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
