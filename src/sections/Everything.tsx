"use client";
import { motion } from "framer-motion";

export default function EverythingSection() {
  return (
    <section className="w-full py-16 px-6 bg-white">
      {/* Section Title */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">
          Everything you can do here
        </h2>
        <p className="text-lg text-gray-600 mt-2">
          Users — Your Space, Your Rules
        </p>
      </div>

      {/* Horizontal Scrollable Cards */}
      <div className="max-w-6xl mx-auto flex overflow-x-auto gap-6 pb-4 no-scrollbar">
        {/* Card Template */}
        {[
          {
            title: "Vibe Check-in (Mood Check-in)",
            desc: "Pick from 200+ Gen Z moods like Vibing, Healing, Overthinking, or Heart-Hurty to show how you’re feeling without typing a single sentence.",
          },
          {
            title: "Anonymity that Feels Safe",
            desc: "Be yourself without fear, guilt, or judgement. Your alias profile and username let you express yourself openly while keeping your real identiy private.",
          },
          {
            title: "Connect with MHPs",
            desc: "Book 1-on-1 sessions with certified Mental Health Professionals who understand you better.",
          },
          {
            title: "Share What Feels Right",
            desc: "Post text, photos, videos, or polls — whatever helps you express yourself. Every post gets tagged so it reaches the right people.",
          },
          {
            title: "Tags That Keep Your Feed Filtered",
            desc: "We’ve introduced two types of tags for you:\nSocial Tags for fun, creativity, humour, and lifestyle.\nSupport Tags for deeper topics like anxiety, grief, burnout, or relationships.",
          },
          {
            title: "Journal Writing for Your Eyes Only",
            desc: "Write it out in your private journal. Pick from six mood-based colours to match your feelings and reflect on them later.",
          },
          {
            title: "NIRA — Your 24/7 AI Buddy",
            desc: "Always here to listen, guide, and comfort you. NIRA helps you find the right content, community, or professional — even at 3 AM.",
          },
        ].map((card, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="w-[70vw] sm:w-[280px] h-[320px] flex flex-col items-start p-6 rounded-2xl shadow-lg bg-gradient-to-br from-[#FFFEFD99] to-[#CEB7FF99] flex-shrink-0"
          >
            <h3
              className="text-lg sm:text-xl font-bold mb-3"
              style={{
                background: "linear-gradient(90deg, #3F8EFC 0%, #F52F79 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {card.title}
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
              {card.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
