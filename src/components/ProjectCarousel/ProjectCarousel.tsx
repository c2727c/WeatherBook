import { useState, useEffect } from 'react';
import { Button, Box, Typography } from '@mui/material';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import Project from '../Project/Project';
import { ProjectType } from '../../types/WeatherTypes';
import { TempUnit } from '../../types/TempUnit';

const projectsKey = 'projects111';

const ProjectCarousel = () => {
    const [projects, setProjects] = useState<ProjectType[]>([]);
    const [addingProject, setAddingProject] = useState(false);

    useEffect(() => {
        const projectList = JSON.parse(localStorage.getItem(projectsKey) || '[]');
        if (projectList.length === 0) {
            setAddingProject(true);
        }
        console.log("Project List: ", projectList);
        setProjects(projectList);
    }, []);


    const handleAddProject = () => {
        setAddingProject(true);
    };


    return (
        <>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            >
                {projects.map((project, idx) => (
                    <SwiperSlide key={idx}>
                        <Project project={project} updateProject={(newProject) => {
                            setProjects((prev) => {
                                const newProjects = [...prev];
                                newProjects[idx] = newProject;
                                console.log("Updated Projects: ", newProjects);
                                // save newProjects to local storage
                                localStorage.setItem(projectsKey, JSON.stringify(newProjects));
                                return newProjects;
                            }
                            );
                        }} />
                    </SwiperSlide>
                ))}
                {addingProject && <SwiperSlide>
                    <Project project={{
                        name: 'New Project',
                        location: 'Add Location',
                        unit: TempUnit.Celsius,
                        weatherEntries: [],
                        totalAvgTemp: 0
                    }} updateProject={(newProject) => {
                        setProjects((prev) => {
                            const newProjects = [...prev, newProject];
                            localStorage.setItem(projectsKey, JSON.stringify(newProjects));
                            return newProjects;
                        });
                        setAddingProject(false);
                    }} />
                </SwiperSlide>}
                {!addingProject && <SwiperSlide>
                    <Box sx={{ p: 20, m: 15 }}>
                        <Typography variant="h4" gutterBottom>
                            <Button variant="contained" color="primary" onClick={handleAddProject}>
                                New Project
                            </Button>
                        </Typography>
                    </Box>
                </SwiperSlide>}
            </Swiper>
        </>
    )
}

export default ProjectCarousel