import React from 'react';
import Header from './layout/header';
import { Outlet } from 'react-router-dom';
import { Box, Grid2 } from '@mui/material';
// import { Box, Grid } from '@mui/material';

const Layout = () => {
    return (
        <>
            <Header />
            <Grid2 style={{ backgroundColor: 'white', minHeight: '85vh' }}>
            <Box sx={{ m: 0, p: 0, justifyContent: 'center', display: 'flex' }}>
            <Outlet />
            </Box>
            </Grid2>
        </>
    );
};

export default Layout;
