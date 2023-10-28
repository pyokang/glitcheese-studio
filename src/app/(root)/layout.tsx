import type { ReactNode } from "react";
import { Navbar } from "@/components/shared/navbar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen flex-col bg-black text-white">
      <div className="w-full flex-none">
        <Navbar />
      </div>
      <div className="flex-grow overflow-y-auto">{children}</div>
    </div>
  );
}
