import React from 'react'
import { footerData1, footerData2, footerData3, footerDataIcons } from '../../data/footerData'
import style from './footer.module.css'

function Footer() {
    return (
        <footer className={style.footer}>

            <div className={style.leftColumn}>
                <div className={style.menuLeftColumn}>
                    <h1>About Us</h1>
                    {footerData1.map(item => (
                        <p key={item.id}>{item.link}</p>
                    ))}
                </div>
                <div className={style.menuLeftColumn}>
                    <h1>Useful Links</h1>
                    {footerData2.map(item => (
                        <p key={item.id}>{item.link}</p>
                    ))}
                </div>
                <div className={style.menuLeftColumn}>
                    <h1>Products</h1>
                    {footerData3.map(item => (
                        <p key={item.id}>{item.link}</p>
                    ))}
                </div>
            </div>

            <div className={style.rightColumn}>
                <div className={style.contactUs}>
                    <h2 className={style.contactUsTitle}>Subscribe to our newsletter</h2>
                    <input
                        type="text"
                        placeholder="your@email.com"
                        className={style.fInput}
                    />
                    <button className={style.fBtn}>Join!</button>
                </div>
                <div className={style.followUs}>
                    <h2 className={style.contactUsTitle}>Follow Us</h2>
                    <div>
                        {footerDataIcons.map(item => (
                            <img
                                src={item.icon}
                                alt={item.id}
                                key={item.id}
                                width={20}
                                height={20}
                                className={style.icon}
                            />
                        ))}
                    </div>
                </div>
                <p className={style.copyRight}>Hossein Ghiasi. All rights reserved. 2022.</p>
            </div>
        </footer>
    )
}

export default Footer
