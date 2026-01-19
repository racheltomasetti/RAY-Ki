export type Category =
  | "Build Log"
  | "Reflections"
  | "Stream Notes"
  | "Guides"
  | "Ki Updates"
  | "Field Notes";

export interface PostFrontmatter {
  title: string;
  date: string;
  category: Category;
  excerpt: string;
  featured_image?: string;
}

export interface Post {
  slug: string;
  frontmatter: PostFrontmatter;
  content: string;
}

export interface PostWithMDX extends Post {
  mdxSource: unknown; // MDXRemote compiled source
}
