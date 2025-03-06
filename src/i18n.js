import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  .use(HttpApi) // تحميل الترجمات من ملفات JSON
  .use(LanguageDetector) // اكتشاف لغة المستخدم
  .use(initReactI18next)
  .init({
    supportedLngs: ['en', 'ar'], // اللغات المدعومة
    fallbackLng: 'en', // اللغة الافتراضية
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
      caches: ['cookie']
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // مسار ملفات الترجمة
    }
  });

export default i18n;
