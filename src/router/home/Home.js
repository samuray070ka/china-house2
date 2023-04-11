import React from 'react'
import "./Home.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";

function Home() {
  return (
    <div className='home'>
      <div className="home__banner_1">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="home__swiper"
      >
        <SwiperSlide className='home__swiper_slide'>
          <img src="https://china-house.uz/wp-content/themes/china-house/slider/images/1.jpg" />
        </SwiperSlide>
        <SwiperSlide className='home__swiper_slide'>
          <img src="https://china-house.uz/wp-content/themes/china-house/slider/images/2.jpg" />
        </SwiperSlide>
        <SwiperSlide className='home__swiper_slide'>
          <img src="https://china-house.uz/wp-content/themes/china-house/slider/images/3.jpg" />
        </SwiperSlide>
        <SwiperSlide className='home__swiper_slide'>
          <img src="https://china-house.uz/wp-content/themes/china-house/slider/images/4.jpg" />
        </SwiperSlide>
      </Swiper>
      </div>
      <div className="home__banner_2">
          <h1>BIZ QANDAY ISHLAB CHIQARAMIZ ?</h1> 
        <div className="home__cards container">
          <div className="home__card">
            <h3>BATAFSIL MASLAHAT</h3>
            <p>Turar-joy sizga yoqqan kvartira uchun kredit olish haqida ma'lumot, batafsil hisob-kitob va dastlabki to'lov jadvali bilan tanishish.</p>
            <img src="https://china-house.uz/wp-content/themes/china-house/images/card-1.jpg" alt="" />
          </div>
          <div className="home__card">
            <h3>BANKDAN KREDIT BERISH</h3>
            <p>Bizning savdo bo'limiga biriktirilgan bankning maxsus xodimi tufayli kvartira sotib olish uchun kreditni qulay va tez tasdiqlash.</p>
            <img src="https://china-house.uz/wp-content/themes/china-house/images/card-2.jpg" alt="" />
          </div>
          <div className="home__card">
            <h3>RO'YXATDAN O'TING</h3>
            <p>Bizning savdo bo'limiga biriktirilgan bankning maxsus xodimi tufayli kvartira sotib olish uchun kreditni qulay va tez tasdiqlash.</p>
            <img src="https://china-house.uz/wp-content/themes/china-house/images/card-3.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className="home__banner_3">
        <h1 className='container'>BIZ SIZNING ISTAKLARINGIZ VA IMKONIYATLARINGIZNI SOZGACHA ETIB OLAMIZ ENG YAXSHI VARIANTNI DIQQAT QILAMIZ..!</h1>
      </div>
      <div className="home__banner_4">
        <div className="home__banner_4_half__1">
          <img src="https://china-house.uz/wp-content/themes/china-house/images/exterior-001.jpg" alt="" />
        </div>
        <div className="home__banner_4_half__2">
          <img src="https://china-house.uz/wp-content/themes/china-house/images/shoxsaroi.png" alt="" />
          <p>Sergeli uchun mutlaqo yangi darajadagi qulaylikdir. 110 000 m2 keng maydon zamonaviy, xavfsiz va nafis majmuaga va katta xarid qilish xiyoboniga qulay tarzda mos keladi.
          “Bu” majmuasi megapolisning haqiqiy epitsentridir: u hashamatli hayot, samarali mehnat va yaxshi dam olish uchun barcha infratuzilmani taqdim etadi. Yuqori toifadagi kvartiralar, shinam kvartiralar, bolalar maydonchasi, dam olish maskani, betakror landshaft, avtoturargoh va toza havoga ega katta park va ikkita tosh uydan iborat “SHOXSAROY RESIDENCE” obodonlashtirilgan hudud.</p>
        </div>
      </div>
      <div className="home__banner_5">
        <div>
          <p>Oiladagi baxt asta-sekin yig'iladi: bu yaqinlarning tabassumi, baxtli bayramlar, bolalarning tug'ilishi, bular uy qurishga kelgan do'stlar, kvartirada qulay muhit, bolalarning maktabdagi muvaffaqiyati va qiziqarli o'yinlar o'yin maydonchasida.
          Biz sizning yangi uyingiz joylashuvini diqqat bilan tanladik, shunda siz tezda bolalar bog'chalari va maktablarga borishingiz, oziq-ovqat uchun supermarketga yugurishingiz, oilangiz bilan restoranga kechki ovqatga chiqishingiz va qulay yashashingiz mumkin.</p>
        </div>
      </div>
    </div>
  )
}

export default Home 