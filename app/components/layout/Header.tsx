"use client";

import { useState, useEffect } from "react";
import { PhoneCall } from "lucide-react";
import { cn } from "@/app/lib/utils";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/97 backdrop-blur-md shadow-lg border-b-[3px] border-[#0e64ae]"
          : "bg-white border-b-[3px] border-[#0e64ae]"
      )}
    >
      <div className="max-w-5xl mx-auto px-5 h-20 md:h-24 flex items-center justify-between gap-4">
        {/* ロゴ */}
        <div className="leading-tight flex-shrink-0">
          <span className="text-[#0e64ae] font-black text-[22px] md:text-[28px] tracking-tight">
            やま接骨院
          </span>
          <span className="block text-[11px] md:text-[13px] text-gray-400 font-medium tracking-wide">
            交通事故治療専門ページ
          </span>
        </div>

        {/* 右側：電話 + ボタン */}
        <div className="flex items-center gap-3 md:gap-5">
          <a
            href="tel:0540000000"
            className="hidden sm:block text-right group"
          >
            <span className="block text-[11px] md:text-[12px] text-gray-400 group-hover:text-[#0e64ae] transition-colors tracking-wide">
              交通事故専用ダイヤル
            </span>
            <span className="flex items-center gap-1.5 text-[18px] md:text-[22px] font-black text-gray-800 group-hover:text-[#0e64ae] transition-colors tracking-tight">
              <PhoneCall size={16} className="text-[#0e64ae]" />
              054-295-5595
            </span>
          </a>

          <a
            href="#cta"
            className="bg-[#e8520a] hover:bg-[#c4410a] text-white font-bold text-[13px] md:text-[15px] px-5 md:px-7 py-3 md:py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 shadow-[0_3px_14px_rgba(232,82,10,0.35)] whitespace-nowrap"
          >
            無料相談
          </a>
        </div>
      </div>
    </header>
  );
}
