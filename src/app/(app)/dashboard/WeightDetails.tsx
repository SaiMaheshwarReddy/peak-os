import { Button } from "@/components/ui/button";
import { Plus, Scale, WeightTilde } from "lucide-react";
import React from "react";

const WeightDetails = () => {
  return (
    <section className="mt-4 w-full max-w-3xl rounded-3xl bg-success-background px-5 py-4 border border-border">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-success-backgroundv2 ">
            <WeightTilde className="h-8 w-8 text-success" strokeWidth={2.2} />
          </div>

          <div className="flex flex-col">
            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-foreground/60">
              Weight
            </p>

            <div className="mt-1 flex items-end gap-2">
              <span className="text-4xl font-bold leading-none  text-foreground">
                78.4
              </span>
              <span className="pb-1 text-base font-medium text-foreground/90">
                kg
              </span>
            </div>

            <div className="mt-2 flex items-start gap-1 text-sm font-medium text-foreground/65">
              <span className="pt-0.5 text-lg leading-none text-success">
                ↓
              </span>
              <div className=" ">
                <span className="text-success">0.3 kg </span>

                <span className="text-[12px]">from last entry</span>
              </div>
            </div>
          </div>
        </div>

        <Button className="bg-success-backgroundv2 text-success self-start">
          <Plus className="size-4" strokeWidth={2.5} />
          <span>Weight</span>
        </Button>
      </div>
    </section>
  );
};

export default WeightDetails;
