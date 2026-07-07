import { visit } from "unist-util-visit";
import type { Root, Parent } from "mdast";
import type { TextDirective } from "mdast-util-directive";

export default function remarkGlossaryDirective() {
  return (tree: Root) => {
    visit(
      tree,
      "textDirective",
      (
        node: TextDirective,
        index: number | undefined,
        parent: Parent | undefined,
      ) => {
        if (!parent || index === undefined) return;
        if (node.name !== "term") return;

        // Get the term from the first child
        const term =
          node.children[0]?.type === "text"
            ? (node.children[0] as { type: string; value: string }).value
            : "";

        // Get display text from label attribute or use term
        const displayText = node.attributes?.label || term;

        // Create slug for the anchor
        const slug = term.toLowerCase().replace(/\s+/g, "-");

        // Transform to link
        const link = {
          type: "link",
          url: `/glossary/#${slug}`,
          data: {
            hProperties: {
              class: "glossary-term",
            },
          },
          children: [
            {
              type: "text",
              value: displayText,
            },
          ],
        };

        parent.children[index] = link as any;
      },
    );
  };
}
