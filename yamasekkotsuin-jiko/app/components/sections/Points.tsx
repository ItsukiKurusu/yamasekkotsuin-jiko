"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const points = [
  {
    num: "01",
    title: "丁寧な検査・診断・施術で炎症期でも対応可能",
    body: "痛みや不調を解消するため、丁寧な検査とカウンセリングを行い、原因を徹底的に調べます。炎症期の患部に対しても独自のノウハウを用い、症状に合わせた対応が可能です。",
    accent: false,
  },
  {
    num: "02",
    title: "交通事故の専門知識を持つ院長が直接施術",
    body: "交通事故治療の専門知識と豊富な経験を持つ院長が施術を担当します。専門研修を経た知識で丁寧に対応し、最適な治療を提供します。",
    accent: false,
  },
  {
    num: "03",
    title: "自賠責保険適用で窓口負担0円",
    body: "国家資格を持つ柔道整復師が常駐。事故証明書が揃い、身体の痛みと事故の因果関係が認められる場合、自賠責保険が適用され窓口負担が0円となります。",
    accent: false,
  },
  {
    num: "04",
    title: "整形外科との同時通院・他院からの転院も可能",
    body: "「どの病院に行けばいいかわからない」というご相談にも対応。整形外科や病院との同時通院が可能で、他の接骨院からの転院もスムーズに行えます。",
    accent: false,
  },
  {
    num: "05",
    title: "煩雑な手続きも手厚くサポート",
    body: "交通事故に関する書類作成や保険会社とのやり取りなど、経験豊富なスタッフが全力でサポート。患者さまが治療に専念できる環境を整えます。",
    accent: false,
  },
  {
    num: "06",
    title: "複雑な事故案件も弁護士との連携で対応",
    body: "複雑な交通事故案件や法的トラブルにも対応可能。提携弁護士との連携により、適切な手続きとサポートを行います。",
    accent: false,
  },
  {
    num: "07",
    title: "圧倒的な施術実績とオーダーメイドの治療計画",
    body: "多数の施術実績を持つ信頼の接骨院。患者さま一人ひとりの症状に合わせた施術形態で、オーダーメイドの治療計画を立てて早期回復を目指します。",
    accent: false,
  },
  {
    num: "08",
    title: "他院にない直流電気による施術・難しい神経症状にも対応",
    body: "やま接骨院では、直流電気治療器『エレサス』を使用。改善が難しい痺れや麻痺などの神経症状に対し、表層から深部組織まで丁寧にアプローチします。",
    accent: true,
    accentLabel: "当院独自",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function Points() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 md:py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-5">
        {/* Section header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-[14px] font-bold tracking-[0.18em] text-[#0e64ae] uppercase mb-2">
            Our Points
          </span>
          <h2 className="text-[clamp(30px,5.5vw,50px)] font-black leading-[1.35] text-gray-800 mb-3">
            やま接骨院が選ばれる
            <br />
            <span className="text-[#e8520a]">8つの理由</span>
          </h2>
          <div className="w-12 h-1 bg-[#e8520a] rounded-full mx-auto mb-4" />
          <p className="text-[18px] text-gray-500 max-w-xl mx-auto leading-relaxed">
            交通事故による痛みや不調にお悩みの方へ。やま接骨院では、安心して治療に専念できる環境を整え、皆さまの早期回復を全力でサポートします。
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {points.map((p, i) => (
            <motion.div
              key={i}
              variants={item}
              className={`bg-white rounded-2xl p-6 shadow-sm border-t-4 transition-shadow duration-300 hover:shadow-[0_6px_28px_rgba(0,0,0,0.1)] ${
                p.accent
                  ? "border-[#e8520a]"
                  : "border-[#0e64ae]"
              }`}
            >
              <div className={`text-[11px] font-black tracking-widest mb-2 flex items-center gap-2 ${p.accent ? "text-[#e8520a]" : "text-[#0e64ae]"}`}>
                POINT {p.num}
                {p.accentLabel && (
                  <span className="bg-[#e8520a] text-white text-[9px] font-bold px-2 py-0.5 rounded">
                    ✨ {p.accentLabel}
                  </span>
                )}
              </div>
              <h3 className="text-[20px] font-black text-gray-800 mb-3 leading-snug">
                {p.title}
              </h3>
              <p className="text-[17px] text-gray-500 leading-relaxed">
                {p.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
