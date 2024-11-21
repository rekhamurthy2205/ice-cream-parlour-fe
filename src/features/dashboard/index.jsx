import { Card, Grid2, Typography } from '@mui/material';
import React from 'react';

const DashboardScreen = () => {
  const data = [
    { cardname: 'Total Sales', cardValue: '213' },
    { cardname: 'Monthly Sales', cardValue: '123' },
    { cardname: 'Popular Items', cardValue: '43' },
    { cardname: 'Top Revenue Items', cardValue: '43' },
    { cardname: 'Order Stats', cardValue: '43' },
];


    return (
        <Grid2
            width={'100%'}
            p={2}
            display={'flex'}
            rowGap={8}
            flexDirection={'row'}
            flexWrap={'wrap'}
            justifyContent={'left'}
            alignItems={'center'}
            columnGap={19}
            pt={6}
            px={8}
            
        >
            {data.map((data, index) => {
                return (
                    <Card
                        key={index}
                        elevation={4}
                        sx={{
                            width: { md: 395, xs: '90%' },
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            flexDirection: 'column',
                            paddingX: 3,
                            paddingY: 2,
                            backgroundColor: '#f4f4f4',
                            rowGap: 1,
                        }}
                    >
                        <Typography variant='h5' sx={{ color: 'grey', fontWeight: 'bolder', textAlign: 'start', width: '100%' }}>
                            {data?.cardname}
                        </Typography>{' '}
                        <Typography
                            variant='h2'
                            sx={{
                                borderRadius: 3,
                                backgroundColor: 'white',
                                color: '#E72565',
                                fontWeight: 'bolder',
                                textAlign: 'center',
                                width: '90%',
                            }}
                        >
                            {data?.cardValue}
                        </Typography>{' '}
                    </Card>
                );
            })}
        </Grid2>
    );
};

export default DashboardScreen;


