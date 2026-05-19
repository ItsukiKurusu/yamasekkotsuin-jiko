"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AlertTriangle, ShieldAlert, ClipboardCheck, PhoneCall, FileText, LucideIcon } from "lucide-react";

const steps: {
  num: string;
  Icon: LucideIcon;
  iconBg: string;
  iconShadow: string;
  highlight: string;
  highlightColor: string;
  title: string;
  body: string;
}[] = [
  {
    num: "1",
    Icon: ShieldAlert,
    iconBg: "from-red-400 to-red-600",
    iconShadow: "shadow-red-200",
    highlight: "最優先",
    highlightColor: "bg-red-500",
    title: "警察に電話する",
    body: "事故が起きたらまず110番へ。物損・人身に関わらず必ず届け出が必要です。",
  },
  {
    num: "2",
    Icon: ClipboardCheck,
    iconBg: "from-orange-400 to-[#e8520a]",
    iconShadow: "shadow-orange-200",
    highlight: "その場で確認",
    highlightColor: "bg-[#e8520a]",
    title: "相手の情報を確認する",
    body: "相手の氏名・連絡先・車のナンバー・保険会社情報を必ず記録してください。",
  },
  {
    num: "3",
    Icon: PhoneCall,
    iconBg: "from-blue-400 to-[#0e64ae]",
    iconShadow: "shadow-blue-200",
    highlight: "当日OK",
    highlightColor: "bg-[#0e64ae]",
    title: "やま接骨院に連絡する",
    body: "お体に異変を感じたらすぐにご連絡を。事故当日から受付・相談が可能です。",
  },
  {
    num: "4",
    Icon: FileText,
    iconBg: "from-gray-400 to-gray-600",
    iconShadow: "shadow-gray-200",
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
          <span className="inline-block text-[13px] font-bold tracking-[0.18em] text-[#0e64ae] uppercase mb-2">
            After Accident
          </span>
          <h2 className="text-[clamp(26px,5vw,40px)] font-black leading-[1.4] text-gray-800 mb-3">
            もしも事故に遭ってしまったら…
            <br />
            <span className="text-[#e8520a]">まずやること4ステップ</span>
          </h2>
          <div className="w-12 h-1 bg-[#e8520a] rounded-full mx-auto mb-4" />
          <p className="text-[16px] text-gray-500 max-w-lg mx-auto">
            事故直後は混乱してしまいますが、落ち着いてこの手順で対応しましょう。
          </p>
        </motion.div>

        {/* Steps: single vertical layout */}
        <div ref={ref} className="flex flex-col gap-5 max-w-2xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="flex gap-5 items-start"
              initial={{ opacity: 0, x: -24 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1 }}
            >
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-[#0e64ae] text-white flex flex-col items-center justify-center font-black shadow-[0_4px_16px_rgba(14,100,174,0.35)]">
                  <span className="text-[9px] tracking-widest">STEP</span>
                  <span className="text-xl leading-none">{step.num}</span>
                </div>
                {i < steps.length - 1 && (
                  <div className="w-0.5 h-10 bg-gradient-to-b from-[#0e64ae] to-transparent mt-1" />
                )}
              </div>

              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-6 flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${step.iconBg} flex items-center justify-center flex-shrink-0 shadow-md ${step.iconShadow}`}>
                    <step.Icon size={18} className="text-white" strokeWidth={2} />
                  </div>
                  <span className={`inline-block ${step.highlightColor} text-white text-[11px] font-bold px-3 py-1 rounded-full`}>
                    {step.highlight}
                  </span>
                </div>
                <div className="text-[17px] font-black text-gray-800 mb-2 leading-snug">
                  {step.title}
                </div>
                <div className="text-[15px] text-gray-500 leading-relaxed">
                  {step.body}
                </div>
              </div>
            </motion.div>
          ))}
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
