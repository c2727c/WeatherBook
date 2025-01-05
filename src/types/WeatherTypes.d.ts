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
}

interface WeatherTableProps {
    entries: WeatherEntryType[];
}