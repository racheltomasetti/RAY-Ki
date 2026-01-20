import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getCategorySlug, getAllPosts } from "@/lib/mdx";
import MDXComponents from "@/components/MDXComponents";
import Link from "next/link";
import HeaderWithKi from "@/app/components/HeaderWithKi";
import { getCategoryColor } from "@/lib/categoryColors";

interface PostPageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

// Generate static paths for all posts
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    category: getCategorySlug(post.frontmatter.category || "uncategorized"),
    slug: post.slug,
  }));
}

export default async function PostPage({ params }: PostPageProps) {
  const { category, slug } = await params;
  const post = getPostBySlug(slug);

  // Verify the post exists and matches the category in the URL
  if (!post || getCategorySlug(post.frontmatter.category || "") !== category) {
    notFound();
  }

  const { frontmatter, content } = post;
  const { title, category: postCategory } = frontmatter;
  const categoryColor = getCategoryColor(postCategory);

  return (
    <div className="min-h-screen bg-[var(--bg)]">
      {/* Header with Back Button */}
      <header className="border-b border-[var(--ui-2)] bg-[var(--bg)]">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <HeaderWithKi showBackButton={true} />
        </div>
      </header>

      {/* Post Header */}
      <div className="flex items-center justify-center px-6 py-8">
        <header 
          className="bg-[var(--bg-2)] border rounded-lg p-6 shadow-sm w-fit"
          style={{ borderColor: categoryColor, borderWidth: '2px' }}
        >
          <div className="flex flex-col items-center">
            {/* Title */}
            <h1 className="text-3xl font-semibold text-[var(--tx)]">
              {title}
            </h1>
          </div>
        </header>
      </div>

      {/* Post Content */}
      <article className="max-w-4xl mx-auto px-6 pb-20">
        <div className="prose prose-lg max-w-none text-center">
          <MDXRemote source={content} components={MDXComponents} />
        </div>
      </article>

      {/* Footer Navigation */}
      <div className="border-t border-[var(--ui-2)] mt-12">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <Link
            href="/"
            className="text-[var(--tx)] hover:font-bold transition-colors font-medium"
          >
            ← back
          </Link>
        </div>
      </div>
    </div>
  );
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.frontmatter.title} | Ray's Garden`,
    description: `${post.frontmatter.title} - Ray's Garden`,
  };
}
