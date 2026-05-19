"use client";

import Image from "next/image";
import heroImage from "../../public/hero.png";
import { motion } from "framer-motion";
import { PhoneCall, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex items-end overflow-hidden mt-20 md:mt-24">
      {/* Background image */}
      <Image
        src={heroImage}
        alt="やま接骨院 院内・施術イメージ"
        className="w-full h-auto object-contain"
        priority
        quality={90}
      />

      {/* 下部グラデーション（CTAボタンの可読性確保） */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to top, rgba(7,45,92,0.7) 0%, rgba(7,45,92,0.2) 30%, transparent 55%), linear-gradient(to left, rgba(7,45,92,0.75) 0%, rgba(7,45,92,0.3) 35%, transparent 60%)",
        }}
      />

      {/* CTA buttons */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl mx-auto px-5 pb-10 flex flex-wrap gap-4 justify-end"
        >
          <a
            href="tel:0540000000"
            className="inline-flex items-center gap-2.5 bg-[#e8520a] hover:bg-[#c4410a] text-white font-bold px-8 py-4 rounded-full transition-all duration-200 hover:-translate-y-1 shadow-[0_4px_24px_rgba(232,82,10,0.45)] text-[16px] whitespace-nowrap"
          >
            <PhoneCall size={18} className="flex-shrink-0" />
            今すぐ電話する
          </a>
          <a
            href="https://line.me/R/ti/p/@688vrvtg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#06c755] hover:bg-[#05b04b] text-white font-bold px-8 py-4 rounded-full transition-all duration-200 hover:-translate-y-1 shadow-[0_4px_24px_rgba(6,199,85,0.4)] text-[16px] whitespace-nowrap"
          >
            <MessageCircle size={18} className="flex-shrink-0" />
            LINEで相談する（24時間）
          </a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-8 z-10 flex flex-col items-center gap-1 text-white/60"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-0.5 h-10 bg-white/30 rounded-full" />
        <span className="text-[10px] tracking-widest">SCROLL</span>
      </motion.div>
    </section>
  );
}
