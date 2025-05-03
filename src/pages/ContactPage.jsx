import React, { useEffect } from "react";
import Button from "../components/Button";
import AOS from "aos";
import "aos/dist/aos.css";
// import imagee from "../assets/img/image.png";
import imagee1 from "../assets/img/callgril.png";
import imagee2 from "../assets/img/call.png";
import imagee3 from "../assets/img/chat_bubble.png";
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
    <section className="bg-white py-10 font-plus-jakarta-sans">
      {/* Top Section */}
      {/* Get in touch section */}
      {/* Section with image and text */}
      <div className="w-full bg-tertiary min-h-[600px] flex justify-center items-center px-4 relative">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-10 max-w-6xl w-full pt-16 sm:pt-0 relative z-0">
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
          <div className="max-w-sm w-full flex justify-center relative z-0">
            <img
              data-aos="fade-up"
              src={imagee1}
              alt=""
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Floating Cards: position absolute + higher z-index */}
        <div className="absolute bottom-[-80px] left-1/2 transform -translate-x-1/2 w-full px-4 z-10">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 flex-wrap max-w-5xl mx-auto">
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
                <Button className="bg-[#FAAD29] text-white text-[15px] py-3 px-5 hover:bg-[#faad29d6] font-plus-jakarta-sans font-bold w-[266px]">
                  See all open positions
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add extra margin below to make space for cards */}
      <div className="h-[140px] sm:h-[180px]"></div>

      {/* Contact Form + Address */}
      <div className="mt-20 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 p-4">
        {/* Contact Form */}
        <div data-aos="fade-up" className="bg-gray-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Contact Form</h3>
          <p className="text-sm text-gray-600 mb-6">
            We're here to answer your questions.
          </p>

          <form className="space-y-4">
            <div>
              <label className="text-sm">Full Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="text-sm">Contact Number</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="text-sm">Email Address</label>
              <input
                type="email"
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="text-sm">Subject</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="text-sm">Message</label>
              <textarea
                className="w-full p-2 border rounded h-24"
                placeholder="Please type your message"
                required
              ></textarea>
            </div>
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded">
              Send
            </Button>
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
          src="https://www.google.com/maps/embed?pb=!1m18..."
          className="w-full h-80 border-0"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactPage;
