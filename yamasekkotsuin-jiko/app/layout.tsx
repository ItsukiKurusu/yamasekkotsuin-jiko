import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import StickyBottomCta from "./components/layout/StickyBottomCta";

export const metadata: Metadata = {
  title: "交通事故治療 | やま接骨院",
  description:
    "交通事故後の痛み・むち打ち・倦怠感はやま接骨院へ。自賠責保険適用で窓口負担0円。院長が直接施術し、保険手続きも丁寧にサポートします。",
  keywords: "交通事故,接骨院,むち打ち,自賠責保険,静岡,やま接骨院",
  icons: {
    icon: "/logo-mojinashi.PNG",
    apple: "/logo-mojinashi.PNG",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyBottomCta />
      </body>
    </html>
  );
}
