import React, { useRef} from 'react'
import './Plan.css'
import plan1 from "./plan1.png"
import plan2 from "./plan2.png"
import plan3 from "./plan3.png"
import plan4 from "./plan4.png"
import plan5 from "./plan5.png"
import plan6 from "./plan6.png"
import plan7 from "./plan7.png"
import plan8 from "./plan8.png"
import plan9 from "./plan9.png"
import plan10 from "./plan10.png"
import plan11 from "./plan11.png"
import plan12 from "./plan12.png"
import plan13 from "./plan13.png"
import plan14 from "./plan14.png"
import plan15 from "./plan15.png"
import plan16 from "./plan16.png"
import plan17 from "./plan17.png"
import plan18 from "./plan18.png"
import plan19 from "./plan19.png"
import plan20 from "./plan20.png"

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
  const progressCircle2 = useRef(null);
  const progressContent2 = useRef(null);
  const onAutoplayTimeLeft2 = (s, time, progress) => {
    progressCircle2.current.style.setProperty('--progress', 1 - progress);
    progressContent2.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  
  return (
    <div className='plan'>
      <div className="container"><br/>
        <h1>Uylarning tepadan ko`rinishi</h1><br/>
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
        <SwiperSlide><img src={plan1} alt="" />
        <h2>Жилой комплекс на "Сергели 6А "SHOXSAROY RESIDENCE"</h2><br/>
        <h3>3 комнатная квартира</h3></SwiperSlide>
        <SwiperSlide><img src={plan2} alt="" />
        <h2>Жилой комплекс на "Сергели 6А" "SHOXSAROY RESIDENCE"</h2><br/>
        <h3>4 комнатная квартира</h3></SwiperSlide>
        <SwiperSlide><img src={plan3} alt="" /><h2>Жилой комплекс на "Сергели 6А" "SHOXSAROY RESIDENCE"</h2><br/>
        <h3>3 комнатная квартира</h3></SwiperSlide>
        <SwiperSlide><img src={plan4} alt="" /><h2>Жилой комплекс на "Сергели 6А" "SHOXSAROY RESIDENCE"</h2><br/>
        <h3>1 комнатная квартира</h3></SwiperSlide>
        <SwiperSlide><img src={plan5} alt="" /><h2>Жилой комплекс на "Сергели 6А" "SHOXSAROY RESIDENCE"</h2><br/>
        <h3>3 комнатная квартира</h3></SwiperSlide>
        <SwiperSlide><img src={plan6} alt="" /><h2>Жилой комплекс на "Сергели 6А" "SHOXSAROY RESIDENCE"</h2><br/>
        <h3>2 комнатная квартира</h3></SwiperSlide>
        <SwiperSlide><img src={plan7} alt="" /><h2>Жилой комплекс на "Сергели 6А" "SHOXSAROY RESIDENCE"</h2><br/>
        <h3>4 комнатная квартира</h3></SwiperSlide>
        <SwiperSlide><img src={plan8} alt="" /><h2>Жилой комплекс на "Сергели 6А" "SHOXSAROY RESIDENCE"</h2><br/>
        <h3>5 комнатная квартира</h3></SwiperSlide>
        <SwiperSlide><img src={plan9} alt="" /><h2>Жилой комплекс на "Сергели 6А" "SHOXSAROY RESIDENCE"</h2><br/>
        <h3>3 комнатная квартира</h3></SwiperSlide>
        <SwiperSlide><img src={plan10} alt="" /><h2>Жилой комплекс на "Сергели 6А" "SHOXSAROY RESIDENCE"</h2><br/>
        <h3>1 комнатная квартира</h3></SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
        <div className="swiper-pagination"></div>
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper><br/><br/>
       <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft2}
        className="mySwiper1"
      >
        <SwiperSlide><img src={plan11} alt="" /><h2>Жилой комплекс на "Сергели 6А" "SHOXSAROY RESIDENCE"</h2><br/>
        <h3>1 комнатная квартира</h3></SwiperSlide>
        <SwiperSlide><img src={plan12} alt="" />
        <h2>Жилой комплекс на "Сергели 6А" "SHOXSAROY RESIDENCE"</h2><br/>
        <h3>3 комнатная квартира</h3></SwiperSlide>
        <SwiperSlide><img src={plan13} alt="" /><h2>Жилой комплекс на "Сергели 6А" "SHOXSAROY RESIDENCE"</h2><br/>
        <h3>4 комнатная квартира</h3></SwiperSlide>
        <SwiperSlide><img src={plan14} alt="" /><h2>Жилой комплекс на "Сергели 6А" "SHOXSAROY RESIDENCE"</h2><br/>
        <h3>3 комнатная квартира</h3></SwiperSlide>
        <SwiperSlide><img src={plan15} alt="" /><h2>Жилой комплекс на "Сергели 6А" "SHOXSAROY RESIDENCE"</h2><br/>
        <h3>1 комнатная квартира</h3></SwiperSlide>
        <SwiperSlide><img src={plan16} alt="" />
        <h2>Жилой комплекс на "Сергели 6А "SHOXSAROY RESIDENCE"</h2><br/>
        <h3>2 комнатная квартира</h3></SwiperSlide>
        <SwiperSlide><img src={plan17} alt="" />
        <h2>Жилой комплекс на "Сергели 6А "SHOXSAROY RESIDENCE"</h2><br/>
        <h3>5 комнатная квартира</h3></SwiperSlide>
        <SwiperSlide><img src={plan18} alt="" />
        <h2>Жилой комплекс на "Сергели 6А "SHOXSAROY RESIDENCE"</h2><br/>
        <h3>3 комнатная квартира</h3></SwiperSlide>
        <SwiperSlide><img src={plan19} alt="" />
        <h2>Жилой комплекс на "Сергели 6А "SHOXSAROY RESIDENCE"</h2><br/>
        <h3>5 комнатная квартира</h3></SwiperSlide>
        <SwiperSlide><img src={plan20} alt="" />
        <h2>Жилой комплекс на "Сергели 6А "SHOXSAROY RESIDENCE"</h2><br/>
        <h3>3 комнатная квартира</h3></SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
        <div className="swiper-pagination"></div>
          <svg viewBox="0 0 48 48" ref={progressCircle2}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent2}></span>
        </div>
      </Swiper><br/>
      </div><br/>
      <iframe className='maps' src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1336.6341131244321!2d71.65833550894367!3d41.00206927279885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sviloyat%20sudi%20near%20Namangan!5e0!3m2!1sen!2s!4v1684044572733!5m2!1sen!2s"  height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default Plan