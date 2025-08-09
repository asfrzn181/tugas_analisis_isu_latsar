import React from 'react';
import { motion } from 'framer-motion';
import { User, Award, Users } from 'lucide-react';

const Slide1: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center section relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-900 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-700 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-blue-900 poppins mb-8 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Analisis Isu &<br />
            <span className="text-blue-700">Gagasan Kreatif</span>
          </motion.h1>
        </motion.div>

        <motion.h2 
          className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 poppins mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Implementasi Buku Ekspedisi Digital
        </motion.h2>

        <motion.p 
          className="text-xl md:text-2xl text-blue-800 font-medium mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Mewujudkan Smart Governance di BKPSDMD Kabupaten Bangka
        </motion.p>

        <motion.div 
          className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <User size={32} className="text-blue-900" />
              </div>
              <p className="text-gray-600 inter text-center">
                <strong className="block text-gray-900 mb-2">Disusun oleh:</strong>
                Muhamad Asfarezhan
              </p>
            </motion.div>

            <motion.div 
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <Award size={32} className="text-blue-900" />
              </div>
              <p className="text-gray-600 inter text-center">
                <strong className="block text-gray-900 mb-2">Jabatan:</strong>
                Penata Kelola Sistem dan Teknologi Informasi
              </p>
            </motion.div>

            <motion.div 
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <Users size={32} className="text-blue-900" />
              </div>
              <p className="text-gray-600 inter text-center">
                <strong className="block text-gray-900 mb-2">Peserta:</strong>
                Latsar CPNS Angkatan II
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slide1;