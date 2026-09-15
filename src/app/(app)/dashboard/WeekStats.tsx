import { Button } from "@/components/ui/button";
import { BarChart3, Check, Circle, Minus } from "lucide-react";
import React from "react";

const WeekStats = () => {
  return (
    <section className="mt-4 w-full max-w-3xl rounded-3xl border border-border bg-blue-subtle px-5 py-4">
      <div className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-start gap-4">
          <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-blue-backgroundv2">
            <BarChart3 className="size-8 text-blue-dark" strokeWidth={2.3} />
          </div>

          <div className="flex min-w-0 items-start gap-6">
            <div>
              <p className="text-[10px] font-medium tracking-widest text-foreground/60 uppercase">
                This week
              </p>
              <p className="mt-1 text-xl font-bold leading-none text-foreground">
                4 <span className="text-base font-medium">workouts</span>
              </p>
              <p className="mt-2 flex items-center gap-1 text-sm font-medium text-success">
                <span className="text-base">↑</span>
                <span>4</span>
                <span className="text-muted-foreground">/ 5 target</span>
              </p>
            </div>

            <div className="mt-1 h-16 w-px bg-border" />

            <div className="pt-5">
              <p className="text-xl font-bold leading-none text-foreground">
                148 <span className="text-base font-medium">g protein</span>
              </p>
              <p className="mt-2 text-sm text-muted-foreground">avg. / day</p>
            </div>
          </div>
        </div>

        <Button
          size="lg"
          className="shrink-0 bg-blue-backgroundv2 text-blue-dark hover:bg-accent"
        >
          Progress
        </Button>
      </div>

      <div className="mt-7 grid grid-cols-7 gap-2">
        <DayStatus day="Mon" status="complete" />
        <DayStatus day="Tue" status="complete" />
        <DayStatus day="Wed" status="missed" />
        <DayStatus day="Thu" status="complete" />
        <DayStatus day="Fri" status="complete" />
        <DayStatus day="Sat" status="missed" />
        <DayStatus day="Sun" status="today" />
      </div>
    </section>
  );
};

type DayStatusProps = {
  day: string;
  status: "complete" | "missed" | "today";
};

const DayStatus = ({ day, status }: DayStatusProps) => {
  const statusIcon = {
    complete: <Check className="size-3.5" strokeWidth={3} />,
    missed: <Minus className="size-3.5" strokeWidth={2.5} />,
    today: <Circle className="size-3" fill="currentColor" strokeWidth={2.5} />,
  }[status];

  const statusClassName = {
    complete: "bg-success text-white",
    missed: "bg-muted text-muted-foreground",
    today:
      "bg-blue-backgroundv2 text-blue-dark ring-2 ring-blue-backgroundv2 ring-offset-2 ring-offset-blue-subtle",
  }[status];

  return (
    <div className="flex min-w-0 flex-col items-center gap-2 text-sm text-muted-foreground">
      <span
        className={`flex size-5 items-center justify-center rounded-full ${statusClassName}`}
      >
        {statusIcon}
      </span>
      <span>{day}</span>
    </div>
  );
};

export default WeekStats;
