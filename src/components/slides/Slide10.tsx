import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, TestTube, BarChart } from 'lucide-react';

const phases = [
  {
    icon: Calendar,
    phase: "Tahap 1",
    duration: "Minggu 1",
    title: "Pengembangan & Persiapan",
    description: "Form dan QR Code",
    activities: [
      "Membuat Google Form untuk pencatatan",
      "Generate QR Code yang terlink ke form",
      "Setup Google Sheets untuk database",
      "Testing internal sistem"
    ],
    color: "bg-blue-500",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200"
  },
  {
    icon: Users,
    phase: "Tahap 2",
    duration: "Minggu 2",
    title: "Sosialisasi Internal",
    description: "kepada Atasan Langsung",
    activities: [
      "Presentasi konsep kepada Kepala Bidang",
      "Demo sistem yang telah dibuat",
      "Mendapat persetujuan implementasi",
      "Penyesuaian berdasarkan feedback"
    ],
    color: "bg-green-500",
    bgColor: "bg-green-50",
    borderColor: "border-green-200"
  },
  {
    icon: TestTube,
    phase: "Tahap 3",
    duration: "Minggu 3",
    title: "Uji Coba Terbatas",
    description: "(Pilot Project) di Bidang Mutasi",
    activities: [
      "Implementasi di satu bidang khusus",
      "Training singkat untuk staff terkait",
      "Monitoring penggunaan harian",
      "Pengumpulan feedback dan data"
    ],
    color: "bg-purple-500",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200"
  },
  {
    icon: BarChart,
    phase: "Tahap 4",
    duration: "Minggu 4",
    title: "Evaluasi Hasil",
    description: "& Usulan Implementasi Penuh",
    activities: [
      "Analisis data dan performa sistem",
      "Laporan hasil pilot project",
      "Usulan ekspansi ke bidang lain",
      "Rencana pengembangan lanjutan"
    ],
    color: "bg-orange-500",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200"
  }
];

const Slide10: React.FC = () => {
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
            Rencana Aksi
          </motion.h1>

          <motion.h2 
            className="text-2xl md:text-3xl font-semibold text-gray-700 poppins mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Tahapan Implementasi
          </motion.h2>

          <motion.p 
            className="text-lg text-gray-600 max-w-4xl mx-auto inter leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Roadmap implementasi yang terstruktur dan realistis untuk memastikan kesuksesan proyek
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Timeline line - hidden on mobile, visible on desktop */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-green-500 via-purple-500 to-orange-500 opacity-30"></div>

          <div className="space-y-12 lg:space-y-16">
            {phases.map((phase, index) => {
              const IconComponent = phase.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 + (index * 0.2) }}
                  className={`relative flex flex-col lg:flex-row items-center ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot - desktop only */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.0 + (index * 0.2) }}
                    className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 z-10"
                  >
                    <div className={`${phase.color} p-4 rounded-full shadow-xl`}>
                      <IconComponent size={32} className="text-white" />
                    </div>
                  </motion.div>

                  {/* Content card */}
                  <div className={`w-full lg:w-5/12 ${isEven ? 'lg:pr-8' : 'lg:pl-8'}`}>
                    <div className={`${phase.bgColor} ${phase.borderColor} border-2 rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group`}>
                      {/* Mobile icon */}
                      <div className="lg:hidden flex justify-center mb-4">
                        <div className={`${phase.color} p-4 rounded-full`}>
                          <IconComponent size={32} className="text-white" />
                        </div>
                      </div>

                      <div className="text-center lg:text-left">
                        <div className="flex items-center justify-center lg:justify-start mb-4">
                          <span className={`${phase.color} text-white px-4 py-2 rounded-full font-bold poppins mr-3`}>
                            {phase.phase}
                          </span>
                          <span className="text-gray-600 font-semibold inter">
                            {phase.duration}
                          </span>
                        </div>

                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 poppins mb-2">
                          {phase.title}
                        </h3>
                        
                        <p className="text-lg text-gray-700 poppins mb-6">
                          {phase.description}
                        </p>

                        <ul className="space-y-3">
                          {phase.activities.map((activity, actIndex) => (
                            <motion.li
                              key={actIndex}
                              initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: 1.2 + (index * 0.2) + (actIndex * 0.1) }}
                              className="flex items-start text-gray-700 inter"
                            >
                              <div className={`w-2 h-2 ${phase.color.replace('bg-', 'bg-')} rounded-full mt-2 mr-3 flex-shrink-0`}></div>
                              {activity}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Spacer for desktop layout */}
                  <div className="hidden lg:block w-2/12"></div>
                </motion.div>
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
              Total Waktu Implementasi: 6-8 Minggu
            </h3>
            <p className="text-white text-lg inter opacity-90">
              Dengan pendekatan bertahap dan terukur, risiko kegagalan diminimalisir 
              dan peluang keberhasilan dimaksimalkan
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slide10;