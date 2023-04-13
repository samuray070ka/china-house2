import React from "react";
import "./Contact.css";

export const MAN__ABOUT = [
  {
    img: "https://china-house.uz/wp-content/themes/china-house/images/sales/1.jpg",
    name: "Shuhratovna Iroda",
    job: "Sotish bo'yicha  menejer",
    num: "97 115 88 88",
  },
  {
    img: "https://china-house.uz/wp-content/themes/china-house/images/sales/2.jpg",
    name: "Oxunova Nozidil",
    job: "Sotish bo'yicha  menejer",
    num: "97 125 88 88",
  },
  {
    img: "https://china-house.uz/wp-content/themes/china-house/images/sales/3.jpg",
    name: "Maxamadievna Shaxnoza",
    job: "Sotish bo'yicha  menejer",
    num: "97 175 88 88",
  },
  {
    img: "https://china-house.uz/wp-content/themes/china-house/images/sales/4.jpg",
    name: "Mashrabbayeva Mahliyo",
    job: "Sotish bo'yicha  menejer",
    num: "99 115 88 88",
  },
  {
    img: "https://china-house.uz/wp-content/themes/china-house/images/sales/6.jpg",
    name: "Normurodova Madinabonu",
    job: "Sotish bo'yicha  menejer",
    num: "99 924 88 88",
  },
  {
    img: "https://china-house.uz/wp-content/themes/china-house/images/sales/7.jpg",
    name: "Ismailova Muslima",
    job: "Sotish bo'yicha  menejer",
    num: "99 926 88 88",
  },
];

function Contact() {
  return (
    <div className="contact">
      <div className="con__sidebar">
        <div className="container con__bac">
          <div className="cloc__about">
            <img
              className="csidebar__logo"
              src="https://china-house.uz/wp-content/themes/china-house/images/sales/logo-shoxsaroy-white2.svg"
              alt=""
            />
            <img
              className="csidebar__loc"
              src="https://china-house.uz/wp-content/themes/china-house/images/sales/shohsaroy.jpg"
              alt=""
            />

            <br />
            <br />
            <h4>Посмотреть на карте</h4>
          </div>

          <div className="cloc__about">
            <img
              className="csidebar__logo"
              src="https://china-house.uz/wp-content/themes/china-house/images/sales/logo-shanghai-white2.svg"
              alt=""
            />

            <img
              className="csidebar__loc"
              src="https://china-house.uz/wp-content/themes/china-house/images/sales/shanghai.jpg"
              alt=""
            />

            <br />
            <br />
            <h4>Посмотреть на карте</h4>
          </div>
        </div>
      </div>

      <div className="con__about container">
        {MAN__ABOUT?.map((item, inx) => (
          <div key={inx} className="cabout__card">
            <img className="ccard__img" src={item.img} alt="" />

            <h3 className="ccard__name">{item.name}</h3>

            <h4 className="ccard__job">{item.job}</h4>

            <button className="ccard__btn">Xabar yozish uchun</button>

            <h4 className="ccard__num">
              +998 <span>{item.num}</span>
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contact;
