import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import styles from './Clicker.module.scss'

const Clicker = () => {
    const [count, setCount] = useState(0)
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 20)
        })
    }, [])

    return (
        <div className={styles.clicker}>
            <div className={styles.clicker__container}>
                <header className={scroll ? styles.clicker__header__scroll : styles.clicker__header}>
                    <div className={styles.clicker__header__content}>
                        <Link className={styles.clicker__header__content__link} href="/">ra1tsuya</Link>
                        <button className={styles.clicker__button}>Resume</button>
                    </div>
                </header>
                <div className={styles.clicker__content}>
                    <h3 className={styles.clicker__content__title}>Clicker - {count}</h3>
                    <div className={styles.clicker__content__buttons}>
                        <button className={styles.clicker__content__buttons__inc} onClick={() => setCount(count => count + 1)}>Increment</button>
                        <button className={styles.clicker__content__buttons__dec} onClick={() => setCount(count => count - 1)}>Decrement</button>
                    </div>
                    <button className={styles.clicker__content__reset} onClick={() => setCount(0)}>Reset</button>

                </div>
            </div>
        </div >

    )
}

export default Clicker