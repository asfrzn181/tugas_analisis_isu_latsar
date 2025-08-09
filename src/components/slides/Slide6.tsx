import React from 'react';
import { motion } from 'framer-motion';
import { Users, Settings, Monitor, Globe } from 'lucide-react';

const causes = [
  {
    category: "Manusia",
    icon: Users,
    items: [
      'Adanya "zona nyaman" dengan metode manual',
      'Persepsi bahwa menulis di buku lebih simpel'
    ],
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    boneColor: "#3b82f6"
  },
  {
    category: "Metode", 
    icon: Settings,
    items: [
      'SOP masih mewajibkan tanda tangan fisik',
      'Alur kerja digital belum terdefinisi'
    ],
    color: "text-green-600",
    bgColor: "bg-green-50",
    boneColor: "#10b981"
  },
  {
    category: "Sarana",
    icon: Monitor,
    items: [
      'Belum ada alat digital pengganti yang sederhana',
      'Sistem yang terpusat belum tersedia'
    ],
    color: "text-purple-600", 
    bgColor: "bg-purple-50",
    boneColor: "#8b5cf6"
  },
  {
    category: "Lingkungan",
    icon: Globe,
    items: [
      'Budaya kerja yang masih sangat bergantung pada kertas',
      'Resistensi terhadap perubahan digital'
    ],
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    boneColor: "#f97316"
  }
];

