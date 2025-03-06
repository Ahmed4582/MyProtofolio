import { Facebook, Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-200/50 shadow-xl dark:bg-gray-800/90 backdrop-blur-sm text-gray-700 dark:text-gray-300 py-8 mt-16">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* النص السفلي */}
        <p className="text-sm md:text-base mb-4 md:mb-0">
          © {new Date().getFullYear()} {t("footer.rights")} | {t("footer.by")} <span className="font-semibold text-blue-600 dark:text-blue-400">Ahmed Naser</span>
        </p>

        {/* روابط وسائل التواصل */}
        <div className="flex gap-8">
          <a href="https://github.com/Ahmed4582" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
            <Github className="w-5 h-5 md:w-6 md:h-6" />
          </a>
          <a href="https://www.linkedin.com/in/ahmed-naser-5075232b1" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
            <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
          </a>
          <a href="mailto:ahmed269117@gmail.com?subject=Hello&body=I want to contact you" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
            <Mail className="w-5 h-5 md:w-6 md:h-6" />
          </a>
          <a href="https://www.facebook.com/share/19wWAGWk4S/?mibextid=wwXIfr" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
            <Facebook className="w-5 h-5 md:w-6 md:h-6" />
          </a>
          <a href="https://wa.me/201142399186" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
            <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
