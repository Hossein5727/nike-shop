import React from 'react'
import img1 from '../../assets/img/pexels1.jpeg'
import img2 from '../../assets/img/pexels2.jpeg'
import style from './newSeason.module.css'

function NewSeason() {
    return (
        <section className={style.nsContainer}>

            <div className={style.nsItem}>
                <img
                    src={img1}
                    alt="Img"
                    className={style.nsImg}
                />
            </div>

            <div className={style.nsItem}>
                <h3 className={style.nsTitleSm}>WINTER NEW ARRIVALS</h3>
                <h1 className={style.nsTitle}>New Season</h1>
                <h1 className={style.nsTitle}>New Collection</h1>
                <a href="#nav">
                    <button className={style.nsButton}>CHOOSE YOUR STYLE</button>
                </a>
            </div>

            <div className={style.nsItem}>
                <img
                    src={img2}
                    alt="Img"
                    className={style.nsImg}
                />
            </div>
        </section>
    )
}

export default NewSeason
