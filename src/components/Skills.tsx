import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Layout, Database, Github as Git, Terminal, Package } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const skillsData = [
  {
    category: 'Frontend Basics',
    skills: ['HTML5', 'CSS3', 'JavaScript', "TypeScript", "Tailwind", "Bootstrap"],
    icon: Layout,
    color: 'text-orange-500',
  },
  {
    category: 'Frontend Frameworks',
    skills: ['React.js', 'Next.js'],
    icon: Code2,
    color: 'text-blue-500',
  },
  {
    category: 'State Management',
    skills: ['Redux', 'Context API'],
    icon: Database,
    color: 'text-purple-500',
  },
  {
    category: 'Version Control',
    skills: ['Git', 'GitHub', 'GitLab'],
    icon: Git,
    color: 'text-green-500',
  },
  {
    category: 'Build Tools',
    skills: ['Webpack', 'Vite', 'npm/yarn'],
    icon: Package,
    color: 'text-red-500',
  },
  {
    category: 'Command Line',
    skills: ['Bash', 'Terminal', 'Shell Scripts'],
    icon: Terminal,
    color: 'text-yellow-500',
  },
];

const Skills = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-12">
            {t("skills.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillsData.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }} // يبدأ غير مرئي مع نزوله 20 بكسل
                animate={inView ? { opacity: 1, y: 0 } : {}} // عند ظهوره، يصبح مرئيًا ويعود لمكانه
                transition={{ duration: 0.6, delay: index * 0.1 }} // حركة سلسة مع تأخير حسب الفهرس
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white border border-gray-200 dark:border-gray-900 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl  transition-shadow"
              >
                <div className="flex items-center justify-center mb-4">
                  <category.icon className={`w-12 h-12 ${category.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                  {category.category}
                </h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;