import DashboardHeader from "@/app/(app)/dashboard/DashboardHeader";
import NutritionDetails from "@/app/(app)/dashboard/NutritionDetails";
import WeekStats from "@/app/(app)/dashboard/WeekStats";
import WeightDetails from "@/app/(app)/dashboard/WeightDetails";
import WorkoutDetails from "@/app/(app)/dashboard/WorkoutDetails";

import React from "react";

const Dashboard = () => {
  return (
    <div>
      <DashboardHeader />
      <WeightDetails />
      <WorkoutDetails />
      <NutritionDetails />
      <WeekStats />
    </div>
  );
};

export default Dashboard;
