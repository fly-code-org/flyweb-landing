"use client";

import { motion } from "framer-motion";

interface ComingSoonModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ComingSoonModal({ open, onClose }: ComingSoonModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Background blur */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="relative bg-white rounded-2xl shadow-xl max-w-md w-full mx-4 p-8 flex flex-col items-center text-center"
      >
        <h2 className="text-2xl font-bold text-purple-600 mb-3">
          🚀 Coming Soon
        </h2>
        <p className="text-gray-600 mb-6">
          We’re working hard to bring the <span className="font-semibold">FLY App</span> to you.  
          Stay tuned, it’s worth the wait! ✨
        </p>
        <button
          onClick={onClose}
          className="px-6 py-2 rounded-xl text-white font-semibold shadow-md 
            bg-gradient-to-r from-purple-500 to-fuchsia-500 
            hover:opacity-90 transition"
        >
          Okay
        </button>
      </motion.div>
    </div>
  );
}
