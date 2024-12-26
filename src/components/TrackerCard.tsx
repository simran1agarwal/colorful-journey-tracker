import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TrackerType } from "@/types/tracker";
import { X } from "lucide-react";

interface TrackerCardProps {
  type: TrackerType;
  onClose: () => void;
}

const TrackerCard = ({ type, onClose }: TrackerCardProps) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement data saving
    onClose();
  };

  return (
    <Card className="p-6 animate-slide-in">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold capitalize">{type}</h2>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type={type === "weight" ? "number" : "text"}
          placeholder={`Enter your ${type}`}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full"
        />
        <Button type="submit" className="w-full">
          Save
        </Button>
      </form>
    </Card>
  );
};

export default TrackerCard;