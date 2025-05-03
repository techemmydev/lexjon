/* eslint-disable react/prop-types */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import image1 from "../assets/img/Frame 1.png";
import image2 from "../assets/img/Frame 2.png";
import image3 from "../assets/img/Frame 3.png";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Testimonials = [
  {
    img: image1,
    name: "Chioma Adekunle",
    heading: "Parent at Bright Minds Academy",
    body: "“As a parent, I've been thrilled with the level of transparency and communication provided by Bright Minds Academy through their eSchool platform.”",
  },
  {
    img: image2,
    name: "Mr. Ibrahim Abdullahi",
    heading: "Principal at Harmony High School",
    body: "“The comprehensive features and intuitive interface have made our operations more efficient and our school community more connected.”",
  },
  {
    img: image3,
    name: "Miss Aisha Okonkwo",
    heading: "Teacher at Excellence Academy",
    body: "“The ability to easily create and distribute assignments and communicate with students and parents has significantly enriched the learning experience for my students.”",
  },
  {
    img: image3,
    name: "Miss Aisha Okonkwo",
    heading: "Teacher at Excellence Academy",
    body: "“The ability to easily create and distribute assignments and communicate with students and parents has significantly enriched the learning experience for my students.”",
  },
];

const Testimonial = ({ title }) => {
  return (
    <div className="flex flex-col items-center w-full  sm:px-10 lg:p-10  font-plus-jakarta-sans ">
      <h1 className="text-2xl font-semibold leading-10 text-center mb-8">
        {title}
      </h1>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full "
      >
        {Testimonials.map((item, index) => {
          const { img, body, heading, name } = item;
          return (
            <SwiperSlide key={index}>
              <div className="p-6 bg-white rounded-[10px] shadow-2xl flex flex-col gap-4 min-h-[250px] w-full max-w-md mx-auto">
                <div className="flex gap-3 items-center">
                  <img
                    src={img}
                    alt={name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h2 className="text-lg font-semibold">{name}</h2>
                    <p className="text-xs text-gray-500">{heading}</p>
                  </div>
                </div>
                <p className="text-sm text-black leading-relaxed">{body}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
