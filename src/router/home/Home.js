import React from "react";
import "./Home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";

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
            <img src="https://china-house.uz/wp-content/themes/china-house/slider/images/1.jpg" alt=""/>
          </SwiperSlide>
          <SwiperSlide className="home__swiper_slide">
            <img src="https://china-house.uz/wp-content/themes/china-house/slider/images/2.jpg" alt=""/>
          </SwiperSlide>
          <SwiperSlide className="home__swiper_slide">
            <img src="https://china-house.uz/wp-content/themes/china-house/slider/images/3.jpg" alt=""/>
          </SwiperSlide>
          <SwiperSlide className="home__swiper_slide">
            <img src="https://china-house.uz/wp-content/themes/china-house/slider/images/4.jpg" alt=""/>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="home__banner_2">
        <h1>BIZ QANDAY ISHLAB CHIQARAMIZ ?</h1>
        <div className="home__cards container">
          <div data-aos="fade-up" className="home__card">
            <h3>BATAFSIL MASLAHAT</h3>
            <p>Turar-joy sizga yoqqan kvartira uchun kredit olish haqida ma'lumot, batafsil hisob-kitob va dastlabki to'lov jadvali bilan tanishish.</p>
            <img src="https://china-house.uz/wp-content/themes/china-house/images/card-1.jpg" alt=""/>
          </div>
          <div data-aos="fade-up" data-aos-duration="800" className="home__card">
            <h3>BANKDAN KREDIT BERISH</h3>
            <p>Bizning savdo bo'limiga biriktirilgan bankning maxsus xodimi tufayli kvartira sotib olish uchun kreditni qulay va tez tasdiqlash.</p>
            <img src="https://china-house.uz/wp-content/themes/china-house/images/card-2.jpg" alt=""/>
          </div>
          <div data-aos="fade-up" data-aos-duration="1600" className="home__card">
            <h3>RO'YXATDAN O'TING</h3>
            <p>Bizning savdo bo'limiga biriktirilgan bankning maxsus xodimi tufayli kvartira sotib olish uchun kreditni qulay va tez tasdiqlash.</p>
            <img src="https://china-house.uz/wp-content/themes/china-house/images/card-3.jpg" alt=""/>
          </div>
        </div>
      </div>
      <div className="home__banner_3">
        <h1 data-aos="fade-up" data-aos-duration="1500" className="container">BIZ SIZNING ISTAKLARINGIZ VA IMKONIYATLARINGIZNI SOZGACHA ETIB OLAMIZ ENG YAXSHI VARIANTNI DIQQAT QILAMIZ..</h1>
      </div>
      <div className="home__banner_4">
        <div data-aos="flip-left" data-aos-duration="1500" className="home__banner_4_half__1">
          <img src="https://china-house.uz/wp-content/themes/china-house/images/exterior-001.jpg" alt=""/>
        </div>
        <div data-aos="flip-right" data-aos-duration="1500" className="home__banner_4_half__2">
          <img src="https://china-house.uz/wp-content/themes/china-house/images/shoxsaroi.png" alt=""/>
          <p>Sergeli uchun mutlaqo yangi darajadagi qulaylikdir. 110 000 m2 keng maydon zamonaviy, xavfsiz va nafis majmuaga va katta xarid qilish xiyoboniga qulay tarzda mos keladi.“Bu” majmuasi megapolisning haqiqiy epitsentridir: u hashamatli hayot, samarali mehnat va yaxshi dam olish uchun barcha infratuzilmani taqdim etadi. Yuqori toifadagi kvartiralar, shinam kvartiralar, bolalar maydonchasi, dam olish maskani, betakror landshaft, avtoturargoh va toza havoga ega kattapark va ikkita tosh uydan iborat “SHOXSAROY RESIDENCE”obodonlashtirilgan hudud.</p>
        </div>
      </div>
      <div className="home__banner_5">
        <div data-aos="flip-left" data-aos-duration="1500" className="home__banner_5_half__2">
          <img src="https://china-house.uz/wp-content/themes/china-house/images/shoxsaroi.png" alt=""/>
          <p>Sergeli uchun mutlaqo yangi darajadagi qulaylikdir. 110 000 m2 keng maydon zamonaviy, xavfsiz va nafis majmuaga va katta xarid qilishxiyoboniga qulay tarzda mos keladi. “Bu” majmuasi megapolisning haqiqiy epitsentridir: u hashamatli hayot, samarali mehnat va yaxshi dam olish uchun barcha infratuzilmani taqdim etadi. Yuqori toifadagi kvartiralar, shinam kvartiralar, bolalar maydonchasi, dam olish maskani, betakror landshaft, avtoturargoh va toza havoga ega katta park va ikkita tosh uydan iborat “SHOXSAROY RESIDENCE” obodonlashtirilgan hudud.</p>
        </div>
        <div data-aos="flip-right" data-aos-duration="1500" className="home__banner_5_half__1">
          <img src="https://china-house.uz/wp-content/themes/china-house/images/exterior-001.jpg" alt=""/>
        </div>
      </div>
      <div className="home__banner_6">
        <div data-aos-duration="1500" data-aos="fade-right">
          <iframe  width="560" height="315" src="https://www.youtube.com/embed/e17aSm989qI"   title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay;   clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"   allowFullScreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/LLM7LF1Fr-k" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
        <div data-aos-duration="1500" data-aos="fade-left">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/e53dq7z4aQU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/eqkGMsBrKM4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> 
        </div>
      </div>
    </div>
  );
}

export default Home;
