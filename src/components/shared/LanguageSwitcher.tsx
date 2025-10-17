"use client"

import { useParams } from 'next/navigation';
import { useTransition } from 'react';
import { useRouter, usePathname } from '@/i18n/routing';
import { Button } from '@/components/ui/button';
import { Languages } from 'lucide-react';

export function LanguageSwitcher() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  const currentLocale = params.locale as string;

  function onSelectChange(nextLocale: string) {
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale }
      );
    });
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => onSelectChange(currentLocale === 'en' ? 'ar' : 'en')}
      disabled={isPending}
      className="gap-2"
    >
      <Languages className="h-4 w-4" />
      <span>{currentLocale === 'en' ? 'العربية' : 'English'}</span>
    </Button>
  );
}
