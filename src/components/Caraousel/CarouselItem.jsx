import React, { useEffect } from 'react'
import styles from "./CarouselItem.module.css"
import Chair from "../../assets/chair.png"
import blob from "../../assets/blobanimation.svg"
import { reanimate } from "./reanimation"
const CarouselItem = ({ item, selected }) => {
    useEffect(() => {
        reanimate()

    }, [selected])
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div id='title'>{item["title"]}</div>
                <div id='block1' className={styles.block1}></div>
                <div className='flex'>
                    <div className='text-2xl relative font-semibold'>{item["subtitle1"]} <br />{item["subtitle2"]}</div>
                    <div id='block2' className={styles.block2}></div>
                </div>
                <button id='discover' className={styles.discover}>Discover</button>
            </div>


            {/* Image section */}
            <div id='image' className={styles.image}>
                <div className={styles.blob}>
                    <img src={blob}></img>
                </div>
                {/* Price Circle */}
                <div>
                    <div className={styles.price}>
                        <div id='priceText' className={styles.priceText}>Only</div>
                        <div id='priceNumber' className={styles.priceNumber}>$99</div>
                    </div>
                </div>
                <img src={Chair}></img>
            </div>
        </div>
    )
}

export default CarouselItem