import React from 'react'
import style from './newSeason.module.css'

function NewSeason() {
    return (
        <section className={style.nsContainer}>

            <div className={style.nsItem}>
                <img
                    src="https://images.pexels.com/photos/4753986/pexels-photo-4753986.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
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
                    src="https://images.pexels.com/photos/7856965/pexels-photo-7856965.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt="Img"
                    className={style.nsImg}
                />
            </div>
        </section>
    )
}

export default NewSeason
