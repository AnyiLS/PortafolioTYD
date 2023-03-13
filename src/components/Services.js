import React from 'react';
import { Link } from 'react-scroll';
import {
    FaAndroid,
    FaAppStoreIos,
    FaHtml5,
    FaGamepad,
    FaPhotoVideo,
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const services = [
    {
        name: 'Desarrollo web',
        desciption:
            'Desarrollamos todo tipo de sitos web. Coorporativos, landing page, e-learnings, y mucho más.',
        icon: (
            <a
                href='#'
                className='text-mainBlue text-[25px] w-9 h-9 mb-[42px] flex flex-col items-center justify-center'
            >
                <FaHtml5 />
            </a>
        ),
    },
    {
        name: 'Desarrollo móvil',
        desciption:
            'Desarrollamos aplicaciones híbridas, funcionales en los 2 sistemas operativos móviles más grandes del mercado.',
        icon: (
            <a
                href='#'
                className='text-mainBlue text-[25px] w-9 h-9 mb-[42px] flex flex-col items-center justify-center'
            >
                <FaAndroid />
            </a>
        ),
    },
    {
        name: 'Videojuegos',
        desciption:
            'Tanto videojuegos web como móviles, con diversos tipos de interacciones y captura de datos.',
        icon: (
            <a
                href='#'
                className='text-mainBlue text-[25px] w-9 h-9 mb-[42px] flex flex-col items-center justify-center'
            >
                <FaGamepad />
            </a>
        ),
    },
    {
        name: 'Video interactivos',
        desciption:
            'Lleva a los usuarios a una nueva experiencia, a través de videos en donde ellos decidirán el rumbo de la historia.',
        icon: (
            <a
                href='#'
                className='text-mainBlue text-[25px] w-9 h-9 mb-[42px] flex flex-col items-center justify-center'
            >
                <FaPhotoVideo />
            </a>
        ),
    },
];

const Services = () => {
    return (
        <section id='services' className='section'>
            <div className='container mx-auto'>
                <div className='flex flex-col lg:flex-row'>
                    {/* TEXT */}
                    <motion.div
                        variants={fadeIn('right', 0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.3 }}
                        className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat bg-contain mb-12 lg:mb-0'
                    >
                        <h2 className='h2 text-secondBlue mb-6'>
                            ¿Qué hacemos?
                        </h2>
                        <h3 className='text-mainBlue text-[20px] lg:text-[25px] max-w-[455px] mb-16'>
                            Contamos con un{' '}
                            <strong className='text-mainYellow'>
                                gran equipo de TyD
                            </strong>{' '}
                            para desarrollar los siguientes tipos de proyectos:
                        </h3>
                        <Link
                            to='work'
                            smooth={true}
                            spy={true}
                            className='cursor-pointer btn btn-sm'
                        >
                            Nuestro portafolio
                        </Link>
                    </motion.div>

                    {/* SERVICES */}
                    <motion.div
                        variants={fadeIn('left', 0.5)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.3 }}
                        className='flex-1'
                    >
                        <div>
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className='border-b border-mainYellow/100 h-[146px] mb-[38px] flex'
                                >
                                    <div className='max-w-[476px] mr-5'>
                                        <h4 className='text-secondBlue text-[20px] tracking-wider font-primary font-semibold mb-6'>
                                            {service.name}
                                        </h4>
                                        <p className='text-mainBlue font-secondary leading-tight'>
                                            {service.desciption}
                                        </p>
                                    </div>
                                    <div className='flex flex-col flex-1 items-end'>
                                        {service.icon}
                                        <a
                                            href='#'
                                            className='text-secondBlue text-sm text-gradient'
                                        >
                                            Ver proyectos
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Services;
