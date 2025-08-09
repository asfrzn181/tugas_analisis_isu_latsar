import React from 'react';
import { motion } from 'framer-motion';
import { Clock, AlertCircle, TrendingUp } from 'lucide-react';

const factors = [
  {
    icon: Clock,
    title: "Urgency",
    subtitle: "Tingkat Kemendesakan",
    description: "Tingkat kemendesakan isu untuk diselesaikan dalam waktu dekat",
    color: "bg-red-100 text-red-900",
    borderColor: "border-red-200"
  },
  {
    icon: AlertCircle,
    title: "Seriousness",
    subtitle: "Tingkat Keseriusan",
    description: "Tingkat keseriusan dampak yang ditimbulkan terhadap organisasi",
    color: "bg-orange-100 text-orange-900",
    borderColor: "border-orange-200"
  },
  {
    icon: TrendingUp,
    title: "Growth",
    subtitle: "Tingkat Pertumbuhan",
    description: "Tingkat potensi masalah akan memburuk jika dibiarkan tanpa solusi",
    color: "bg-green-100 text-green-900",
    borderColor: "border-green-200"
  }
];

const Slide3: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center section">
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
            Metode Penapisan Isu
          </motion.h1>

          <motion.p 
            className="text-xl text-gray-700 max-w-4xl mx-auto inter leading-relaxed mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Untuk menentukan isu prioritas secara objektif, digunakan metode analisis USG 
            dengan menilai tiga faktor utama:
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {factors.map((factor, index) => {
            const IconComponent = factor.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + (index * 0.2) }}
                className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 group hover:-translate-y-2"
              >
                <div className="text-center">
                  <div className={`${factor.color} p-6 rounded-full mb-6 mx-auto w-24 h-24 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent size={40} />
                  </div>
                  
                  <h3 className="text-3xl font-bold text-blue-900 poppins mb-2">
                    {factor.title}
                  </h3>
                  
                  <h4 className="text-lg font-semibold text-gray-700 poppins mb-4">
                    {factor.subtitle}
                  </h4>
                  
                  <p className="text-gray-600 inter leading-relaxed">
                    {factor.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-12"
        >
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-blue-900 poppins mb-3">
              Formula Analisis USG
            </h3>
            <p className="text-lg text-gray-700 inter">
              <strong>Total Skor = U + S + G</strong>
            </p>
            <p className="text-sm text-gray-600 inter mt-2">
              Semakin tinggi skor total, semakin prioritas isu tersebut untuk diselesaikan
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slide3;