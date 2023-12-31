import React from "react";
import "./Home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import img1 from "../../assets/bg1.jpg"
import img2 from "../../assets/bg2.jpg"
import img3 from "../../assets/bg3.jpg"
import img4 from "../../assets/bg4.jpg"

function Home() {
  return (
    <div className="home">
      <div className="home__banner_1">
        <Swiper className="home__swiper"
          spaceBetween={30}
          effect={"fade"}
          navigation={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, EffectFade, Navigation, Pagination]}>
          <SwiperSlide className="home__swiper_slide">
            <img src={img1} alt=""/>
          </SwiperSlide>
          <SwiperSlide className="home__swiper_slide">
            <img src={img2} alt=""/>
          </SwiperSlide>
          <SwiperSlide className="home__swiper_slide">
            <img src={img3} alt=""/>
          </SwiperSlide>
          <SwiperSlide className="home__swiper_slide">
            <img src={img4} alt=""/>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="home__banner_2">
        <h1>BIZ QANDAY ISHLAB CHIQARAMIZ ?</h1>
        <div className="home__cards container">
          <div  className="home__card">
            <h3>BATAFSIL MASLAHAT</h3>
            <p>Turar-joy sizga yoqqan kvartira uchun kredit olish haqida ma'lumot, batafsil hisob-kitob va dastlabki to'lov jadvali bilan tanishish.</p>
            <img src="https://china-house.uz/wp-content/themes/china-house/images/card-1.jpg" alt=""/>
          </div>
          <div   className="home__card">
            <h3>BANKDAN KREDIT BERISH</h3>
            <p>Bizning savdo bo'limiga biriktirilgan bankning maxsus xodimi tufayli kvartira sotib olish uchun kreditni qulay va tez tasdiqlash.</p>
            <img src="https://china-house.uz/wp-content/themes/china-house/images/card-2.jpg" alt=""/>
          </div>
          <div   className="home__card">
            <h3>RO'YXATDAN O'TING</h3>
            <p>Bizning savdo bo'limiga biriktirilgan bankning maxsus xodimi tufayli kvartira sotib olish uchun kreditni qulay va tez tasdiqlash.</p>
            <img src="https://china-house.uz/wp-content/themes/china-house/images/card-3.jpg" alt=""/>
          </div>
        </div>
      </div>
      <div className="home__banner_3">
        <h1   className="container">Barcha istak va orzularingizni inobatga oldik.</h1>
      </div>
      <div className="home__banner_4">
        <div  className="home__banner_4_half__1">
          <img src={img4} alt=""/>
        </div>
        <div   className="home__banner_4_half__2">
          <img src="https://china-house.uz/wp-content/themes/china-house/images/shoxsaroi.png" alt=""/>
          <p>Sergeli uchun mutlaqo yangi darajadagi qulaylikdir. 110 000 m2 keng maydon zamonaviy, xavfsiz va nafis majmuaga va katta xarid qilish xiyoboniga qulay tarzda mos keladi.“Bu” majmuasi megapolisning haqiqiy epitsentridir: u hashamatli hayot, samarali mehnat va yaxshi dam olish uchun barcha infratuzilmani taqdim etadi. Yuqori toifadagi kvartiralar, shinam kvartiralar, bolalar maydonchasi, dam olish maskani, betakror landshaft, avtoturargoh va toza havoga ega kattapark va ikkita tosh uydan iborat “SHOXSAROY RESIDENCE”obodonlashtirilgan hudud.</p>
        </div>
      </div>
      <div className="home__banner_5">
        <div className="home__banner_5_half__2">
          <img src="https://china-house.uz/wp-content/themes/china-house/images/shoxsaroi.png" alt=""/>
          <p>Sergeli uchun mutlaqo yangi darajadagi qulaylikdir. 110 000 m2 keng maydon zamonaviy, xavfsiz va nafis majmuaga va katta xarid qilishxiyoboniga qulay tarzda mos keladi. “Bu” majmuasi megapolisning haqiqiy epitsentridir: u hashamatli hayot, samarali mehnat va yaxshi dam olish uchun barcha infratuzilmani taqdim etadi. Yuqori toifadagi kvartiralar, shinam kvartiralar, bolalar maydonchasi, dam olish maskani, betakror landshaft, avtoturargoh va toza havoga ega katta park va ikkita tosh uydan iborat “SHOXSAROY RESIDENCE” obodonlashtirilgan hudud.</p>
        </div>
        <div  className="home__banner_5_half__1">
          <img src={img3} alt=""/>
        </div>
      </div>
      <div className="home__banner_6">
        <div  >
          <iframe  width="560" height="315" src="https://www.youtube.com/embed/e17aSm989qI"   title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay;   clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"   allowFullScreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/LLM7LF1Fr-k" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
        <div  >
          <iframe width="560" height="315" src="https://www.youtube.com/embed/e53dq7z4aQU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/eqkGMsBrKM4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> 
        </div>
      </div>
    </div>
  );
}

export default Home;


// 94 179 25 25