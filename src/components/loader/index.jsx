import { Backdrop, CircularProgress, Grow, LinearProgress } from '@mui/material';
import React from 'react';

const Loader = ({ circle, load }) => {
    return (
        load === true && (
            <>
                {circle === true ? (
                    <Backdrop open={true} sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                        <Grow in={true} exit={true} style={{ transformOrigin: '20 10 10' }} {...(load ? { timeout: 1000 } : {})}>
                            <CircularProgress color='primary' data-testid='circular-loader' />
                        </Grow>
                    </Backdrop>
                ) : (
                    <LinearProgress color='primary' data-testid='linear-loader' />
                )}
            </>
        )
    );
};
export default Loader;
