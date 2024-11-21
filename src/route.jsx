import React from 'react';
import { Navigate, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { lazy } from 'react';
import Layout from './layout';
import Cookies from 'js-cookie';

const LoginPage = lazy(() => import('./pages/login'));

const DashboardPage = lazy(() => import('./pages/dashboard'));

const ProtectedRoute = () => {
    const isAuthenticated = Cookies.get('token') ? true : false;
    if (!isAuthenticated) {
        return <Navigate to='/login' />;
    }
    return <Layout />;
};

const routes = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            {' '}
            <Route path='/login' element={<LoginPage />} />
            <Route element={<ProtectedRoute />}>
                <Route path='/' element={<DashboardPage />} />
            </Route>
        </Route>
    )
);
export default routes;
