import React from 'react';
import Header from '../pages/shared/Header';
import { Outlet } from 'react-router-dom';
import image from '../resources/Rectangle 1.png';

const Main = () => {
    return (
        <div>
             
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;