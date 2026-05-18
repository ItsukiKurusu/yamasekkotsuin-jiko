"use client";

import { motion } from "framer-motion";
import { PhoneCall, MessageCircle } from "lucide-react";

export default function StickyBottomCta() {
  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 z-50 flex lg:hidden shadow-[0_-3px_20px_rgba(0,0,0,0.18)]"
      initial={{ y: 80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
    >
      <a
        href="tel:0540000000"
        className="flex-1 flex items-center justify-center gap-2 py-4 text-sm font-bold text-white bg-[#1a6f5a] hover:bg-[#134d3e] active:bg-[#0d3a2a] transition-colors"
      >
        <PhoneCall size={16} />
        電話で相談
      </a>
      <a
        href="https://line.me/R/ti/p/@688vrvtg"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 py-4 text-sm font-bold text-white bg-[#06c755] hover:bg-[#05b04b] active:bg-[#049c43] transition-colors"
      >
        <MessageCircle size={16} />
        LINEで相談
      </a>
    </motion.div>
  );
}
