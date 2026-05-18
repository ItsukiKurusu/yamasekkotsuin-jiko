"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronRight, AlertTriangle } from "lucide-react";

const steps = [
  {
    num: "1",
    icon: "🚨",
    highlight: "最優先",
    highlightColor: "bg-red-500",
    title: "警察に電話する",
    body: "事故が起きたらまず110番へ。物損・人身に関わらず必ず届け出が必要です。",
  },
  {
    num: "2",
    icon: "🤝",
    highlight: "その場で確認",
    highlightColor: "bg-[#e8520a]",
    title: "相手の情報を確認する",
    body: "相手の氏名・連絡先・車のナンバー・保険会社情報を必ず記録してください。",
  },
  {
    num: "3",
    icon: "📞",
    highlight: "当日OK",
    highlightColor: "bg-[#1a6f5a]",
    title: "やま接骨院に連絡する",
    body: "お体に異変を感じたらすぐにご連絡を。事故当日から受付・相談が可能です。",
  },
  {
    num: "4",
    icon: "📋",
    highlight: "後日でもOK",
    highlightColor: "bg-gray-500",
    title: "保険会社に連絡する",
    body: "ご自身の保険会社への連絡は後日でも可能です。書類のことは当院スタッフにご相談ください。",
  },
];

export default function AccidentFlow() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const warningRef = useRef(null);
  const warningInView = useInView(warningRef, { once: true, margin: "-60px" });

  return (
    <section className="py-20 md:py-24">
      <div className="max-w-5xl mx-auto px-5">
        {/* Section header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-[12px] font-bold tracking-[0.18em] text-[#1a6f5a] uppercase mb-2">
            After Accident
          </span>
          <h2 className="text-[clamp(22px,4vw,32px)] font-black leading-[1.4] text-gray-800 mb-3">
            もしも事故に遭ってしまったら…
            <br />
            <span className="text-[#e8520a]">まずやること4ステップ</span>
          </h2>
          <div className="w-12 h-1 bg-[#e8520a] rounded-full mx-auto mb-4" />
          <p className="text-[14px] text-gray-500 max-w-lg mx-auto">
            事故直後は混乱してしまいますが、落ち着いてこの手順で対応しましょう。
          </p>
        </motion.div>

        {/* Steps: horizontal on lg, vertical on mobile */}
        <div ref={ref} className="relative">
          {/* Desktop: horizontal layout */}
          <div className="hidden lg:flex items-start gap-0 justify-center">
            {steps.map((step, i) => (
              <div key={i} className="flex items-start">
                <motion.div
                  className="flex flex-col items-center text-center w-[220px] px-4"
                  initial={{ opacity: 0, y: 24 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.55, delay: i * 0.12 }}
                >
                  {/* Number circle */}
                  <div className="w-14 h-14 rounded-full bg-[#1a6f5a] text-white flex flex-col items-center justify-center font-black shadow-[0_4px_16px_rgba(26,111,90,0.35)] mb-3">
                    <span className="text-[9px] tracking-widest">STEP</span>
                    <span className="text-xl leading-none">{step.num}</span>
                  </div>

                  <div className="text-3xl mb-2">{step.icon}</div>

                  <span className={`inline-block ${step.highlightColor} text-white text-[11px] font-bold px-3 py-0.5 rounded mb-2`}>
                    {step.highlight}
                  </span>

                  <div className="text-[14px] font-black text-gray-800 mb-2 leading-snug">
                    {step.title}
                  </div>
                  <div className="text-[12px] text-gray-500 leading-relaxed">
                    {step.body}
                  </div>
                </motion.div>

                {/* Arrow connector */}
                {i < steps.length - 1 && (
                  <motion.div
                    className="flex-shrink-0 mt-6"
                    initial={{ opacity: 0, x: -8 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: i * 0.12 + 0.3 }}
                  >
                    <ChevronRight size={28} className="text-[#1a6f5a]" />
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile: vertical layout */}
          <div className="flex flex-col gap-6 lg:hidden">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                className="flex gap-5 items-start"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.1 }}
              >
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#1a6f5a] text-white flex flex-col items-center justify-center font-black shadow-[0_3px_12px_rgba(26,111,90,0.3)]">
                    <span className="text-[8px] tracking-widest">STEP</span>
                    <span className="text-base leading-none">{step.num}</span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-0.5 h-8 bg-gradient-to-b from-[#1a6f5a] to-transparent mt-1" />
                  )}
                </div>

                <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{step.icon}</span>
                    <span className={`inline-block ${step.highlightColor} text-white text-[10px] font-bold px-2.5 py-0.5 rounded`}>
                      {step.highlight}
                    </span>
                  </div>
                  <div className="text-[14px] font-black text-gray-800 mb-1">
                    {step.title}
                  </div>
                  <div className="text-[12px] text-gray-500 leading-relaxed">
                    {step.body}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Warning box */}
        <motion.div
          ref={warningRef}
          initial={{ opacity: 0, y: 20 }}
          animate={warningInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 bg-[#fff3ee] border border-[#e8520a]/20 rounded-2xl px-6 py-5"
        >
          <div className="flex items-start gap-3">
            <AlertTriangle size={20} className="text-[#e8520a] flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-[14px] font-bold text-[#e8520a] mb-1">
                「痛みがないから大丈夫」は危険です！
              </p>
              <p className="text-[13px] text-gray-600 leading-relaxed">
                むち打ちなどの症状は、事故直後は痛みを感じないことがあります。数日後・数週間後に症状が現れるケースも多く、放置すると慢性化・後遺症のリスクが高まります。
                <strong className="text-gray-800">事故に遭ったら症状がなくても必ず受診しましょう。</strong>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
