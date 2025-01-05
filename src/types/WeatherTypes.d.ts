export interface WeatherEntry {
    date: string;
    minTemp: number;
    maxTemp: number;
    avgTemp: number;
}

export interface Project {
    name: string;
    location: string;
    unit: 'C' | 'F';
    weatherEntries: WeatherEntry[];
    totalAvgTemp: number;
}

export interface ProjectProps {
    project: Project;
}

interface WeatherTableProps {
    entries: WeatherEntry[];
}