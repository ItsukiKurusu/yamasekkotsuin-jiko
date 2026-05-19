"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Activity,
  Brain,
  Bone,
  Zap,
  BatteryLow,
  FileQuestion,
  Compass,
  RefreshCw,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";

const worries: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Activity,
    title: "首・肩の痛み（むち打ち）",
    desc: "事故後から首や肩が痛い、動かしにくいなどの症状",
  },
  {
    icon: Brain,
    title: "頭痛・めまい",
    desc: "頭が重い、ぐるぐる回る感じが続いている",
  },
  {
    icon: Bone,
    title: "腰の痛み",
    desc: "腰に鈍い痛みや張りが続いている",
  },
  {
    icon: Zap,
    title: "手足の痺れ",
    desc: "手や腕、足先にじんじんとした感覚がある",
  },
  {
    icon: BatteryLow,
    title: "全身の倦怠感",
    desc: "事故後から体が重い、疲れが取れない",
  },
  {
    icon: FileQuestion,
    title: "保険・手続きの不安",
    desc: "どこに連絡すればいいのか、費用はどうなるのか不安",
  },
  {
    icon: Compass,
    title: "どこへ行けばいいか迷っている",
    desc: "病院と接骨院どちらに行けばいいかわからない",
  },
  {
    icon: RefreshCw,
    title: "他院で改善しない",
    desc: "すでに通っているが症状が改善しない、転院を考えている",
  },
];

const checkItems = [
  "事故直後は大丈夫だったが、翌日から痛みが出てきた",
  "相手方の保険会社から治療を打ち切られそうで困っている",
  "どの書類を提出すればいいかわからない",
  "整形外科に行ったが「異常なし」と言われた",
  "事故から時間が経っているが、まだ痛みや違和感が残っている",
  "電気治療などで改善が見られない神経症状がある",
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const card = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Worries() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const checkRef = useRef(null);
  const checkInView = useInView(checkRef, { once: true, margin: "-60px" });

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
            Worries
          </span>
          <h2 className="text-[clamp(26px,5vw,40px)] font-black leading-[1.4] text-gray-800 mb-3">
            こんなお悩み<span className="text-[#e8520a]">ありませんか？</span>
          </h2>
          <div className="w-12 h-1 bg-[#e8520a] rounded-full mx-auto mb-4" />
          <p className="text-[16px] text-gray-500 max-w-[600px] mx-auto leading-relaxed">
            交通事故後に現れる症状は多岐にわたります。「たいしたことない」と思って放置すると、後から症状が悪化するケースも。気になる症状がある方は、お早めにご相談ください。
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
        >
          {worries.map((w, i) => (
            <motion.div
              key={i}
              variants={card}
              className="group bg-white border-2 border-gray-100 rounded-2xl p-5 text-center cursor-default hover:border-[#0e64ae] hover:shadow-[0_6px_24px_rgba(14,100,174,.12)] transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon container */}
              <div className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center bg-[#e8f0fc] group-hover:bg-[#0e64ae] transition-colors duration-300">
                <w.icon
                  size={30}
                  className="text-[#0e64ae] group-hover:text-white transition-colors duration-300"
                  strokeWidth={1.8}
                />
              </div>
              <div className="text-[16px] font-bold text-gray-800 mb-2 leading-snug">
                {w.title}
              </div>
              <div className="text-[14px] text-gray-400 leading-relaxed">
                {w.desc}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Check list */}
        <motion.div
          ref={checkRef}
          initial={{ opacity: 0, y: 28 }}
          animate={checkInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.2 }}
          className="mt-12 bg-white border-2 border-[#e8520a] rounded-2xl p-8 md:p-10 max-w-2xl mx-auto"
        >
          <h3 className="text-[19px] font-black text-[#e8520a] text-center mb-6">
            ⚠️ 一つでも当てはまる方は、すぐにご相談ください
          </h3>
          <ul className="space-y-0">
            {checkItems.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 py-3.5 border-b border-gray-100 last:border-0 text-[15px] text-gray-700"
              >
                <CheckCircle2
                  size={17}
                  className="text-[#e8520a] flex-shrink-0 mt-0.5"
                />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
