import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import styles from './Slider.module.scss'
const Slider = () => {
    const [scroll, setScroll] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 20)
        })
    }, [])


    const items = [
        {
            id: 0,
            title: "Dmitry Moiseenko",
            about: "Lorem ipsum dolor sit amet.",
            img: "https://variety.com/wp-content/uploads/2022/09/Genshin-Impact-Anime-Series-Concept.png?w=681&h=383&crop=1"

        },
        {
            id: 1,
            title: "Dmitry Moiseenko1",
            about: "Lorem ipsum dolor sit amet1.",
            img: "https://variety.com/wp-content/uploads/2022/09/Genshin-Impact-Anime-Series-Concept.png?w=681&h=383&crop=1"

        },
        {
            id: 2,
            title: "Dmitry Moiseenko2",
            about: "Lorem ipsum dolor sit amet2.",
            img: "https://variety.com/wp-content/uploads/2022/09/Genshin-Impact-Anime-Series-Concept.png?w=681&h=383&crop=1"

        },
        {
            id: 3,
            title: "Dmitry Moiseenko3",
            about: "Lorem ipsum dolor sit amet3.",
            img: "https://variety.com/wp-content/uploads/2022/09/Genshin-Impact-Anime-Series-Concept.png?w=681&h=383&crop=1"

        },
    ]

    const next = () => {
        const isLatsIndex = currentIndex === items.length - 1
        const newIndex = isLatsIndex ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    const prev = () => {
        const isFirstIndex = currentIndex === 0
        const newIndex = isFirstIndex ? items.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }


    return (
        <div className={styles.slider}>
            <div className={styles.slider__container}>
                <header className={scroll ? styles.slider__header__scroll : styles.clicker__header}>
                    <div className={styles.slider__header__content}>
                        <Link className={styles.slider__header__content__link} href="/">ra1tsuya</Link>
                        <button className={styles.slider__button}>Resume</button>
                    </div>
                </header>
                <div className={styles.slider__content}>
                    <Image className={styles.slider__content__img} style={{ borderRadius: "20px" }} src={items[currentIndex].img} alt="test" width={300} height={200} />
                    <h3 className={styles.slider__content__title}>{items[currentIndex].title}</h3>
                    <p className={styles.slider__content__about}>{items[currentIndex].about}</p>
                    <div className={styles.slider__content__buttons}>
                        <button className={styles.slider__content__buttons__prev} onClick={prev}>prev</button>
                        <button className={styles.slider__content__buttons__next} onClick={next}>next</button>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default Slider