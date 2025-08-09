import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Clock, Shield, Zap, CheckCircle } from 'lucide-react';

const benefits = [
  {
    icon: DollarSign,
    title: "Implementasi Mudah & Tanpa Biaya",
    description: "Menggunakan teknologi yang sudah ada dan gratis (Google Form, QR Code Generator)",
    color: "bg-green-500",
    bgColor: "bg-green-50",
    borderColor: "border-green-200"
  },
  {
    icon: Clock,
    title: "Efisien & Cepat",
    description: "Memangkas waktu antrean dan proses tulis manual dari 5 menit menjadi kurang dari 2 menit",
    color: "bg-blue-500",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200"
  },
  {
    icon: Shield,
    title: "Data Akurat & Aman",
    description: "Data digital mudah dicari, direkapitulasi, dan aman dari kerusakan fisik atau hilang",
    color: "bg-purple-500",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200"
  },
  {
    icon: Zap,
    title: "Inovatif & Realistis",
    description: "Wujud nyata Smart ASN yang bisa diinisiasi langsung oleh seorang CPNS",
    color: "bg-orange-500",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200"
  }
];

const Slide9: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center section">
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
            <div className="bg-gradient-to-r from-green-500 to-blue-500 p-6 rounded-full shadow-2xl">
              <CheckCircle size={64} className="text-white" />
            </div>
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-blue-900 poppins mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Keunggulan dan Manfaat
          </motion.h1>

          <motion.p 
            className="text-xl text-gray-700 max-w-4xl mx-auto inter leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Solusi digital yang memberikan dampak nyata bagi efisiensi dan modernisasi layanan kepegawaian
          </motion.p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 + (index * 0.2) }}
                className={`${benefit.bgColor} ${benefit.borderColor} border-2 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2`}
              >
                <div className="flex flex-col h-full">
                  {/* Icon and Title */}
                  <div className="flex items-start mb-4">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 1.0 + (index * 0.2) }}
                      className={`${benefit.color} p-4 rounded-xl mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent size={32} className="text-white" />
                    </motion.div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 poppins mb-3">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-700 inter leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Summary Impact */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-8 md:p-12 shadow-2xl max-w-5xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white poppins mb-6">
              Dampak Transformasi Digital
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6 text-white">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.8 }}
                className="text-center"
              >
                <div className="text-4xl font-bold poppins mb-2">60%</div>
                <div className="text-lg inter opacity-90">Penghematan Waktu</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.0 }}
                className="text-center"
              >
                <div className="text-4xl font-bold poppins mb-2">100%</div>
                <div className="text-lg inter opacity-90">Akurasi Data</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.2 }}
                className="text-center"
              >
                <div className="text-4xl font-bold poppins mb-2">0</div>
                <div className="text-lg inter opacity-90">Biaya Implementasi</div>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.4 }}
              className="text-white text-lg inter mt-6 opacity-90"
            >
              Langkah kecil menuju Smart Governance yang memberikan dampak besar
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slide9;