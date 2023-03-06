import { useState } from "react";

import './style.scss'

interface CarouselProps {
    pictures: string[]
}


export function Carousel({ pictures }: CarouselProps) {
    const [index, setIndex] = useState(0)
    const prev = () => {
        setIndex(_index => (_index - 1 + pictures.length) % pictures.length)
    }
    const next = () => {
        setIndex(_index => (_index + 1) % pictures.length)
    }

    return (
        <div className="carousel">
            {pictures.length > 1 ? (<>
                <div onClick={prev} className="carousel_btn_left"><img src="/src/assets/prev.svg" alt="" /></div>

                <div className="carousel_pagination">{index + 1}/{pictures.length}</div>
                <div onClick={next} className="carousel_btn_right"><img src="/src/assets/next.svg" alt="" /></div>
            </>
            ) : null}
            <img src={pictures[index]} alt="" className="carousel_img" />
        </div>
    );
}