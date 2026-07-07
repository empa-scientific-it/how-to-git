import { visit } from "unist-util-visit";
import type { Element } from "hast";

export default function rehypeTargetBlank() {
  return (tree: any) => {
    visit(tree, "element", (node: Element) => {
      if (node.tagName === "a" && node.properties?.href) {
        node.properties.target = "_blank";
        node.properties.rel = "noopener noreferrer";
      }
    });
  };
}
