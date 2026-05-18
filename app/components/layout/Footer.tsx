export default function Footer() {
  const links = [
    { label: "トップページ", href: "https://yama-sekkotsuin.jp/" },
    { label: "施術メニュー", href: "#" },
    { label: "アクセス", href: "#" },
    { label: "お問い合わせ", href: "#" },
  ];

  return (
    <footer className="bg-[#134d3e] text-white/75 py-10 px-5 text-sm">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-xl font-black text-white mb-2">やま接骨院</p>
        <p>〒420-0810 静岡県静岡市葵区上土1丁目17-4 エクセル千代田1-A</p>
        <p className="mt-1">
          営業時間：平日 9:00〜20:00 ／ 土曜 9:00〜15:00
          <span className="mx-2 opacity-40">|</span>
          定休日：日・祝・不定休
        </p>

        <nav className="flex flex-wrap gap-5 justify-center mt-5">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/60 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p className="mt-5 text-xs opacity-50">
          &copy; 2025 やま接骨院 All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
