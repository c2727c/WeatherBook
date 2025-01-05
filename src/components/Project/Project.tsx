import React, { useState } from 'react';
import { ProjectProps, WeatherEntryType } from '../../types/WeatherTypes';
import WeatherTable from '../WeatherTable/WeatherTable';

const Project: React.FC<ProjectProps> = ({ project }) => {
  const [weatherEntries, setWeatherEntries] = useState<WeatherEntryType[]>(project.weatherEntries);
  return (
    <div>
      <h1>{project.name}</h1>
      <h2>{project.location}</h2>
      <h2>{project.unit}</h2>
      <WeatherTable entries={weatherEntries} onEntriesChange={(newEntries) => setWeatherEntries(newEntries)} />
      <h2>{project.totalAvgTemp}</h2>
    </div>
  );
};

export default Project;