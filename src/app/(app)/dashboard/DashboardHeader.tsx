import { Button } from "@/components/ui/button";
import { DateSelector } from "@/components/ui/DateSelector";
import { ChevronRight, ChevronLeft } from "lucide-react";
import React from "react";

const DashboardHeader = () => {
  return (
    <section className="flex items-end justify-between">
      <div>
        <h1 className="text-2xl font-bold">Today</h1>
        <p className="text-muted-foreground">Sunday, Sep 13</p>
      </div>
      <div className="flex gap-1">
        <DateSelector />
        <Button size="sm" color="gray" variant="secondary" className="ml-3">
          <ChevronLeft className="size-5" />
        </Button>
        <Button size="sm" color="gray" variant="secondary">
          <ChevronRight className="size-5" />
        </Button>
      </div>
    </section>
  );
};

export default DashboardHeader;
