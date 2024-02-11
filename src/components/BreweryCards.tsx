import React from 'react';
import Grid from '@mui/material/Grid';
import { Brewery } from "../misc/types";
import BreweryCard from "./BreweryCard";

const BreweryCards = ({ breweries }: { breweries: Brewery[] }) => {
    return (
        <Grid container spacing={4} sx={{ padding: '20px' }}>
            {breweries.map((brewery, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <BreweryCard brewery={brewery} />
                </Grid>
            ))}
        </Grid>
    );
};

export default BreweryCards;
