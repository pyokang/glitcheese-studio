import { draftMode } from "next/headers";
import { BlogCard } from "../../../components/app/blog/BlogCard";
import { Metadata } from "next";
import { sanityFetch, token } from "@/sanity/lib/sanityFetch";
import { PreviewPosts } from "@/components/post/PreviewPosts";
import { PreviewProvider } from "@/context/PreviewProvider";
import { SanityDocument } from "next-sanity";
import { postsQuery } from "@/sanity/lib/queries";
import clsx from "clsx";

export const metadata: Metadata = {
  title: "Glitcheese Studio",
  description: "Amazing blog!",
};

export default async function Blog() {
  const posts = await sanityFetch<SanityDocument[]>({ query: postsQuery });
  const isDraftMode = draftMode().isEnabled;

  if (isDraftMode && token) {
    return (
      <PreviewProvider token={token}>
        <PreviewPosts posts={posts} />
      </PreviewProvider>
    );
  }

  return (
    <div className="min-h-screen w-full flex flex-col">
      <div className="w-full max-w-3xl mx-auto py-12">
        <h1 className="font-libreBaskerville text-[60px] font-bold text-center">
          Curious Corner
        </h1>
        <p className="text-[20px] font-normal text-center mt-[12px]">
          Welcome to the Curious Corner, a space where we share our knowledge,
          perspective, and experiences. Good news is, it’s all free resources
          for you! So, feel free to dive deep into the World of Branding!
        </p>
      </div>

      <section
        className={clsx(
          "grid w-full h-full gap-10 px-20 pb-[80px] lg:grid-cols-3 sm:grid-cols-2 grid-cols-1",
          {
            "grid-cols-1": posts.length === 1,
            "grid-cols-2": posts.length === 2,
          }
        )}
      >
        {posts.length > 0
          ? posts.map((post) => <BlogCard key={post._id} {...post} />)
          : // No blog yet...
            null}
      </section>
    </div>
  );
}
