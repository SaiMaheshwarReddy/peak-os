import { Button } from "@/components/ui/button";
import { Plus, Utensils } from "lucide-react";
import React from "react";

const NutritionDetails = () => {
  return (
    <section className="mt-4 w-full max-w-3xl rounded-3xl border border-border bg-orange-subtle px-5 py-4">
      <div className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-start gap-4">
          <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-orange-backgroundv2">
            <Utensils className="size-8 text-orange-dark" strokeWidth={2.3} />
          </div>

          <div className="min-w-0 flex-1">
            <p className="text-[10px] font-medium tracking-widest text-foreground/60 uppercase">
              Nutrition
            </p>

            <div className="mt-1 flex items-baseline gap-2">
              <span className="text-2xl font-bold leading-none text-foreground">
                1,850
              </span>
              <span className="text-md text-foreground/90">/ 2,300 kcal</span>
            </div>

            <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-muted">
              <div className="h-full w-4/5 rounded-full bg-orange-background" />
            </div>
          </div>
        </div>

        <Button
          size="lg"
          className="shrink-0 bg-orange-backgroundv2 text-orange-dark hover:bg-warning-background"
        >
          <Plus className="size-4" strokeWidth={2.5} />
          <span>Meal</span>
        </Button>
      </div>

      <div className="mt-7 space-y-4">
        <MacroRow
          label="Protein"
          value="132 / 160 g"
          percentage="83%"
          progress="w-[83%]"
          progressClassName="bg-protein"
        />
        <MacroRow
          label="Carbs"
          value="180 / 250 g"
          percentage="72%"
          progress="w-[72%]"
          progressClassName="bg-carbs"
        />
        <MacroRow
          label="Fat"
          value="55 / 70 g"
          percentage="79%"
          progress="w-[79%]"
          progressClassName="bg-fat"
        />
      </div>
    </section>
  );
};

type MacroRowProps = {
  label: string;
  value: string;
  percentage: string;
  progress: string;
  progressClassName: string;
};

const MacroRow = ({
  label,
  value,
  percentage,
  progress,
  progressClassName,
}: MacroRowProps) => {
  return (
    <div className="flex min-w-0 items-center gap-3 text-sm">
      <span className="w-20 shrink-0 font-medium text-foreground">{label}</span>
      <span className="w-24 shrink-0 text-muted-foreground">{value}</span>
      <div className="h-2.5 min-w-0 flex-1 overflow-hidden rounded-full bg-muted">
        <div
          className={`h-full rounded-full ${progress} ${progressClassName}`}
        />
      </div>
      <span className="w-8 shrink-0 text-right text-muted-foreground">
        {percentage}
      </span>
    </div>
  );
};

export default NutritionDetails;