const Slide6: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100 flex items-center justify-center section">
      <div className="container mx-auto px-6 py-12">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-blue-900 poppins mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Analisis Akar Penyebab
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-700 max-w-3xl mx-auto inter"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Diagram Fishbone - Identifikasi Penyebab Pencatatan Manual
          </motion.p>
        </motion.div>

        {/* Fishbone Structure */}
        <div className="relative max-w-7xl mx-auto overflow-x-auto">
          <div className="min-w-[1000px] h-[600px] relative">
            
            {/* Main Spine (Tulang Belakang) */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "550px" }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-1 bg-blue-900"
            />

            {/* Arrow Head */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.7 }}
              className="absolute top-1/2 transform -translate-y-1/2"
              style={{ left: 'calc(50% + 275px)', top:'top: 290px' }}
            >
              <div className="w-0 h-0 border-l-[15px] border-l-blue-900 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent"></div>
            </motion.div>

            {/* Problem Statement (Kepala Ikan) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 2.0 }}
              className="absolute top-1/2 transform -translate-y-1/2 z-10"
              style={{ left: 'calc(50% + 300px)' }}
            >
              <div className="bg-red-100 border-2 border-red-400 rounded-lg p-4 shadow-lg">
                <h3 className="font-bold text-red-900 poppins text-center whitespace-nowrap text-sm">
                  Pencatatan Manual<br/>Tidak Efektif
                </h3>
              </div>
            </motion.div>

            {/* Tulang Atas Kiri - Manusia */}
            <motion.div
              initial={{ rotate: -45, scaleX: 0 }}
              animate={{ rotate: -45, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute w-40 h-0.5 bg-blue-600 origin-right"
              style={{ top: 'calc(50% - 2px)', left: 'calc(50% - 200px)' }}
            />
            
            {/* Content Manusia */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="absolute"
              style={{ top: 'calc(50% - 140px)', left: 'calc(50% - 380px)' }}
            >
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 w-64 shadow-md">
                <div className="flex items-center mb-3">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <Users size={18} className="text-blue-600" />
                  </div>
                  <h4 className="font-bold text-blue-900 poppins text-sm">Manusia</h4>
                </div>
                <ul className="space-y-2">
                  {causes[0].items.map((item, i) => (
                    <motion.li 
                      key={i} 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 1.6 + (i * 0.1) }}
                      className="flex items-start"
                    >
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                      <span className="text-gray-700 inter text-xs leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Tulang Atas Kanan - Metode */}
            <motion.div
              initial={{ rotate: 45, scaleX: 0 }}
              animate={{ rotate: 45, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="absolute w-40 h-0.5 bg-green-600 origin-left"
              style={{ top: 'calc(50% - 2px)', left: 'calc(50% + 60px)' }}
            />
            
            {/* Content Metode */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              className="absolute"
              style={{ top: 'calc(50% - 150px)', left: 'calc(50% + 140px)' }}
            >
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 w-64 shadow-md">
                <div className="flex items-center mb-3">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <Settings size={18} className="text-green-600" />
                  </div>
                  <h4 className="font-bold text-green-900 poppins text-sm">Metode</h4>
                </div>
                <ul className="space-y-2">
                  {causes[1].items.map((item, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 1.8 + (i * 0.1) }}
                      className="flex items-start"
                    >
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                      <span className="text-gray-700 inter text-xs leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Tulang Bawah Kiri - Sarana */}
            <motion.div
              initial={{ rotate: 45, scaleX: 0 }}
              animate={{ rotate: 45, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="absolute w-40 h-0.5 bg-purple-600 origin-right"
              style={{ top: 'calc(50% + 2px)', left: 'calc(50% - 200px)' }}
            />
            
            {/* Content Sarana */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 2.0 }}
              className="absolute"
              style={{ top: 'calc(50% + 70px)', left: 'calc(50% - 380px)' }}
            >
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 w-64 shadow-md">
                <div className="flex items-center mb-3">
                  <div className="bg-purple-100 p-2 rounded-full mr-3">
                    <Monitor size={18} className="text-purple-600" />
                  </div>
                  <h4 className="font-bold text-purple-900 poppins text-sm">Sarana</h4>
                </div>
                <ul className="space-y-2">
                  {causes[2].items.map((item, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 2.0 + (i * 0.1) }}
                      className="flex items-start"
                    >
                      <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                      <span className="text-gray-700 inter text-xs leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Tulang Bawah Kanan - Lingkungan */}
            <motion.div
              initial={{ rotate: -45, scaleX: 0 }}
              animate={{ rotate: -45, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="absolute w-40 h-0.5 bg-orange-600 origin-left"
              style={{ top: 'calc(50% + 2px)', left: 'calc(50% + 60px)' }}
            />
            
            {/* Content Lingkungan */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 2.2 }}
              className="absolute"
              style={{ top: 'calc(50% + 70px)', left: 'calc(50% + 140px)' }}
            >
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 w-64 shadow-md">
                <div className="flex items-center mb-3">
                  <div className="bg-orange-100 p-2 rounded-full mr-3">
                    <Globe size={18} className="text-orange-600" />
                  </div>
                  <h4 className="font-bold text-orange-900 poppins text-sm">Lingkungan</h4>
                </div>
                <ul className="space-y-2">
                  {causes[3].items.map((item, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 2.2 + (i * 0.1) }}
                      className="flex items-start"
                    >
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                      <span className="text-gray-700 inter text-xs leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Mobile Alternative */}
        <div className="md:hidden mt-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mb-6"
          >
            <div className="bg-red-100 border-2 border-red-400 rounded-lg p-4 mx-auto max-w-sm">
              <h3 className="font-bold text-red-900 poppins">
                Pencatatan Manual Tidak Efektif
              </h3>
            </div>
          </motion.div>
          
          <div className="space-y-4">
            {causes.map((cause, index) => {
              const IconComponent = cause.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + (index * 0.2) }}
                  className={`${cause.bgColor} rounded-lg p-4 shadow-md`}
                >
                  <div className="flex items-center mb-3">
                    <div className="bg-white p-2 rounded-full mr-3 shadow-sm">
                      <IconComponent size={18} className={cause.color} />
                    </div>
                    <h4 className={`font-bold ${cause.color} poppins text-sm`}>{cause.category}</h4>
                  </div>
                  <ul className="space-y-2">
                    {cause.items.map((item, i) => (
                      <motion.li 
                        key={i} 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 1.0 + (index * 0.2) + (i * 0.1) }}
                        className="text-xs text-gray-700 inter flex items-start"
                      >
                        <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Slide6;