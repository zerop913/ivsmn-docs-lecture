import type { Metadata } from "next";
import "@fontsource/golos-text/400.css";
import "@fontsource/golos-text/500.css";
import "@fontsource/golos-text/600.css";
import "@fontsource/golos-text/700.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Материалы",
  description: "Учебные материалы",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" dir="ltr">
      <body>{children}</body>
    </html>
  );
}
