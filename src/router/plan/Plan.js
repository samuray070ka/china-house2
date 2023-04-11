import React, { useRef} from 'react'
import './Plan.css'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Autoplay, Pagination, Navigation } from 'swiper';


function Plan() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className='plan'>
      <div className="container">
       <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper1"
      >
        <SwiperSlide><img src="https://china-house.uz/wp-content/themes/china-house/plancarousel/imagesshohsaroy/room3/little/17.png" alt="" />
        <h2>Жилой комплекс на "Сергели 6А "SHOXSAROY RESIDENCE"</h2><br/>
        <h3>3 комнатная квартира</h3></SwiperSlide>
        <SwiperSlide><img src="https://china-house.uz/wp-content/themes/china-house/plancarousel/imagesshohsaroy/room3/big/21.png" alt="" />
        <h2>Жилой комплекс на "Сергели 6А" "SHOXSAROY RESIDENCE"</h2><br/>
        <h3>3 комнатная квартира</h3></SwiperSlide>
        <SwiperSlide><img src="https://china-house.uz/wp-content/themes/china-house/plancarousel/imagesshohsaroy/room1/little/1.png" alt="" /><h2>Жилой комплекс на "Сергели 6А" "SHOXSAROY RESIDENCE"</h2><br/>
        <h3>3 комнатная квартира</h3></SwiperSlide>
        <SwiperSlide><img src="https://china-house.uz/wp-content/themes/china-house/plancarousel/imagesshohsaroy/room3/big/26.png" alt="" /><h2>Жилой комплекс на "Сергели 6А" "SHOXSAROY RESIDENCE"</h2><br/>
        <h3>1 комнатная квартира</h3></SwiperSlide>
        <SwiperSlide><img src="https://china-house.uz/wp-content/themes/china-house/plancarousel/imagesshohsaroy/room3/little/9.png" alt="" /><h2>Жилой комплекс на "Сергели 6А" "SHOXSAROY RESIDENCE"</h2><br/>
        <h3>3 комнатная квартира</h3></SwiperSlide>
        <SwiperSlide><img src="https://china-house.uz/wp-content/themes/china-house/plancarousel/imagesshohsaroy/room2/big/1.png" alt="" /><h2>Жилой комплекс на "Сергели 6А" "SHOXSAROY RESIDENCE"</h2><br/>
        <h3>1 комнатная квартира</h3></SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
        <div className="swiper-pagination"></div>
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
       <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper1"
      >
        <SwiperSlide><img src="https://china-house.uz/wp-content/themes/china-house/plancarousel/imagesshohsaroy/room3/big/26.png" alt="" /><h2>Жилой комплекс на "Сергели 6А" "SHOXSAROY RESIDENCE"</h2><br/>
        <h3>1 комнатная квартира</h3></SwiperSlide>
        <SwiperSlide><img src="https://china-house.uz/wp-content/themes/china-house/plancarousel/imagesshohsaroy/room3/big/21.png" alt="" />
        <h2>Жилой комплекс на "Сергели 6А" "SHOXSAROY RESIDENCE"</h2><br/>
        <h3>3 комнатная квартира</h3></SwiperSlide>
        <SwiperSlide><img src="https://china-house.uz/wp-content/themes/china-house/plancarousel/imagesshohsaroy/room1/little/1.png" alt="" /><h2>Жилой комплекс на "Сергели 6А" "SHOXSAROY RESIDENCE"</h2><br/>
        <h3>3 комнатная квартира</h3></SwiperSlide>
        <SwiperSlide><img src="https://china-house.uz/wp-content/themes/china-house/plancarousel/imagesshohsaroy/room3/little/9.png" alt="" /><h2>Жилой комплекс на "Сергели 6А" "SHOXSAROY RESIDENCE"</h2><br/>
        <h3>3 комнатная квартира</h3></SwiperSlide>
        <SwiperSlide><img src="https://china-house.uz/wp-content/themes/china-house/plancarousel/imagesshohsaroy/room2/big/1.png" alt="" /><h2>Жилой комплекс на "Сергели 6А" "SHOXSAROY RESIDENCE"</h2><br/>
        <h3>1 комнатная квартира</h3></SwiperSlide>
        <SwiperSlide><img src="https://china-house.uz/wp-content/themes/china-house/plancarousel/imagesshohsaroy/room3/little/17.png" alt="" />
        <h2>Жилой комплекс на "Сергели 6А "SHOXSAROY RESIDENCE"</h2><br/>
        <h3>3 комнатная квартира</h3></SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
        <div className="swiper-pagination"></div>
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
      </div>
    </div>
  )
}

export default Plan