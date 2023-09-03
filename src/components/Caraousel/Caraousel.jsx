import React, { useState } from 'react'
import CarouselItem from './CarouselItem'
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"

const Caraousel = () => {
    const [selected, setSelected] = useState(0)
    const next = () => {
        if (selected < items.length - 1) {
            setSelected(selected + 1)
        } else {
            setSelected(0)
        }
    }
    const prev = () => {
        if (selected > 0) {
            setSelected(selected - 1)
        } else {
            setSelected(items.length - 1)
        }
    }
    const items = [
        {
            title: "Furniture Design",
            subtitle1: "Orland",
            subtitle2: "armchair",
        },
        {
            title: "Decoration Design",
            subtitle1: "Wooden",
            subtitle2: "lithology"
        },
        {
            title: "Tabletop Design",
            subtitle1: "Rockland",
            subtitle2: "ceramic"
        }
    ]
    return (
        <div style={{ width: "100%" }} className='w-full flex px-4'>
            <button onClick={prev}><BsArrowLeft size={40} /></button>
            <CarouselItem item={items[selected]} selected={selected} />
            <button onClick={next}><BsArrowRight size={40} /></button>
        </div>
    )
}

export default Caraousel