import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Img1 from '../assets/portfolio-img1.png';
import ExImg3 from '../assets/ex-img-3.png';
import ExImg5 from '../assets/ex-img-5.png';
import ExImg9 from '../assets/ex-img-9.png';
import EML from '../assets/eml-w.png';
import { Link } from 'react-scroll';

const Work = () => {
    return (
        <section id='work' className='section'>
            <div className='container mx-auto'>
                <div className='flex flex-col lg:flex-row gap-x-10'>
                    <motion.div
                        variants={fadeIn('right', 0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.3 }}
                        className='flex-1 flex flex-col gap-y-20 mb-10 lg:mb-0'
                    >
                        {/* TEXT */}
                        <div>
                            <h2 className='h2 leading-tight text-secondBlue'>
                                Nuestros últimos <br /> proyectos
                            </h2>
                            <p className='max-w-sm mb-16 text-mainBlue'>
                                Desde desarrollos web hasta videojuegos. Mira
                                los ejemplos de proyectos{' '}
                                <strong className='text-mainYellow'>
                                    {' '}
                                    desarrollados por el equipo de EML
                                </strong>
                                .
                            </p>
                            <Link
                                to='projects'
                                smooth={true}
                                spy={true}
                                className='btn btn-sm cursor-pointer'
                            >
                                Ver todos los proyectos
                            </Link>
                        </div>

                        {/* IMAGE */}
                        <div className='group relative overflow-hidden rounded-lg'>
                            <div className='cursor-pointer group-hover:bg-blue-900/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                            <img
                                className='group-hover:scale-125 transition-all duration-500'
                                src={ExImg3}
                                alt='img'
                            />
                            <div className='absolute -top-full w-[20%] group-hover:top-10 right-12 transition-all duration-500 z-50'>
                                <img src={EML} alt='eml' />
                            </div>
                            <div className='absolute -bottom-full left-12 group-hover:bottom-20 transition-all duration-700 z-50'>
                                <span className='text-[2rem] text-white'>
                                    Lorem ipsum
                                </span>
                            </div>
                            <div className='absolute -bottom-full left-12 group-hover:bottom-10 transition-all duration-500 z-50'>
                                <span className='text-mainYellow'>
                                    Ver proyecto
                                </span>
                            </div>
                        </div>
                    </motion.div>
                    {/* 2 */}
                    <motion.div
                        variants={fadeIn('left', 0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.3 }}
                        className='flex-1 flex flex-col justify-between gap-y-10'
                    >
                        {/* IMAGE */}
                        <div className='group relative overflow-hidden rounded-lg'>
                            <div className='cursor-pointer group-hover:bg-blue-900/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                            <img
                                className='group-hover:scale-125 transition-all duration-500'
                                src={ExImg9}
                                alt='img'
                            />
                            <div className='absolute -top-full w-[20%] group-hover:top-10 right-12 transition-all duration-500 z-50'>
                                <img src={EML} alt='eml' />
                            </div>
                            <div className='absolute -bottom-full left-12 group-hover:bottom-20 transition-all duration-700 z-50'>
                                <span className='text-[2rem] text-white'>
                                    Lorem ipsum
                                </span>
                            </div>
                            <div className='absolute -bottom-full left-12 group-hover:bottom-10 transition-all duration-500 z-50'>
                                <span className='text-mainYellow'>
                                    Ver proyecto
                                </span>
                            </div>
                        </div>

                        {/* IMAGE */}
                        <div className='group relative overflow-hidden rounded-lg'>
                            <div className='cursor-pointer group-hover:bg-blue-900/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                            <img
                                className='group-hover:scale-125 transition-all duration-500'
                                src={ExImg5}
                                alt='img'
                            />
                            <div className='absolute -top-full w-[20%] group-hover:top-10 right-12 transition-all duration-500 z-50'>
                                <img src={EML} alt='eml' />
                            </div>
                            <div className='absolute -bottom-full left-12 group-hover:bottom-20 transition-all duration-700 z-50'>
                                <span className='text-[2rem] text-white'>
                                    Lorem ipsum
                                </span>
                            </div>
                            <div className='absolute -bottom-full left-12 group-hover:bottom-10 transition-all duration-500 z-50'>
                                <span className='text-mainYellow'>
                                    Ver proyecto
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Work;
