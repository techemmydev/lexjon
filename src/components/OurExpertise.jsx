import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { OurExpertiseArray } from "../data/OurExpertiseArray";

const OurExpertise = () => {
  return (
    <div className="flex flex-col items-center gap-10 px-4 sm:px-8 md:px-16 lg:px-24 max-w-screen-xl mx-auto font-plus-jakarta-sans">
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={20}
        breakpoints={{
          1280: { slidesPerView: 4 },
          1024: { slidesPerView: 3 },
          640: { slidesPerView: 2 },
          0: { slidesPerView: 1 },
        }}
        className="w-full mt-5"
      >
        {OurExpertiseArray.map((item, index) => {
          const { img, body, name, arrow } = item;
          return (
            <SwiperSlide key={index}>
              <div className="max-w-[270px] w-full h-auto p-5 flex flex-col justify-center lg:gap-4 bg-white rounded-xl shadow-lg transform transition duration-300 hover:scale-105 mx-auto mb-12">
                <div className="flex items-center gap-5">
                  <img src={img} alt={name} className="w-9 h-9" />
                  <h1 className="text-sm sm:text-base font-semibold lg:text-[15px]">
                    {name}
                  </h1>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="lg:text-[12px] sm:text-sm text-[#88918B] font-light">
                    {body}
                  </p>
                  <p className="text-amber-400 flex gap-1 items-center text-xs sm:text-sm font-bold hover:underline cursor-pointer">
                    Learn More{" "}
                    <img src={arrow} alt="arrow icon" className="w-3 h-3" />
                  </p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default OurExpertise;
