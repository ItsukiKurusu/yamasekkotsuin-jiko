"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import {
  CalendarDays,
  MessageSquare,
  Sparkles,
  BarChart2,
  Phone,
  FileText,
  Search,
  Scale,
  ThumbsUp,
  Zap,
  Stethoscope,
  Heart,
  TrendingUp,
  PersonStanding,
  type LucideIcon,
} from "lucide-react";
import entranceImg from "../../public/entrance.jpg";
import explainingImg from "../../public/explaining.jpg";
import chiryouImg from "../../public/chiryou.jpg";
import counselingImg from "../../public/counseling.jpg";

const steps: {
  num: string;
  label: string;
  Icon: LucideIcon;
  title: string;
  desc: string;
  image: StaticImageData;
  imageAlt: string;
  items: { Icon: LucideIcon; title: string; body: string }[];
}[] = [
  {
    num: "1",
    label: "STEP 01",
    Icon: CalendarDays,
    title: "予約・受付",
    desc: "ご来院前にお電話またはLINEでご予約ください。交通事故専用の問診表をご記入いただき、お身体の状態や事故後の状況について詳しくお聞きします。",
    image: entranceImg,
    imageAlt: "やま接骨院 院内・受付",
    items: [
      {
        Icon: Phone,
        title: "事前予約",
        body: "お電話またはLINEからご予約が可能です。当日予約もお気軽にご相談ください。",
      },
      {
        Icon: FileText,
        title: "問診表の記入",
        body: "交通事故専用の問診表をご記入。事故状況やお身体の不調を詳しくお聞きします。",
      },
    ],
  },
  {
    num: "2",
    label: "STEP 02",
    Icon: MessageSquare,
    title: "問診・カウンセリング",
    desc: "事故後のお悩みを丁寧にお聞きし、損害保険会社との概要や必要書類についてのアドバイスも行います。必要に応じて弁護士のご紹介も可能です。",
    image: explainingImg,
    imageAlt: "丁寧なカウンセリングの様子",
    items: [
      {
        Icon: Search,
        title: "状況の把握",
        body: "事故当時から現在までの状況をしっかり確認。整形外科との同時通院の進め方もアドバイスします。",
      },
      {
        Icon: Scale,
        title: "弁護士対応",
        body: "必要に応じて交通事故に強い弁護士をご紹介。書類作成や交渉のサポートを受けることができます。",
      },
    ],
  },
  {
    num: "3",
    label: "STEP 03",
    Icon: Sparkles,
    title: "交通事故特化治療",
    desc: "「安心」と「早期回復」を第一に考えた治療を提供します。患者さま一人ひとりに合わせたオーダーメイドの治療計画で、痛みや不調に最適なアプローチを行います。",
    image: chiryouImg,
    imageAlt: "交通事故特化治療の様子",
    items: [
      {
        Icon: ThumbsUp,
        title: "施術方法",
        body: "症状や事故の状況に合わせた治療計画を作成。痛みや不調に対して最適なアプローチを行います。",
      },
      {
        Icon: Zap,
        title: "電気療法（エレサス）",
        body: "直流治療器『エレサス』を使用。筋肉の緊張緩和・血流促進・炎症軽減・神経症状の改善に効果的です。",
      },
      {
        Icon: Stethoscope,
        title: "事故に詳しい院長が対応",
        body: "専門知識を持った院長がサポート。交通事故後の悩みにわかりやすくご説明します。",
      },
      {
        Icon: Heart,
        title: "痛みへの配慮",
        body: "痛みを極力抑えた施術で、安心してリラックスしながら治療を受けていただけます。",
      },
    ],
  },
  {
    num: "4",
    label: "STEP 04",
    Icon: BarChart2,
    title: "経過確認・アフターフォロー",
    desc: "毎施術ごとにお身体の状態を確認し、回復の進捗を細かくチェック。残りの痛みが改善するまでの期間や回復の見通しをしっかり説明します。",
    image: counselingImg,
    imageAlt: "アフターフォローの様子",
    items: [
      {
        Icon: TrendingUp,
        title: "施術計画の見直し",
        body: "症状変化に合わせて施術計画を柔軟に見直します。より早期回復を目指した追加施術も提案可能です。",
      },
      {
        Icon: PersonStanding,
        title: "セルフケアの提案",
        body: "「痛みが出ないためには」「自分でできる改善方法」など、患者さまが必要な情報を余すことなくお伝えします。",
      },
    ],
  },
];

