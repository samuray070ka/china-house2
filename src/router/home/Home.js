import React  from 'react'
import './Home.css'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Autoplay, Navigation, Pagination } from "swiper";


function Home() {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Autoplay, Navigation, Pagination]}
        className="mySwiper2"
      >
        <SwiperSlide className='home__swiper'><img src="https://china-house.uz/wp-content/themes/china-house/slider/images/4.jpg" alt="" /></SwiperSlide>
        <SwiperSlide className='home__swiper'><img src="https://china-house.uz/wp-content/themes/china-house/slider/images/1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide className='home__swiper'><img src="https://china-house.uz/wp-content/themes/china-house/slider/images/2.jpg" alt="" /></SwiperSlide>
        <SwiperSlide className='home__swiper'><img src="https://china-house.uz/wp-content/themes/china-house/slider/images/3.jpg" alt="" /></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Home