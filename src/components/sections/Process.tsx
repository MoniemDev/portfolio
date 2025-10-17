"use client";

import { useTranslations } from 'next-intl';
import { Search, PenTool, Code, Rocket, HeadphonesIcon } from "lucide-react";

export default function Process() {
  const t = useTranslations('process');

  const steps = [
    {
      icon: Search,
      title: t('step1.title'),
      description: t('step1.description'),
    },
    {
      icon: PenTool,
      title: t('step2.title'),
      description: t('step2.description'),
    },
    {
      icon: Code,
      title: t('step3.title'),
      description: t('step3.description'),
    },
    {
      icon: Rocket,
      title: t('step4.title'),
      description: t('step4.description'),
    },
    {
      icon: HeadphonesIcon,
      title: t('step5.title'),
      description: t('step5.description'),
    },
  ];

  return (
    <section id="process" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
              {t('title')}
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Connection line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-cyan-500 to-purple-500 opacity-20" />

            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={index} className="relative mb-12 md:mb-20">
                  <div className={`flex flex-col md:flex-row items-center gap-8 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Content */}
                    <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'} text-center md:text-left`}>
                      <h3 className="text-2xl font-bold mb-2">
                        <span className="text-muted-foreground text-lg">0{index + 1}. </span>
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>

                    {/* Icon */}
                    <div className="relative z-10">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 p-0.5">
                        <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                          <Icon className="w-7 h-7 text-purple-500" />
                        </div>
                      </div>
                    </div>

                    {/* Spacer */}
                    <div className="flex-1 hidden md:block" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
