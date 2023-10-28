import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <nav className="sticky top-0 w-full flex items-center px-[80px] py-6 justify-between bg-black z-10 gap-4">
      <Link href="/">
        <Image
          src="/assets/icons/glitcheese-studio.svg"
          alt="glitcheese studio logo"
          width={204}
          height={38}
        />
      </Link>
      <ul className="flex gap-12">
        <Link href="/">
          <li className="font-redHatDisplay text-xl font-semibold">
            What We Do
          </li>
        </Link>
        <Link href="/">
          <li className="font-redHatDisplay text-xl font-semibold">
            Portfolio
          </li>
        </Link>
        <Link href="/blog">
          <li className="font-redHatDisplay text-xl font-semibold">Blog</li>
        </Link>
        <Link href="/">
          <li className="font-redHatDisplay text-xl font-semibold">Content</li>
        </Link>
      </ul>
    </nav>
  );
};
