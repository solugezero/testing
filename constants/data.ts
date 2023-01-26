interface Review {
    id: string,
    rate: number,
    value: string,
    owner: User,
}

interface User {
    id: string,
    img: string,
    name: string,
    reviews: Array<Review>,
    rate: number
}

interface Product {
    id: string,
    title: string,
    price: number,
    newprice: number,
    img: string,
    owner: User,
    description: string,
    reviews: Array<Review>,
    similar: Array<Product>
}

const products: Array<Product> = [
    {
        id: "ssfgjshgfsh",
        title: "🎁100 ГЕМОВ в Brawl Stars🎁",
        price: 150,
        newprice: 0,
        img: "asd",
        owner: {
            img: "asd",
            name: "Lisana",
            reviews: [],
            rate: 4.5,
            id: "lisanaasd"
        },
        description: "Внимание! Если вы брали данное количество гемов(500) у другого продавца или у меня вам придет меньше гемов! Возврата в таком случае нет. После оплаты просьба предоставить почту от вашего аккаунта и ждать ответа",
        reviews: [],
        similar: []
    },
    {
        id: "ssdfhhsdfhfh",
        title: "🎁200 ГЕМОВ в Brawl Stars🎁",
        price: 300,
        newprice: 0,
        img: "asd",
        owner: {
            img: "asd",
            name: "Lisana",
            reviews: [],
            rate: 4.5,
            id: "lisanaasd"
        },
        description: "Внимание! Если вы брали данное количество гемов(500) у другого продавца или у меня вам придет меньше гемов! Возврата в таком случае нет. После оплаты просьба предоставить почту от вашего аккаунта и ждать ответа",
        reviews: [],
        similar: []
    },
    {
        id: "sdsdfgdfgssfh",
        title: "🎁300 ГЕМОВ в Brawl Stars🎁",
        price: 500,
        newprice: 0,
        img: "asd",
        owner: {
            img: "asd",
            name: "Lisana",
            reviews: [],
            rate: 4.5,
            id: "lisanaasd"
        },
        description: "Внимание! Если вы брали данное количество гемов(500) у другого продавца или у меня вам придет меньше гемов! Возврата в таком случае нет. После оплаты просьба предоставить почту от вашего аккаунта и ждать ответа",
        reviews: [],
        similar: []
    },
    {
        id: "sdfffsdsfh",
        title: "🎁400 ГЕМОВ в Brawl Stars🎁",
        price: 800,
        newprice: 0,
        img: "asd",
        owner: {
            img: "asd",
            name: "Lisana",
            reviews: [],
            rate: 4.5,
            id: "lisanaasd"
        },
        description: "Внимание! Если вы брали данное количество гемов(500) у другого продавца или у меня вам придет меньше гемов! Возврата в таком случае нет. После оплаты просьба предоставить почту от вашего аккаунта и ждать ответа",
        reviews: [],
        similar: []
    },
    {
        id: "sdfbuidsfh",
        title: "🎁500 ГЕМОВ в Brawl Stars🎁",
        price: 1000,
        newprice: 800,
        img: "asd",
        owner: {
            img: "asd",
            name: "Lisana",
            reviews: [],
            rate: 4.5,
            id: "lisanaasd"
        },
        description: "Внимание! Если вы брали данное количество гемов(500) у другого продавца или у меня вам придет меньше гемов! Возврата в таком случае нет. После оплаты просьба предоставить почту от вашего аккаунта и ждать ответа",
        reviews: [],
        similar: []
    }
]