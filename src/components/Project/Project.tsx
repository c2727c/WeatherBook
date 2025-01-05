import React, { useState, useMemo } from 'react';
import { ProjectProps, WeatherEntryType } from '../../types/WeatherTypes';
import { TextField, Typography, Box, Radio, RadioGroup, FormControl, FormControlLabel, Button } from '@mui/material';
import Grid from '@mui/material/Grid2';
import WeatherTable from '../WeatherTable/WeatherTable';
import { TempUnit } from '../../types/TempUnit';

const isEqualEntry = (entry1: WeatherEntryType, entry2: WeatherEntryType) => {
    return (
        entry1.date === entry2.date &&
        entry1.minTemp === entry2.minTemp &&
        entry1.maxTemp === entry2.maxTemp &&
        entry1.avgTemp === entry2.avgTemp
    );
};

const isEqualTable = (table1: WeatherEntryType[], table2: WeatherEntryType[]) => {
    return table1.length === table2.length && table1.every((entry, idx) => isEqualEntry(entry, table2[idx]));
}


const Project: React.FC<ProjectProps> = ({ project, updateProject }) => {
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
    const [updatedProject, setUpdatedProject] = useState(project);
    const handleDoubleClick = (field: 'name' | 'location' | 'unit') => {
        setIsEditing((prev) => ({ ...prev, [field]: true }));
    };
    const handleBlur = (field: 'name' | 'location' | 'unit') => {
        if (editableProject[field].toString().trim() !== '') {
            setIsEditing((prev) => ({ ...prev, [field]: false }));
            setUpdatedProject((prev) => ({ ...prev, [field]: editableProject[field] }));
        }
    };
    const handleChange = (field: 'name' | 'location' | 'unit', value: string) => {
        console.log({ ...editableProject, [field]: value });
        setEditableProject((prev) => ({ ...prev, [field]: value }));
    };
    const isChanged = useMemo(() => {
        return (
            updatedProject.name !== project.name ||
            updatedProject.location !== project.location ||
            updatedProject.unit !== project.unit ||
            !isEqualTable(updatedProject.weatherEntries, project.weatherEntries)
        );
    }, [updatedProject, project]);

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
                            error={editableProject.name.trim() === ''}
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
                            error={editableProject.location.trim() === ''}
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
                    <WeatherTable entries={updatedProject.weatherEntries} updateEntries={
                        (newEntries) => {
                            setUpdatedProject((prev) => ({ ...prev, weatherEntries: newEntries }));
                            console.log(newEntries);
                        }
                    }
                    />
                </Grid>
                <Grid size={12}>
                    {isChanged && <Button variant="contained"
                        color="primary" 
                        onClick={() => {
                            updateProject(updatedProject);
                        }}>
                        Save Changes
                    </Button>}
                </Grid>

            </Grid>

        </Box>
    );
};

export default Project;