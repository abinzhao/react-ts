import React from 'react';
import { Navigate } from 'react-router-dom';
import PrivateRoute from './privateRoute';
import { Home } from '../pages';

const routers = [
    { path: '/', element: <Navigate to="/home" /> }, //重定向
    { path: '/home', element: <Home /> },
    {
        path: '/home',
        element: (
            <PrivateRoute when={true}>
                <Home />
            </PrivateRoute>
        ),
    },
];

export default routers;
