import React from 'react';
import { Grid, ThemeProvider } from '@mui/material';
import { theme } from './theme';
import { Suspense, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import routes from './route';
import { Context } from './context';
import Loader from './components/loader';
import { QueryClient, QueryClientProvider } from 'react-query';

const App = () => {
    const queryClient = new QueryClient();
    const [alert, setAlert] = useState({
        open: false,
        severity: 'success',
        message: '',
    });
    return (
        <Grid>
            <Suspense fallback={<Loader circle={true} load={true} />}>
                <Context.Provider
                    value={{
                        alert,
                        setAlert,
                    }}
                >
                    <QueryClientProvider client={queryClient}>
                    <ThemeProvider theme={theme}>
                        <RouterProvider router={routes} />
                    </ThemeProvider>
                    </QueryClientProvider>
                </Context.Provider>
            </Suspense>
        </Grid>
    );
};
export default App;
