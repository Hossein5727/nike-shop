import React from 'react'
import { paymantData, paymantData2 } from '../../data/paymantData'
import img1 from '../../assets/img/visa.png'
import img2 from '../../assets/img/master.png'
import style from './paymant.module.css'

function Paymant({ closePaymantTool }) {
    return (
        <section className={style.paymant} onClick={closePaymantTool}>
            <div className={style.paymantContainer} onClick={(e) => e.stopPropagation()}>
                <h1 className={style.title}>Personal Information</h1>
                <div className={style.form}>
                    {paymantData.map(item => (
                        <div key={item.id} className={style.formData}>
                            <label className={style.label}>{item.label}</label>
                            <input
                                type="text"
                                placeholder={item.placeHolder}
                                className={style.input}
                            />
                        </div>
                    ))}
                </div>

                <div className={style.cardInformation}>
                    <h1>card information</h1>
                    <div className={style.logos}>
                        <img
                            src={img1}
                            alt={'visa'}
                            width='50'
                            height='50'
                        />
                        <img
                            src={img2}
                            alt={'visa'}
                            width='50'
                            height='50'
                        />
                    </div>
                </div>

                <div className={style.formPaymant}>
                    <input
                        placeholder='Card Number'
                        className={style.input}
                        type="password"
                    />
                    <div className={style.formDataPaymant}>
                        {paymantData2.map(item => (
                            <input
                                key={item.id}
                                type="text"
                                placeholder={item.placeHolder}
                                className={`${style.input} ${style.small}`}
                            />
                        ))}
                    </div>
                </div>

                <button  className={style.btnPaymant} onClick={closePaymantTool}>Paymant</button>

                <button className={style.btnClose} onClick={closePaymantTool}>X</button>
            </div>
        </section>
    )
}

export default Paymant
