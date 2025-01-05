import { TempUnit } from './TempUnit';

export interface WeatherEntryType {
    date: string;
    minTemp: number;
    maxTemp: number;
    avgTemp: number;
}

export interface ProjectType {
    name: string;
    location: string;
    unit: TempUnit;
    weatherEntries: WeatherEntryType[];
    totalAvgTemp: number;
}

export interface ProjectProps {
    project: ProjectType;
    updateProject: (project: ProjectType) => void;
}

interface WeatherTableProps {
    entries: WeatherEntryType[];
    unit: TempUnit;
    updateEntries : (entries: WeatherEntryType[]) => void;
}