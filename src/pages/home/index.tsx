import React from 'react';
import axios from '../../utils/axios';
import styles from './index.module.scss';
import API from '../../service';

const Home = () => {
    const requestRes = async () => {
        const result = await axios({
            url: '/api/xxx',
            method: 'get',
        });
    };
    const request = async () => {
        const result = await API.login('zhangsan', '123456');
    };

    return <div>home</div>;
};

export default Home;
