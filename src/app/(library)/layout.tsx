import { LastUpdated, Layout, Navbar } from "nextra-theme-docs";
import { Head, Search } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import type { PageMapItem } from "nextra";
import "nextra-theme-docs/style.css";

function withoutTeacherRoute(nodes: PageMapItem[]): PageMapItem[] {
  return nodes
    .filter((node) => !("route" in node && node.route === "/teacher"))
    .map((node) => "children" in node
      ? { ...node, children: withoutTeacherRoute(node.children) }
      : node);
}

export default async function LibraryLayout({ children }: LayoutProps<"/">) {
  const pageMap = withoutTeacherRoute(await getPageMap());

  return (
    <>
      <Head
        color={{ hue: 0, saturation: 0, lightness: { light: 16, dark: 100 } }}
        backgroundColor={{
          light: "rgb(250, 250, 248)",
          dark: "rgb(18, 18, 17)",
        }}
      />
      <Layout
        navbar={<Navbar logo={<b>ivsmn</b>} />}
        pageMap={pageMap}
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
    </>
  );
}
