import { WeatherTableProps } from '../../types/WeatherTypes';
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

const WeatherTable: React.FC<WeatherTableProps> = ({ entries }) => {
    const [showInput, setShowInput] = useState(false);
    const totalAvgTemp = entries.reduce((sum, entry) => sum + (entry.avgTemp || 0), 0) / entries.length || 0;

    const handleAddEntry = () => {
        if (showInput) {
            // add entry
            setShowInput(false);
        }
        else {
            setShowInput(true);
        }
    }

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Min Temp</TableCell>
                        <TableCell>Max Temp</TableCell>
                        <TableCell>Avg Temp</TableCell>
                        <TableCell style={{ width: '10%', whiteSpace: 'nowrap', textAlign: 'center' }}></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {entries.map((entry, idx) => (
                        <TableRow key={idx}>
                            <TableCell>{entry.date}</TableCell>
                            <TableCell>{entry.minTemp}</TableCell>
                            <TableCell>{entry.maxTemp}</TableCell>
                            <TableCell>{entry.avgTemp}</TableCell>
                            <TableCell>
                                <Button
                                    variant="contained"
                                    color="primary"
                                >
                                    -
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                    {showInput && <TableRow>
                        <TableCell>
                            <TextField
                                label="Date"
                                size="small"
                                type="date"
                            />
                        </TableCell>
                        <TableCell>
                            <TextField
                                label="Min Temp"
                                type="number"
                                size="small"
                            />
                        </TableCell>
                        <TableCell>
                            <TextField
                                label="Max Temp"
                                type="number"
                                size="small"
                            />
                        </TableCell>
                        <TableCell>
                            calculated
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
                            <Button
                                variant={showInput?"contained":"outlined"}
                                color="primary"
                                onClick={handleAddEntry}
                            >
                                {showInput?"√":"+"}
                            </Button>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default WeatherTable;