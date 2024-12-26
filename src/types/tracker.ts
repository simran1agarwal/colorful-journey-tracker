export type Mood = "great" | "good" | "okay" | "bad" | "terrible";

export type TrackerType = "weight" | "exercise" | "skincare" | "period" | "oralcare" | "mood";

export interface TrackerEntry {
  id: string;
  type: TrackerType;
  date: string;
  value: number | string;
  notes?: string;
}

export interface Streak {
  type: TrackerType;
  current: number;
  longest: number;
  lastUpdated: string;
}

export interface Badge {
  id: string;
  type: TrackerType;
  milestone: number;
  earnedDate: string;
  icon: string;
}