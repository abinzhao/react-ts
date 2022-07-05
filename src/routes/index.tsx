import React from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import routers from './routers';

const Router = () => {
    function Routes() {
        const routes = useRoutes(routers);
        return routes;
    }

    return (
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    );
};

export default Router;
