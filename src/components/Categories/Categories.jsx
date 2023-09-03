import React from 'react'
import styles from "./Categories.module.css"
import Chair from "../../assets/chair.png"

const Categories = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item1}>
        <div className={styles.image}><img src={Chair}></img></div>
        <div className={styles.button}>More</div>
        <div className={styles.content}>
          <div className='text-orange-600'>
            Innovative
          </div>
          <div className='text-2xl'>Morden <br /><span>Chair</span></div>
        </div>
      </div>

      <div className={styles.item2}>
        <div className={styles.image}><img src={Chair}></img></div>
        <div className={styles.button}>More</div>
        <div className={styles.content}>
          <div className='text-orange-600'>
            Trending
          </div>
          <div className='text-2xl'>Classic <br /> <span>Sofaset</span></div>
        </div>
      </div>

      <div className={styles.item3}>
        <div className={styles.image}><img src={Chair}></img></div>
        <div className={styles.button}>More</div>
        <div className={styles.button}></div>
        <div className={styles.content}>
          <div className='text-orange-600'>
            Designer
          </div>
          <div className='text-2xl'>Wooden <br /> <span>Stools</span></div>
        </div>
      </div>

    </div>
  )
}

export default Categories