import React from "react";
import { Link } from "react-scroll";
import { FaAndroid, FaWindows, FaAppStoreIos, FaHtml5 } from "react-icons/fa";
// Animacion de escritura
import { TypeAnimation } from "react-type-animation";
// Motion
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Swiper, SwiperSlide } from "swiper/react";


//style
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";

const Banner = () => {
  return (
    <section
      id="home"
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg_gap-x-12">
          {/* TEXT */}
          <div className="flex-1 text-center lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, ammount: 0.7 }}
              className="text-[50px] text-secondBlue font-primary font-bold leading-[0.8] lg:text-[90px]"
            >
              EML <span className="text-secondBlue">S.A.S</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, ammount: 0.7 }}
              className="mb-6 text-[24px] lg:text-[30px] font-primary font-semibold uppercase leading-[1]"
            >
              <span className="mr-2 text-secondBlue">Somos</span>
              <TypeAnimation
                sequence={[
                  "Innovadores",
                  2000,
                  "Modernos",
                  2000,
                  "Creativos",
                  2000,
                  "Tecnológicos",
                  2000,
                  "Gamers",
                  2000,
                ]}
                speed={50}
                className="text-mainYellow"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, ammount: 0.7 }}
              className="text-mainBlue mb-8 max-w-lg mx-auto lg:mx-0"
            >
              En este portafolio encontrarás ejemplos de proyectos desarrollados
              por el grandioso equipo de <strong>EML</strong>. Siéntete libre de
              explorar el contenido y ¡disfruta tu estadía en la página!
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, ammount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <button className="btn btn-lg">Contáctanos</button>
              <Link
                to="work"
                smooth={true}
                spy={true}
                className="cursor-pointer text-gradient btn-link"
              >
                Nuestro portafolio
              </Link>
            </motion.div>

            {/* REDES */}
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, ammount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a href="#" className="text-mainBlue">
                <FaHtml5 />
              </a>
              <a href="#" className="text-mainBlue">
                <FaWindows />
              </a>
              <a href="#" className="text-mainBlue">
                <FaAndroid />
              </a>
              <a href="#" className="text-mainBlue">
                <FaAppStoreIos />
              </a>
            </motion.div>
          </div>
          {/* IMAGE */}
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[320px] relative bg-about bg-contain bg-no-repeat  bg-bottom"
          >
            {/* Slider cartas */}
            <Swiper
              effect="cards"
              modules={[EffectCards]}
              className="w-[320px] h-[520px] wor1"
            >
              <SwiperSlide
                className=" items-center justify-center rounded-[18px] text-[22px] font-bold text-white"
                style={{ background: "rgb(222, 110, 5, 0)", display: "flex", height:532,  }}
              >
                <a
                  href="https://juegos-portafolio.eml.com.co/memory/index.html"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <img src="/image3.png" style={{  width: 267, borderRadius: 41 }} />
                </a>
              </SwiperSlide>
              <SwiperSlide
                className=" items-center justify-center rounded-[18px] text-[22px] font-bold text-white w-360"
                style={{ background: "rgb(222, 110, 5, 0)", display: "flex", height:532 }}
              >
                <a
                  href="http://rompecabezas.eml.com.co/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <img src="/image.png" className="w-full h-full" style={{  width: 267, borderRadius: 41 }}  />
                </a>
              </SwiperSlide>
              
              <SwiperSlide
                className=" items-center relative justify-center rounded-[18px] text-[22px] font-bold text-white"
                style={{ background: "rgb(222, 110, 5, 0)", display: "flex", height:532 }}
              >
                <a
                  href="http://juegos-portafolio.eml.com.co/bubble-shooter/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <img src="/imagen10.png" style={{  width: 267, borderRadius: 41 }} />
                </a>
              </SwiperSlide>
              <SwiperSlide
                className=" items-center justify-center rounded-[18px] text-[22px] font-bold text-white"
                style={{ display: "flex", background: "rgb(222, 110, 5, 0)", height:532 }}
              >
                <a
                  href="https://sospechar-eml.eml.com.co/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <img src="/image1.png" style={{  width: 267, borderRadius: 41 }} />
                </a>
              </SwiperSlide>
              <SwiperSlide
                className=" items-center justify-center rounded-[18px] text-[22px] font-bold text-white"
                style={{ background: "rgb(211, 122, 7)", display: "flex", height:532 }}
              >
                <a
                  href="https://candy-virid.vercel.app/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <img src="/image2.png" />
                </a>
              </SwiperSlide>
            </Swiper>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
