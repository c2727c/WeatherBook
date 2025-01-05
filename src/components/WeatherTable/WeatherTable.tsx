import { WeatherTableProps, WeatherEntryType } from '../../types/WeatherTypes';
import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const WeatherTable: React.FC<WeatherTableProps> = ({ entries, onEntriesChange }) => {
    const [showEdit, setShowEdit] = useState(false);
    const [showInput, setShowInput] = useState(false);
    const [submitAttempted, setSubmitAttempted] = useState(false);
    const [newEntry, setNewEntry] = useState<WeatherEntryType>({
        date: '',
        minTemp: 0,
        maxTemp: 0,
        avgTemp: 0,
    });
    const [localEntries, setLocalEntries] = useState<WeatherEntryType[]>(entries);
    const totalAvgTemp = localEntries.reduce((sum, entry) => sum + (entry.avgTemp || 0), 0) / localEntries.length || 0;

    const handleEditEntries = () => {
        setShowEdit((prev) => !prev);
    }

    const handleAddEntry = () => {
        if (showInput) {
            setSubmitAttempted(true);
            if (newEntry.date === '' || newEntry.minTemp > newEntry.maxTemp) {
                return;
            }
            localEntries.push(newEntry);
            setShowInput(false);
        }
        else {
            setShowInput(true);
            setSubmitAttempted(false);
        }
    }

    const handleInputChange = <K extends keyof WeatherEntryType>
        (field: K, value: WeatherEntryType[K]) => {
        setNewEntry((prev) => {
            const updatedEntry = { ...prev, [field]: value };
            updatedEntry.avgTemp = (updatedEntry.minTemp + updatedEntry.maxTemp) / 2;
            return updatedEntry;
        });
    };

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Min Temp</TableCell>
                        <TableCell>Max Temp</TableCell>
                        <TableCell>Avg Temp</TableCell>
                        <TableCell style={{ width: '10%', whiteSpace: 'nowrap' }}>
                            <Button
                                variant={showEdit ? "contained" : "outlined"}
                                color="primary"
                                onClick={handleEditEntries}
                                size="small"
                            >
                                {showEdit ? "√" : "✏️"}
                            </Button>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {localEntries.map((entry, idx) => (
                        <TableRow key={idx}>
                            <TableCell>{entry.date}</TableCell>
                            <TableCell>{entry.minTemp}</TableCell>
                            <TableCell>{entry.maxTemp}</TableCell>
                            <TableCell>{entry.avgTemp}</TableCell>
                            <TableCell>
                                {showEdit && <Button
                                    variant="contained"
                                    color="error"
                                    size="small"
                                    onClick={() => {
                                        setLocalEntries((prev) => prev.filter((_, i) => i !== idx));
                                    }}
                                >
                                    🗑️
                                </Button>}
                            </TableCell>
                        </TableRow>
                    ))}
                    {showInput && <TableRow>
                        <TableCell>
                            <TextField
                                label="Date"
                                size="small"
                                type="date"
                                error={submitAttempted && newEntry.date === ''}
                                value={newEntry.date}
                                onChange={(e) => handleInputChange('date', e.target.value)}
                            />
                        </TableCell>
                        <TableCell>
                            <TextField
                                label="Min Temp"
                                type="number"
                                size="small"
                                error={submitAttempted && newEntry.minTemp > newEntry.maxTemp}
                                value={newEntry.minTemp}
                                onChange={(e) => handleInputChange('minTemp', Number(e.target.value))}
                            />
                        </TableCell>
                        <TableCell>
                            <TextField
                                label="Max Temp"
                                type="number"
                                size="small"
                                error={submitAttempted && newEntry.minTemp > newEntry.maxTemp}
                                value={newEntry.maxTemp}
                                onChange={(e) => handleInputChange('maxTemp', Number(e.target.value))}
                            />
                        </TableCell>
                        <TableCell>
                            {newEntry.avgTemp}
                        </TableCell>
                        <TableCell>
                            <Button
                                variant="contained"
                                color="error"
                                onClick={() => setShowInput(false)}
                            >
                                -
                            </Button>
                        </TableCell>
                    </TableRow>}
                    <TableRow>
                        <TableCell colSpan={3} style={{ fontWeight: 'bold', textAlign: 'right' }}>
                            Total Avg Temp
                        </TableCell>
                        <TableCell style={{ fontWeight: 'bold' }}>
                            {totalAvgTemp.toFixed(2)}
                        </TableCell>
                        <TableCell>
                            {showEdit && <Button
                                variant={showInput ? "contained" : "outlined"}
                                color="primary"
                                size="small"
                                onClick={handleAddEntry}
                            >
                                {showInput ? "√" : "+"}
                            </Button>}
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default WeatherTable;