import React from 'react'
import { featuresData } from '../../data/featuresData'
import style from './features.module.css'

function Features() {
    return (
        <section className={style.features}>
            {featuresData.map(item => (
                <div className={style.feature} key={item.id}>
                    <img
                        src={item.icon}
                        alt={item.title}
                        className={style.featureIcon}
                        width="60"
                        height="60"
                    />
                    <h3 className={style.title}>{item.title}</h3>
                    <p className={style.desc}>{item.desc}</p>
                </div>
            ))}
        </section>
    )
}

export default Features
