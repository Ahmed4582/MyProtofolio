import { motion } from "framer-motion";
import {
  Briefcase,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 md:px-8 w-full max-w-6xl mx-auto pt-24 pb-10"
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-12">
          {/* النصوص والأزرار */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex-1 text-center md:text-right"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              {t("hero.hello")}
              <span className="text-blue-600 dark:text-blue-400">{t("hero.name")}</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8">
              {t("hero.des")}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-6 sm:px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                {t("hero.contact")}
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="px-6 sm:px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
              >
                {t("hero.projects")}
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://drive.google.com/file/d/1JmzOyJbxE7kgmBHPOfCinKSWz6mPyt3D/view?usp=sharing"
                className="px-6 sm:px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
              >
                {t("hero.download")}
              </motion.a>
            </div>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
              <a href="https://github.com/Ahmed4582" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                <Github className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a href="https://www.linkedin.com/in/ahmed-naser-5075232b1" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a href="mailto:ahmed269117@gmail.com?subject=Hello&body=I want to contact you" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                <Mail className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a href="https://www.facebook.com/share/19wWAGWk4S/?mibextid=wwXIfr" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                <Facebook className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a href="https://wa.me/201142399186" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a href="https://mostaql.com/u/ahm_117" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                <Briefcase className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a href="https://www.instagram.com/xahmed_naserx_?igsh=ZzZqdTMyM2VybDNl&utm_source=qr" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                <Instagram className="w-5 h-5 md:w-6 md:h-6" />
              </a>
            </div>
          </motion.div>

          {/* صورة البطل */}
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="flex-1 flex justify-center"
          >
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Developer workspace"
              className="rounded-2xl shadow-2xl w-4/5 md:w-full max-w-sm md:max-w-md lg:max-w-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
