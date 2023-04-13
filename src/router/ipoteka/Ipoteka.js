import React, {useState} from 'react'
import './Ipoteka.css'
import { NavLink, Route, Routes } from 'react-router-dom'


const DATA = [
  {
    id: "i-1",
    title: "Ipoteka",
    url: "https://china-house.uz/wp-content/themes/china-house/images/mortgage-bg.jpg",
    desc: "Мы хотим, чтобы каждый мог позволить себе жильё своей мечты и даём возможность приобрести квартиру в наших жилых комплексах по ипотечной ставке сроком на 20 лет с первоначальным взносом от 15% (в зависимости от квартиры)"
  },
  {
    id: "i-2",
    title: "To'lov rejasi",
    url:"https://china-house.uz/wp-content/themes/china-house/images/paccrode-bg.jpg",
    desc: "Покупка квартиры в рассрочку - это финансово удобно и позволит грамотно распределить семейный бюджет! "
  },
  {
    id: "i-3",
    title: "Ipoteka 30%",
    url:"https://china-house.uz/wp-content/themes/china-house/images/paccrode-bg.jpg",
    desc: "Мы хотим, чтобы каждый мог позволить себе жильё своей мечты и даём возможность "
  },
  {
    id: "i-4",
    title: "Ipoteka 50%",
    url:"https://china-house.uz/wp-content/themes/china-house/images/payment30-bg.jpg",
    desc: "Если вы планируете оплатить 50% от стоимости квартиры, мы предоставим вам приятные условия приобретения с выгодой до 17 млн. сумов."
  },
  {
    id: "i-5",
    title: "Ipoteka 100%",
    url:"https://china-house.uz/wp-content/themes/china-house/images/payment30-bg.jpg",
    desc: "При покупке со 100% оплатой вы экономите до 35 млн сумов. Ламинат, обои, кафель - этой суммы достаточно, чтобы сделать отличный ремонт в небольшой двухкомнатной квартире.",
    border: "1px solid red"
  },
]

function Ipoteka() {
  const [select, setSelect] = useState("i-1")
  const [border, setBorder] = useState(true)


  let current = DATA.find(({id})=> id === select)


  return (
    <div>
      <main style={{background: `url(${current?.url})  no-repeat center/cover`}} className='ipoteka'>
        <div className="ipoteka__right">
          <ul>
            {
              DATA?.map(item =><li onClick={()=> setSelect(item.id)} key={item.id} >{item.title}</li>)
            }
          </ul>
        </div>
        <div className="ipoteka__left">
          <div className="ipoteka1">
            <div className="ipoteka__bottom">
              <h2>{current?.title}</h2>
            </div>
            <div className="ipoteka__top">
              <p>{current?.desc}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Ipoteka