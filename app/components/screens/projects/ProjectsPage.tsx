import Image from 'next/image';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import project from '../../../../public/project.jpg'
import styles from './ProjectsPage.module.scss'

const ProjectsPage = () => {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 20)
        })
    }, [])


    return (
        <div className={styles.projects}>
            <div className={styles.projects__container}>
                <header className={scroll ? styles.projects__header__scroll : styles.home__header}>
                    <div className={styles.projects__header__content}>
                        <Link className={styles.projects__header__content__link} href="/">ra1tsuya</Link>
                        <button className={styles.projects__button}>Resume</button>
                    </div>
                </header>
                <section className={styles.projects__content}>
                    <Link className={styles.projects__content__item} href='/projects/clicker' style={{ background: "#3EA2DB" }}>
                        <p>Clicker</p>
                    </Link>
                    <Link className={styles.projects__content__item} href='/projects/slider' style={{ background: "#3EA2DB" }}>
                        <p>Slider</p>
                    </Link>
                    <Link className={styles.projects__content__item} href='/projects/calculator' style={{ background: "#3EA2DB" }}>
                        <p>Calculator</p>
                    </Link>
                    <Link className={styles.projects__content__item} href='/projects/1' style={{ background: "#3EA2DB" }}>
                        <p>Clicker</p>
                    </Link>
                    <Link className={styles.projects__content__item} href='/projects/1' style={{ background: "#3EA2DB" }}>
                        <p>Clicker</p>
                    </Link>
                    <Link className={styles.projects__content__item} href='/projects/1' style={{ background: "#3EA2DB" }}>
                        <p>Clicker</p>
                    </Link>
                    <Link className={styles.projects__content__item} href='/projects/1' style={{ background: "#3EA2DB" }}>
                        <p>Clicker</p>
                    </Link>
                    <Link className={styles.projects__content__item} href='/projects/1' style={{ background: "#3EA2DB" }}>
                        <p>Clicker</p>
                    </Link>
                    <Link className={styles.projects__content__item} href='/projects/1' style={{ background: "#3EA2DB" }}>
                        <p>Clicker</p>
                    </Link>
                </section>
            </div>
        </div>
    )
}

export default ProjectsPage