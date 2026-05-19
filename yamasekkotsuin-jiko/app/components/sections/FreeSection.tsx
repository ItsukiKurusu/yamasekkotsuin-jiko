"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function FreeSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-5">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl overflow-hidden p-10 md:p-14 text-center text-white"
          style={{
            background: "linear-gradient(135deg, #093a6e 0%, #0e64ae 50%, #1a7fc4 100%)",
          }}
        >
          {/* Background pattern */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v22H20v-1.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          {/* Animated glow */}
          <motion.div
            className="absolute rounded-full pointer-events-none"
            animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{
              width: "300px",
              height: "300px",
              top: "-80px",
              right: "-60px",
              background: "radial-gradient(circle, rgba(255,224,102,0.4) 0%, transparent 70%)",
              filter: "blur(20px)",
            }}
          />

          <div className="relative z-10">
            <p className="text-[19px] opacity-85 mb-2">自賠責保険が適用されるため</p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-[clamp(48px,9vw,76px)] font-black text-[#ffe066] leading-none mb-6 tracking-tight"
              style={{ textShadow: "0 4px 20px rgba(255,224,102,0.3)" }}
            >
              窓口負担 0円
            </motion.div>

            <p className="text-[18px] opacity-90 max-w-xl mx-auto leading-relaxed mb-8">
              交通事故の場合、自賠責保険が適用されるため、患者様が治療費を直接ご負担いただく必要はありません。
              保険手続きの煩雑な書類作成も、経験豊富なスタッフが全力でサポートします。
            </p>

            <a
              href="#cta"
              className="inline-flex items-center gap-2 bg-[#e8520a] hover:bg-[#c4410a] text-white font-bold px-8 py-4 rounded-full transition-all duration-200 hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(232,82,10,0.4)] text-[17px]"
            >
              詳しく相談する（無料）
              <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
