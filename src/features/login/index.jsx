import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { Card, Container, IconButton, InputAdornment, Stack, TextField } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { PrimaryButton } from '../../elements/button-styles';
import { CustomAlert } from '../../components/alert';

const LoginScreen = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const validationSchema = yup.object().shape({
        email: yup
            .string()
            .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please enter a valid email address')
            .required('Email is required'),
        password: yup.string().required('Password is required').matches(),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const onSubmit = (data) => {
        Cookies.set('token', JSON.stringify(data));
        navigate('/');
    };

    useEffect(() => {
        if (Cookies.get('token')) {
            navigate('/');
        }
    });
    return (
        <Container
            sx={{
                rowGap: 2,
                pt: { md: 7, xs: 3 },
                minHeight: { md: '100vh', xs: '90vh' },
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            }}
        >
            <CustomAlert />
            <Card
                elevation={4}
                sx={{
                    width: { md: 395, xs: '90%' },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    padding: 3,
                    py: 8,
                    rowGap: { md: 6, xs: 3 },
                }}
            >
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        rowGap: '30px',
                        width: '100%',
                    }}
                >
                    <Stack>
                        <TextField
                            label='Email'
                            {...register('email', {
                                required: true,
                            })}
                            variant='outlined'
                            fullWidth
                        />
                        <ErrorToast error={errors?.email?.message} />
                    </Stack>

                    <Stack>
                        <TextField
                            sx={{ borderRadius: '18px' }}
                            type={showPassword ? 'text' : 'password'}
                            label='Password'
                            {...register('password', {
                                required: true,
                            })}
                            variant='outlined'
                            fullWidth
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position='end'>
                                        <IconButton onClick={() => setShowPassword(!showPassword)} edge='end' data-testid='password-toggle'>
                                            {showPassword ? <VisibilityIcon fontSize='small' /> : <VisibilityOffIcon fontSize='small' />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <ErrorToast error={errors.password?.message} />
                    </Stack>

                    <PrimaryButton type='submit' fullWidth>
                        Login
                    </PrimaryButton>
                </form>
            </Card>
        </Container>
    );
};

export default LoginScreen;

const ErrorToast = ({ error }) => {
    return error ? (
        <span style={{ color: 'red', fontSize: 'small', paddingLeft: '10px' }}>
            <b> * </b> {error}
        </span>
    ) : null;
};
