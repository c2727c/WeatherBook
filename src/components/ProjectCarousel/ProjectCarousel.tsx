import React, { useState, useEffect } from 'react';

// import './ProjectList.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import Project from '../Project/Project';
import { ProjectType } from '../../types/WeatherTypes';
import { TempUnit } from '../../types/TempUnit';

const projectsData : ProjectType[] = [
  {
    name: 'Project 1',
    location: 'Location 1',
    unit: TempUnit.Celsius,
    weatherEntries: [
      {
        date: '2021-01-01',
        minTemp: 10,
        maxTemp: 20,
        avgTemp: 15
      },
      {
        date: '2021-01-02',
        minTemp: 11,
        maxTemp: 21,
        avgTemp: 16
      },
      {
        date: '2021-01-03',
        minTemp: 12,
        maxTemp: 22,
        avgTemp: 17
      }],
    totalAvgTemp: 0
  },
  {
    name: 'Project 2',
    location: 'Location 2',
    unit: TempUnit.Fahrenheit,
    weatherEntries:
      [
        {
          date: '2021-01-01',
          minTemp: 50,
          maxTemp: 70,
          avgTemp: 60
        },
        {
          date: '2021-01-02',
          minTemp: 51,
          maxTemp: 71,
          avgTemp: 61
        },
        {
          date: '2021-01-03',
          minTemp: 52,
          maxTemp: 72,
          avgTemp: 62
        }],
    totalAvgTemp: 0
  },
  {
    name: 'Project 3',
    location: 'Location 3',
    unit: TempUnit.Celsius,
    weatherEntries: 
    [
      {
        date: '2021-01-01',
        minTemp: 10,
        maxTemp: 20,
        avgTemp: 15
      },
      {
        date: '2021-01-02',
        minTemp: 11,
        maxTemp: 21,
        avgTemp: 16
      },
      {
        date: '2021-01-03',
        minTemp: 12,
        maxTemp: 22,
        avgTemp: 17
      }],
    totalAvgTemp: 0
  }
]

const ProjectCarousel = () => {
  const [projects, setProjects] = useState<ProjectType[]>([]);
  useEffect(() => {
    setProjects(projectsData);
  }, []);
  
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {projects.map((project, idx) => (
          <SwiperSlide key={idx}>
            <Project project={project} updateProject={(newProject) => {
              setProjects((prev) => 
                {
                  const newProjects = [...prev];
                  newProjects[idx] = newProject;
                  console.log("Updated Projects: ", newProjects);
                  return newProjects;
                }
              );
            }} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default ProjectCarousel