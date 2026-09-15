"use client";

import * as React from "react";
import { format } from "date-fns";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Field, FieldLabel } from "@/components/ui/field";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar as CalendarIcon } from "lucide-react";

export function DateSelector() {
  const [date, setDate] = React.useState<Date>();

  return (
    <Field className="mx-auto">
      {/* <FieldLabel htmlFor="date-picker-simple">Date</FieldLabel> */}
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="secondary"
            id="date-picker-simple"
            className="justify-start font-normal"
            size="sm"
          >
            {date ? format(date, "PPP") : <CalendarIcon className="size-5" />}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="center">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            defaultMonth={date}
          />
        </PopoverContent>
      </Popover>
    </Field>
  );
}
