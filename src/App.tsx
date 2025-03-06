import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { LanguageProvider } from './contexts/LanguageContext';
import CertificateSection from './components/CertificateSection';
import Footer from './components/Footer';

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    // 🔹 فحص localStorage أو استخدام إعدادات النظام
    if (localStorage.getItem('theme')) {
      return localStorage.getItem('theme') === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <main>
          <Hero />
          <About />
          <CertificateSection/>
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer/>
      </div>
    </LanguageProvider>
  );
}

export default App;
