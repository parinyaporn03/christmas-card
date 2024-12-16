import "./App.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import Grinch2 from "./assets/grinch2.png";
import Hand from "./assets/giphy.gif";
import Light from "./assets/light.gif";
import Face from "./assets/face.png";
function App() {
  return (
    <div className="min-h-screen  bg-gray-800 flex flex-col items-center justify-center">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="h-[600px] w-96 sm:h-96 sm:w-[550px]  "
        loop={true}
      >
        <SwiperSlide className="frontcard p-2 h-full rounded-3xl border-4 border-black">
          <div className="font-Mountains border-4 border-black bg-[#349546] h-full rounded-2xl text-center flex flex-col justify-center items-center w-full  text-xl">
            <img src={Face} className="w-52" />
            <div className="subtext bg-gray-300 px-4 rounded-full mt-4">
              To: You
            </div>
            <div className="subtext bg-gray-300  px-4 rounded-full mt-2">
              From: Grinch
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="border-4 border-black backcard p-2 h-full rounded-3xl">
          <div className="border-4 border-black bg-[#9f0706] rounded-3xl h-full">
            {/* top */}
            <div className="flex w-full justify-between items-center">
              <img src={Light} className="w-[150px] ml-[2px] -rotate-[24deg]" />
              <div className=" flex justify-end ">
                <img src={Hand} className="w-[8rem]" />
              </div>
            </div>
            {/* content */}
            <div className="grid grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 text-center  h-fit  mt-[-20px]">
              <div className="h-fit sm:ml-12 ">
                <img src={Grinch2} className=" w-40 sm:w-44 m-auto " />
              </div>

              <div className="h-fit text-white mt-[-20px] sm:mt-0">
                <div
                  className="font-Henny text-[38px] text-[#FFF200]  "
                  style={{ textShadow: "4px 1px 20px #ffff" }}
                >
                  Merry
                  <br /> Grinchmas!
                </div>
                <div className="sm:py-2">⋆꙳❅*°⋆❆.ೃ࿔*:･*❆ ₊⋆⋆꙳❅*°⋆❆.</div>

                <div className="font-Mountains text-3xl mt-2 sm:mt-0">
                  Chirstmas is <span className="text-[#FFF200] ">here.</span>{" "}
                  <br />
                  so make noises
                  <br /> and
                  <span className="text-[#FFF200] text-2xl"> SING🎤</span>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default App;
