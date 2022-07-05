import React, { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

interface PrivateRoute {
    children: ReactElement;
    when: boolean;
}
const PrivateRoute = ({ children, when }: PrivateRoute) => {
    return when ? children : <Navigate to="/" replace={true} />;
};
export default PrivateRoute;
