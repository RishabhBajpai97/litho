import React from 'react'
import Categories from '../components/Categories/Categories'
import Hero from "../components/Hero/Hero"
import Divider from '../components/Divider/Divider'
import Products from '../components/Products/Products'
const Home = () => {
    return (
        <>
            <Hero />
            <Categories />
            <Divider />
            <Products />
        </>
    )
}

export default Home