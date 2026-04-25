import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Большаков А.В.",
  description:
    "Профиль исследователя — аспирант 1-го года, специальность 1.2.2, СВФУ ИМИ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
