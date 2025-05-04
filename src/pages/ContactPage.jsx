import React, { useEffect } from "react";
import Button from "../components/Button";
import AOS from "aos";
import "aos/dist/aos.css";
// import imagee from "../assets/img/image.png";
import imagee1 from "../assets/img/callgril.png";
import imagee2 from "../assets/img/call.png";
import imagee3 from "../assets/img/chat_bubble.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const customerData = [
  {
    head: "Talk to Sales",
    paragraph:
      "Intrested in LexJon software? Just pick up the phone and call our sales team.",
    image: imagee2,
    button: "Contact Sales",
  },
  {
    head: "Customer Care Support",
    paragraph:
      "Nullam egestas tellus at enim ornare tristique. Class aptent taciti sociosqu ad litora torquen..",
    image: imagee3,
    button: "Contact Sales",
  },
];

const addressData = [
  { head: "WEBSITE", para: "www.lexjon@eschool.ng" },
  { head: "PHONE", para: "+234 123 456 7890" },
  { head: "ADDRESS", para: "123 B Avenue, Ikeja, Lagos, Nigeria" },
];

const ContactPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-white py-5 lg:py-10 font-plus-jakarta-sans ">
      {/* Top Section */}
      {/* Get in touch section */}
      {/* Section with image and text */}
      <div className="w-full bg-tertiary min-h-[600px] flex justify-center items-center px-4 relative ">
        <div className="flex flex-col sm:flex-row justify-center items-center lg:gap-5 max-w-6xl w-full pt-16 sm:pt-0 relative ">
          <div
            data-aos="fade-right"
            className="max-w-md text-center sm:text-left"
          >
            <h2 className="text-2xl font-bold">Get in touch</h2>
            <p className="text-sm text-text-color my-4">
              Nullam egestas tellus at enim ornare tristique. Class aptent
              taciti sociosqu ad litora torquent per conubia nostra.
            </p>
          </div>

          {/* Image container with z-0 (behind the floating cards) */}
          <div className="w-full max-w-[500px] sm:max-w-[600px] flex justify-center">
            <img
              data-aos="fade-up"
              src={imagee1}
              alt=""
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Floating Cards: position absolute + higher z-index */}

        <div className="absolute lg:bottom-[-50px] left-1/2 transform -translate-x-1/2 w-full px-4 z-10 bottom-[-105px]">
          {/* ✅ Mobile View (Swiper Slider) */}
          <div className="sm:hidden">
            <Swiper spaceBetween={16} slidesPerView={1.1}>
              {customerData.map((items, index) => (
                <SwiperSlide key={index}>
                  <div
                    data-aos="fade-up"
                    className="bg-white rounded-xl shadow-md flex flex-col items-center p-5 mx-auto w-[90%]"
                  >
                    <img
                      className="my-4 w-12 h-12 object-contain"
                      src={items.image}
                      alt={items.head}
                    />
                    <div className="text-lg font-medium text-center mb-1">
                      {items.head}
                    </div>
                    <div className="text-xs text-text-color text-center mb-4">
                      {items.paragraph}
                    </div>
                    <Button className="bg-secondary text-white text-[15px] py-3 px-5 hover:bg-[#90e784d6] font-plus-jakarta-sans font-bold w-[266px]">
                      See all open positions
                    </Button>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* ✅ Desktop View (unchanged) */}
          <div className="hidden sm:flex flex-col sm:flex-row justify-center items-center gap-8 flex-wrap max-w-5xl mx-auto">
            {customerData.map((items, index) => (
              <div
                key={index}
                data-aos="fade-up"
                className="w-full sm:w-[290px] bg-white rounded-xl shadow-md flex flex-col items-center p-5"
              >
                <div className="flex justify-center items-center">
                  <img
                    className="my-4 w-12 h-12 object-contain"
                    src={items.image}
                    alt={items.head}
                  />
                </div>
                <div className="text-lg font-medium text-center mb-1">
                  {items.head}
                </div>
                <div className="text-xs text-text-color text-center mb-4">
                  {items.paragraph}
                </div>
                <Button className="bg-secondary text-white text-[15px] py-3 px-5 hover:bg-[#90e784d6] font-plus-jakarta-sans font-bold w-[266px]">
                  See all open positions
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form + Address */}
      <div className="mt-20 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 p-4 ">
        {/* Contact Form */}
        <div data-aos="fade-up" className="bg-[#F6F9FC] p-6 rounded-lg mt-16">
          <h3 className="text-xl font-semibold mb-4">Contact Form</h3>
          <p className="text-sm text-gray-600 mb-6">
            We're here to answer your questions.
          </p>

          <form className="space-y-4">
            <div>
              <label className="text-sm">Full Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded bg-white outline-orange-50 border-white"
                required
              />
            </div>
            <div>
              <label className="text-sm">Contact Number</label>
              <input
                type="text"
                className="w-full p-2 border rounded bg-white outline-none  outline-orange-50 border-white"
                required
              />
            </div>
            <div>
              <label className="text-sm">Email Address</label>
              <input
                type="email"
                className="w-full p-2 border rounded bg-white  outline-orange-50 border-white"
                required
              />
            </div>
            <div>
              <label className="text-sm">Subject</label>
              <input
                type="text"
                className="w-full p-2 border rounded bg-white  outline-orange-50 border-white"
                required
              />
            </div>
            <div>
              <label className="text-sm">Message</label>
              <textarea
                className="w-full p-2 border rounded h-24 bg-white  outline-orange-50 border-white  resize-none"
                placeholder="Please type your message"
                required
              ></textarea>
            </div>
            <div className="flex justify-center items-center">
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded w-full font-bold">
                Send
              </Button>
            </div>
          </form>
        </div>

        {/* Address Info */}
        <div className="flex flex-col justify-center space-y-6">
          {addressData.map((info, idx) => (
            <div key={idx}>
              <h4 className="text-lg font-semibold">{info.head}</h4>
              <p className="text-sm text-gray-600">{info.para}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-16">
        <iframe
          title="LexJon Office Map"
          // src="https://www.google.com/maps/embed?pb=!1m18..."
          src="https://www.google.com/maps/embed?pb=!1m22!1m8!1m3!1d507394.83146142715!2d3.2943132!3d6.5188833!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d6.3087203!2d2.7278306999999997!4m5!1s0x103b8de4ba8953e3%3A0xb4160960ea043882!2sCA%20Global%20Digital%20Company%2051%20Sarah%20Faboyede%20St%20Oshodi-Isolo%20Lagos%20100264%2C%20Lagos!3m2!1d6.5188823!2d3.2942901!5e0!3m2!1sen!2sng!4v1746375194812!5m2!1sen!2sng"
          className="w-full h-80 border-0"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactPage;
