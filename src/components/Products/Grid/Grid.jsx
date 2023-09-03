import React from 'react'
import { Fade } from 'react-awesome-reveal'
import GridItem from './GridItem'
const Grid = () => {
    return (
        <div className='grid grid-cols-3 gap-x-7 gap-y-6'>
            <Fade direction='left' triggerOnce={true}>
                <GridItem />
                <GridItem />
                <GridItem />
                <GridItem />
                <GridItem />
                <GridItem />
                <GridItem />
                <GridItem />
            </Fade>
        </div>
    )
}

export default Grid