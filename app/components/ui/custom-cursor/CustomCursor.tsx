import React, { useEffect, useRef, useState } from 'react'
import styles from './CustomCursor.module.scss'
const CustomCursor = () => {
	const cursorRef = useRef<any>(null)
	const auraRef = useRef<any>(null)
	const delay = 18
	const cursorVisible = useRef<any>(true)
	const cursorEnlarged = useRef<any>(false)

	const endX = useRef<any>(
		typeof window !== 'undefined' ? window?.innerWidth / 2 : null
	)
	const endY = useRef<any>(
		typeof window !== 'undefined' ? window?.innerHeight / 2 : null
	)
	const _x = useRef<any>(0)
	const _y = useRef<any>(0)

	const requestRef = useRef<any>(null)

	useEffect(() => {
		document.addEventListener('mousedown', mouseOverEvent)
		document.addEventListener('mouseup', mouseOutEvent)
		document.addEventListener('mouseenter', mouseEnterEvent)
		document.addEventListener('mouseleave', mouseLeaveEvent)
		document.addEventListener('mousemove', mouseMoveEvent)

		animateDotOutline()

		return () => {
			document.removeEventListener('mousedown', mouseOverEvent)
			document.removeEventListener('mouseup', mouseOutEvent)
			document.removeEventListener('mouseenter', mouseEnterEvent)
			document.removeEventListener('mouseleave', mouseLeaveEvent)
			document.removeEventListener('mousemove', mouseMoveEvent)

			cancelAnimationFrame(requestRef.current)
		}
	}, [])

	const toggleCursorVisibility = () => {
		if (cursorVisible.current) {
			cursorRef.current.style.opacity = 1
			auraRef.current.style.opacity = 1
		} else {
			cursorRef.current.style.opacity = 0
			auraRef.current.style.opacity = 0
		}
	}

	const toggleCursorSize = () => {
		if (cursorEnlarged.current) {
			cursorRef.current.style.transform = `translate(-50%, -50%) scale(0.75)`
			auraRef.current.style.transform = `translate(-50%, -50%) scale(1.5)`
		} else {
			cursorRef.current.style.transform = `translate(-50%, -50%) scale(1)`
			auraRef.current.style.transform = `translate(-50%, -50%) scale(1)`
		}
	}

	const mouseOverEvent = () => {
		cursorEnlarged.current = true
		toggleCursorSize()
	}

	const mouseOutEvent = () => {
		cursorEnlarged.current = false
		toggleCursorSize()
	}

	const mouseEnterEvent = () => {
		cursorVisible.current = true
		toggleCursorVisibility()
	}

	const mouseLeaveEvent = () => {
		cursorVisible.current = false
		toggleCursorVisibility()
	}
	const mouseMoveEvent = (e: any) => {
		cursorVisible.current = true
		toggleCursorVisibility()

		endX.current = e.pageX
		endY.current = e.pageY

		cursorRef.current.style.top = endY.current + 'px'
		cursorRef.current.style.left = endX.current + 'px'
	}

	const animateDotOutline = () => {
		_x.current += (endX.current - _x.current) / delay
		_y.current += (endY.current - _y.current) / delay

		auraRef.current.style.top = _y.current + 'px'
		auraRef.current.style.left = _x.current + 'px'

		requestRef.current = requestAnimationFrame(animateDotOutline)
	}

	// useEffect(() => {
	// 	document.addEventListener('mousemove', e => {
	// 		const { clientX, clientY } = e
	// 		const mouseX = clientX - cursorRef?.current?.clientWidth / 2
	// 		const mouseY = clientY - cursorRef?.current?.clientHeight / 2
	// 		cursorRef.current.style.left = `${clientX}px`
	// 		cursorRef.current.style.top = `${clientY}px`
	// 		auraRef.current.style.left = `${clientX}px`
	// 		auraRef.current.style.top = `${clientY}px`
	// 		auraRef.current.animate(
	// 			{
	// 				left: `${clientX}px`,
	// 				top: `${clientY}px`,
	// 			},
	// 			{ duration: 500, fill: 'forwards' }
	// 		)
	// 	})
	// }, [])

	return (
		<>
			<div className={styles.cursor} ref={cursorRef}></div>
			<div className={styles.aura} ref={auraRef}></div>
		</>
	)
}

export default CustomCursor
