"use client";

import type { SanityDocument } from "@sanity/client";
import { useLiveQuery } from "@sanity/preview-kit";
import { postsQuery } from "@/sanity/lib/queries";
import { Posts } from "./Posts";

export function PreviewPosts({ posts = [] }: { posts: SanityDocument[] }) {
  const [data] = useLiveQuery(posts, postsQuery);

  return <Posts posts={data} />;
}
