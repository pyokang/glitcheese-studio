import type { ReactNode } from "react";
import { Navbar } from "@/components/shared/navbar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="relative bg-black text-white ">
      <Navbar />
      <section className="flex">{children}</section>
    </main>
  );
}
