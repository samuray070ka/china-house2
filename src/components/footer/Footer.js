import React from 'react'
import "./Footer.css"
import {MdLocationPin, MdPhone, MdMobileScreenShare, MdOutlineWifi} from "react-icons/md"
import {CgMail} from "react-icons/cg"
import {BsFacebook} from "react-icons/bs"
import {AiFillTwitterCircle, AiFillGooglePlusCircle, AiFillLinkedin} from "react-icons/ai"
import {SiSass, SiYoutubemusic} from "react-icons/si"

function Footer() {
  return (
      <div className='footer'>
        <div className="container foter__con">
          <div className="for__con__card">
          <div className="for__con__cards">
            <ul className="for__con__cr__ul">
              <h4 className="for__con__cr__ul__title">China House</h4>
              <li className="for__con__cr__ul__li"><MdLocationPin className='iconca'/>Avtosalon yonida</li>
              <li className="for__con__cr__ul__li"><MdPhone className='iconca'/>+000 00 000 00 00</li>
              <li className="for__con__cr__ul__li"><MdMobileScreenShare className='iconca'/>+000 00 000 00 00</li>
              <li className="for__con__cr__ul__li"><CgMail className='iconca'/>info@yourdomain.com</li>
              <li className="for__con__cr__ul__li"><img className="for__con__cr__ul__li__img" src="	https://www.thnet.it/new/images/footer-wmap.png" alt="" /></li>
            </ul>
          </div>
          <div className="for__con__cards">
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
          </div>
          <div className="for__con__cards">
          <h4 className="for__con__cr__ul__title">Biz haqimizda</h4>
          <p className="for__con__cr__p">Biz bilan birga boling va aslo yengilmaysiz</p>
          <p className="for__con__cr__p">Boshpana joy, uyjoy binolari. Oila istiqomat qiladigan uy, oilaning maishiy hayoti oʻtadigan muhit. Turar joy ibtidoiy davrlardayoq taom tayyorlash, libos kiyish qatorida paydo boʻlgan.</p>
          </div>
          <div className="for__con__cards">
          <h4 className="for__con__cr__ul__title">Rasmlar</h4>
          <img className='img__for__ul' src="https://chinahouse1.uz/images/209617-1.jpg" alt="" />
          </div>
          </div>
        </div>
        <div className="foter__bottom">
            <h4 className='for__bot__con__tit'>Copyright © 2014 Aaika.com. All rights reserved. Terms of Use | Privacy Policy</h4>
            <div className="ikons">
              <BsFacebook className='iko__icons'/>
              <AiFillTwitterCircle className='iko__icons'/>
              <AiFillGooglePlusCircle className='iko__icons'/>
              <AiFillLinkedin className='iko__icons'/>
              <SiSass className='iko__icons'/>
              <SiYoutubemusic className='iko__icons'/>
              <MdOutlineWifi className='iko__icons'/>
            </div>
        </div>
      </div>
  )
}

export default Footer