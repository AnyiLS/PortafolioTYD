import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom';
import { Autoplay } from 'swiper';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { dumiProjects } from '../data';

import EML from '../assets/eml-w.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const Projects = () => {
    const navigateTo = useNavigate();

    return (
        <section id='projects' className='section'>
            <div className='container mx-auto'>
                <div className='flex flex-col'>
                    <motion.h2
                        variants={fadeIn('right', 0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.3 }}
                        className='h2 text-secondBlue mb-6'
                    >
                        Todos los proyectos
                    </motion.h2>
                    <motion.h3
                        variants={fadeIn('right', 0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.3 }}
                        className='text-mainBlue text-[20px] lg:text-[25px] max-w-[455px] mb-16'
                    >
                        Echale un vistazo a todos los{' '}
                        <strong className='text-mainYellow'>
                            proyectos de ejemplo
                        </strong>
                    </motion.h3>

                    {/* SLIDERS CONTAINERS */}
                    <motion.div
                        variants={fadeIn('left', 0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.3 }}
                        className='flex flex-col gap-y-10'
                    >
                        <div className='h-[33%]'>
                            <h4 className='text-secondBlue text-[20px] tracking-wider font-primary font-semibold mb-4'>
                                Desarrollos web
                            </h4>
                            {/* Slider */}
                            <Swiper
                                slidesPerView={2}
                                spaceBetween={30}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                breakpoints={{
                                    750: {
                                        slidesPerView: 3,
                                        spaceBetween: 20,
                                    },
                                }}
                                modules={[Autoplay]}
                                className='mySwiper h-full'
                            >
                                {dumiProjects.map(
                                    (item, index) =>
                                        item.category == 'Desarrollos web' && (
                                            <SwiperSlide
                                                key={index}
                                                className='group relative overflow-hidden rounded-lg'
                                                onClick={() =>
                                                    navigateTo(
                                                        'proyecto/' + item.slug
                                                    )
                                                }
                                            >
                                                <div className='cursor-pointer group-hover:bg-blue-900/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                                                <img
                                                    className='group-hover:scale-125 transition-all duration-500'
                                                    src={item.images[0]}
                                                    alt='img'
                                                />
                                                <div className='absolute -top-full w-[30%] lg:w-[20%] group-hover:top-5 right-5 transition-all duration-500 z-50'>
                                                    <img src={EML} alt='eml' />
                                                </div>
                                                <div className='absolute -bottom-full left-5 group-hover:bottom-12 transition-all duration-700 z-50'>
                                                    <span className='lg:text-[2rem] text-white'>
                                                        {item.name}
                                                    </span>
                                                </div>
                                                <div className='absolute -bottom-full left-5 group-hover:bottom-5 transition-all duration-500 z-50'>
                                                    <span className='text-mainYellow'>
                                                        Ver proyecto
                                                    </span>
                                                </div>
                                            </SwiperSlide>
                                        )
                                )}
                            </Swiper>
                        </div>
                        <div className='h-[33%]'>
                            <h4 className='text-secondBlue text-[20px] tracking-wider font-primary font-semibold mb-4'>
                                Desarrollos móviles
                            </h4>
                            {/* Slider */}
                            <Swiper
                                slidesPerView={2}
                                spaceBetween={30}
                                autoplay={{
                                    delay: 2800,
                                    disableOnInteraction: false,
                                }}
                                breakpoints={{
                                    750: {
                                        slidesPerView: 3,
                                        spaceBetween: 20,
                                    },
                                }}
                                modules={[Autoplay]}
                                className='mySwiper h-full'
                            >
                                {dumiProjects.map(
                                    (item, index) =>
                                        item.category ==
                                            'Desarrollos moviles' && (
                                            <SwiperSlide
                                                key={index}
                                                className='group relative overflow-hidden rounded-lg'
                                                onClick={() =>
                                                    navigateTo(
                                                        'proyecto/' + item.slug
                                                    )
                                                }
                                            >
                                                <div className='cursor-pointer group-hover:bg-blue-900/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                                                <img
                                                    className='group-hover:scale-125 transition-all duration-500'
                                                    src={item.images[0]}
                                                    alt='img'
                                                />
                                                <div className='absolute -top-full w-[30%] lg:w-[20%] group-hover:top-5 right-5 transition-all duration-500 z-50'>
                                                    <img src={EML} alt='eml' />
                                                </div>
                                                <div className='absolute -bottom-full left-5 group-hover:bottom-12 transition-all duration-700 z-50'>
                                                    <span className='lg:text-[2rem] text-white'>
                                                        {item.name}
                                                    </span>
                                                </div>
                                                <div className='absolute -bottom-full left-5 group-hover:bottom-5 transition-all duration-500 z-50'>
                                                    <span className='text-mainYellow'>
                                                        Ver proyecto
                                                    </span>
                                                </div>
                                            </SwiperSlide>
                                        )
                                )}
                            </Swiper>
                        </div>
                        <div>
                            <h4 className='text-secondBlue text-[20px] tracking-wider font-primary font-semibold mb-6'>
                                Videojuegos
                            </h4>
                            {/* Slider */}
                            <Swiper
                                slidesPerView={2}
                                spaceBetween={30}
                                autoplay={{
                                    delay: 3100,
                                    disableOnInteraction: false,
                                }}
                                breakpoints={{
                                    750: {
                                        slidesPerView: 3,
                                        spaceBetween: 20,
                                    },
                                }}
                                modules={[Autoplay]}
                                className='mySwiper h-full'
                            >
                                {dumiProjects.map(
                                    (item, index) =>
                                        item.category == 'Videojuegos' && (
                                            <SwiperSlide
                                                key={index}
                                                className='group relative overflow-hidden rounded-lg'
                                                onClick={() =>
                                                    navigateTo(
                                                        'proyecto/' + item.slug
                                                    )
                                                }
                                            >
                                                <div className='cursor-pointer group-hover:bg-blue-900/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                                                <img
                                                    className='group-hover:scale-125 transition-all duration-500'
                                                    src={item.images[0]}
                                                    alt='img'
                                                />
                                                <div className='absolute -top-full w-[30%] lg:w-[20%] group-hover:top-5 right-5 transition-all duration-500 z-50'>
                                                    <img src={EML} alt='eml' />
                                                </div>
                                                <div className='absolute -bottom-full left-5 group-hover:bottom-12 transition-all duration-700 z-50'>
                                                    <span className='lg:text-[2rem] text-white'>
                                                        {item.name}
                                                    </span>
                                                </div>
                                                <div className='absolute -bottom-full left-5 group-hover:bottom-5 transition-all duration-500 z-50'>
                                                    <span className='text-mainYellow'>
                                                        Ver proyecto
                                                    </span>
                                                </div>
                                            </SwiperSlide>
                                        )
                                )}
                            </Swiper>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
