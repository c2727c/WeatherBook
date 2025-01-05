import React, { useState } from 'react';
import { ProjectProps, WeatherEntryType } from '../../types/WeatherTypes';
import { TextField, Typography, Box, Radio, RadioGroup, FormControl, InputLabel, FormLabel, FormControlLabel } from '@mui/material';
import Grid from '@mui/material/Grid2';
import WeatherTable from '../WeatherTable/WeatherTable';
import { TempUnit } from '../../types/TempUnit';

const Project: React.FC<ProjectProps> = ({ project }) => {
    const [weatherEntries, setWeatherEntries] = useState<WeatherEntryType[]>(project.weatherEntries);
    const [isEditing, setIsEditing] = useState({
        name: false,
        location: false,
        unit: false,
    });
    const [editableProject, setEditableProject] = useState({
        name: project.name,
        location: project.location,
        unit: project.unit,
    });
    const handleDoubleClick = (field: 'name' | 'location' | 'unit') => {
        setIsEditing((prev) => ({ ...prev, [field]: true }));
    };
    const handleBlur = (field: 'name' | 'location' | 'unit') => {
        setIsEditing((prev) => ({ ...prev, [field]: false }));
    };
    const handleChange = (field: 'name' | 'location' | 'unit', value: string) => {
        console.log({ ...editableProject, [field]: value });
        setEditableProject((prev) => ({ ...prev, [field]: value }));
    };

    return (
        <Box sx={{ p: 3, m: 15 }}>
            <Grid container spacing={2}>
                {/* Project Name */}
                <Grid size={12} >
                    {isEditing.name ? (
                        <TextField
                            variant="standard"
                            value={editableProject.name}
                            onChange={(e) => handleChange('name', e.target.value)}
                            onBlur={() => handleBlur('name')}
                            autoFocus
                        />
                    ) : (
                        <Typography
                            variant="h4"
                            onDoubleClick={() => handleDoubleClick('name')}
                            sx={{ cursor: 'pointer' }}
                        >
                            {editableProject.name}
                        </Typography>
                    )}
                </Grid>
                <Grid size={6}>
                    {isEditing.location ? (
                        <TextField
                            value={editableProject.location}
                            onChange={(e) => handleChange('location', e.target.value)}
                            onBlur={() => handleBlur('location')}
                            autoFocus
                            variant="standard"
                            fullWidth
                        />
                    ) : (
                        <Typography
                            variant="h5"
                            onDoubleClick={() => handleDoubleClick('location')}
                            sx={{ cursor: 'pointer' }}
                        >
                            {editableProject.location}
                        </Typography>
                    )}
                </Grid>
                {/* Unit Field */}
                <Grid size={6}>
                    {isEditing.unit ? (
                        <FormControl fullWidth>
                        <FormControl>
                            <RadioGroup
                                defaultValue="female"
                                value={editableProject.unit}
                                onChange={(e) => handleChange('unit', e.target.value)}
                                autoFocus
                                onBlur={() => handleBlur('unit')}
                                row
                            >
                                <FormControlLabel value={TempUnit.Celsius} control={<Radio />} label="Celsius" />
                                <FormControlLabel value={TempUnit.Fahrenheit} control={<Radio />} label="Fahrenheit" />
                            </RadioGroup>
                        </FormControl>
                    </FormControl>
                    ) : (
                        <Typography
                            variant="h5"
                            onDoubleClick={() => handleDoubleClick('unit')}
                            sx={{ cursor: 'pointer' }}
                        > {editableProject.unit}
                        </Typography>
                        )}
                </Grid>
                <Grid size={12}>
                    <WeatherTable entries={weatherEntries} updateEntries={
                        (newEntries) => {
                            setWeatherEntries(newEntries);
                            console.log(newEntries);
                        }
                        } 
                        />
                </Grid>

            </Grid>

        </Box>
    );
};

export default Project;