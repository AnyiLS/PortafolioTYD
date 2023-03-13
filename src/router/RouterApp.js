import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainScreen from '../components/MainScreen';
import ProjectScreen from '../components/ProjectScreen';

const RouterApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainScreen />} />
                <Route path='/proyecto/:nombre' element={<ProjectScreen />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RouterApp;
