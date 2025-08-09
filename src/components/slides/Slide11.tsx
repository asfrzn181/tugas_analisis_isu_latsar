import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Target, Users, Zap, CheckCircle } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: "Adaptif",
    description: "Merespons perubahan zaman dengan solusi digital"
  },
  {
    icon: Users,
    title: "Berorientasi Pelayanan",
    description: "Mengutamakan efisiensi dan kualitas layanan kepada ASN"
  },
  {
    icon: Heart,
    title: "BerAKHLAK",
    description: "Menerapkan nilai-nilai dasar ASN dalam setiap inovasi"
  }
];

const Slide11: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center section relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-pink-400 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-8 py-16 relative z-10">
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
            <div className="bg-white bg-opacity-20 p-6 rounded-full backdrop-blur-sm">
              <CheckCircle size={64} className="text-white" />
            </div>
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white poppins mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Kesimpulan & Komitmen
          </motion.h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-5xl mx-auto mb-16"
        >
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white border-opacity-20 shadow-2xl">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg md:text-xl lg:text-2xl text-white inter leading-relaxed text-center mb-8"
            >
              Gagasan sederhana ini adalah wujud komitmen saya untuk menjadi{' '}
              <strong className="text-yellow-300">ASN yang proaktif dan solutif</strong>, 
              sesuai dengan nilai{' '}
              <strong className="text-green-300">Adaptif</strong> dan{' '}
              <strong className="text-blue-300">Berorientasi Pelayanan</strong>{' '}
              dari Core Values <strong className="text-pink-300">BerAKHLAK</strong>.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="text-lg md:text-xl text-white inter leading-relaxed text-center"
            >
              Memulai perubahan dari hal kecil adalah langkah nyata untuk mendukung{' '}
              <strong className="text-purple-300">transformasi digital</strong> dan menjadi{' '}
              <strong className="text-yellow-300">ASN yang SMART</strong> demi mewujudkan{' '}
              <strong className="text-cyan-300">Smart Governance</strong> di Kabupaten Bangka.
            </motion.p>
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16"
        >
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 + (index * 0.2) }}
                className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-6 border border-white border-opacity-20 text-center hover:bg-opacity-20 transition-all duration-300"
              >
                <div className="bg-white bg-opacity-20 p-4 rounded-full mb-4 mx-auto w-16 h-16 flex items-center justify-center">
                  <IconComponent size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white poppins mb-3">
                  {value.title}
                </h3>
                <p className="text-white text-sm inter opacity-90 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-2xl p-8 max-w-4xl mx-auto shadow-2xl">
            <div className="flex items-center justify-center mb-4">
              <Zap size={32} className="text-white mr-3" />
              <h3 className="text-2xl md:text-3xl font-bold text-white poppins">
                Saatnya Berubah, Saatnya Berinovasi
              </h3>
            </div>
            <p className="text-white text-lg inter opacity-95">
              Dari CPNS untuk Indonesia yang lebih baik
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slide11;