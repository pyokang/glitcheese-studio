import React from "react";

export const Tag = ({ name }: { name: string }) => {
  return (
    <div className="border border-[#B9B9B9] py-[5px] px-[12px] w-fit h-fit">
      <p className="font-redHatDisplay text-[14px] font-semibold text-[#B9B9B9]">
        {name}
      </p>
    </div>
  );
};
