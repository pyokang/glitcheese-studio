import { Tag } from "@/components/shared/Tag";
import Image from "next/image";

type TProps = {
  image: {
    url: string;
    width?: number;
    height?: number;
  };
  title: string;
  description: string;
  tags: string[];
};

export const BlogCard = (props: TProps) => {
  const { image, title, description, tags } = props;
  return (
    <div className="flex flex-col">
      <Image
        src={image.url}
        alt="blog thumbnail image"
        height={image.height}
        width={image.width}
        className="object-fit w-full"
      />
      <h2 className="font-libreBaskerville text-[32px] font-bold mt-[30px]">
        {title}
      </h2>
      <p className="font-redHatDisplay text-[20px] font-normal mt-[8px]">
        {description}
      </p>
      <div className="mt-[30px] flex w-full flex-wrap">
        {tags.length > 0
          ? tags.map((tag, index) => <Tag key={index} name={tag} />)
          : null}
      </div>
    </div>
  );
};
