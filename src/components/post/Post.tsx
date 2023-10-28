"use client";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { SanityDocument } from "@sanity/client";
import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/lib/client";
import { getImageDimensions } from "@sanity/asset-utils";
import { Tag } from "../shared/Tag";

const builder = imageUrlBuilder(client);

// @ts-ignore
const SampleImageComponent = ({ value }) => {
  const { width, height } = getImageDimensions(value);
  return (
    <Image
      src={builder.image(value).url()}
      width={width}
      height={height}
      alt={value.alt || " "}
      loading="lazy"
      className="object-contain w-full"
    />
  );
};

const serializer = {
  types: {
    image: SampleImageComponent,
  },
  block: {
    h1: ({ children }: { children: any }) => (
      <h1 className="text-white">{children}</h1>
    ),
    h2: ({ children }: { children: any }) => (
      <h2 className="text-white">{children}</h2>
    ),
    h3: ({ children }: { children: any }) => (
      <h3 className="text-white">{children}</h3>
    ),
    h4: ({ children }: { children: any }) => (
      <h4 className="text-white">{children}</h4>
    ),
    h5: ({ children }: { children: any }) => (
      <h5 className="text-white">{children}</h5>
    ),
    h6: ({ children }: { children: any }) => (
      <h6 className="text-white">{children}</h6>
    ),
    blockquote: ({ children }: { children: any }) => (
      <blockquote>{children}</blockquote>
    ),
  },
  marks: {
    span: ({ children }: { children: any }) => (
      <span className="text-white">{children}</span>
    ),
    strong: ({ children }: { children: any }) => (
      <strong className="text-white">{children}</strong>
    ),
    em: ({ children }: { children: any }) => (
      <em className="text-white">{children}</em>
    ),
  },
};

export function Post({ post }: { post: SanityDocument }) {
  const { title, mainImage, content, tags } = post;

  return (
    <div className="flex flex-col flex-1">
      {/* Heading */}
      <div className="flex w-full flex-col items-center gap-[20px] ">
        <div className="flex gap-2">
          {tags !== null
            ? // @ts-ignore
              tags.map((tag, index) => <Tag key={index} name={tag} />)
            : null}
        </div>
        <h1 className="font-libreBaskerville text-[60px] font-bold text-white">
          {title}
        </h1>
      </div>

      {/* Image */}
      {/* Temporarily adding -z-10 to avoid collision with the navbar */}
      <div className="w-full relative h-[600px] -z-10 mt-10">
        <Image
          src={builder.image(mainImage).url()}
          alt={mainImage?.alt}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <article className="container prose prose-lg px-20 !text-white mt-10">
        {post?.content ? (
          // @ts-ignore
          <PortableText value={content} components={serializer} />
        ) : null}
      </article>
    </div>
  );
}
