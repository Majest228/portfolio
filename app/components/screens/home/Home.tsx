import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import aboutimg from "../../../assets/about.jpg";
import Email from "../../ui/svg/email";
import Git from "../../ui/svg/git";
import Html from "../../ui/svg/html";
import Phone from "../../ui/svg/phone";
import User from "../../ui/svg/user";
import project from "../../../../public/project.jpg";
import styles from "./Home.module.scss";
import project1 from "../../../assets/1.jpg";
import project2 from "../../../assets/2.jpg";
import project3 from "../../../assets/3.jpg";
import project4 from "../../../assets/4.jpg";
import project5 from "../../../assets/5.jpg";
import project6 from "../../../assets/6.jpg";
import ReactLogo from "../../../assets/react_logo.png";
import ReduxLogo from "../../../assets/redux.png";
import ScssLogo from "../../../assets/scss.png";
import NextLogo from "../../../assets/next-js-logo-7929BCD36F-seeklogo.com.png";
import QueryLogo from "../../../assets/react-query-logo-1340EA4CE9-seeklogo.com.png";
import NestLogo from "../../../assets/nest.png";
import ZustandLogo from "../../../assets/zustand.png";
import PGandLogo from "../../../assets/postgresql-logo.png";
import PrismaLogo from "../../../assets/prisma.webp";
import { projects } from "@/app/consts/projects";

export interface IButton {
  id: number;
  name: string;
}

