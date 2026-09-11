import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-dvh flex-col">
      <main className="w-full min-h-0 flex-1 overflow-y-auto">{children}</main>
      <nav className="flex w-full shrink-0 items-center justify-between border-t border-border bg-background px-4 py-4">
        <Button asChild variant="ghost">
          <Link href="/dashboard">Today</Link>
        </Button>
        <Button asChild variant="ghost">
          <Link href="/dashboard">Workout</Link>
        </Button>
        <Button asChild variant="ghost">
          <Link href="/dashboard">Diet</Link>
        </Button>
      </nav>
    </div>
  );
};

export default layout;
