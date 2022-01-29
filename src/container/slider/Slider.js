import React from 'react'
import { sliderData } from '../../data/sliderData'
import style from './slider.module.css'

function Slider({ slide }) {
    return (
        <section className={style.slider}>
            <div className={style.sliderWrapper} ref={slide}>
                {sliderData.map(item => (
                    <div className={style.sliderItem} key={item.id}>
                        <img
                            src={item.img}
                            alt={item.title}
                            className={style.sliderImg}
                        />
                        <div className={style.sliderBg} style={{ backgroundColor: item.bg }}></div>
                        <h1 className={style.sliderTilte}>{item.title} <br /> {item.title2}</h1>
                        <h1 className={style.sliderPrice} style={{ borderColor: item.bg }}>${item.price}</h1>
                        <a href='#product'><button className={style.buyBtn}>BUY NOW!</button></a>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Slider
