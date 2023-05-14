import React from 'react'
import "./Footer.css"
import {MdLocationPin, MdPhone, MdMobileScreenShare} from "react-icons/md"
import {CgMail} from "react-icons/cg"
import {BsFacebook, BsTelegram} from "react-icons/bs"
import {AiFillTwitterCircle } from "react-icons/ai"
import {SiYoutubemusic} from "react-icons/si"
import {TiSocialInstagramCircular} from "react-icons/ti"
import imgfooxar from "../../assets/xar.png"
import imgfoora from "../../assets/bg2.jpg"

function Footer() {
  return (
      <div className='footer'>
        <div className="container foter__con">
          <div className="for__con__card">
          <div className="for__con__cards">
            <ul className="for__con__cr__ul">
              <h4 className="for__con__cr__ul__title">China House</h4>
              <li className="for__con__cr__ul__li"><MdLocationPin className='iconca'/>Namangan Jinoyat sudi yonida</li>
              <li className="for__con__cr__ul__li"><MdPhone className='iconca'/>+998 95 302 55 11</li>
              <li className="for__con__cr__ul__li"><MdMobileScreenShare className='iconca'/>+998 95 024 80 88</li>
              <li className="for__con__cr__ul__li"><CgMail className='iconca'/>baglobalhousesnam@gmail. com</li>
              <li className="for__con__cr__ul__li"><img className="for__con__cr__ul__li__img" src={imgfooxar} alt="" /></li>
            </ul>
          </div>
          {/* <div className="for__con__cards">
          <ul className="for__con__cr__ul">
              <h4 className="for__con__cr__ul__title">Havolalarimiz</h4>
              <li className="for__con__cr__ul__li">Biz bilan aloqa</li>
              <li className="for__con__cr__ul__li">Bizning yoriqnomamiz</li>
              <li className="for__con__cr__ul__li">Uylarimiz haqida</li>
              <li className="for__con__cr__ul__li">Hodimlarimiz haqida</li>
              <li className="for__con__cr__ul__li">Qulayliklarimiz</li>
              <li className="for__con__cr__ul__li">Kmachiliklarimiz</li>
              <li className="for__con__cr__ul__li">Hamkorlik uchun</li>
            </ul>
          </div> */}
          <div className="for__con__cards">
          <h4 className="for__con__cr__ul__title">Biz haqimizda</h4>
          <p className="for__con__cr__p">Biz bilan birga boling va aslo yengilmaysiz</p>
          <p className="for__con__cr__p">Boshpana joy, uyjoy binolari. Oila istiqomat qiladigan uy, oilaning maishiy hayoti oʻtadigan muhit. Turar joy ibtidoiy davrlardayoq taom tayyorlash, libos kiyish qatorida paydo boʻlgan.</p>
          </div>
          <div className="for__con__cards">
          <h4 className="for__con__cr__ul__title">Rasmlar</h4>
          <img className='img__for__ul' src={imgfoora} alt="" />
          </div>
          </div>
        </div>
        <div className="foter__bottom">
            <h4 className='for__bot__con__tit'>Copyright © 2014 Aaika.com. All rights reserved. Terms of Use | Privacy Policy</h4>
            <div className="ikons">
              <a href="https://t.me/VOLK_2o7">
              <BsFacebook className='iko__icons'/>
              </a>
              <a href="https://t.me/VOLK_2o7">
              <AiFillTwitterCircle className='iko__icons'/>
              </a>
              <a href="https://t.me/VOLK_2o7">
              <SiYoutubemusic className='iko__icons'/>
              </a>
              <a href="https://t.me/VOLK_2o7">
              <TiSocialInstagramCircular className='iko__icons'/>
              </a>
              <a href="https://t.me/VOLK_2o7">
              <BsTelegram className='iko__icons'/>
              </a>
            </div>
        </div>
      </div>
  )
}

export default Footer