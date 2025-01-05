import { WeatherTableProps } from '../../types/WeatherTypes';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

const WeatherTable: React.FC<WeatherTableProps> = ({ entries }) => {
    const totalAvgTemp = entries.reduce((sum, entry) => sum + (entry.avgTemp || 0), 0) / entries.length || 0;

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
                    <TableRow>
                        <TableCell colSpan={3} style={{ fontWeight: 'bold', textAlign: 'right' }}>
                            Total Avg Temp
                        </TableCell>
                        <TableCell style={{ fontWeight: 'bold' }}>
                            {totalAvgTemp.toFixed(2)}
                        </TableCell>
                        <TableCell>
                            <Button
                                variant="contained"
                                color="primary"
                            >
                                +
                            </Button>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default WeatherTable;