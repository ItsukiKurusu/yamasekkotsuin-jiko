"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import entranceImg from "../../public/entrance.jpg";
import elesas1Img from "../../public/elesas1.jpg";
import elesas2Img from "../../public/elesas2.jpg";

const photos = [
  {
    src: entranceImg,
    alt: "清潔感のある院内",
    label: "院内・待合室",
    desc: "清潔で落ち着いた空間でお待ちいただけます",
  },
  {
    src: elesas1Img,
    alt: "直流電気治療器 エレサス",
    label: "直流電気治療器「エレサス」",
    desc: "他院にない独自の直流電気治療で深部までアプローチ",
  },
  {
    src: elesas2Img,
    alt: "エレサスによる施術",
    label: "丁寧な施術",
    desc: "院長が一人ひとりに合わせた施術を提供",
  },
];

export default function GallerySection() {
  return (
    <section className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-5xl mx-auto px-5">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-[12px] font-bold tracking-[0.18em] text-[#0e64ae] uppercase mb-2">
            Clinic Gallery
          </span>
          <h2 className="text-[clamp(26px,4.5vw,42px)] font-black text-gray-800 mb-3">
            院内・設備の<span className="text-[#e8520a]">ご紹介</span>
          </h2>
          <div className="w-12 h-1 bg-[#e8520a] rounded-full mx-auto mb-4" />
          <p className="text-[15px] text-gray-500 max-w-xl mx-auto">
            清潔で安心できる環境と、最新設備で皆さまのご来院をお待ちしています。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              className="group relative rounded-2xl overflow-hidden shadow-md bg-white"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Label overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-black text-[15px] leading-snug drop-shadow">
                    {photo.label}
                  </p>
                </div>
              </div>

              {/* Caption */}
              <div className="p-4">
                <p className="text-[13px] text-gray-500 leading-relaxed">
                  {photo.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
