import { Navbar } from "../../components/shared/navbar";
import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="relative bg-black text-white ">
      <Navbar />
      <section className="flex">{children}</section>
    </main>
  );
}
