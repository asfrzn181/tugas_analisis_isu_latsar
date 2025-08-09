import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal } from 'lucide-react';

const tableData = [
  {
    isu: "KGB PPPK belum tersistem",
    u: 4,
    s: 4,
    g: 3,
    total: 11,
    peringkat: "IV",
    priority: false
  },
  {
    isu: "Inkonsistensi Informasi",
    u: 4,
    s: 4,
    g: 4,
    total: 12,
    peringkat: "III",
    priority: false
  },
  {
    isu: "Akses Informasi Sulit",
    u: 4,
    s: 3,
    g: 4,
    total: 11,
    peringkat: "IV",
    priority: false
  },
  {
    isu: "Bukti Pengambilan Berkas Manual",
    u: 4,
    s: 5,
    g: 4,
    total: 13,
    peringkat: "I",
    priority: true
  },
  {
    isu: "Kesenjangan Kompetensi Digital",
    u: 3,
    s: 5,
    g: 5,
    total: 13,
    peringkat: "I",
    priority: true
  },
  {
    isu: "Kurangnya Kesadaran Rekam Jejak",
    u: 3,
    s: 4,
    g: 3,
    total: 10,
    peringkat: "V",
    priority: false
  }
];

const Slide4: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100 flex items-center justify-center section">
      <div className="container mx-auto px-8 py-16">
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
            Hasil Analisis USG
          </motion.h1>

          <motion.p 
            className="text-xl text-gray-700 max-w-3xl mx-auto inter leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Berikut adalah hasil penilaian dan prioritas setiap isu berdasarkan metode USG
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-7xl mx-auto"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-blue-900 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-bold poppins">Isu</th>
                  <th className="px-4 py-4 text-center font-bold poppins">U</th>
                  <th className="px-4 py-4 text-center font-bold poppins">S</th>
                  <th className="px-4 py-4 text-center font-bold poppins">G</th>
                  <th className="px-4 py-4 text-center font-bold poppins">Total</th>
                  <th className="px-6 py-4 text-center font-bold poppins">Peringkat</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + (index * 0.1) }}
                    className={`border-b hover:bg-gray-50 transition-colors ${
                      row.priority ? 'bg-yellow-50 border-yellow-200' : ''
                    }`}
                  >
                    <td className="px-6 py-4 text-gray-900 inter font-medium">
                      <div className="flex items-center">
                        {row.priority && (
                          <Trophy size={20} className="text-yellow-600 mr-2 flex-shrink-0" />
                        )}
                        {row.isu}
                      </div>
                    </td>
                    <td className="px-4 py-4 text-center font-semibold text-gray-700">{row.u}</td>
                    <td className="px-4 py-4 text-center font-semibold text-gray-700">{row.s}</td>
                    <td className="px-4 py-4 text-center font-semibold text-gray-700">{row.g}</td>
                    <td className="px-4 py-4 text-center">
                      <span className={`font-bold text-lg px-3 py-1 rounded-full ${
                        row.priority 
                          ? 'bg-green-100 text-green-800' 
                          : 'text-gray-700'
                      }`}>
                        {row.total}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center">
                        {row.priority && (
                          <Medal size={18} className="text-yellow-600 mr-2" />
                        )}
                        <span className={`font-bold text-lg px-3 py-1 rounded-full ${
                          row.priority 
                            ? 'bg-blue-100 text-blue-800' 
                            : 'text-gray-700'
                        }`}>
                          {row.peringkat}
                        </span>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-center mt-8"
        >
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl shadow-lg p-6 max-w-4xl mx-auto border border-yellow-200">
            <div className="flex items-center justify-center mb-3">
              <Trophy size={24} className="text-yellow-600 mr-2" />
              <h3 className="text-xl font-bold text-yellow-800 poppins">
                Isu Prioritas Utama (Peringkat I)
              </h3>
            </div>
            <p className="text-yellow-700 inter">
              Dua isu dengan skor tertinggi (13 poin) yang akan menjadi fokus penyelesaian
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slide4;