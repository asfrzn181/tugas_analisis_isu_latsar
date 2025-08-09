import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Star, Award, Linkedin } from 'lucide-react';

const Slide12: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100 flex items-center justify-center section relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-400 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-blue-400 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-pink-400 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-36 h-36 bg-indigo-400 rounded-full blur-xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="container mx-auto px-8 py-16 relative z-10 text-center">
        {/* Floating icons animation */}
        <motion.div
          animate={{ 
            y: [-10, 10, -10],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-20 text-purple-400 opacity-30"
        >
          <Star size={64} />
        </motion.div>

        <motion.div
          animate={{ 
            y: [10, -10, 10],
            rotate: [0, -5, 5, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-32 right-32 text-blue-400 opacity-30"
        >
          <Award size={48} />
        </motion.div>

        <motion.div
          animate={{ 
            y: [-15, 15, -15],
            rotate: [0, 10, -10, 0]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-40 left-40 text-pink-400 opacity-30"
        >
          <Heart size={56} />
        </motion.div>

        {/* Main content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex justify-center mb-12"
          >
            <div className="relative">
              <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 p-8 rounded-full shadow-2xl">
                <Heart size={80} className="text-white" />
              </div>
              
              {/* Pulsing rings */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 rounded-full border-4 border-purple-400"
              ></motion.div>
              
              <motion.div
                animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                className="absolute inset-0 rounded-full border-4 border-pink-400"
              ></motion.div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 mb-12"
          >
            Terima Kasih
          </motion.h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-white border-opacity-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="mb-8"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Muhamad Asfarezhan
              </h2>
              
              <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl p-6 mb-6">
                <p className="text-lg md:text-xl text-gray-800 font-medium">
                  Penata Kelola Sistem dan Teknologi Informasi
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-6 mb-6">
                <p className="text-lg md:text-xl text-gray-800 font-medium">
                  Peserta Latsar CPNS Angkatan II
                </p>
              </div>

              {/* LinkedIn Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.7 }}
                className="mb-6"
              >
                <a
                  href="https://www.linkedin.com/in/asfejn181/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <Linkedin size={24} />
                  <span>Connect on LinkedIn</span>
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              <p className="text-lg text-gray-600 mb-6">
                BKPSDMD Kabupaten Bangka
              </p>
              
              <div className="text-sm text-gray-500">
                <p>Semoga gagasan ini dapat berkontribusi nyata</p>
                <p>untuk kemajuan pelayanan kepegawaian yang lebih baik</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Floating thank you messages in different languages */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 2, delay: 2 }}
          className="absolute inset-0 pointer-events-none"
        >
          {['Thank You', 'Terima Kasih', 'Gracias', 'Merci', 'Danke'].map((text, index) => (
            <motion.div
              key={index}
              animate={{
                y: [-20, -40, -20],
                x: [0, 10, -10, 0],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 4 + index,
                repeat: Infinity,
                delay: index * 0.8,
                ease: "easeInOut"
              }}
              className={`absolute text-2xl font-bold text-purple-400 ${
                index === 0 ? 'top-1/4 left-1/4' :
                index === 1 ? 'top-1/3 right-1/4' :
                index === 2 ? 'bottom-1/3 left-1/5' :
                index === 3 ? 'bottom-1/4 right-1/3' :
                'top-2/3 left-1/2'
              }`}
              style={{ transform: 'translate(-50%, -50%)' }}
            >
              {text}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Slide12;