import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getCategorySlug, getAllPosts } from "@/lib/mdx";
import MDXComponents from "@/components/MDXComponents";
import Link from "next/link";

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
  const { title, date, category: displayCategory, excerpt, featured_image } = frontmatter;

  // Format date
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="min-h-screen bg-[var(--bg)]">
      {/* Back to Feed */}
      <div className="border-b border-[var(--ui-2)]">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link
            href="/"
            className="text-[var(--accent)] hover:text-[var(--accent-2)] transition-colors inline-flex items-center gap-2"
          >
            ← Back to The Feed
          </Link>
        </div>
      </div>

      {/* Post Header */}
      <header className="max-w-4xl mx-auto px-6 py-12">
        {/* Category & Date */}
        <div className="flex items-center gap-3 mb-4 text-sm">
          <span className="bg-[var(--accent)] text-[var(--bg)] px-3 py-1 rounded-full font-medium">
            {displayCategory}
          </span>
          <span className="text-[var(--tx-3)] italic">{formattedDate}</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--tx)] mb-4">
          {title}
        </h1>

        {/* Excerpt */}
        <p className="text-xl text-[var(--tx-2)] italic leading-relaxed">
          {excerpt}
        </p>
      </header>

      {/* Post Content */}
      <article className="max-w-4xl mx-auto px-6 pb-20">
        <div className="prose prose-lg max-w-none">
          <MDXRemote source={content} components={MDXComponents} />
        </div>
      </article>

      {/* Footer Navigation */}
      <div className="border-t border-[var(--ui-2)] mt-12">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <Link
            href="/"
            className="text-[var(--accent-2)] hover:text-[var(--accent)] transition-colors font-medium"
          >
            ← Back to The Feed
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
    description: post.frontmatter.excerpt,
  };
}
