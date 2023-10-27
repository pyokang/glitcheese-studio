import { Navbar } from "../../components/shared/navbar";
import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="background-light850_dark100 relative">
      <Navbar />
      <section className="flex">{children}</section>
    </main>
  );
}
