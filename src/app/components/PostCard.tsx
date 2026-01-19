import Link from "next/link";
import Image from "next/image";
import { Post } from "@/types/post";
import { getCategorySlug } from "@/lib/mdx";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  const { slug, frontmatter } = post;
  const { title, date, category, excerpt, featured_image } = frontmatter;

  // Format date
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  // Get category slug for URL
  const categorySlug = getCategorySlug(category || "uncategorized");

  return (
    <Link href={`/${categorySlug}/${slug}`}>
      <article className="group bg-[var(--bg)] border border-[var(--ui-2)] rounded-lg overflow-hidden hover:border-[var(--accent)] transition-all duration-300 hover:shadow-lg">
        {/* Featured Image */}
        {featured_image && (
          <div className="relative w-full h-48 md:h-64 overflow-hidden bg-[var(--bg-2)]">
            <Image
              src={featured_image}
              alt={title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}

        {/* Content */}
        <div className="p-6">
          {/* Category Tag & Date */}
          <div className="flex items-center gap-3 mb-3 text-sm">
            <span className="bg-[var(--accent)] text-[var(--bg)] px-3 py-1 rounded-full font-medium">
              {category}
            </span>
            <span className="text-[var(--tx-3)] italic">{formattedDate}</span>
          </div>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--tx)] mb-3 group-hover:text-[var(--accent)] transition-colors">
            {title}
          </h2>

          {/* Excerpt */}
          <p className="text-[var(--tx-2)] leading-relaxed italic line-clamp-3">
            {excerpt}
          </p>

          {/* Read More */}
          <div className="mt-4 text-[var(--accent-2)] font-medium group-hover:text-[var(--accent)] transition-colors">
            Read more →
          </div>
        </div>
      </article>
    </Link>
  );
}
