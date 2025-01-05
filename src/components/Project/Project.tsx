import React from 'react';
import { WeatherProjectProps } from '../../types/WeatherTypes';

const WeatherProject: React.FC<WeatherProjectProps> = ({ project }) => {
  return (
    <div>
      <h1>{project.name}</h1>
      <h2>{project.location}</h2>
      <h2>{project.unit}</h2>
      <h2>{project.totalAvgTemp}</h2>
    </div>
  );
};

export default WeatherProject;