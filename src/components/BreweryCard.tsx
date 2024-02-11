import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Brewery } from '../misc/types';
import { Link } from 'react-router-dom';

const BreweryCard = ({ brewery }: { brewery: Brewery }) => {
    return (
        <Card 
            variant="outlined" 
            sx={{ 
                maxWidth: 345, 
                width: '100%', 
                bgcolor: '#e0ffcd',
                boxShadow: 3, 
                ':hover': { 
                    boxShadow: 5, 
                    transform: 'scale(1.05)' 
                }, 
                transition: 'transform 0.15s ease-in-out' 
            }}
        >
            <Link to={`/breweries/${brewery.id}`} style={{ textDecoration: 'none' }}>
            <CardContent>
                <Typography variant="h5" component="div" sx={{ color: '#155263' }}>
                    {brewery.name}
                </Typography>
                <Typography sx={{ mb: 1.5, color: '#ffc93c' }}>
                    {brewery.brewery_type}
                </Typography>
                <Typography variant="body2" sx={{color: '#155263'}}>
                    {brewery.city}, {brewery.state_province}, {brewery.country}
                </Typography>
            </CardContent>
            </Link>
        </Card>
       
    );
};

export default BreweryCard;
