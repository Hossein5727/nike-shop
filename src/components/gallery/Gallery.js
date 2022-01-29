import React from 'react'
import { galleryData } from '../../data/galleryData'
import style from './gallery.module.css'

function Gallery() {
    return (
        <section className={style.gallery}>
            {galleryData.map(item => (
                <div key={item.id} className={style.gallryItem}>
                    <div className={style.layer}></div>
                    <img
                        src={item.img}
                        alt={item.title}
                        className={style.imgItem}
                    />
                    <h1 className={style.titleItem}>{item.title}</h1>
                </div>
            ))}
        </section>
    )
}

export default Gallery
