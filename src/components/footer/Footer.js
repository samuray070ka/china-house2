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
              <li className="for__con__cr__ul__li"><MdLocationPin className='iconca'/>Lorem, ipsum dolor.</li>
              <li className="for__con__cr__ul__li"><MdPhone className='iconca'/>+000 00 000 00 00</li>
              <li className="for__con__cr__ul__li"><MdMobileScreenShare className='iconca'/>+000 00 000 00 00</li>
              <li className="for__con__cr__ul__li"><CgMail className='iconca'/>info@yourdomain.com</li>
              <li className="for__con__cr__ul__li"><img className="for__con__cr__ul__li__img" src="	https://www.thnet.it/new/images/footer-wmap.png" alt="" /></li>
            </ul>
          </div>
          <div className="for__con__cards">
          <ul className="for__con__cr__ul">
              <h4 className="for__con__cr__ul__title">Useful Links</h4>
              <li className="for__con__cr__ul__li">> Lorem, ipsum dolor.</li>
              <li className="for__con__cr__ul__li">> Lorem, ipsum dolor.</li>
              <li className="for__con__cr__ul__li">> Lorem, ipsum dolor.</li>
              <li className="for__con__cr__ul__li">> Lorem, ipsum dolor.</li>
              <li className="for__con__cr__ul__li">> Lorem, ipsum dolor.</li>
              <li className="for__con__cr__ul__li">> Lorem, ipsum dolor.</li>
              <li className="for__con__cr__ul__li">> Lorem, ipsum dolor.</li>
            </ul>
          </div>
          <div className="for__con__cards">
          <h4 className="for__con__cr__ul__title">About Us</h4>
          <p className="for__con__cr__p">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          <p className="for__con__cr__p">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam totam ullam expedita reprehenderit sapiente ex porro blanditiis possimus necessitatibus?</p>
          </div>
          <div className="for__con__cards">
          <h4 className="for__con__cr__ul__title">Flickr Photos</h4>
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