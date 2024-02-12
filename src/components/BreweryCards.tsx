import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import { Brewery } from "../misc/types";
import BreweryCard from "./BreweryCard";
import Box from '@mui/material/Box';

const BreweryCards = ({ breweries }: { breweries: Brewery[] }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12; // 每页显示的项目数

    // 计算总页数
    const pageCount = Math.ceil(breweries.length / itemsPerPage);

    // 根据当前页码获取当前页的数据
    const currentBreweries = breweries.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    // 处理页码变化
    const handleChangePage = (event: React.ChangeEvent<unknown>, newPage: number) => {
        setCurrentPage(newPage);
    };

    return (
        <>
            <Grid container spacing={4} sx={{ padding: '40px' }}>
                {currentBreweries.map((brewery, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                        <BreweryCard brewery={brewery}/>
                    </Grid>
                ))}
            </Grid>
            
            <Box display="flex" justifyContent="center" marginTop={1}>
                <Pagination count={pageCount} page={currentPage} onChange={handleChangePage} />
            </Box>
        </>
    );
};

export default BreweryCards;
