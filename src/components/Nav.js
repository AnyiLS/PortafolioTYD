import React from 'react';
import { FaStream, FaHome, FaLaptop, FaTh } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Nav = () => {
    return (
        <div className='fixed bottom-5 lg:bottom-8 w-full overflow-hidden z-50'>
            <div className='container mx-auto'>
                <div className='w-full bg-white/40 h-[60px] backdrop-blur-2x1 rounded-full max-w-[300px] mx-auto px-5 flex items-center justify-between text-2x1 text-mainBlue/80'>
                    <Link
                        to='home'
                        activeClass='active'
                        smooth={true}
                        spy={true}
                        offset={-200}
                        className='cursor-pointer w-[40px] h-[40px] flex items-center justify-center'
                    >
                        <FaHome />
                    </Link>
                    <Link
                        to='services'
                        activeClass='active'
                        smooth={true}
                        spy={true}
                        className='cursor-pointer w-[40px] h-[40px] flex items-center justify-center'
                    >
                        <FaStream />
                    </Link>
                    <Link
                        to='work'
                        activeClass='active'
                        smooth={true}
                        spy={true}
                        className='cursor-pointer w-[40px] h-[40px] flex items-center justify-center'
                    >
                        <FaLaptop />
                    </Link>
                    <Link
                        to='projects'
                        activeClass='active'
                        smooth={true}
                        spy={true}
                        className='cursor-pointer w-[40px] h-[40px] flex items-center justify-center'
                    >
                        <FaTh />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Nav;
