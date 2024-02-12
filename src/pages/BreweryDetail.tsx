import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetchBreweryById } from '../hooks/useFetchBrewery';
import { Typography, Link, Paper, CircularProgress, Box } from '@mui/material';

const Breweries = () => {
    const { id } = useParams();
    const { brewery, loading, error } = useFetchBreweryById(id || "");

    if (loading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return (
            <Typography variant="body1" color="error" align="center">
                {error.message}
            </Typography>
        );
    }

    return (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
            <Paper elevation={3} style={{ padding: '20px', margin: '20px', backgroundColor: '#e0ffcd', maxWidth: '600px', width: '100%' }}>
                <Typography variant="h4" gutterBottom color="#155263" align="center">
                    {brewery?.name}
                </Typography>
                <Typography fontSize="20px" gutterBottom align="center" color="#ffc93c">
                    {brewery?.brewery_type}
                </Typography>
                <Typography  fontSize="18px" align="center">
                    Location: {brewery?.city}, {brewery?.state_province}, {brewery?.country}
                </Typography>
                <Typography  fontSize="18px" align="center">Address: {brewery?.street}</Typography>
                <Typography  fontSize="18px" align="center">Phone: {brewery?.phone}</Typography>
                <Typography  fontSize="18px" align="center">
                    Website: {brewery?.website_url ? (
                        <Link href={brewery.website_url} target="_blank" rel="noopener noreferrer">
                            Visit Website
                        </Link>
                    ) : 'N/A'}
                </Typography>
            </Paper>
        </Box>
    );
};

export default Breweries;
