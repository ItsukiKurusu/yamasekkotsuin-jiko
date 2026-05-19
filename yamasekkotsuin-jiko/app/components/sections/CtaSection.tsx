"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { PhoneCall, MessageCircle, ExternalLink } from "lucide-react";

export default function CtaSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="cta"
      className="py-20 md:py-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(140deg, #072d5c 0%, #0e64ae 60%, #1a7fc4 100%)",
      }}
    >
      {/* BG pattern */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Animated glow orb */}
      <motion.div
        className="absolute pointer-events-none rounded-full"
        animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        style={{
          width: "400px",
          height: "400px",
          top: "-120px",
          right: "-100px",
          background: "radial-gradient(circle, rgba(255,224,102,0.35) 0%, transparent 65%)",
          filter: "blur(30px)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-5">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 28, scale: 0.97 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 text-center max-w-2xl mx-auto"
        >
          {/* Tag */}
          <span className="inline-block bg-[#e8520a] text-white text-[11px] font-bold px-4 py-1 rounded mb-5 tracking-widest">
            無料相談受付中
          </span>

          {/* Title */}
          <h2 className="text-[clamp(26px,4.5vw,36px)] font-black text-gray-800 mb-3 leading-snug">
            交通事故後の不調、
            <br />
            まずはお気軽にご相談ください
          </h2>

          <p className="text-[17px] text-gray-500 mb-7 leading-relaxed">
            お電話・LINEにてご相談・ご予約を受け付けています。
            <br />
            事故直後から受付可能。費用は一切かかりません。
          </p>

          {/* Phone number */}
          <motion.a
            href="tel:0540000000"
            className="block text-[clamp(26px,5vw,38px)] font-black text-gray-800 hover:text-[#0e64ae] transition-colors duration-200 tracking-tight mb-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            📞 054-295-5595
          </motion.a>

          <p className="text-[15px] text-gray-400 mb-7">
            営業時間：平日 9:00〜20:00 ／ 土曜 9:00〜15:00
            <span className="mx-1 opacity-50">|</span>
            定休日：日・祝・不定休
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:0540000000"
              className="inline-flex items-center justify-center gap-2 bg-[#e8520a] hover:bg-[#c4410a] text-white font-bold px-6 py-4 rounded-full transition-all duration-200 hover:-translate-y-0.5 shadow-[0_4px_16px_rgba(232,82,10,0.35)] text-[16px]"
            >
              <PhoneCall size={16} />
              電話で相談する
            </a>
            <a
              href="https://line.me/R/ti/p/@688vrvtg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#06c755] hover:bg-[#05b04b] text-white font-bold px-6 py-4 rounded-full transition-all duration-200 hover:-translate-y-0.5 shadow-[0_4px_16px_rgba(6,199,85,0.35)] text-[16px]"
            >
              <MessageCircle size={16} />
              LINEで相談する（24時間）
            </a>
            <a
              href="https://yama-sekkotsuin.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#0e64ae] border-2 border-[#0e64ae] hover:bg-[#0e64ae] hover:text-white font-bold px-6 py-4 rounded-full transition-all duration-200 hover:-translate-y-0.5 text-[16px]"
            >
              <ExternalLink size={15} />
              院のトップページへ
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
