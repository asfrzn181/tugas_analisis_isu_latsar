import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Users, Info, FileText, Monitor, Shield } from 'lucide-react';

const issues = [
  {
    icon: Users,
    title: "KGB PPPK belum tersistem",
    description: "Kenaikan Gaji Berkala PPPK masih dilakukan manual"
  },
  {
    icon: Info,
    title: "Inkonsistensi Informasi",
    description: "Informasi yang diberikan kepada ASN tidak konsisten"
  },
  {
    icon: FileText,
    title: "Akses Informasi Sulit",
    description: "Sulitnya akses informasi layanan kepegawaian"
  },
  {
    icon: AlertTriangle,
    title: "Bukti Pengambilan Manual",
    description: "Bukti pengambilan berkas masih menggunakan buku ekspedisi manual"
  },
  {
    icon: Monitor,
    title: "Kesenjangan Digital",
    description: "Kesenjangan kompetensi digital (Digital Divide)"
  },
  {
    icon: Shield,
    title: "Kurangnya Kesadaran",
    description: "Kurangnya kesadaran ASN terhadap rekam jejak digital"
  }
];

const Slide2: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100 flex items-center justify-center section">
      <div className="container mx-auto px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-blue-900 poppins mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Latar Belakang
          </motion.h1>
          
          <motion.h2 
            className="text-2xl md:text-3xl font-semibold text-gray-700 poppins mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            6 Isu Strategis di Unit Kerja
          </motion.h2>

          <motion.p 
            className="text-lg text-gray-600 max-w-4xl mx-auto inter leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Dalam upaya mendukung terwujudnya Smart Governance, telah teridentifikasi enam isu strategis 
            di lingkungan BKPSDMD berdasarkan perspektif Manajemen ASN dan Smart ASN.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {issues.map((issue, index) => {
            const IconComponent = issue.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + (index * 0.1) }}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 group hover:-translate-y-2"
              >
                <div className="flex flex-col items-center text-center h-full">
                  <div className="bg-blue-100 group-hover:bg-blue-200 transition-colors p-4 rounded-full mb-4">
                    <IconComponent size={32} className="text-blue-900" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 poppins mb-3 min-h-[3rem] flex items-center">
                    {issue.title}
                  </h3>
                  
                  <p className="text-gray-600 inter text-sm leading-relaxed flex-grow">
                    {issue.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Slide2;