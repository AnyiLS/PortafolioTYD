import React from 'react';
// Components
import Header from './Header';
import Banner from './Banner';
import Services from './Services';
import Work from './Work';
import Projects from './Projects';
import Nav from './Nav';

const MainScreen = () => {
    return (
        <div className='bg-site bg-contain overflow-hidden'>
            <Header />
            <Banner />
            <Services />
            <Work />
            <Projects />
            <Nav />
        </div>
    );
};

export default MainScreen;
