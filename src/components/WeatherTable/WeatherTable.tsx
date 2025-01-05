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

const WeatherTable: React.FC<WeatherTableProps> = ({ entries }) => (
    <TableContainer component={Paper}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Min Temp</TableCell>
                    <TableCell>Max Temp</TableCell>
                    <TableCell>Avg Temp</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {entries.map((entry, idx) => (
                    <TableRow key={idx}>
                        <TableCell>{entry.date}</TableCell>
                        <TableCell>{entry.minTemp}</TableCell>
                        <TableCell>{entry.maxTemp}</TableCell>
                        <TableCell>{entry.avgTemp}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
        <Button
                variant="contained"
                color="primary"
                // onClick={handleAddRow}
                style={{ marginTop: '10px' }}
            >
                Add Row
        </Button>
    </TableContainer>
);

export default WeatherTable;