import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
    FaWindows,
    FaApple,
    FaAndroid,
    FaAppStoreIos,
    FaHtml5,
    FaJsSquare,
    FaReact,
    FaCss3,
    FaArrowLeft,
} from 'react-icons/fa';

import { dumiProjects } from '../data';

import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const ProjectScreen = () => {
    const { nombre } = useParams();
    const [project, setProject] = useState(
        dumiProjects.filter((project) => project.slug == nombre)
    );

    return (
        <div className='bg-site bg-contain min-h-screen'>
            <section id='services' className='section'>
                <div className='container mx-auto'>
                    {/* TITLE */}
                    <motion.div
                        variants={fadeIn('right', 0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        <h2 className='h2 text-secondBlue mb-0'>
                            {project[0].name}
                        </h2>
                        <h3 className='h3 text-mainYellow text-[20px]'>
                            {project[0].category}
                        </h3>
                    </motion.div>

                    {/* IMAGE */}
                    <div className='flex flex-col items-center'>
                        <div className='w-full lg:flex justify-between'>
                            {project[0].images.map((img, index) => (
                                <motion.img
                                    key={index}
                                    variants={fadeIn('right', 0.3)}
                                    initial='hidden'
                                    whileInView={'show'}
                                    viewport={{ once: false, amount: 0.3 }}
                                    src={img}
                                    alt='imagen proyecto'
                                    className={
                                        index > 0
                                            ? 'rounded-lg w-full lg:w-[48%] hidden lg:block'
                                            : 'rounded-lg w-full lg:w-[48%]'
                                    }
                                />
                            ))}
                        </div>

                        {/* ICONS */}
                        <motion.div
                            variants={fadeIn('up', 0.5)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.3 }}
                            className='flex flex-wrap justify-between mt-4 w-full sm:mt-8'
                        >
                            <div>
                                <span className='font-semibold text-secondBlue'>
                                    Plataformas:
                                </span>
                                <div className='text-mainBlue flex gap-x-5'>
                                    <FaWindows />
                                    <FaApple />
                                    <FaAndroid />
                                    <FaAppStoreIos />
                                </div>
                            </div>
                            <div>
                                <span className='font-semibold text-secondBlue'>
                                    Lenguajes:
                                </span>
                                <div className='text-mainBlue flex gap-x-5'>
                                    <FaHtml5 />
                                    <FaJsSquare />
                                    <FaReact />
                                    <FaCss3 />
                                </div>
                            </div>

                            <button className='btn btn-sm mt-8 mx-auto sm:mt-0 sm:mx-0'>
                                {project[0].category == 'Desarrollos web' &&
                                    'Visitar sitio'}
                                {project[0].category == 'Desarrollos moviles' &&
                                    'Descargar app'}
                                {project[0].category == 'Videojuegos' &&
                                    'Jugar demo'}
                            </button>
                        </motion.div>
                    </div>

                    {/* DESCRIPTION */}
                    <motion.div
                        variants={fadeIn('up', 0.6)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.3 }}
                        className='mt-8'
                    >
                        <p className='text-mainBlue text-center'>
                            {project[0].descrption}
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className='fixed bottom-5 lg:bottom-8 w-full overflow-hidden z-50'>
                <div className='container mx-auto'>
                    <div className='w-full bg-white/80 h-[60px] backdrop-blur-2x1 rounded-full max-w-[100px] mx-auto px-5 flex items-center justify-center text-2x1 text-mainBlue/80'>
                        <Link
                            to='/'
                            className='cursor-pointer w-[40px] h-[40px] flex items-center justify-center text-mainBlue'
                        >
                            <div className='flex items-center gap-x-2'>
                                <FaArrowLeft />
                                <span className='font-semibold'>Volver</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectScreen;
