import React from 'react';
import Logo from '../assets/logo.png';
import Toggle from "../components/Toggle/Toggle";

const Header = () => {
    return (
        <header className='py-8'>
            <div className='container mx-auto'>
                <div className='flex justify-between item-center'>
                    <a href='#'>
                        <img
                            src={Logo}
                            alt='logo'
                            className='w-[100px] lg:w-[200px]'
                        />
                    </a>
                    <Toggle />
                </div>
            </div>
        </header>
    );
};

export default Header;
