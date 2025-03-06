import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Facebook, Github, Instagram, Linkedin, Mail, MessageCircle, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const{t} = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    const { name, email, message,phone } = formData;
  
    // تكوين رابط الواتساب مع البيانات المدخلة
    const phoneNumber = "201142399186"; // ضع رقم هاتفك هنا بدون "+"  
    const text = `مرحبا، أنا ${name}، بريدي الإلكتروني هو ${email}. الرسالة: ${message} رقم الهاتف: ${phone}`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
  
    // فتح واتساب
    window.open(whatsappURL, "_blank");
  };
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-8">
            {t('contact.title')}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6 text-right">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                {t('contact.name')}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-colors"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                {t('contact.email')}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-colors"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                {t('contact.phone')}
              </label>
              <input
                type="number"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-colors"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                {t('contact.message')}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-colors"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
               {t("contact.send")}
            </motion.button>
          </form>
          <div className="flex flex-wrap justify-center gap-8 mt-10">
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
      </div>
    </section>
  );
};

export default Contact;