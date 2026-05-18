"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    num: "1",
    label: "STEP 01",
    icon: "📅",
    title: "予約・受付",
    desc: "ご来院前にお電話またはLINEでご予約ください。交通事故専用の問診表をご記入いただき、お身体の状態や事故後の状況について詳しくお聞きします。",
    items: [
      {
        icon: "📞",
        title: "事前予約",
        body: "お電話またはLINEからご予約が可能です。当日予約もお気軽にご相談ください。",
      },
      {
        icon: "📝",
        title: "問診表の記入",
        body: "交通事故専用の問診表をご記入。事故状況やお身体の不調を詳しくお聞きします。",
      },
    ],
  },
  {
    num: "2",
    label: "STEP 02",
    icon: "💬",
    title: "問診・カウンセリング",
    desc: "事故後のお悩みを丁寧にお聞きし、損害保険会社との概要や必要書類についてのアドバイスも行います。必要に応じて弁護士のご紹介も可能です。",
    items: [
      {
        icon: "🔍",
        title: "状況の把握",
        body: "事故当時から現在までの状況をしっかり確認。整形外科との同時通院の進め方もアドバイスします。",
      },
      {
        icon: "⚖️",
        title: "弁護士対応",
        body: "必要に応じて交通事故に強い弁護士をご紹介。書類作成や交渉のサポートを受けることができます。",
      },
    ],
  },
  {
    num: "3",
    label: "STEP 03",
    icon: "✨",
    title: "交通事故特化治療",
    desc: "「安心」と「早期回復」を第一に考えた治療を提供します。患者さま一人ひとりに合わせたオーダーメイドの治療計画で、痛みや不調に最適なアプローチを行います。",
    items: [
      {
        icon: "🙌",
        title: "施術方法",
        body: "症状や事故の状況に合わせた治療計画を作成。痛みや不調に対して最適なアプローチを行います。",
      },
      {
        icon: "⚡",
        title: "電気療法（エレサス）",
        body: "直流治療器『エレサス』を使用。筋肉の緊張緩和・血流促進・炎症軽減・神経症状の改善に効果的です。",
      },
      {
        icon: "👨‍⚕️",
        title: "事故に詳しい院長が対応",
        body: "専門知識を持った院長がサポート。交通事故後の悩みにわかりやすくご説明します。",
      },
      {
        icon: "😌",
        title: "痛みへの配慮",
        body: "痛みを極力抑えた施術で、安心してリラックスしながら治療を受けていただけます。",
      },
    ],
  },
  {
    num: "4",
    label: "STEP 04",
    icon: "📊",
    title: "経過確認・アフターフォロー",
    desc: "毎施術ごとにお身体の状態を確認し、回復の進捗を細かくチェック。残りの痛みが改善するまでの期間や回復の見通しをしっかり説明します。",
    items: [
      {
        icon: "📈",
        title: "施術計画の見直し",
        body: "症状変化に合わせて施術計画を柔軟に見直します。より早期回復を目指した追加施術も提案可能です。",
      },
      {
        icon: "🏃",
        title: "セルフケアの提案",
        body: "「痛みが出ないためには」「自分でできる改善方法」など、患者さまが必要な情報を余すことなくお伝えします。",
      },
    ],
  },
];

export default function TreatmentFlow() {
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
            Treatment Flow
          </span>
          <h2 className="text-[clamp(22px,4vw,32px)] font-black leading-[1.4] text-gray-800 mb-3">
            やま接骨院での
            <br />
            <span className="text-[#e8520a]">治療の流れ</span>
          </h2>
          <div className="w-12 h-1 bg-[#e8520a] rounded-full mx-auto mb-4" />
          <p className="text-[14px] text-gray-500 max-w-lg mx-auto">
            初めての方でも安心してご来院いただけるよう、来院からアフターフォローまで丁寧にご説明します。
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="flex flex-col gap-0">
          {steps.map((step, i) => (
            <StepItem key={i} step={step} index={i} isLast={i === steps.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StepItem({
  step,
  index,
  isLast,
}: {
  step: (typeof steps)[0];
  index: number;
  isLast: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className="flex gap-0 items-stretch"
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      {/* Left: circle + line */}
      <div className="flex flex-col items-center w-[88px] flex-shrink-0 sm:w-[104px]">
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#1a6f5a] text-white flex flex-col items-center justify-center font-black shadow-[0_4px_16px_rgba(26,111,90,0.35)] z-10">
          <span className="text-[9px] tracking-widest">STEP</span>
          <span className="text-xl leading-none">{step.num}</span>
        </div>
        {!isLast && (
          <motion.div
            className="w-0.5 flex-1 min-h-[40px] mt-0"
            style={{
              background: "linear-gradient(to bottom, #1a6f5a, #e8f5f0)",
            }}
            initial={{ scaleY: 0, originY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        )}
      </div>

      {/* Right: content card */}
      <div className={`flex-1 bg-white border border-gray-100 rounded-2xl shadow-sm p-6 sm:p-8 ${isLast ? "mb-0" : "mb-10"} ml-4 sm:ml-6`}>
        <div className="text-[11px] font-bold text-[#1a6f5a] tracking-widest mb-2">
          {step.label}
        </div>
        <h3 className="text-[18px] sm:text-xl font-black text-gray-800 mb-3">
          {step.icon} {step.title}
        </h3>
        <p className="text-[13px] text-gray-500 leading-relaxed mb-5">
          {step.desc}
        </p>

        {/* Sub items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {step.items.map((item, j) => (
            <motion.div
              key={j}
              className="bg-[#e8f5f0] rounded-xl p-4"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.45, delay: 0.3 + j * 0.08 }}
            >
              <div className="text-[13px] font-bold text-[#134d3e] mb-1">
                {item.icon} {item.title}
              </div>
              <div className="text-[12px] text-gray-600 leading-relaxed">
                {item.body}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
