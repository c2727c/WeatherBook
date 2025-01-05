import React from 'react';
import { ProjectProps } from '../../types/WeatherTypes';
import WeatherTable from '../WeatherTable/WeatherTable';

const Project: React.FC<ProjectProps> = ({ project }) => {
  return (
    <div>
      <h1>{project.name}</h1>
      <h2>{project.location}</h2>
      <h2>{project.unit}</h2>
      <WeatherTable entries={project.weatherEntries} />
      <h2>{project.totalAvgTemp}</h2>
    </div>
  );
};

export default Project;