import { Tag } from "@/components/shared/Tag";
import Image from "next/image";
import { SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";
import { getImageDimensions } from "@sanity/asset-utils";
import Link from "next/link";

const builder = imageUrlBuilder(client);

export const BlogCard = (props: SanityDocument) => {
  const { slug, mainImage, title, description, tags } = props;
  const { width, height } = getImageDimensions(mainImage);

  return (
    <Link href={`/blog/${slug.current}`}>
      <div className="flex flex-col">
        <Image
          src={builder.image(mainImage).url()}
          width={width}
          height={height}
          className="object-contain w-full"
          alt={props?.mainImage?.alt}
        />
        <h2 className="font-libreBaskerville text-[32px] font-bold mt-[30px]">
          {title}
        </h2>
        <p className="text-[20px] font-normal mt-[8px]">{description}</p>
        <div className="mt-[30px] flex w-full flex-wrap">
          {tags !== null
            ? // @ts-ignore
              tags.map((tag, index) => <Tag key={index} name={tag} />)
            : null}
        </div>
      </div>
    </Link>
  );
};
