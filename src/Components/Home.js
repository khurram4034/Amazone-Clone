import React from 'react';
import '../Components/Home.css'
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className='home__container'>
                <img
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt=""
                />

                <div className="home__row">

                    <Product
                        id="129"
                        title="COMFEE' Portable Washing Machine, 0.9 cu.ft Compact Washer With LED Display, 5 Wash Cycles, 2 Built-in Rollers, Space Saving Full-Automatic Washer, Ideal Laundry for RV, Dorm, Apartment, Magnetic Gray"
                        price={219.99}
                        image= "https://m.media-amazon.com/images/I/610eFWo8u-L._AC_UY218_.jpg"
                        rating={4}
                    />
                    <Product
                        id="3542"
                        title="AmazonBasics 8 Pack AA High-Performance Alkaline Batteries, 10-Year Shelf Life, Easy to Open Value Pack"
                        price={99.89}
                        image="https://m.media-amazon.com/images/I/71FJJEM2VgL._AC_UL320_.jpg"
                        rating={4}
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="130"
                        title="The Lean Startup Constant Innovation Creates"
                        price={78.98}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/71JHDQfKgUL._AC_UL320_.jpg"
                    />

                    <Product
                        id="194"
                        title="Innovation Creates"
                        price={45.98}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/715qOOqdKNL._AC_UL320_.jpg"
                    />

                    <Product
                        id="185"
                        title="How Constant Innovation Creates"
                        price={110.45}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/71ptfznkI4L._AC_UL320_.jpg"
                    />


                </div>

                <div className="home__row">

                    <Product
                        id="16854"
                        title="Acer Aspire 5 Slim Laptop, 15.6 inches Full HD Backlit Keyboard, Windows 10 in S Mode, A515-43-R19L, Silver"
                        price={125.99}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/41D5C8Se9dL._AC_SY200_.jpg"
                    />

                </div>
            </div>
        </div>
    )
}

export default Home