const Home = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  const buttonHandler = (ref: any) => {
    ref.current.scrollIntoView();
  };

  const buttons: IButton[] = [
    {
      id: 0,
      name: "Skills",
    },
    {
      id: 1,
      name: "Experienes",
    },
  ];

  const [scroll, setScroll] = useState(false);
  const [currentButton, setCurrentButton] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 20);
    });
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.home}>
      <div className={styles.home__container}>
        <header
          className={scroll ? styles.home__header__scroll : styles.home__header}
        >
          {isOpen ? (
            <div className={styles.home__header__menu}>
              <div className={styles.home__header__menu__content}>123</div>
            </div>
          ) : (
            ""
          )}
          <div className={styles.home__header__content}>
            <Link className={styles.home__header__content__link} href="/">
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
            <div
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              className={styles.home__burger}
            ></div>
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
            <div
              className={styles.home__about__content__img__628}
              style={{ width: `628px`, height: `841px` }}
            >
              <Image
                width={628}
                height={841}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                alt="image"
                src={aboutimg}
              />
            </div>
            <div
              className={styles.home__about__content__img__458}
              style={{ width: `458px`, height: `600px` }}
            >
              <Image
                width={458}
                height={600}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                alt="image"
                src={aboutimg}
              />
            </div>
            <div
              className={styles.home__about__content__img__320}
              style={{ width: `320px`, height: `400px` }}
            >
              <Image
                width={320}
                height={400}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                alt="image"
                src={aboutimg}
              />
            </div>
            <div className={styles.home__about__content__desc}>
              <p className={styles.home__about__content__desc__text}>
                I have been involved in web development for the past 2 years,
                focusing primarily on frontend technologies. I am well-versed in
                frontend development, particularly in using tools such as React,
                Next.js, Sass, and Redux. Additionally, I have a strong
                understanding of backend technologies, including PostgreSQL,
                Nest.js, and Node.js. My experience in both frontend and backend
                development allows me to create comprehensive and dynamic web
                applications.
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
                  <Link href="/">
                    <Git />
                  </Link>
                  <Link href="/">
                    <Git />
                  </Link>
                  <Link href="/">
                    <Git />
                  </Link>
                  <Link href="/">
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
            {buttons.map((button) => (
              <button
                //@ts-ignore
                id={Number(button.id)}
                className={
                  currentButton == button.id
                    ? "text-white bg-bg-cyan text-fz-22 leading-lh-29 py-23 px-56 rounded-2xl"
                    : "text-black bg-white text-fz-22 leading-lh-29 py-23 px-36 rounded-2xl "
                }
                //@ts-ignore
                onClick={(e) => setCurrentButton(e.target.id)}
              >
                {button.name}
              </button>
            ))}
          </div>
          {currentButton == 0 ? (
            <div className="mt-54">
              <div className={styles.home__skills__items}>
                <div className={styles.home__skills__items__item}>
                  <Html />
                </div>
                <div className={styles.home__skills__items__item}>
                  <Image
                    width={250}
                    height={250}
                    sizes="100vw"
                    alt="test"
                    src={ReactLogo}
                  />
                </div>
                <div className={styles.home__skills__items__item}>
                  <Image
                    width={250}
                    height={250}
                    sizes="100vw"
                    alt="test"
                    src={ReduxLogo}
                  />
                </div>
                <div className={styles.home__skills__items__item}>
                  <Image
                    width={250}
                    height={250}
                    sizes="100vw"
                    alt="test"
                    src={ScssLogo}
                  />
                </div>
                <div className={styles.home__skills__items__item}>
                  <Image
                    width={250}
                    height={250}
                    sizes="100vw"
                    alt="test"
                    src={NextLogo}
                  />
                </div>
                <div className={styles.home__skills__items__item}>
                  <Image
                    width={250}
                    height={250}
                    sizes="100vw"
                    alt="test"
                    src={QueryLogo}
                  />
                </div>
                <div className={styles.home__skills__items__item}>
                  <Image
                    width={250}
                    height={250}
                    sizes="100vw"
                    alt="test"
                    src={NestLogo}
                  />
                </div>
                <div className={styles.home__skills__items__item}>
                  <Image
                    width={250}
                    height={250}
                    sizes="100vw"
                    alt="test"
                    src={PrismaLogo}
                  />
                </div>
                <div className={styles.home__skills__items__item}>
                  <Image
                    width={250}
                    height={250}
                    sizes="100vw"
                    alt="test"
                    src={ZustandLogo}
                  />
                </div>
                <div className={styles.home__skills__items__item}>
                  <Image
                    width={250}
                    height={250}
                    sizes="100vw"
                    alt="test"
                    src={PGandLogo}
                  />
                </div>
              </div>
              <div className={styles.home__skills__dashboard}>
                <div className={styles.home__skills__dashboard__item}>
                  <h3 className={styles.home__skills__dashboard__item__name}>
                    Front-end
                  </h3>
                  <div className={styles.home__skills__dashboard__item__line}>
                    <div
                      style={{
                        position: "absolute",
                        width: "90%",
                        background: "#5ED3F3",
                        height: "8px",
                      }}
                    ></div>
                  </div>
                </div>
                <div className={styles.home__skills__dashboard__item}>
                  <h3 className={styles.home__skills__dashboard__item__name}>
                    Back-end
                  </h3>
                  <div className={styles.home__skills__dashboard__item__line}>
                    <div
                      style={{
                        position: "absolute",
                        width: "90%",
                        background: "#D5214A",
                        height: "8px",
                      }}
                    ></div>
                  </div>
                </div>
                <div className={styles.home__skills__dashboard__item}>
                  <h3 className={styles.home__skills__dashboard__item__name}>
                    React JS
                  </h3>
                  <div className={styles.home__skills__dashboard__item__line}>
                    <div
                      style={{
                        position: "absolute",
                        width: "90%",
                        background: "#5ED3F3",
                        height: "8px",
                      }}
                    ></div>
                  </div>
                </div>
                <div className={styles.home__skills__dashboard__item}>
                  <h3 className={styles.home__skills__dashboard__item__name}>
                    NEST JS
                  </h3>
                  <div className={styles.home__skills__dashboard__item__line}>
                    <div
                      style={{
                        position: "absolute",
                        width: "90%",
                        background: "#D5214A",
                        height: "8px",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className={styles.home__experience}>
              <div className={styles.home__experience__items}>
                <p className={styles.home__experience__items__date}>2023</p>
                <div className={styles.home__experience__items__text}>
                  <p className={styles.home__experience__items__text__title}>
                    Company "Geozip"
                  </p>
                  <p className={styles.home__experience__items__text__title}>
                    Esil University
                  </p>
                </div>
              </div>
              <div className={styles.home__experience__items}>
                <p className={styles.home__experience__items__date}>2022</p>
                <div className={styles.home__experience__items__text}>
                  <p className={styles.home__experience__items__text__title}>
                    Esil University
                  </p>
                </div>
              </div>
              <div className={styles.home__experience__items}>
                <p className={styles.home__experience__items__date}>2021</p>
                <div className={styles.home__experience__items__text}>
                  <p className={styles.home__experience__items__text__title}>
                    Esil University
                  </p>
                </div>
              </div>
              <div className={styles.home__experience__items}>
                <p className={styles.home__experience__items__date}>2020</p>
                <div className={styles.home__experience__items__text}>
                  <p className={styles.home__experience__items__text__title}>
                    Astana Polytechnic
                  </p>
                </div>
              </div>
              <div className={styles.home__experience__items}>
                <p className={styles.home__experience__items__date}>2019</p>
                <div className={styles.home__experience__items__text}>
                  <p className={styles.home__experience__items__text__title}>
                    Astana Polytechnic
                  </p>
                </div>
              </div>
            </div>
          )}
        </section>
        <section className={styles.home__works} ref={ref4}>
          <p className={styles.home__works__question}>What are my skills?</p>
          <h3 className={styles.home__works__title}>Skills and Experience</h3>
          <div className={styles.home__works__items}>
            {projects.map((project) => (
              <div
                style={{ background: project.bg }}
                className={styles.home__works__items__item}
                // className="transform transition-all duration-500 ease-in-out  hover:scale-105 mb-40"
              >
                <h3
                  style={{ color: project.nameColor }}
                  className={styles.home__works__items__item__title}
                >
                  {project.name}
                </h3>
                <div className={styles.home__works__items__item__technologies}>
                  {project.technologies.map((tech) => (
                    <span
                      style={{ color: project.color }}
                      className={
                        styles.home__works__items__item__technologies__span
                      }
                    >
                      {tech + " "}
                    </span>
                  ))}
                </div>
                <Link
                  passHref
                  style={{
                    color: project.color,
                  }}
                  className={styles.home__works__items__item__link}
                  href={`${project.link}`}
                >
                  Перейти
                </Link>
              </div>
            ))}
          </div>
          <Link href="/projects" className={styles.home__works__button}>
            Show more
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Home;
