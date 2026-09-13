"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import { Dumbbell, LayoutDashboard, Utensils } from "lucide-react";
import { usePathname } from "next/dist/client/components/navigation";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const isWorkoutPage = pathname === "/workout";
  const isDashboardPage = pathname === "/dashboard";
  const isDietPage = pathname === "/diet";

  return (
    <div className="flex h-dvh flex-col">
      <div className="flex min-h-0 flex-1 flex-col overflow-hidden px-6">
        <Header />
        <main className="w-full min-h-0 flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
      <nav className="flex w-full shrink-0 items-center justify-between border-t border-border bg-background py-4 px-8">
        <Button asChild variant="ghost">
          <Link href="/dashboard">
            <div
              className={`flex flex-col items-center gap-1 ${isDashboardPage ? "text-destructive" : ""}`}
            >
              <LayoutDashboard className="size-5" />

              <p className="text-xs font-bold">Today</p>
            </div>
          </Link>
        </Button>
        <Button asChild variant="ghost">
          <Link href="/workout">
            <div
              className={`flex flex-col items-center gap-1 ${isWorkoutPage ? "text-destructive" : ""}`}
            >
              <Dumbbell className="size-5" />
              <p className="text-xs font-bold">Workout</p>
            </div>
          </Link>
        </Button>
        <Button asChild variant="ghost">
          <Link href="/diet">
            <div
              className={`flex flex-col items-center gap-1 ${isDietPage ? "text-destructive" : ""}`}
            >
              <Utensils className="size-5" />
              <p className="text-xs font-bold">Diet</p>
            </div>
          </Link>
        </Button>
      </nav>
    </div>
  );
};

export default Layout;
