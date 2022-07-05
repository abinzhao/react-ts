import React from 'react';
import { useParams, useSearchParams, useLocation } from 'react-router-dom';
import axios from '../../utils/axios';
import styles from './index.module.scss';
import API from '../../service';

const Home = () => {
    const requestRes = async () => {
        const result = await axios({
            url: '/api/xxx',
            method: 'get',
        });
        console.log(result);
    };
    const request = async () => {
        const result = await API.login('zhangsan', '123456');
        console.log(result);
    };
    console.log(requestRes, request);
    console.log(useSearchParams(), useLocation(), useParams());
    return <div className="App">Home</div>;
};

export default Home;