export default function TreatmentFlow() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* 透かしロゴ */}
      <div
        className="pointer-events-none select-none absolute -left-44 top-1/2 opacity-[0.05]"
        style={{ transform: "translateY(-50%) rotate(-15deg)" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo-mojinashi.PNG" alt="" width={660} height={660} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-5">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-[12px] font-bold tracking-[0.18em] text-[#0e64ae] uppercase mb-2">
            Treatment Flow
          </span>
          <h2 className="text-[clamp(26px,4.5vw,42px)] font-black text-gray-800 mb-3">
            やま接骨院での
            <br />
            <span className="text-[#e8520a]">治療の流れ</span>
          </h2>
          <div className="w-12 h-1 bg-[#e8520a] rounded-full mx-auto mb-4" />
          <p className="text-[15px] text-gray-500 max-w-lg mx-auto">
            初めての方でも安心してご来院いただけるよう、来院からアフターフォローまで丁寧にご説明します。
          </p>
        </motion.div>

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
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: 0.1 }}
    >
      {/* Left: circle + line */}
      <div className="flex flex-col items-center w-[80px] flex-shrink-0 sm:w-[100px]">
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#0e64ae] text-white flex flex-col items-center justify-center font-black shadow-[0_4px_16px_rgba(14,100,174,0.35)] z-10 flex-shrink-0">
          <span className="text-[9px] tracking-widest">STEP</span>
          <span className="text-xl leading-none">{step.num}</span>
        </div>
        {!isLast && (
          <motion.div
            className="w-0.5 flex-1 min-h-[48px]"
            style={{
              background: "linear-gradient(to bottom, #0e64ae, #e8f0fc)",
            }}
            initial={{ scaleY: 0, originY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.35 }}
          />
        )}
      </div>

      {/* Right: content card */}
      <div
        className={`flex-1 bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden ${
          isLast ? "mb-0" : "mb-12"
        } ml-4 sm:ml-6`}
      >
        {/* Step photo */}
        <motion.div
          className="relative h-52 sm:h-64 w-full overflow-hidden"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Image
            src={step.image}
            alt={step.imageAlt}
            fill
            className="object-cover"
          />
          {/* Label overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
          <div className="absolute top-4 left-4">
            <span className="inline-block bg-[#0e64ae] text-white text-[11px] font-bold px-3 py-1 rounded tracking-widest">
              {step.label}
            </span>
          </div>
        </motion.div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          <h3 className="text-[20px] sm:text-2xl font-black text-gray-800 mb-3 flex items-center gap-2">
            <step.Icon size={22} className="text-[#0e64ae] flex-shrink-0" strokeWidth={1.8} />
            {step.title}
          </h3>
          <p className="text-[14px] text-gray-500 leading-relaxed mb-6">
            {step.desc}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {step.items.map((item, j) => (
              <motion.div
                key={j}
                className="bg-[#e8f0fc] rounded-xl p-4"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.45, delay: 0.4 + j * 0.08 }}
              >
                <div className="flex items-center gap-1.5 text-[13px] font-bold text-[#0a4d84] mb-1">
                  <item.Icon size={14} className="flex-shrink-0" strokeWidth={2} />
                  {item.title}
                </div>
                <div className="text-[12px] text-gray-600 leading-relaxed">
                  {item.body}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
