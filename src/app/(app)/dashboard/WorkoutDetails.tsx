import { Button } from "@/components/ui/button";
import { Check, ChevronRight, Dumbbell } from "lucide-react";
import React from "react";

const WorkoutDetails = () => {
  return (
    <section className="mt-4 w-full max-w-3xl rounded-3xl border border-border bg-purple-subtle px-5 py-4">
      <div className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-start gap-4">
          <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-blue-backgroundv2">
            <Dumbbell className="size-8 text-blue-dark" strokeWidth={2.4} />
          </div>

          <div className="min-w-0">
            <p className="text-[10px] font-medium tracking-widest text-foreground/60 uppercase">
              Workout
            </p>

            <h2 className="mt-1 truncate text-2xl font-bold leading-none text-foreground">
              Pull Day
            </h2>

            <p className="mt-2 text-base text-muted-foreground">
              5 exercises <span className="px-1">•</span> 15 sets
            </p>

            <div className="mt-1 flex items-center gap-2 text-sm font-medium text-success">
              <span className="flex size-5 items-center justify-center rounded-full bg-success text-white">
                <Check className="size-3.5" strokeWidth={3} />
              </span>
              <span>Completed</span>
            </div>
          </div>
        </div>

        <div className="flex shrink-0 flex-col items-end justify-between gap-7">
          <ChevronRight
            className="size-5 text-muted-foreground"
            strokeWidth={2}
          />
          <Button
            size="lg"
            className="bg-blue-backgroundv2 text-blue-dark hover:bg-blue-background"
          >
            View
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WorkoutDetails;
