import Contact from "../components/Contact";
import image1 from "../assets/img/Image22.png";
import image2 from "../assets/img/Image.png";
import image3 from "../assets/img/Image.png";
import image4 from "../assets/img/Stack.png";
import image5 from "../assets/img/Users.png";
import image6 from "../assets/img/GlobeHemisphereWest.png";
import image7 from "../assets/img/user-cover-2.png";
import image8 from "../assets/img/user-cover-4.png";
import image9 from "../assets/img/fixed-height sec-.png";
import image10 from "../assets/img/user-cover-2.png";

import Button from "../components/Button";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Companieslogo from "../components/Companieslogo";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const dummyData = [
  {
    id: 1,
    head: "About Us",
    content:
      "Fusce lobortis leo augue, sit amet tristique nisi commodo in. Aliquam ac libero quis tellus venenatis imperdiet. Sed sed nunc libero. Curabitur in urna ligula.  torquent per conubia nostra.",
    image: image1,
  },
  {
    id: 2,
    head: "Our Mission",
    content:
      "Fusce lobortis leo augue, sit amet tristique nisi commodo in. Aliquam ac libero quis tellus venenatis imperdiet. Sed sed nunc libero. Curabitur in urna ligula.  torquent per conubia nostra.",
    image: image2,
  },
  {
    id: 3,
    head: "Our Story",
    content:
      "Fusce lobortis leo augue, sit amet tristique nisi commodo in. Aliquam ac libero quis tellus venenatis imperdiet. Sed sed nunc libero. Curabitur in urna ligula.  torquent per conubia nostra.",
    image: image3,
  },
];

const team = [
  {
    name: "James Adebayo",
    role: "CEO / Founder",
    location: "CICOTech, Cambridge",
    image: image7,
  },
  {
    name: "Jonathan Smith",
    role: "CTO / Co-Founder",
    location: "CICOTech, Nigeria",
    image: image8,
  },
  {
    name: "Farima Abdullahi",
    role: "COO / HR",
    location: "CICOTech, UAE",
    image: image9,
  },
  {
    name: "Ngozi Adeleke",
    role: "CMO / Marketing",
    location: "CICOTech, UK",
    image: image10,
  },
];

const products = [
  {
    title: "School Management System",
    button: "Learn More",
    text: "Streamline school administration with our all-in-one management system.",
  },
  {
    title: "Exam Management System",
    button: "Learn More",
    text: "Streamline school administration with our all-in-one management system.",
  },
  {
    title: "Attendance Management System",
    button: "Learn More",
    text: "Streamline school administration with our all-in-one management system.",
  },
];
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  autoplay: true,
  autoplaySpeed: 4000,
  slidesToScroll: 1,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true,
    });
  }, []);

  const viewportHeight = window.innerHeight;
  const middleOfViewport = viewportHeight / 2;

  const [counterOn, setCounterOn] = useState(false);

  const handleCounterOn = () => {
    setCounterOn(true);
  };

  return (
    <>
      {/* <Navbar /> */}
      <div className="w-full flex flex-col mt-20 font-plus-jakarta-sans">
        {dummyData.map((items, index) => {
          return (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-offset={middleOfViewport}
              className={`flex ${
                index === 1
                  ? "sm:flex-row-reverse "
                  : "sm:flex-row flex-col bg-[#F6F9FC]"
              } justify-center items-center sm:flex-row flex-col sm:gap-40 ${
                index === 0 ? "bg-tertiary" : ""
              }`}
            >
              <div className="text-center sm:text-left">
                <h2
                  className={`${
                    index === 0
                      ? " text-2xl font-bold my-5"
                      : "text-2xl font-bold my-5"
                  }`}
                >
                  {items.head}
                </h2>
                <p className="w-[360px] text-1xs text-text-color">
                  {items.content}
                </p>
              </div>
              <img
                data-aos="fade-right"
                data-aos-offset={middleOfViewport}
                className="sm:w-[400px] my-10 p-5"
                src={items.image}
                alt=""
              />
            </div>
          );
        })}
      </div>
      <section className="py-10 text-center bg-[#F6F9FC] font-plus-jakarta-sans">
        <h2 className="text-2xl font-semibold mb-6">LexJon By the Numbers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="flex flex-col items-center gap-2 bg-white shadow-md p-6 rounded-xl">
            <img src={image4} alt="" />

            <p className="text-xl font-bold">20</p>
            <p>Remote Offices</p>
          </div>
          <div className="flex flex-col items-center gap-2 bg-white shadow-md p-6 rounded-xl">
            <img src={image5} alt="" />
            {/* <UsersIcon className="h-10 w-10 text-green-500" /> */}
            <p className="text-xl font-bold">100+</p>
            <p>Employees</p>
          </div>
          <div className="flex flex-col items-center gap-2 bg-white shadow-md p-6 rounded-xl">
            {/* <GlobeAltIcon className="h-10 w-10 text-purple-500" /> */}
            <img src={image6} alt="" />
            <p className="text-xl font-bold">1000+</p>
            <p>Customers Worldwide</p>
          </div>
        </div>
      </section>
      <Companieslogo />
      <section className="py-10 bg-gray-50 text-center font-plus-jakarta-sans">
        <h2 className="text-2xl font-semibold mb-6">Our Team</h2>

        {/* Mobile: Swiper */}
        <div className="sm:hidden px-6">
          <Swiper spaceBetween={20} slidesPerView={1}>
            {team.map((member, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-4 rounded shadow">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-40 object-cover rounded mb-4"
                  />
                  <h3 className="font-semibold">{member.name}</h3>
                  <p className="text-sm text-gray-600">{member.role}</p>
                  <p className="text-xs text-gray-400">{member.location}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop Grid */}
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
          {team.map((member, index) => (
            <div key={index} className="bg-white p-4 rounded shadow">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-40 object-cover rounded mb-4"
              />
              <h3 className="font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.role}</p>
              <p className="text-xs text-gray-400">{member.location}</p>
            </div>
          ))}
        </div>
      </section>

      <Contact />
      <section className="bg-[#091140] text-white py-10 font-plus-jakarta-sans">
        <h2 className="text-center text-xl mb-6">LexJon Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-6xl mx-auto px-4">
          {products.map((prod, index) => (
            <div
              key={index}
              className="bg-white text-black p-4 rounded shadow text-center h-[200px]"
            >
              <h3 className="font-semibold mb-2">{prod.title}</h3>
              <p>{prod.text}</p>
              <Button className="w-[139px] h-[48px] text-white text-base font-bold bg-secondary hover:bg-[#faad29d6]  cursor-pointer mt-11">
                {prod.button}
              </Button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default AboutUs;
