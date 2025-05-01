import React, { useEffect } from "react";
import Button from "../components/Button";
import Image1 from "../assets/img/heroimage.png";
import Image2 from "../assets/img/image.png";
import AOS from "aos";
import "aos/dist/aos.css";
import FeaturedCourseImg from "../assets/img/Featured Courses.png";
import { ArraysOfSDE } from "../data/Software_Digital";
import Companieslogo from "./Companieslogo";
Button;
const Herosection = () => {
  // Initialize AOS (Animate On Scroll) library

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true,
    });
  }, []);

  const viewportHeight = window.innerHeight;
  const middleOfViewport = viewportHeight / 2;
  return (
    <>
      <section className="overflow-hidden  font-plus-jakarta-sans">
        <div className="  lg:py-20 lg:mt-14 mt-40">
          {/* Hero Section */}
          <div
            className="flex flex-col-reverse sm:flex-row items-center sm:justify-between w-full max-w-screen-xl px-5 sm:px-20 gap-10"
            data-aos-offset={middleOfViewport}
          >
            {/* Left Content */}
            <div
              className="flex flex-col gap-5 sm:w-1/2 w-full"
              data-aos="fade-down"
            >
              <div className="w-96">
                <h1 className="text-xl sm:text-3xl font-bold leading-tight ">
                  Transforming Digital Solutions for a Smarter Future
                </h1>
              </div>
              <p
                className="text-text-color text-sm sm:text-base leading-6 text-[#88918B] font-light lg:text-[14px]"
                data-aos="fade-left"
              >
                Leading the way in software development, digital marketing, and
                digital education. We create innovative solutions that empower
                businesses and educational institutions.
              </p>
              <Button className="text-white w-[150px] py-4 text-xs font-plus-jakarta-sans bg-[#FAAD29] hover:bg-[#faad29d6] font-bold capitalize cursor-pointer">
                Get in touch
              </Button>
              <p
                className="text-text-color text-sm sm:text-base leading-6 text-[#88918B] font-light lg:text-[14px]"
                data-aos="fade-left"
              >
                Get in touch to learn how we can help your business or
                educational institution thrive.
              </p>
            </div>

            {/* Right Image */}
            <img
              src={Image2}
              alt=""
              className="w-full sm:w-1/2 "
              data-aos="fade-up"
            />
          </div>
        </div>
        {/* Stats Banner */}
        <div className="w-full h-auto bg-secondary flex justify-center items-center mt-7 lg:mt-0 px-5 py-4">
          <p className="text-white text-sm sm:text-base font-light text-center leading-6">
            1000+ customers in over 20 countries in Africa grow their businesses
            with LEXJON Technologies
          </p>
        </div>

        {/* About Section */}
        <div className="flex flex-col sm:flex-row items-center w-full max-w-screen-xl px-5 sm:px-20 gap-10 mt-15">
          {/* Left Image */}
          <img
            src={Image1}
            alt=""
            className="w-full sm:w-1/2 lg:w-100"
            data-aos="fade-right"
            data-aos-offset={middleOfViewport}
          />

          {/* Right Content */}
          <div
            className="flex flex-col gap-5 sm:w-1/2"
            data-aos-offset={middleOfViewport}
          >
            <h1
              className="text-2xl font-semibold leading-10"
              data-aos="fade-right"
            >
              About LexJon
            </h1>
            <p
              className="text-text-color text-sm sm:text-base leading-6 text-[#88918B] font-light lg:text-[14px]"
              data-aos="fade-up"
            >
              LexJon is a premier IT firm specializing in innovative software
              development, cutting-edge digital marketing, and comprehensive
              digital education solutions. Our mission is to deliver
              transformative technology solutions that drive success for
              businesses.
            </p>
            <p
              className="text-text-color text-sm sm:text-base leading-6 text-[#88918B] font-light lg:text-[14px]"
              data-aos="fade-down"
            >
              Get a demo to learn about our premium software, or get started
              with our full suite of free tools and upgrade as you grow.
            </p>

            {/* CTA Buttons */}
            <div className="flex sm:gap-8 gap-3 mt-5">
              <Button
                className="w-[139px] h-[48px] text-white text-base font-bold bg-secondary hover:bg-[#faad29d6]"
                data_aos="fade-right"
                data_aos_offset={middleOfViewport}
              >
                Get a demo
              </Button>
              <Button
                className="w-[200px] h-[48px] lg:py-4 bg-white text-secondary text-base font-bold border border-[#faad29d6] hover:bg-[#faad29] hover:text-white flex items-center justify-center text-[#faad29]"
                data-aos="fade-left"
                data-aos-offset={middleOfViewport}
              >
                Get started for free
              </Button>
            </div>
          </div>
        </div>
        <div
          className={`flex  justify-center items-center sm:gap-24 mt-10 overflow-hidden`}
          data-aos-offset={middleOfViewport}
          data-aos="fade-up"
        >
          {ArraysOfSDE.map((item, index) => (
            <div
              key={index}
              className="sm:flex flex-col justify-center items-center p-5"
            >
              <img src={item.img} alt="" className="w-[70px]" />
              <h1 className="sm:text-2xl font-semibold sm:leading-10 text-sm font-plus-jakarta-sans">
                {item.title}
              </h1>
            </div>
          ))}
        </div>
        <div className="my-10 flex flex-col items-center gap-5 p-5 w-full">
          <img
            className="lg:w-[703px]"
            src={FeaturedCourseImg}
            alt=""
            data-aos-offset={middleOfViewport}
            data-aos="fade-left"
          />
          <div
            className="flex flex-col gap-4 font-plus-jakarta-sans"
            data-aos-offset={middleOfViewport}
            data-aos="fade-up"
          >
            <p className="text-[#88918B]  text-[13px] font-normal leading-6 text-sm text-center">
              Our team of experts offer a range of services to meet up your IT
              needs. We specialize in:
            </p>
            <p className="text-[#88918B]  text-[13px] font-normal leading-6 text-sm">
              <span className=" text-[#faad29]">Software Development: </span>
              Customs software solutions tailored to your business requirements
            </p>
            <p className="text-[#88918B]   text-[13px] font-normal leading-6 text-sm">
              <span className=" text-[#faad29]">Digital Marketing: </span>
              Comprehensive digital marketing strategies to boost your brand
              visibility.
            </p>
            <p className="text-[#88918B]  text-[13px] font-normal leading-6 text-sm">
              <span className=" text-[#faad29]">Digital Education: </span>{" "}
              Innovative educational software and platforms designed for
              effective learning
            </p>
          </div>
          <div className="flex sm:gap-8 gap-3 mt-5">
            <Button
              className="w-[139px] h-[48px] text-white text-base font-bold bg-secondary hover:bg-[#faad29d6]  cursor-pointer"
              data_aos="fade-right"
              data_aos_offset={middleOfViewport}
            >
              Get a demo
            </Button>
            <Button
              className="w-[200px] h-[48px] lg:py-4 bg-white text-secondary text-base font-bold border border-[#faad29d6] hover:bg-[#faad29] hover:text-white flex items-center justify-center text-[#faad29]  cursor-pointer"
              data-aos="fade-left"
              data-aos-offset={middleOfViewport}
            >
              Get started for free
            </Button>
          </div>
        </div>
      </section>

      <Companieslogo />
    </>
  );
};

export default Herosection;
