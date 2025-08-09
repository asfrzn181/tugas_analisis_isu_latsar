import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Zap, Target, Sparkles } from 'lucide-react';

const Slide7: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center section relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-blue-500 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-8 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 rounded-full shadow-2xl">
                <Lightbulb size={64} className="text-white" />
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute -top-2 -right-2"
              >
                <Sparkles size={24} className="text-yellow-500" />
              </motion.div>
            </div>
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 poppins mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Gagasan Kreatif
          </motion.h1>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-12 border border-purple-100"
          >
            <div className="text-center">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-3xl md:text-4xl font-bold text-gray-900 poppins mb-6"
              >
                Buku Ekspedisi Digital
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl p-6 mb-8"
              >
                <p className="text-xl md:text-2xl text-gray-800 inter leading-relaxed font-medium">
                  Implementasi Pencatatan Serah Terima Dokumen 
                  Berbasis <strong className="text-blue-600">Google Form</strong> dan <strong className="text-purple-600">QR Code</strong>
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="flex items-center justify-center mb-8"
              >
                <Target size={24} className="text-blue-600 mr-3" />
                <p className="text-lg text-gray-700 inter">
                  <strong>Tujuan:</strong> Menggantikan buku manual dengan sistem digital yang efisien, 
                  akurat, dan mudah dilacak untuk modernisasi layanan
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center justify-center mb-4">
                <Zap size={32} className="text-white mr-3" />
                <h3 className="text-2xl md:text-3xl font-bold text-white poppins">
                  Solusi Cerdas, Sederhana, dan Realistis
                </h3>
              </div>
              <p className="text-white text-lg inter opacity-90">
                Inovasi yang dapat diimplementasikan langsung dengan teknologi yang sudah ada
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="mt-12 grid md:grid-cols-3 gap-6"
          >
            <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-blue-100">
              <div className="bg-blue-100 p-3 rounded-full mb-3 mx-auto w-16 h-16 flex items-center justify-center">
                <Zap size={24} className="text-blue-600" />
              </div>
              <h4 className="font-bold text-gray-900 poppins mb-2">Teknologi Modern</h4>
              <p className="text-sm text-gray-600 inter">QR Code & Google Form</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-green-100">
              <div className="bg-green-100 p-3 rounded-full mb-3 mx-auto w-16 h-16 flex items-center justify-center">
                <Target size={24} className="text-green-600" />
              </div>
              <h4 className="font-bold text-gray-900 poppins mb-2">Solusi Tepat Sasaran</h4>
              <p className="text-sm text-gray-600 inter">Mengatasi masalah nyata</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-purple-100">
              <div className="bg-purple-100 p-3 rounded-full mb-3 mx-auto w-16 h-16 flex items-center justify-center">
                <Sparkles size={24} className="text-purple-600" />
              </div>
              <h4 className="font-bold text-gray-900 poppins mb-2">Inovatif & Praktis</h4>
              <p className="text-sm text-gray-600 inter">Mudah diimplementasikan</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Slide7;