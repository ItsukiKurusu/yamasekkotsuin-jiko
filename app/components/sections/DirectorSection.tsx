"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import inchouImg from "../../public/inchou.jpg";
import inchou2Img from "../../public/inchou2.jpg";
import { BadgeCheck } from "lucide-react";

const credentials = [
  "柔道整復師（国家資格）",
  "交通事故治療 専門対応",
  "直流電気治療器「エレサス」認定",
  "弁護士との連携体制",
];

export default function DirectorSection() {
  return (
    <section className="py-24 md:py-36 bg-gray-50 overflow-hidden">
      <div className="max-w-5xl mx-auto px-5">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-[12px] font-bold tracking-[0.18em] text-[#0e64ae] uppercase mb-2">
            Director
          </span>
          <h2 className="text-[clamp(26px,4.5vw,42px)] font-black text-gray-800 mb-3">
            院長からの<span className="text-[#e8520a]">ご挨拶</span>
          </h2>
          <div className="w-12 h-1 bg-[#e8520a] rounded-full mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Photos */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Main photo */}
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={inchouImg}
                alt="やま接骨院 院長"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Floating sub-photo */}
            <motion.div
              className="absolute -bottom-8 -right-4 w-44 h-44 rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Image
                src={inchou2Img}
                alt="院長 施術の様子"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Badge */}
            <motion.div
              className="absolute -top-4 -left-4 bg-[#0e64ae] text-white rounded-2xl px-5 py-3 shadow-xl"
              initial={{ opacity: 0, y: -16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <p className="text-[10px] font-bold tracking-widest opacity-80">
                SINCE 2015
              </p>
              <p className="text-[15px] font-black">交通事故治療</p>
              <p className="text-[10px] font-bold tracking-widest opacity-80">
                SPECIALIST
              </p>
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <blockquote className="text-[16px] text-gray-700 leading-[2] mb-8 relative pl-6 border-l-4 border-[#0e64ae]">
              交通事故は突然の出来事で、体だけでなく心にも大きな負担をかけます。事故直後は症状がなくても、数日後・数週間後に痛みや痺れが現れることも少なくありません。
              <br /><br />
              やま接骨院では、患者さまお一人おひとりの状態に向き合い、最短で回復できるオーダーメイドの治療計画をご提案します。保険手続きのサポートから弁護士との連携まで、回復への道のりを全力でサポートいたします。
            </blockquote>

            {/* Credentials */}
            <ul className="space-y-3 mb-8">
              {credentials.map((c, i) => (
                <motion.li
                  key={i}
                  className="flex items-center gap-3 text-[14px] text-gray-700 font-medium"
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
                >
                  <BadgeCheck size={18} className="text-[#0e64ae] flex-shrink-0" />
                  {c}
                </motion.li>
              ))}
            </ul>

            {/* Name card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-center gap-5">
              <div className="w-14 h-14 rounded-full bg-[#e8f0fc] flex items-center justify-center flex-shrink-0">
                <span className="text-[#0e64ae] font-black text-lg">院</span>
              </div>
              <div>
                <p className="text-[11px] text-gray-400 mb-0.5 tracking-wide">
                  やま接骨院
                </p>
                <p className="text-[20px] font-black text-gray-800 leading-tight">
                  院長
                </p>
                <p className="text-[12px] text-[#0e64ae] font-bold mt-1">
                  柔道整復師 ／ 交通事故治療専門
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
