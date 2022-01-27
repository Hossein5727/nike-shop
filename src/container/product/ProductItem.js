import React, { useState } from 'react'
import img1 from '../../assets/img/air.png'
import style from './productItem.module.css'


function ProductItem({ item, openPaymantTool }) {

    const [lengthImg, setLengthImg] = useState(1)

    const nextImg = (id) => {
        setLengthImg(id)
    }

    return (
        <section key={item.id} className={style.product}>

            <div className={style.imgProduct}>
                <img
                    src={item.colors[lengthImg - 1].img}
                    alt='productImg'
                    className={style.img}
                />
            </div>

            <div className={style.infoProduct}>
                <h1 className={style.productTitle}>{item.title}</h1>
                <h3 className={style.priceProduct}>{item.price}$</h3>
                <p className={style.descProduct}>Eiusmod pariatur excepteur esse in sint proident deserunt ut eu nisi. Voluptate in ex consequat enim amet est quis labore irure dolor enim.
                    Pariatur irure  laborum amet. Labore laboris eiusmod sit laborum ex elit.
                </p>
                <div className={style.colorsProduct} >
                    {item.colors.map(item => (
                        <div className={style.color} onClick={() => nextImg(item.id)} style={{ background: item.code }}></div>
                    ))}
                </div>
                <div className={style.sizesPoduct}>
                    <p>34</p>
                    <p>28</p>
                    <p>19</p>
                </div>
            </div>

            <button className={style.buyProduct} onClick={openPaymantTool}>BUY NOW</button>
        </section>
    )
}

export default ProductItem
