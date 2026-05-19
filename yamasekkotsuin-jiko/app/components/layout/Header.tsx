"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
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
          ? "bg-white/95 backdrop-blur-md shadow-md border-b-2 border-[#0e64ae]"
          : "bg-white border-b-2 border-[#0e64ae]"
      )}
    >
      <div className="max-w-5xl mx-auto px-5 h-16 flex items-center justify-between">
        {/* ロゴ */}
        <div className="flex items-center">
          {/* PC: 横型ロゴ */}
          <Image
            src="/logo-and-moji-yoko.jpg"
            alt="やま接骨院"
            width={164}
            height={47}
            className="hidden sm:block object-contain"
            priority
          />
          {/* スマホ: 文字のみロゴ */}
          <Image
            src="/logo-moji.PNG"
            alt="やま接骨院"
            width={120}
            height={36}
            className="block sm:hidden object-contain"
            priority
            unoptimized
          />
        </div>

        {/* 右側：電話 + ボタン */}
        <div className="flex items-center gap-3">
          <a
            href="tel:0540000000"
            className="hidden sm:block text-right group"
          >
            <span className="block text-[10px] text-gray-400 group-hover:text-[#0e64ae] transition-colors">
              交通事故専用ダイヤル
            </span>
            <span className="flex items-center gap-1 text-[17px] font-black text-gray-800 group-hover:text-[#0e64ae] transition-colors tracking-tight">
              <PhoneCall size={14} className="text-[#0e64ae]" />
              054-295-5595
            </span>
          </a>

          <a
            href="#cta"
            className="bg-[#e8520a] hover:bg-[#c4410a] text-white font-bold text-[13px] px-5 py-2.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 shadow-[0_3px_10px_rgba(232,82,10,0.3)] whitespace-nowrap"
          >
            無料相談
          </a>
        </div>
      </div>
    </header>
  );
}
