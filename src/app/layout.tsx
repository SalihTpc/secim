import Counter from "@/components/Counter";
import "./globals.css";
import { Inter } from "next/font/google";
import Explanation from "@/components/Explanation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Seçim Çetele",
  description: "Seçim Görevli ve Gönüllüler için hazırlanmıştır.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <Counter />
        <Explanation />
        {children}
      </body>
    </html>
  );
}
