import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HeroSection = () => {
  const bannerImages = [
    "https://res.cloudinary.com/dnle0cwhv/image/upload/v1753578369/aloxeghep-banner_ruimta.png",
  ];

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    // Ensure Swiper uses refs after component mounts
  }, []);

  return (
    <div className="relative w-full h-[220px] md:h-[500px] lg:h-[600px]">
      {/* Nút trái */}
      <div
        ref={prevRef}
        className="absolute top-1/2 left-4 z-10 w-11 h-11 flex items-center justify-center rounded-full border border-white/40 bg-white/30 text-white text-xl cursor-pointer transition-all hover:bg-white/60"
        style={{ transform: "translateY(-50%)" }}
      >
        ❮
      </div>

      {/* Nút phải */}
      <div
        ref={nextRef}
        className="absolute top-1/2 right-4 z-10 w-11 h-11 flex items-center justify-center rounded-full border border-white/40 bg-white/30 text-white text-xl cursor-pointer transition-all hover:bg-white/60"
        style={{ transform: "translateY(-50%)" }}
      >
        ❯
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="w-full h-full"
      >
        {bannerImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${image})` }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;
