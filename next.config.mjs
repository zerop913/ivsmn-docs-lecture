import nextra from "nextra";

const withNextra = nextra({
  search: { codeblocks: false },
});

export default withNextra({
  output: "standalone",
  async redirects() {
    return [
      {
        source: "/web-development/java/practice-01",
        destination: "/web-development/java/practice-04",
        permanent: true,
      },
      ...[
        "lecture-01",
        "lecture-02-html",
        "lecture-03-css",
        "lecture-04-layout",
        "practice-01-html-student",
        "practice-02-css-student",
        "practice-03-css-detective",
      ].map((slug) => ({
        source: `/web-development/${slug}`,
        destination: `/web-development/web/${slug}`,
        permanent: true,
      })),
    ];
  },
});
