import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { Chip } from '@mui/material';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const ElevationScroll = (props) => {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return children
        ? React.cloneElement(children, {
              elevation: trigger ? 4 : 0,
          })
        : null;
};

const Header = (props) => {
    const navigate = useNavigate();

    return (
        <>
            <CssBaseline />
            <ElevationScroll {...props}>
                <AppBar color='secondary'>
                    <Toolbar sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography sx={{ fontWeight: 'bold', color: '#E72565', letterSpacing: 1 }} variant='h5' component='div'>
                            Dashboard
                        </Typography>
                        <Chip
                        color='info'
                        variant='outlined'
                            icon={<AccountCircleTwoToneIcon />}
                            label={'Logout'}
                            clickable
                            onClick={() => {
                                Cookies.remove('token');
                                navigate('/login');
                            }}
                        />
                      
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <Toolbar />
        </>
    );
};

export default Header;
