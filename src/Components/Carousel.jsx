import React, { useContext, useEffect } from "react";
import { DataContext } from "../Context/DataContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Carousel = () => {
  const { data, fetchAllProducts } = useContext(DataContext);

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <div className="relative w-screen overflow-hidden">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        speed={800}
        slidesPerView={1}
        className="mySwiper w-screen"
        // style={{ width: "100vw", height: "100vh" }}
      >
        {data?.slice(0, 7)?.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] -z-10">
              <div className="flex gap-10 justify-center h-[600px] items-center px-4">
                <div className="space-y-6">
                  <h3 className="text-red-500 font-semibold font-sans text-sm">
                    Powering Your World with the Best in Electronics
                  </h3>
                  <h1 className="text-4xl font-bold uppercase line-clamp-3 md:w-[600px] text-white">
                    {item.title}
                  </h1>
                  <p className="md:w-[500px] line-clamp-3 text-gray-400 pr-7">
                    {item.description}
                  </p>
                  <button
                    className="bg-gradient-to-r from-red-500 to-purple-500 text-white px-3 py-2 
                    rounded-md cursor-pointer mt-2"
                  >
                    Shop now
                  </button>
                </div>
                <div className="bg-white flex items-center justify-center rounded-full w-[550px] h-[550px] hover:scale-105 transition-all shadow-2xl shadow-red-400">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-[400px] h-[400px] object-contain"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Arrows */}
      <div className="custom-prev absolute left-5 top-1/2 -translate-y-1/2 z-10 cursor-pointer">
        <div className="bg-gradient-to-r from-red-500 to-purple-500 text-white p-3 rounded-full hover:scale-110 transition-all shadow-lg">
          <AiOutlineArrowLeft size={25} />
        </div>
      </div>
      <div className="custom-next absolute right-5 top-1/2 -translate-y-1/2 z-10 cursor-pointer">
        <div className="bg-gradient-to-r from-red-500 to-purple-500 text-white p-3 rounded-full hover:scale-110 transition-all shadow-lg">
          <AiOutlineArrowRight size={25} />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
