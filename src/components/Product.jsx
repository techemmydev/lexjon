/* eslint-disable react/prop-types */

import tickerIcon from "../assets/img/Iconsax.svg";
import phone1 from "../assets/img/photo1.svg";
import phone2 from "../assets/img/photo2.svg";
import phone3 from "../assets/img/photo3.svg";
import Button from "../components/Button";

import { motion } from "framer-motion";
const ProductArray = [
  {
    imgIcon: phone1,
    title: "School Management System",
    paragraph:
      "Streamline school administration with our all-in-one management system",
    heading: "Popular Features",
    list: [
      "School Information Management",
      "Timetable and Scheduling",
      "Communication Tools",
    ],
  },
  {
    imgIcon: phone2,
    title: "Exam Management System",
    paragraph: "Simplify exam scheduling, administration, and grading",
    heading: "Popular Features",
    list: [
      "School Information Management",
      "Timetable and Scheduling",
      "Communication Tools",
    ],
  },
  {
    imgIcon: phone3,
    title: "Attendance Management System",
    paragraph: "Track and manage attendance effortlessly to monitor compliance",
    heading: "Popular Features",
    list: [
      "School Information Management",
      "Timetable and Scheduling",
      "Communication Tools",
    ],
  },
];
const Products = ({ ref, variants, initial, animate, transition }) => {
  return (
    <div className="flex flex-col items-center pb-10 px-4 sm:px-8 lg:px-20 font-plus-jakarta-sans">
      <div className="flex flex-col items-center gap-2 sm:gap-5 mt-10 mb-6 sm:mb-10">
        <h1 className="text-2xl sm:text-3xl font-semibold leading-tight text-center">
          Our Products
        </h1>
        <p className="text-text-color text-sm sm:text-base text-center max-w-xl">
          Discover our industry-leading software solutions
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
        {ProductArray.map((item, index) => {
          const { imgIcon, title, paragraph, heading, list } = item;
          return (
            <motion.div
              ref={ref}
              variants={variants}
              initial={initial}
              animate={animate}
              transition={transition}
              key={index}
              className="w-full sm:w-[300px] max-w-sm p-5 rounded-md bg-white flex flex-col justify-between gap-4  shadow-sm"
            >
              <div className="flex items-center gap-3">
                <img src={imgIcon} alt="" />
                <h1 className="text-sm font-medium leading-6">{title}</h1>
              </div>
              <p className="text-xs text-text-color font-normal leading-5">
                {paragraph}
              </p>
              <div className="w-full  border-t-[0.75px] border-b-blue-950 mt-2"></div>
              <div className="flex flex-col justify-center pt-3">
                <h2 className="text-sm font-medium leading-6 mb-2">
                  {heading}
                </h2>
                <ul className="flex flex-col gap-2">
                  {list.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <img src={tickerIcon} alt="" className="mt-1" />
                      <span className="text-xs text-text-color font-normal leading-5">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <Button className="w-[139px] h-[48px] text-white text-base font-bold bg-secondary hover:bg-[#faad29d6]  cursor-pointer">
                Learn More
              </Button>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
