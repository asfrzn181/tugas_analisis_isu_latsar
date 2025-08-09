import React from 'react';
import { motion } from 'framer-motion';
import { Target, CheckCircle, Lightbulb } from 'lucide-react';

const Slide5: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center section">
      <div className="container mx-auto px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center mb-8"
          >
            <div className="bg-blue-100 p-6 rounded-full">
              <Target size={64} className="text-blue-900" />
            </div>
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-blue-900 poppins mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Isu Utama yang Diangkat
          </motion.h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl shadow-2xl p-8 md:p-12 text-white text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex justify-center mb-6"
            >
              <div className="bg-white bg-opacity-20 p-4 rounded-full">
                <Lightbulb size={48} className="text-white" />
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold poppins leading-tight"
            >
              "Belum Efektifnya Proses Pencatatan Serah Terima Dokumen Kepegawaian 
              di Bidang Mutasi yang Masih Bersifat Manual"
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
          >
            <div className="flex items-start mb-6">
              <div className="bg-green-100 p-3 rounded-full mr-4 flex-shrink-0">
                <CheckCircle size={32} className="text-green-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 poppins mb-4">
                  Justifikasi Pemilihan Isu
                </h3>
                <p className="text-lg text-gray-700 inter leading-relaxed">
                  Isu ini dipilih karena bersifat sangat <strong>teknis</strong>, <strong>operasional</strong>, 
                  dan solusinya paling relevan dengan peran sebagai <strong>Penata Kelola Sistem TI</strong>. 
                  Isu ini berdampak langsung pada efisiensi layanan harian dan memiliki risiko tinggi 
                  terhadap keamanan data.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="text-center p-6 bg-blue-50 rounded-xl"
              >
                <div className="text-3xl font-bold text-blue-900 poppins mb-2">Teknis</div>
                <p className="text-gray-700 inter text-sm">Sesuai keahlian IT</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 }}
                className="text-center p-6 bg-green-50 rounded-xl"
              >
                <div className="text-3xl font-bold text-green-900 poppins mb-2">Operasional</div>
                <p className="text-gray-700 inter text-sm">Berdampak harian</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.8 }}
                className="text-center p-6 bg-purple-50 rounded-xl"
              >
                <div className="text-3xl font-bold text-purple-900 poppins mb-2">Strategis</div>
                <p className="text-gray-700 inter text-sm">Keamanan data</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slide5;