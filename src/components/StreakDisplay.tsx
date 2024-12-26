import { TrackerType } from "@/types/tracker";
import { Badge } from "@/components/ui/badge";
import { Fire } from "lucide-react";

interface StreakDisplayProps {
  type: TrackerType;
}

const StreakDisplay = ({ type }: StreakDisplayProps) => {
  // TODO: Implement actual streak tracking
  const streak = 5;

  return (
    <Badge variant="secondary" className="animate-bounce-scale">
      <Fire className="w-4 h-4 mr-1 text-orange-500" />
      {streak} day streak
    </Badge>
  );
};

export default StreakDisplay;