import { Button } from '@mui/material';
import styled from 'styled-components';

export const PrimaryButton = styled(Button)({
    '&&&': {
        // background: 'radial-gradient( circle 382px at 50% 50.2%,  rgba(73,76,212,1) 0.1%, rgba(3,1,50,1) 100.2% )',
        padding: '25px 30px 25px 30px',
        backgroundColor: '#170F49',
        // borderRadius: '18px',
        fontSize: '20px',
        fontWeight: 'bolder',
        textAlign: 'center',
        color: '#E72565',
        height: '40px',
        textTransform: 'none',
        '&:hover': {
            backgroundColor: '#4C4C4C',
            color: '#efefef',
        },
        cursor: 'pointer',
        '&:disabled': {
            backgroundColor: '#4C4C4C',
            color: '#CFBBA4',
            cursor: 'not-allowed',
        },
    },
});

export const SecondaryButton = styled(Button)({
    '&&&': {
        // background: 'radial-gradient( circle 382px at 50% 50.2%,  rgba(73,76,212,1) 0.1%, rgba(3,1,50,1) 100.2% )',
        padding: '25px 30px 25px 30px',
        backgroundColor: '#000000',
        // borderRadius: '18px',
        fontSize: '20px',
        fontWeight: 'bolder',
        textAlign: 'center',
        color: '#170F49',
        height: '40px',
        textTransform: 'none',
        '&:hover': {
            backgroundColor: '#4C4C4C',
            color: '#efefef',
        },
        cursor: 'pointer',
        '&:disabled': {
            backgroundColor: '#4C4C4C',
            color: '#CFBBA4',
            cursor: 'not-allowed',
        },
    },
});
