import { draftMode } from "next/headers";
import { BlogCard } from "../../../components/app/blog/BlogCard";
import { blogCards } from "../../../constants";
import { Metadata } from "next";
import { sanityFetch, token } from "@/sanity/lib/sanityFetch";
import { PreviewPosts } from "@/components/post/PreviewPosts";
import { PreviewProvider } from "@/context/PreviewProvider";
import { SanityDocument } from "next-sanity";
import { postsQuery } from "@/sanity/lib/queries";

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
        <p className="font-redHatDisplay text-[20px] font-normal text-center mt-[12px]">
          Welcome to the Curious Corner, a space where we share our knowledge,
          perspective, and experiences. Good news is, it’s all free resources
          for you! So, feel free to dive deep into the World of Branding!
        </p>
      </div>

      <section className="flex w-full h-full gap-x-[60px] px-20 pb-[80px]">
        <div className="flex-1 h-full flex flex-col shrink-0 gap-y-[60px]">
          {blogCards.slice(0, 2).map((blogCard) => (
            <BlogCard {...blogCard} key={blogCard.id} />
          ))}
        </div>
        <div className="flex-1 h-full flex flex-col shrink-0 gap-y-[60px]">
          {blogCards.slice(2, 4).map((blogCard) => (
            <BlogCard {...blogCard} key={blogCard.id} />
          ))}
        </div>
        <div className="flex-1 h-full flex flex-col shrink-0 gap-y-[60px]">
          {blogCards.slice(4).map((blogCard) => (
            <BlogCard {...blogCard} key={blogCard.id} />
          ))}
        </div>
      </section>
    </div>
  );
}
