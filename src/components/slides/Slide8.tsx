import React from 'react';
import { motion } from 'framer-motion';
import { QrCode, Smartphone, FileSpreadsheet, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: QrCode,
    title: "PINDAI",
    subtitle: "Scan",
    description: "ASN memindai QR Code yang ada di meja layanan menggunakan ponsel",
    color: "bg-blue-500",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200"
  },
  {
    icon: Smartphone,
    title: "ISI",
    subtitle: "Fill",
    description: "ASN mengisi form singkat data serah terima di ponselnya (proses < 1 menit)",
    color: "bg-green-500",
    bgColor: "bg-green-50",
    borderColor: "border-green-200"
  },
  {
    icon: FileSpreadsheet,
    title: "TERCATAT",
    subtitle: "Record",
    description: "Data otomatis tercatat real-time di Google Sheets sebagai buku ekspedisi digital baru",
    color: "bg-purple-500",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200"
  }
];

const Slide8: React.FC = () => {
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
            Mekanisme Kerja
          </motion.h1>

          <motion.h2 
            className="text-2xl md:text-3xl font-semibold text-gray-700 poppins mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Sederhana & Efektif
          </motion.h2>

          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto inter leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Tiga langkah mudah untuk mengubah proses pencatatan manual menjadi digital
          </motion.p>
        </motion.div>

        {/* Process Flow */}
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <React.Fragment key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 + (index * 0.3) }}
                    className={`${step.bgColor} ${step.borderColor} border-2 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 max-w-sm w-full group hover:-translate-y-2`}
                  >
                    <div className="text-center">
                      {/* Icon */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 1.0 + (index * 0.3) }}
                        className={`${step.color} p-6 rounded-full mb-6 mx-auto w-24 h-24 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <IconComponent size={48} className="text-white" />
                      </motion.div>

                      {/* Step Number */}
                      <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <span className="text-xl font-bold text-gray-700 poppins">{index + 1}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-gray-900 poppins mb-2">
                        {step.title}
                      </h3>
                      <h4 className="text-lg text-gray-600 poppins mb-4">
                        ({step.subtitle})
                      </h4>

                      {/* Description */}
                      <p className="text-gray-700 inter leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>

                  {/* Arrow between steps (only for desktop) */}
                  {index < steps.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 1.2 + (index * 0.3) }}
                      className="hidden lg:block"
                    >
                      <div className="bg-blue-100 p-4 rounded-full">
                        <ArrowRight size={32} className="text-blue-600" />
                      </div>
                    </motion.div>
                  )}

                  {/* Arrow for mobile (vertical) */}
                  {index < steps.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 1.2 + (index * 0.3) }}
                      className="lg:hidden"
                    >
                      <div className="bg-blue-100 p-3 rounded-full transform rotate-90">
                        <ArrowRight size={24} className="text-blue-600" />
                      </div>
                    </motion.div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.0 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 max-w-4xl mx-auto shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white poppins mb-4">
              Proses Total: Kurang dari 2 Menit
            </h3>
            <p className="text-white text-lg inter opacity-90">
              Dari manual yang memakan waktu hingga 5 menit, kini hanya butuh waktu kurang dari 2 menit 
              dengan akurasi data yang lebih tinggi
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slide8;