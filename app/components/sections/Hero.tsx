"use client";

import Image from "next/image";
import heroImage from "../../public/hero.jpg";
import { motion } from "framer-motion";
import { PhoneCall, MessageCircle, Shield, Zap, User, Scale } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const features = [
  { icon: Shield, accent: "窓口負担0円", sub: "自賠責保険適用" },
  { icon: Zap, accent: "事故当日", sub: "から受付可能" },
  { icon: User, accent: "院長", sub: "が直接施術" },
  { icon: Scale, accent: "弁護士", sub: "と連携" },
];

export default function Hero() {
  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden mt-16">
      {/* Background image */}
      <Image
        src={heroImage}
        alt="やま接骨院 院内・施術イメージ"
        fill
        className="object-cover object-center"
        priority
        quality={85}
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(140deg, rgba(7,45,92,0.92) 0%, rgba(10,77,132,0.87) 35%, rgba(14,100,174,0.82) 70%, rgba(26,127,196,0.78) 100%)",
        }}
      />

      {/* Subtle cross/plus pattern */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Aceternity-style animated spotlight orb */}
      <motion.div
        className="absolute pointer-events-none rounded-full"
        animate={{
          x: ["-8%", "8%", "-8%"],
          y: ["-8%", "8%", "-8%"],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        style={{
          width: "70%",
          height: "70%",
          top: "-15%",
          left: "15%",
          background:
            "radial-gradient(ellipse at center, rgba(255,224,102,0.13) 0%, rgba(255,200,50,0.05) 40%, transparent 70%)",
          filter: "blur(32px)",
        }}
      />

      {/* Second accent orb (bottom-right) */}
      <motion.div
        className="absolute pointer-events-none rounded-full"
        animate={{
          x: ["5%", "-5%", "5%"],
          y: ["5%", "-5%", "5%"],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{
          width: "40%",
          height: "40%",
          bottom: "-10%",
          right: "-5%",
          background:
            "radial-gradient(ellipse at center, rgba(26,127,196,0.3) 0%, transparent 65%)",
          filter: "blur(48px)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-5 py-20">
        <div className="text-white">
          {/* Badge pill */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <span className="inline-block bg-[#e8520a] text-white text-xs font-bold px-5 py-1.5 rounded-full mb-6 tracking-widest uppercase shadow-[0_2px_10px_rgba(232,82,10,0.5)]">
              交通事故治療 専門対応
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-[clamp(28px,5vw,52px)] font-black leading-[1.3] mb-6 tracking-tight"
            style={{ textShadow: "0 2px 16px rgba(0,0,0,0.35)" }}
          >
            交通事故後の
            <span className="text-[#ffe066] relative">
              痛み・不調
              <motion.span
                className="absolute -bottom-1 left-0 right-0 h-[3px] bg-[#ffe066]/50 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </span>
            、<br />
            一人で抱え込まないでください。
          </motion.h1>

          {/* Description */}
          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-[15px] opacity-90 max-w-[500px] mb-8 leading-[1.9]"
            style={{ textShadow: "0 1px 4px rgba(0,0,0,0.3)" }}
          >
            事故直後の処置から、むち打ち・痺れ・倦怠感の治療、
            <br className="hidden sm:block" />
            保険手続きのサポートまで。
            <br className="hidden sm:block" />
            やま接骨院が、回復への道を全力でサポートします。
          </motion.p>

          {/* Feature badges */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-3 mb-9"
          >
            {features.map((f, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-white/10 border border-white/30 rounded-full px-4 py-2 text-sm font-bold backdrop-blur-sm hover:bg-white/20 transition-colors duration-200"
              >
                <f.icon size={13} className="text-[#ffe066] flex-shrink-0" />
                <span>
                  <span className="text-[#ffe066]">{f.accent}</span>
                  {f.sub}
                </span>
              </div>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-4"
          >
            <a
              href="tel:0540000000"
              className="inline-flex items-center gap-2 bg-[#e8520a] hover:bg-[#c4410a] text-white font-bold px-7 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-1 shadow-[0_4px_20px_rgba(232,82,10,0.45)] text-[15px]"
            >
              <PhoneCall size={17} />
              今すぐ電話する
            </a>
            <a
              href="https://line.me/R/ti/p/@688vrvtg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#06c755] hover:bg-[#05b04b] text-white font-bold px-7 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-1 shadow-[0_4px_20px_rgba(6,199,85,0.4)] text-[15px]"
            >
              <MessageCircle size={17} />
              LINEで相談する（24時間）
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/5 to-transparent pointer-events-none z-10" />
    </section>
  );
}
