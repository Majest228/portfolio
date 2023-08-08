import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import aboutimg from '../../../assets/about.jpg'
import Email from '../../ui/svg/email'
import Git from '../../ui/svg/git'
import Html from '../../ui/svg/html'
import Phone from '../../ui/svg/phone'
import User from '../../ui/svg/user'
import project from '../../../../public/project.jpg'
import styles from './Home.module.scss'

export interface IButton {
	id: number
	name: string
}

const Home = () => {
	const ref1 = useRef(null)
	const ref2 = useRef(null)
	const ref3 = useRef(null)
	const ref4 = useRef(null)

	const buttonHandler = (ref: any) => {
		ref.current.scrollIntoView()
	}

	const buttons: IButton[] = [
		{
			id: 0,
			name: 'Skills',
		},
		{
			id: 1,
			name: 'Experienes',
		},
	]

	const [scroll, setScroll] = useState(false)
	const [currentButton, setCurrentButton] = useState(0)

	useEffect(() => {
		window.addEventListener('scroll', () => {
			setScroll(window.scrollY > 20)
		})
	}, [])

	return (
		<div className={styles.home}>
			<div className={styles.home__container}>
				<header
					className={scroll ? styles.home__header__scroll : styles.home__header}
				>
					<div className={styles.home__header__content}>
						<Link className={styles.home__header__content__link} href='/'>
							ra1tsuya
						</Link>
						<nav className={styles.home__navigation}>
							<ul className={styles.home__navigation__list}>
								<li className={styles.home__navigation__list__item}>
									<button
										onClick={() => buttonHandler(ref1)}
										className={styles.home__navigation__list__item__link}
									>
										Home
									</button>
								</li>
								<li className={styles.home__navigation__list__item}>
									<button
										onClick={() => buttonHandler(ref2)}
										className={styles.home__navigation__list__item__link}
									>
										About
									</button>
								</li>
								<li className={styles.home__navigation__list__item}>
									<button
										onClick={() => buttonHandler(ref3)}
										className={styles.home__navigation__list__item__link}
									>
										Skills
									</button>
								</li>
								<li className={styles.home__navigation__list__item}>
									<button
										onClick={() => buttonHandler(ref4)}
										className={styles.home__navigation__list__item__link}
									>
										Portfolio
									</button>
								</li>
								<li className={styles.home__navigation__list__item}>
									<button
										onClick={() => buttonHandler(ref1)}
										className={styles.home__navigation__list__item__link}
									>
										Contacts
									</button>
								</li>
							</ul>
						</nav>
						<button className={styles.home__button}>Resume</button>
						<div className={styles.home__burger}></div>
					</div>
				</header>

				<section className={styles.home__me} ref={ref1}>
					<h3 className={styles.home__me__title}>Dmitry Moiseenko</h3>
					<p className={styles.home__me__profession}>Frontend developer</p>
					<p className={styles.home__me__about}>
						I do frontend and backend development. In my spare time, I do
						freelance work.
					</p>
					<button className={styles.home__me__connect}>Connect with me</button>
				</section>
				<section className={styles.home__about} ref={ref2}>
					<p className={styles.home__about__question}>Who am I?</p>
					<h3 className={styles.home__about__title}>About me</h3>
					<div className={styles.home__about__content}>
						<div style={{ width: `628px`, height: `841px` }}>
							<Image
								width={628}
								height={841}
								sizes='100vw'
								style={{
									width: '100%',
									height: '100%',
									objectFit: 'cover',
								}}
								alt='image'
								src={aboutimg}
							/>
						</div>
						<div className={styles.home__about__content__desc}>
							<p className={styles.home__about__content__desc__text}>
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy
								text ever since the 1500s, when an unknown printer took a galley
								of type and scrambled it to make a type specimen book. It has
								survived not only five centuries, but also the{' '}
							</p>
							<div className={styles.home__about__content__desc__item}>
								<div className={styles.home__about__content__desc__item__left}>
									<User />
									<p>Name</p>
								</div>
								<p>raitsuya</p>
							</div>
							<div className={styles.home__about__content__desc__item}>
								<div className={styles.home__about__content__desc__item__left}>
									<Phone />
									<p>Phone</p>
								</div>
								<p>+77784259976</p>
							</div>
							<div className={styles.home__about__content__desc__item}>
								<div className={styles.home__about__content__desc__item__left}>
									<Email />
									<p>Email</p>
								</div>
								<p>raitsuya@gmail.com</p>
							</div>
							<div className={styles.home__about__content__desc__links}>
								<h3>Links</h3>
								<div
									className={styles.home__about__content__desc__links__items}
								>
									<Link href='/'>
										<Git />
									</Link>
									<Link href='/'>
										<Git />
									</Link>
									<Link href='/'>
										<Git />
									</Link>
									<Link href='/'>
										<Git />
									</Link>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className={styles.home__skills} ref={ref3}>
					<p className={styles.home__skills__question}>What are my skills?</p>
					<h3 className={styles.home__skills__title}>Skills and Experience</h3>
					<div className={styles.home__skills__buttons}>
						{buttons.map(button => (
							//@ts-ignore
							<button
								//@ts-ignore
								id={Number(button.id)}
								className={
									currentButton == button.id
										? 'text-white bg-bg-cyan text-fz-22 leading-lh-29 py-23 px-56 rounded-2xl'
										: 'text-black bg-white text-fz-22 leading-lh-29 py-23 px-36 rounded-2xl '
								}
								onClick={e => setCurrentButton(e.target.id)}
							>
								{button.name}
							</button>
						))}
					</div>
					{currentButton == 0 ? (
						<div className='mt-54'>
							<div className={styles.home__skills__items}>
								<div className={styles.home__skills__items__item}>
									<Html />
								</div>
								<div className={styles.home__skills__items__item}>
									<Html />
								</div>
								<div className={styles.home__skills__items__item}>
									<Html />
								</div>
								<div className={styles.home__skills__items__item}>
									<Html />
								</div>
								<div className={styles.home__skills__items__item}>
									<Html />
								</div>
								<div className={styles.home__skills__items__item}>
									<Html />
								</div>
								<div className={styles.home__skills__items__item}>
									<Html />
								</div>
								<div className={styles.home__skills__items__item}>
									<Html />
								</div>
								<div className={styles.home__skills__items__item}>
									<Html />
								</div>
								<div className={styles.home__skills__items__item}>
									<Html />
								</div>
							</div>
						</div>
					) : (
						<div className={styles.home__experience}>
							<div className={styles.home__experience__items}>
								<p className={styles.home__experience__items__date}>2023</p>
								<p className={styles.home__experience__items__text}>
									Cheto bydet
								</p>
							</div>
							<div className={styles.home__experience__items}>
								<p className={styles.home__experience__items__date}>2022</p>
								<p className={styles.home__experience__items__text}>
									Cheto bydet
								</p>
							</div>
							<div className={styles.home__experience__items}>
								<p className={styles.home__experience__items__date}>2021</p>
								<p className={styles.home__experience__items__text}>
									Cheto bydet
								</p>
							</div>
							<div className={styles.home__experience__items}>
								<p className={styles.home__experience__items__date}>2020</p>
								<p className={styles.home__experience__items__text}>
									Cheto bydet
								</p>
							</div>
							<div className={styles.home__experience__items}>
								<p className={styles.home__experience__items__date}>2019</p>
								<p className={styles.home__experience__items__text}>
									Cheto bydet
								</p>
							</div>
						</div>
					)}
				</section>
				<section className={styles.home__works} ref={ref4}>
					<p className={styles.home__works__question}>What are my skills?</p>
					<h3 className={styles.home__works__title}>Skills and Experience</h3>
					<div className={styles.home__works__items}>
						<Link
							href='/'
							className='transform transition-all duration-500 ease-in-out  hover:scale-105 mb-40'
						>
							<Image src={project} alt='test' />
						</Link>
						<Link
							href='/'
							className='transform transition-all duration-500 ease-in-out  hover:scale-105'
						>
							<Image src={project} alt='test' />
						</Link>
						<Link
							href='/'
							className='transform transition-all duration-500 ease-in-out  hover:scale-105'
						>
							<Image src={project} alt='test' />
						</Link>
						<Link
							href='/'
							className='transform transition-all duration-500 ease-in-out  hover:scale-105'
						>
							<Image src={project} alt='test' />
						</Link>
						<Link
							href='/'
							className='transform transition-all duration-500 ease-in-out  hover:scale-105'
						>
							<Image src={project} alt='test' />
						</Link>
						<Link
							href='/'
							className='transform transition-all duration-500 ease-in-out  hover:scale-105'
						>
							<Image src={project} alt='test' />
						</Link>
					</div>
					<Link href='/projects' className={styles.home__works__button}>
						Show more
					</Link>
				</section>
			</div>
		</div>

		//     <section className="flex justify-center items-center  flex-col min-h-100vh  w-full mt-246px" ref={ref3}>
		//       <p className="text-blue text-fz-44 text-center leading-lh-58">
		//         What are my skills?
		//       </p>
		//       <h3 className="text-fz-56 leading-lh-74 text-center text-white pt-pt-40" >
		//         Skills and Experience
		//       </h3>
		// <div className="flex max-w-470 w-full justify-between mt-40">

		//   {buttons.map(button =>
		//     //@ts-ignore
		//     <button id={Number(button.id)} className={currentButton == button.id ? "text-white bg-bg-cyan text-fz-22 leading-lh-29 py-23 px-56 rounded-2xl" : "text-black bg-white text-fz-22 leading-lh-29 py-23 px-36 rounded-2xl "} onClick={(e) => setCurrentButton(e.target.id)}>{button.name}</button>)}

		// </div>
		// {currentButton == 0 ? <div className="mt-54">
		// <div className="grid gap-24 grid-cols-5 grid-rows-2  max-w-1070 w-full ">
		//     <Html />
		//     <Html />
		//     <Html />
		//     <Html />
		//     <Html />
		//     <Html />
		//     <Html />
		//     <Html />
		//     <Html />
		//     <Html />
		//   </div>
		//         <div className="max-w-1070 w-full mt-50">
		//           <h3 className="text-fz-26 leading-lh-45 text-white mb-18">Front-end</h3>
		//           <div className="h-8 bg-black  before:content-[''] before:block before:max-w-1070 before:w-770 before:bg-cyan before:h-8"></div>
		//           <h3 className="text-fz-26 leading-lh-45 text-white mb-18 mt-18">Back-end</h3>
		//           <div className="h-8 bg-black  before:content-[''] before:block before:max-w-1070 before:w-770 before:bg-red before:h-8"></div>
		//         </div>
		//       </div> : (
		// <div className="mt-40 max-w-812 w-full text-center">
		//   <div className="flex items-center justify-between mb-50">
		//     <p className="max-w-130 w-full text-fz-44  leading-lh-74 text-white">2023</p>
		//     <p className="max-w-346 w-full text-fz-26 leading-lh-45 text-white">Cheto bydet</p>
		//   </div>
		//   <div className="flex items-center justify-between mb-50">
		//     <p className="max-w-130 w-full text-fz-44  leading-lh-74 text-white">2022</p>
		//     <p className="max-w-346 w-full text-fz-26 leading-lh-45 text-white">Cheto bydet</p>
		//   </div>
		//   <div className="flex items-center justify-between mb-50">
		//     <p className="max-w-130 w-full text-fz-44  leading-lh-74 text-white">2021</p>
		//     <p className="max-w-346 w-full text-fz-26 leading-lh-45 text-white">Cheto bydet</p>
		//   </div>
		//   <div className="flex items-center justify-between mb-50">
		//     <p className="max-w-130 w-full text-fz-44 leading-lh-74 text-white">2020</p>
		//     <p className="max-w-346 w-full text-fz-26 leading-lh-45 text-white">Cheto bydet</p>
		//   </div>
		//   <div className="flex items-center justify-between ">
		//     <p className="max-w-130 w-full text-fz-44  leading-lh-74 text-white">2019</p>
		//     <p className="max-w-346 w-full text-fz-26 leading-lh-45 text-white">Cheto bydet</p>
		//   </div>
		// </div>)}
		//     </section>

		//     <section className="flex  items-center  flex-col min-h-100vh w-full mt-246px" ref={ref4}>
		//       <p className="text-blue text-fz-44 text-center leading-lh-58">
		//         My Work
		//       </p>
		//       <h3 className="text-fz-56 leading-lh-74 text-center text-white pt-pt-40" >
		//         Awesome Projects
		//       </h3>
		// <div className="flex justify-between flex-wrap  mt-40">
		//   <Link href='/' className="transform transition-all duration-500 ease-in-out  hover:scale-105 mb-40">
		//     <Image src={project} alt="test" />
		//   </Link>
		//   <Link href='/' className="transform transition-all duration-500 ease-in-out  hover:scale-105">
		//     <Image src={project} alt="test" />
		//   </Link>
		//   <Link href='/' className="transform transition-all duration-500 ease-in-out  hover:scale-105">
		//     <Image src={project} alt="test" />
		//   </Link>
		//   <Link href='/' className="transform transition-all duration-500 ease-in-out  hover:scale-105">
		//     <Image src={project} alt="test" />
		//   </Link>
		//   <Link href='/' className="transform transition-all duration-500 ease-in-out  hover:scale-105">
		//     <Image src={project} alt="test" />
		//   </Link>
		//   <Link href='/' className="transform transition-all duration-500 ease-in-out  hover:scale-105">
		//     <Image src={project} alt="test" />
		//   </Link>
		// </div>
		//       <Link href="/projects" className="bg-bg-cyan mt-40 text-white py-23 px-56 text-fz-22 leading-lh-29 rounded-2xl " >Show more</Link>
		//     </section >

		//   </div >
		// </div>
	)

	// mt-40 text-white bg-bg-cyan text-fz-22 leading-lh-29 py-23 px-56 rounded-2xl  m-0-auto max-w-331 text-center w-full
}

export default Home
