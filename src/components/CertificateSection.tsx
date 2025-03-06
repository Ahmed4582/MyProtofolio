import React from "react";
import { motion } from "framer-motion"; // ✅ استيراد framer-motion
import { useTranslation } from "react-i18next";

const CertificateSection: React.FC = () => {
    const { t } = useTranslation();
  const certificateSrc = "assets/Certificate.png"; // ✅ تأكد من وضع الصورة في public واستخدام المسار الصحيح

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = certificateSrc;
    link.download = "Certificate.png"; // ✅ تحميل الصورة
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="flex flex-col justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      <motion.div
        animate={{ scale: [1, 1.05, 1] }} // ✅ نبض خفيف (تكبير 5% فقط)
        transition={{
          duration: 1.5, // ⏳ نبض بطيء وسلس
          repeat: Infinity, // ♾ تكرار مستمر
          repeatType: "reverse", // ⬅ للعودة إلى الحجم الطبيعي بعد كل نبضة
          ease: "easeInOut", // 🌊 حركة سلسة
        }}
        className="max-w-4xl w-full bg-white dark:bg-gray-800 shadow-2xl rounded-lg overflow-hidden"
      >
        <img
          src={certificateSrc}
          alt="Certificate"
          className="w-full h-auto object-cover"
        />
      </motion.div>
      <motion.button
         whileHover={{ scale: 1.05 }}
         whileTap={{ scale: 0.95 }}>
      <button
        onClick={handleDownload}
        className="px-8 mt-14 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
        >
         {t("certificate")} 📜
      </button>
      </motion.button>
    </section>
  );
};

export default CertificateSection;
