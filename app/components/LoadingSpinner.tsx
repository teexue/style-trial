"use client";

import { motion } from "motion/react";

export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <motion.div
        className="relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* 外圈 */}
        <motion.div
          className="w-16 h-16 border-4 border-indigo-200 rounded-full"
          animate={{ rotate: 360 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        {/* 内圈 */}
        <motion.div
          className="absolute top-2 left-2 w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full"
          animate={{ rotate: -360 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        {/* 中心点 */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-2 h-2 bg-indigo-600 rounded-full transform -translate-x-1/2 -translate-y-1/2"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
      
      <motion.p
        className="absolute mt-24 text-indigo-600 font-medium"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        加载中...
      </motion.p>
    </div>
  );
}