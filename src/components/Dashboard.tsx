import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Dumbbell, Droplet, Calendar, Stethoscope, Scale } from "lucide-react";
import { TrackerType } from "@/types/tracker";
import TrackerCard from "./TrackerCard";
import StreakDisplay from "./StreakDisplay";

const Dashboard = () => {
  const [selectedTracker, setSelectedTracker] = useState<TrackerType | null>(null);

  const trackers = [
    { type: "weight" as TrackerType, icon: Scale, color: "pastel-blue" },
    { type: "exercise" as TrackerType, icon: Dumbbell, color: "pastel-green" },
    { type: "skincare" as TrackerType, icon: Droplet, color: "pastel-yellow" },
    { type: "period" as TrackerType, icon: Calendar, color: "pastel-pink" },
    { type: "oralcare" as TrackerType, icon: Stethoscope, color: "pastel-purple" },
    { type: "mood" as TrackerType, icon: Heart, color: "pastel-pink" },
  ];

  return (
    <div className="container mx-auto p-4 space-y-6 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {trackers.map(({ type, icon: Icon, color }) => (
          <Card
            key={type}
            className={`p-6 bg-${color} hover:scale-105 transition-transform duration-200 cursor-pointer`}
            onClick={() => setSelectedTracker(type)}
          >
            <div className="flex items-center space-x-4">
              <Icon className="w-8 h-8" />
              <div>
                <h3 className="text-lg font-semibold capitalize">{type}</h3>
                <StreakDisplay type={type} />
              </div>
            </div>
          </Card>
        ))}
      </div>

      {selectedTracker && (
        <TrackerCard
          type={selectedTracker}
          onClose={() => setSelectedTracker(null)}
        />
      )}
    </div>
  );
};

export default Dashboard;