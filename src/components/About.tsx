import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { language } = useLanguage(); 
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      id="about" 
      className={`py-20 bg-gray-50 dark:bg-gray-800/50 ${
        language === "ar" ? "rtl" : "ltr"
      }`}
    >
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* 🔹 عنوان القسم - الاتجاه يتغير مع اللغة */}
          <h2
            className={`text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-8 ${
              language === "ar" ? "text-right" : "text-left"
            }`}
          >
            {t("about.title")}
          </h2>

          {/* 🔹 محتوى القسم - الاتجاه يتغير مع اللغة */}
          <div 
            className={`flex flex-col md:flex-row items-center gap-x-28 ${
              language === "ar" ? "flex-row " : "flex-row-reverse"
            }`}
          >
      
            <div className={` flex-1 ${language === "ar" ? "text-right" : "text-left"}`}>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-1">
                {t("about.description1")}
              </p>
           
            </div>
            <div className="flex-1">
              <img
                src="assets/myImg.jpeg"
                alt="Profile"
                className="rounded-full w-96 h-96 object-cover mx-auto shadow-xl"
              />
            </div>
          </div>
          
        </motion.div>
      </div>
    </section>
  );
};

export default About;
