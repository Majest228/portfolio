import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import aboutimg from "../../../assets/about.jpg";
import Email from "../../ui/svg/email";
import Git from "../../ui/svg/git";
import Html from "../../ui/svg/html";
import Phone from "../../ui/svg/phone";
import User from "../../ui/svg/user";
import project from '../../../../public/project.jpg'
import styles from './Home.module.css'

const Home = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  const buttonHandler = (ref: any) => {
    ref.current.scrollIntoView();
  };

  const buttons = [
    {
      id: 0,
      name: "Skills"
    },
    {
      id: 1,
      name: "Experienes"
    }
  ]

  const [scroll, setScroll] = useState(false);
  const [currentButton, setCurrentButton] = useState(0)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 20)
    })
  }, [])

  // box-shadow: 0 10px 30px -10px var(--navy-shadow); 
  return (
    <div className="scroll-smooth" >
      <header className={scroll ? 'shadow-header h-50 backdrop-blur-md  fixed max-w-full w-full z-10 top-0 left-0' : 'fixed max-w-1656 w-full h-50 z-10 top-0'}>
        <div className={scroll ? "max-w-1656 m-0-auto w-full flex justify-between content-center items-center pt-20 pb-20 h-50" : 'flex justify-between content-center items-center pt-20 pb-20'}>
          <Link href='' className='z-0 font-normal text-fz-34 leading-lh-45  text-white '>ra1tsuya</Link>
          <nav className='pt-pt-7'>
            <ul className='flex'>
              <li className='pl-pl-16 pr-pr-16'>
                <button onClick={() => buttonHandler(ref1)} className={scroll ? "text-white leading-lh-32 text-fz-20 hover:text-cyan" : 'text-gray leading-lh-32 text-fz-20 hover:text-cyan'} >Home</button>
              </li>
              <li className='pl-pl-16 pr-pr-16'>
                <button onClick={() => buttonHandler(ref2)} className={scroll ? "text-white leading-lh-32 text-fz-20 hover:text-cyan" : 'text-gray leading-lh-32 text-fz-20 hover:text-cyan'}>About</button>
              </li>
              <li className='pl-pl-16 pr-pr-16'>
                <button onClick={() => buttonHandler(ref3)} className={scroll ? "text-white leading-lh-32 text-fz-20 hover:text-cyan" : 'text-gray leading-lh-32 text-fz-20 hover:text-cyan'} >Skills</button>
              </li>
              <li className='pl-pl-16 pr-pr-16'>
                <button onClick={() => buttonHandler(ref4)} className={scroll ? "text-white leading-lh-32 text-fz-20 hover:text-cyan" : 'text-gray leading-lh-32 text-fz-20 hover:text-cyan'} >Portfolio</button>
              </li>
              <li className='pl-pl-16 pr-pr-16'>
                <button className={scroll ? "text-white leading-lh-32 text-fz-20 hover:text-cyan" : 'text-gray leading-lh-32 text-fz-20 hover:text-cyan'} >Contacts</button>
              </li>
            </ul>
          </nav>
          <button className='text-white leading-lh-32 text-fz-20 bg-bg-cyan py-py-10 px-px-24 mt-3 rounded-lg '>Resume</button>
        </div>
      </header >
      <section className="flex justify-center items-center  flex-col min-h-100vh w-full " ref={ref1}>
        <h3 className="text-blue text-fz-56 leading-lh-74">Dmitry Moiseenko</h3>
        <p className="text-fz-44 leading-lh-58 text-white">
          Frontend developer
        </p>
        <p className="text-white text-fz-32 leading-lh-42 max-w-882 text-center mt-70">
          I do frontend and backend development. In my spare time, I do
          freelance work.
        </p>
        <button className="text-white leading-lh-32 text-fz-20 bg-bg-cyan py-py-10 px-px-24 mt-150 rounded-lg">
          Connect with me
        </button>
      </section>

      <section className="flex  flex-col text-fz min-h-100vh w-full " ref={ref2} >
        <p className="text-blue text-fz-44 text-center leading-lh-58">
          Who am I?
        </p>
        <h3 className="text-fz-56 leading-lh-74 text-center text-white pt-pt-40" >
          About me
        </h3>
        <div className="flex justify-between mt-40 items-center ">
          <div className="mt-89">
            <Image src={aboutimg} alt="aboutimg" />
          </div>
          <div className="max-w-778 mt-89 flex flex-col justify-between">
            <p className="text-white text-fz-26 text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the
            </p>
            <div className="mt-70 mb-70">
              <div className="flex justify-between">
                <div className="flex items-center max-w-144 w-full">
                  <User w={30} h={25} fill="white" />
                  <p className="ml-18 text-fz-26 leading-lh-42 text-white">Name</p>
                </div>
                <p className="text-fz-26 leading-lh-42 text-white max-w-346 w-full">raitsuya</p>
              </div>
              <div className="flex justify-between mt-40 ">
                <div className="flex items-center max-w-144 w-full">
                  <Phone w={30} h={25} fill="white" />
                  <p className="ml-18 text-fz-26 leading-lh-42 text-white">Phone</p>
                </div>
                <p className="text-fz-26 leading-lh-42 text-white max-w-346 w-full">+77784259976</p>
              </div>
              <div className="flex justify-between mt-40">
                <div className="flex items-center max-w-144 w-full ">
                  <Email w={30} h={25} fill="white" />
                  <p className="ml-18 text-fz-26 leading-lh-42 text-white">Email</p>
                </div>
                <p className="text-fz-26 leading-lh-42 text-white max-w-346 w-full">raitsuya@gmail.com</p>
              </div>
            </div>
            <div>
              <p className="text-fz-26 leading-lh-42 text-white">Links</p>
              <div className="flex mt-18 mb-40">
                <div >
                  <a href=""><Git /></a>
                </div>
                <div className="ml-40">
                  <a href=""><Git /></a>
                </div>
                <div className="ml-40">
                  <a href=""><Git /></a>
                </div>
                <div className="ml-40">
                  <a href=""><Git /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >

      <section className="flex justify-center items-center  flex-col min-h-100vh  w-full mt-246px" ref={ref3}>
        <p className="text-blue text-fz-44 text-center leading-lh-58">
          What are my skills?
        </p>
        <h3 className="text-fz-56 leading-lh-74 text-center text-white pt-pt-40" >
          Skills and Experience
        </h3>
        <div className="flex max-w-470 w-full justify-between mt-40">
          {buttons.map(button => <button id={String(button.id)} className={currentButton == button.id ? "text-white bg-bg-cyan text-fz-22 leading-lh-29 py-23 px-56 rounded-2xl" : "text-black bg-white text-fz-22 leading-lh-29 py-23 px-36 rounded-2xl "} onClick={(e) => setCurrentButton(e.target.id)}>{button.name}</button>)}

        </div>
        {currentButton == 0 ? <div className="mt-54">
          <div className="grid gap-24 grid-cols-5 grid-rows-2  max-w-1070 w-full ">
            <Html />
            <Html />
            <Html />
            <Html />
            <Html />
            <Html />
            <Html />
            <Html />
            <Html />
            <Html />
          </div>
          <div className="max-w-1070 w-full mt-50">
            <h3 className="text-fz-26 leading-lh-45 text-white mb-18">Front-end</h3>
            <div className="h-8 bg-black  before:content-[''] before:block before:max-w-1070 before:w-770 before:bg-cyan before:h-8"></div>
            <h3 className="text-fz-26 leading-lh-45 text-white mb-18 mt-18">Back-end</h3>
            <div className="h-8 bg-black  before:content-[''] before:block before:max-w-1070 before:w-770 before:bg-red before:h-8"></div>
          </div>
        </div> : (
          <div className="mt-40 max-w-812 w-full text-center">
            <div className="flex items-center justify-between mb-50">
              <p className="max-w-130 w-full text-fz-44  leading-lh-74 text-white">2023</p>
              <p className="max-w-346 w-full text-fz-26 leading-lh-45 text-white">Cheto bydet</p>
            </div>
            <div className="flex items-center justify-between mb-50">
              <p className="max-w-130 w-full text-fz-44  leading-lh-74 text-white">2022</p>
              <p className="max-w-346 w-full text-fz-26 leading-lh-45 text-white">Cheto bydet</p>
            </div>
            <div className="flex items-center justify-between mb-50">
              <p className="max-w-130 w-full text-fz-44  leading-lh-74 text-white">2021</p>
              <p className="max-w-346 w-full text-fz-26 leading-lh-45 text-white">Cheto bydet</p>
            </div>
            <div className="flex items-center justify-between mb-50">
              <p className="max-w-130 w-full text-fz-44 leading-lh-74 text-white">2020</p>
              <p className="max-w-346 w-full text-fz-26 leading-lh-45 text-white">Cheto bydet</p>
            </div>
            <div className="flex items-center justify-between ">
              <p className="max-w-130 w-full text-fz-44  leading-lh-74 text-white">2019</p>
              <p className="max-w-346 w-full text-fz-26 leading-lh-45 text-white">Cheto bydet</p>
            </div>
          </div>)}
      </section>

      <section className="flex  items-center  flex-col min-h-100vh w-full mt-246px" ref={ref4}>
        <p className="text-blue text-fz-44 text-center leading-lh-58">
          My Work
        </p>
        <h3 className="text-fz-56 leading-lh-74 text-center text-white pt-pt-40" >
          Awesome Projects
        </h3>
        <div className="flex justify-between flex-wrap  mt-40">
          <Link href='/' className="transform transition-all duration-500 ease-in-out  hover:scale-105 mb-40">
            <Image src={project} alt="test" />
          </Link>
          <Link href='/' className="transform transition-all duration-500 ease-in-out  hover:scale-105">
            <Image src={project} alt="test" />
          </Link>
          <Link href='/' className="transform transition-all duration-500 ease-in-out  hover:scale-105">
            <Image src={project} alt="test" />
          </Link>
          <Link href='/' className="transform transition-all duration-500 ease-in-out  hover:scale-105">
            <Image src={project} alt="test" />
          </Link>
          <Link href='/' className="transform transition-all duration-500 ease-in-out  hover:scale-105">
            <Image src={project} alt="test" />
          </Link>
          <Link href='/' className="transform transition-all duration-500 ease-in-out  hover:scale-105">
            <Image src={project} alt="test" />
          </Link>
        </div>
      </section >
      <button className="mt-40 text-white bg-bg-cyan text-fz-22 leading-lh-29 py-23 px-56 rounded-2xl flex m-0-auto">Show more</button>
    </div >
  );
};

export default Home;
