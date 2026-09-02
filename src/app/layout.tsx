import type { Metadata } from "next";
import "@fontsource/golos-text/400.css";
import "@fontsource/golos-text/500.css";
import "@fontsource/golos-text/600.css";
import "@fontsource/golos-text/700.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import { LastUpdated, Layout, Navbar } from "nextra-theme-docs";
import { Head, Search } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Материалы",
  description: "Учебные материалы",
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" dir="ltr" suppressHydrationWarning>
      <Head
        color={{ hue: 0, saturation: 0, lightness: { light: 16, dark: 100 } }}
        backgroundColor={{
          light: "rgb(250, 250, 248)",
          dark: "rgb(18, 18, 17)",
        }}
      />
      <body>
        <Layout
          navbar={<Navbar logo={<b>ivsmn</b>} />}
          pageMap={await getPageMap()}
          darkMode={false}
          nextThemes={{ forcedTheme: "light" }}
          search={<Search placeholder="Поиск по материалам…" />}
          copyPageButton={false}
          editLink={null}
          feedback={{ content: null }}
          lastUpdated={<LastUpdated locale="ru">Обновлено</LastUpdated>}
          navigation={false}
          sidebar={{ autoCollapse: true, defaultMenuCollapseLevel: 1 }}
          toc={{ title: "Содержание", backToTop: "К началу" }}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
