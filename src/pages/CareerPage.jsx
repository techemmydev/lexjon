/* eslint-disable react/no-unescaped-entities */
import Button from "../components/Button";

// import Navbar from "../../components/NavBar/Navbar"
import CareerImg1 from "../assets/img/Frame 1000001511.png";
import CareerImg2 from "../assets/img/Union.png";
import tickerIcon from "../assets/img/Iconsax.svg";

const CareerPage = () => {
  return (
    <div className="overflow-hidden lg:py-10 font-plus-jakarta-sans">
      {/* <Navbar/> */}
      <div className="flex sm:flex-row flex-col justify-center items-center bg-[#F6F9FC]  w-full gap-20 sm:gap-0 py-3">
        <div className="flex flex-col items-center sm:items-start sm:w-[486px] w-screen gap-10 mt-24 ">
          <h1 className="font-bold text-[40px] leading-[48px] text-center sm:text-start mt-10 lg:m-0">
            Let's grow together
          </h1>
          <p className="sm:text-base text-sm p-1 text-text-color font-normal leading-6 text-center sm:text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            temporibus enim ullam blanditiis. Nam dolor, quis voluptates
            accusamus eligendi placeat a commodi fugiat veniam expedita vero
            voluptas. Iure, nulla nostrum.
          </p>
          <Button className="bg-[#FAAD29] text-white text-[15px] py-3 px-5 hover:bg-[#faad29d6] font-plus-jakarta-sans font-bold w-[266px]">
            See all open positions
          </Button>
        </div>
        <img src={CareerImg1} alt="" className="sm:mt-24" />
      </div>
      <div className="flex sm:flex-row flex-col-reverse justify-center items-center sm:h-[696px] gap-20 mt-20 sm:mt-0">
        <img src={CareerImg2} alt="" />
        <div className="flex flex-col sm:w-[587px] w-screen gap-10">
          <div className="flex flex-col items-center sm:items-start gap-10">
            <h1 className="text-2xl font-semibold leading-10">
              Will you join our team
            </h1>
            <p className="text-text-color sm:text-base text-center sm:text-start text-sm font-normal leading-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              harum numquam rem, quibusdam dignissimos sint, tenetur blanditiis
              eum provident sapien
            </p>
          </div>
          <div className="sm:w-[500px] w-screen sm:ml-16 p-3">
            <h1 className="flex item-center gap-3 text-base font-normal leading-6">
              <img src={tickerIcon} alt="" /> Will you join our team
            </h1>
            <p className="text-text-color sm:text-base text-sm font-normal leading-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              harum numquam rem, quibusdam dignissimos sint, tenetur blanditiis
              eum provident sapien
            </p>
          </div>
          <div className="sm:w-[500px] w-screen sm:ml-16 p-3">
            <h1 className="flex item-center gap-3 text-base font-normal leading-6">
              <img src={tickerIcon} alt="" /> Will you join our team
            </h1>
            <p className="text-text-color sm:text-base text-sm font-normal leading-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              harum numquam rem, quibusdam dignissimos sint, tenetur blanditiis
              eum provident sapien
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-5 bg-[#F6F9FC]  sm:h-[265px] mt-10 sm:mt-0 p-5">
        <h1 className="sm:text-2xl text-xl font-semibold leading-10 ">
          We'd love to get to know you
        </h1>
        <p className="sm:text-base text-sm text-center font-normal leading-6 text-text-color">
          Browse our open positions, find a job you love, tell imposter syndrome
          to take a day off, and apply.
        </p>
        <Button className="bg-[#FAAD29] text-white text-[15px] py-3 px-5 hover:bg-[#faad29d6] font-plus-jakarta-sans font-bold w-[266px]">
          See all open positions
        </Button>
      </div>
    </div>
  );
};

export default CareerPage;
