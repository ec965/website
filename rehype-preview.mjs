import { toHtml } from "hast-util-to-html";

export function rehypePreview() {
  return function (tree, { data }) {
    data.astro.frontmatter.preview = toHtml(
      tree.children.filter((node) => !/^mdx/.test(node.type)).slice(0, 3)
    );
  };
}
