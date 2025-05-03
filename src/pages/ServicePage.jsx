import Companies from "../components/Companieslogo";
import OurExpertise from "../components/OurExpertise";
import Testimonial from "../components/Testimonial";
import WhyChooseUs from "../components/WhyChooseUs";
import ServiceImg from "../assets/img/serviceImg1.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ServicePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <section className="font-plus-jakarta-sans sm:px-8 mt-32 lg:mt-16 relative p-5 lg:p-0">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center gap-10 lg:p-10">
          <div className="flex flex-col items-center sm:items-start gap-6">
            <h1
              className="text-3xl sm:text-4xl font-bold"
              data-aos="fade-down"
              data-aos-offset="200"
            >
              What we do
            </h1>
            <p
              className="text-[16px] lg:text-[16px]  text-center sm:text-left text-[#88918B] font-light leading-6"
              data-aos="fade-up"
              data-aos-offset="200"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              libero ea voluptatem ad dolore, aut quibusdam cumque voluptas
              necessitatibus autem distinctio aliquid dolorem exercitationem
              itaque repellat? Natus, rerum! Explicabo, recusandae?
            </p>
          </div>
          <img
            src={ServiceImg}
            alt="Service"
            className="w-full sm:w-1/2 max-w-md "
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-offset="200"
          />
        </div>
      </section>
      <div className="w-full bg-[#091140]  sm:px-8 font-plus-jakarta-sans text-white">
        <Companies />
      </div>
      <section className="w-full py-16 px-4 sm:px-8 text-center font-plus-jakarta-sans">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Our Expertise</h2>
          <p
            data-aos="fade-left"
            data-aos-delay="100"
            data-aos-offset="200"
            className="text-[14px] sm:text-base text-[#88918B] font-normal leading-6 "
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            quidem corporis ut maiores nobis dolorem cupiditate aut animi illum,
            quos iure distinctio delectus, perspiciatis praesentium facilis
            pariatur laborum quo esse.
          </p>
        </div>
      </section>

      <OurExpertise />
      <WhyChooseUs />
      <div className="lg:mb-10">
        <Testimonial title="Feedback from Our Clients" />
      </div>
    </>
  );
};

export default ServicePage;
