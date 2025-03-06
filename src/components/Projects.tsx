
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {  ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const projects = [
  {
    title: 'Carbon',
    description: 'موقع الكتروني لبيع وشراء السيارات الفاخره ويحتوي علي تغير العملات ودفع اقساط ويحتوي علي WishList ويحتوي علي قسم خاص بخدمات العملاء',
    image: 'assets/Carbon.png',
    technologies: ['ReactJs', 'Tailwind css', 'Framer Motion' , "Redux", "i18next"],
    demo: 'https://caarbonrentacar.com/Desktop',
  },
  {
    title: 'Brand Design',
    description: 'تطبيق لعرض اعمال زخرف وديكورات للمنازل ويحتوي عل اللغتين العربيه والانجليزيه ',
    image: 'assets/Rawise.png',
    technologies: ['React',"Redux", 'TailwindCSS', 'i18next'],
    demo: 'https://rawasicrystal.com/'
  },
  {
    title: 'ElAstoria',
    description: 'تطبيق لعرض منتجات خاص بالادوات الحداديه وموقع سلسل الاستخدام وريسبونسيف ف جميع الشااشات ويدعم اللغتين ',
    image: 'assets/Aostora.png',
    technologies: ['React',"Redux", 'TailwindCSS', 'i18next'],
    demo: 'https://store.esutraaljawda.com.sa/Desktop'
  },
  {
    title: 'TO-Do-List',
    description: 'تطبيق ويب تفاعلي لإدارة المهام اليومية مع إمكانية تتبع الإنجاز والمواعيد النهائية',
    image: 'assets/ToDoList.png',
    technologies: ['HTML', 'JavaScript', 'CSS'],
     demo: 'https://ahmed4582.github.io/ToDoListJS/'
  },
  {
    title: 'Moroccan platform',
    description: 'موقع الكتروني لتسويق الالكتروني ويحتوي علي جميع منتجاات من ملابس وسياات الخخخ ويوجد بيها wishList ويوجد بيها  قسم للتعليقات',
    image: 'assets/Morco.png',
    technologies: ['ReactJs', 'Tailwind css', 'Framer Motion' , "Redux", "i18next"],
    demo: 'https://92.113.27.167:9785/Desktop'
  },
  {
    title: 'InstarLLC',
    description: 'هذا موقع تعريفي لشركة رائده ف مجال التكنولوجيا والذكاء الاصطناعي ويحتوي علي مشاريعهم وكيفيه التواصل معاهم',
    image: 'assets/LLC.png',
    technologies: ['React.js', 'Sass', 'Redux'],
    demo: 'https://intishaarllc.com/'
  },
  {
    title: 'ElFahd',
    description: 'هذا موقع تعريفي لمكتب محاماه كبير بالسعودية',
    image: 'assets/Fahid.png',
    technologies: ['React.js', 'Tailwind', "Framer Motion", 'Redux'],
    demo: 'https://elfahdapp.vercel.app/'
  },
  {
    title: 'Akar_24',
    description: 'هذا موقع تعريفي لشركة رائده ف العقارات والمباني  بالسعودية ويحتوي هذا الموقع علي الوضع النهاري والليلي ويدعم الترجمه',
    image: 'assets/Akar24.png',
    technologies: ['React.js', 'Tailwind', "Framer Motion", 'Redux', "i18next"],
    demo: 'https://akar-24.vercel.app/'
  },
  {
    title: 'MedicalPlateForm',
    description: 'هذا موقع لمجمع عيادات ومراكز ويحتوي علي جميع الخدمات الطبيه ويدعم اللغتين',
    image: 'assets/Medical.png',
    technologies: ['React.js', 'Tailwind', 'Redux', "i18next"],
    demo: 'https://medical-woad.vercel.app/'
  },
  {
    title: 'UI DashBoard',
    description: 'قوالب لدايزين لوحه تحكم ',
    image: 'assets/UIDashboard.png',
    technologies: ['HTML', 'JavaScript', 'CSS'],
    demo: 'https://ahmed4582.github.io/DashBoard-Design/HTML/Dash.html'
  },
  {
    title: 'AgeClac',
    description: 'موقع بسيط لحساب العمر',
    image: 'assets/AgeCalc.png',
    technologies: ['HTML', 'JavaScript', 'CSS', "BootStrap"],
    demo: 'https://age-clac.vercel.app/'
  },
  {
    title: 'Saudi Media',
    description: 'هذا موقع للمنديات بالسعودية',
    image: 'assets/Saudi.png',
    technologies: ['React.js', 'Tailwind', "Framer Motion", 'Redux'],
    demo: 'https://sauida-media.vercel.app/'
  },
];

const Projects = () => {
  const {t} = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-6">
        <motion.div
        
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-12">
            {t('projects.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
              whileHover={{ scale: 1.05, y: -10 }}
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                   <button
                       className="px-6 py-2 bg-blue-700/90 text-white rounded-lg transition-colors flex items-center gap-2"
                      onClick={() => window.open(project.demo, "_blank", "noopener,noreferrer")}>
                         <ExternalLink className="w-5 h-5 text-white" />
                         <span>{t("projects.show")}</span>
                    </button>
                  </div>
                </div>
                <div className="p-6 text-right">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-end">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;