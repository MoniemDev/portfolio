import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';

export default getRequestConfig(async ({requestLocale}) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  const messages = locale === 'ar'
    ? (await import('../../messages/ar.json')).default
    : (await import('../../messages/en.json')).default;

  return {
    locale,
    messages
  };
});
