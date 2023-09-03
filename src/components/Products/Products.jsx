import React from 'react'
import Grid from './Grid/Grid'
import { Fade } from 'react-awesome-reveal'


const Products = () => {
    return (
        <section id='products' className="w-full max-w-[1140px] mx-auto pt-[5rem] flex flex-col gap-y-4 items-center">
            <Fade direction='down' triggerOnce={true}>
                <div className="">Living Interior</div>
                <h2 className="text-3xl"><strong>New Products</strong></h2>
            </Fade>
            <Grid />
        </section>
    )
}

export default Products