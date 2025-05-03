import React from "react";
import message from "../assets/img/message.png";
import vector from "../assets/img/Vector.png";
import location from "../assets/img/location.png";

const contactData = [
  {
    image: message,
    content: "info@eschool.ng",
  },
  {
    image: vector,
    content: "+234 123 456 7890",
  },
  {
    image: location,
    content: "123 B Avenue, Ikeja, Lagos, Nigeria",
  },
];

const Contact = () => {
  return (
    <>
      <div className="sm:my-10 border-t-1 border-yellow-400 p-10 mt-6 font-plus-jakarta-sans">
        <div className="sm:mx-40 lg:mx-5">
          <h3 className="text-2xl font-bold">Contact Us</h3>
          <p className="text-1xs sm:my-4 my-2 font-medium">
            Have questions or need assistance? Feel free to reach out to us!
          </p>
        </div>
        <div className="">
          {contactData.map((items, index) => {
            return (
              <div key={index} className="flex">
                <div className="flex gap-1 sm:my-1 my-3 sm:mx-40 lg:mx-5">
                  <div>
                    <img src={items.image} alt="" />
                  </div>
                  <p className="text-1xs">{items.content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Contact;
