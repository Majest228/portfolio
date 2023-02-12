
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import styles from './Calculator.module.scss'

const Calculator = () => {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 20)
        })
    }, [])

    const [result, setResult] = useState("")

    const [calc, setCalc] = useState("")

    const getValue = (value: any) => {
        setCalc(calc.concat(value))
    }
    console.log(calc)
    const getResult = () => {
        setResult(eval(String(calc)))
    }

    const clearValue = () => {
        setCalc("")
        setResult("")
    }

    const createNumbers = () => {
        let numbers = [];

        for (let i = 1; i < 10; i++) { numbers.push(<button onClick={() => getValue(i.toString())} key={i}>{i.toString()}</button>) }
        return numbers
    }
    return (
        <div className={styles.calculator}>
            <div className={styles.calculator__container}>
                <header className={scroll ? styles.calculator__header__scroll : styles.clicker__header}>
                    <div className={styles.calculator__header__content}>
                        <Link className={styles.calculator__header__content__link} href="/">ra1tsuya</Link>
                        <button className={styles.calculator__button}>Resume</button>
                    </div>
                </header>
                <div className={styles.calculator__content}>
                    <div className={styles.calculator__content__display}>
                        {result ? <span>({result})</span> : ""} {calc || 0}
                    </div>
                    <div className={styles.calculator__content__buttons}>
                        <div className={styles.calculator__content__operators}>
                            <button onClick={() => getValue("/")}>/</button>
                            <button onClick={() => getValue("*")}>*</button>
                            <button onClick={() => getValue("+")}>+</button>
                            <button onClick={() => getValue("-")}>-</button>
                            <button onClick={() => clearValue()}>DEL</button>
                        </div>
                        <div className={styles.calculator__content__digits}>
                            {createNumbers()}
                            <button onClick={() => getValue("0")}>0</button>
                            <button onClick={() => getValue(".")}>.</button>
                            <button onClick={() => getResult()}>=</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Calculator

