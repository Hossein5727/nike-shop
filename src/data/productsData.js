import air from '../assets/img/air.png'
import air2 from '../assets/img/air2.png'
import jordan from '../assets/img/jordan.png'
import jordan2 from '../assets/img/jordan2.png'
import blazer from '../assets/img/blazer.png'
import blazer2 from '../assets/img/blazer2.png'
import crater from '../assets/img/crater.png'
import crater2 from '../assets/img/crater2.png'
import hippie from '../assets/img/hippie.png'
import hippie2 from '../assets/img/hippie2.png'

export const products = [
    {
        id: 0,
        title: "Air Force",
        price: 119,
        colors: [
            {
                code: "black",
                img: air,
                id: 1
            },
            {
                code: "darkblue",
                img: air2,
                id: 2
            },
        ],
    },
    {
        id: 1,
        title: "Air Jordan",
        price: 149,
        colors: [
            {
                code: "lightgray",
                img: jordan,
                id: 1
            },
            {
                code: "green",
                img: jordan2,
                id: 2
            },
        ],
    },
    {
        id: 2,
        title: "Blazer",
        price: 109,
        colors: [
            {
                code: "lightgray",
                img: blazer,
                id: 1
            },
            {
                code: "green",
                img: blazer2,
                id: 2
            },
        ],
    },
    {
        id: 3,
        title: "Crater",
        price: 129,
        colors: [
            {
                code: "black",
                img: crater,
                id: 1
            },
            {
                code: "lightgray",
                img: crater2,
                id: 2
            },
        ],
    },
    {
        id: 4,
        title: "Hippie",
        price: 99,
        colors: [
            {
                code: "gray",
                img: hippie,
                id: 1
            },
            {
                code: "black",
                img: hippie2,
                id: 2
            },
        ],
    },
];
