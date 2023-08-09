import React, { useEffect, useRef, useState } from 'react'
import styles from './CustomCursor.module.scss'
const CustomCursor = () => {
	const cursorRef = useRef<any>(null)
	const auraRef = useRef<any>(null)
	const [coord, setCoord] = useState({
		mouseX: 0,
		mouseY: 0,
		posX: 0,
	})
	useEffect(() => {
		document.addEventListener('mousemove', e => {
			const { clientX, clientY } = e
			const mouseX = clientX - cursorRef?.current?.clientWidth / 2
			const mouseY = clientY - cursorRef?.current?.clientHeight / 2
			// cursorRef.current.style.left = `${mouseX}px`
			// cursorRef.current.style.top = `${mouseY}px`
			// auraRef.current.style.left = `${mouseX}px`
			// auraRef.current.style.top = `${mouseY}px`
			cursorRef.current.style.left = `${clientX}px`
			cursorRef.current.style.top = `${clientY}px`
			auraRef.current.style.left = `${clientX}px`
			auraRef.current.style.top = `${clientY}px`
			auraRef.current.animate(
				{
					left: `${mouseX}px`,
					top: `${mouseY}px`,
				},
				{ duration: 500, fill: 'forwards' }
			)
		})
	}, [])

	return (
		<>
			<div className={styles.cursor} ref={cursorRef}></div>
			<div className={styles.aura} ref={auraRef}></div>
		</>
	)
}

export default CustomCursor
