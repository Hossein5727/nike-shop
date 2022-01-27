import React, { useEffect, useState } from 'react'
import { products } from '../../data/productsData'
import ProductItem from './ProductItem'
import style from './product.module.css'
import { UseLengthSlide } from '../../provider/LengthSlide'

function Product() {

    const lengthSlide = UseLengthSlide()

    return (
        <section className={style.product}>
            {products.map(item => (
                <>
                    {item.id === lengthSlide && (
                        <ProductItem
                            item={item}
                            key={item.id}
                        />
                    )}
                </>
            ))}
        </section>
    )
}

export default Product
