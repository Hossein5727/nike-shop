import React, { useRef } from 'react'
import logo from '../../assets/img/sneakers.png'
import search from '../../assets/img/search.png'
import style from './header.module.css'
import { linkImageData } from '../../data/linkImageData'

function Header({ slide }) {


    const moveSlide = (id) => {

        console.log(id);
        slide.current.style.transform = `translateX(${-100 * id}vw)`
    }

    return (
        <nav>
            <div className={style.columnTop}>
                <div className={style.logo}>
                    <img
                        src={logo}
                        alt='logo'
                    />
                </div>
                <div className={style.searchBar}>
                    <input
                        type='text'
                        placeholder='Search...'
                    />
                    <div className={style.searchLogo}>
                        <img
                            src={search}
                            alt='search'
                            width="20"
                            height="20"
                        />
                    </div>
                </div>
                <h1 className={style.headerText}>Limited Offer!</h1>
            </div>

            <div className={style.columnBottom}>
                {linkImageData.map(item => (<h1 key={item.id} onClick={() => moveSlide(item.id)}>{item.txt}</h1>))}
            </div>
        </nav>
    )
}

export default Header
