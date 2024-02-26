import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import project from "../../../../public/project.jpg";
import styles from "./ProjectsPage.module.scss";
import { projects } from "@/app/consts/projects";

const ProjectsPage = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 20);
    });
  }, []);

  return (
    <div className={styles.projects}>
      <div className={styles.projects__container}>
        <header
          className={
            scroll ? styles.projects__header__scroll : styles.home__header
          }
        >
          <div className={styles.projects__header__content}>
            <Link className={styles.projects__header__content__link} href="/">
              ra1tsuya
            </Link>
            <button className={styles.projects__button}>Resume</button>
          </div>
        </header>
        <section className={styles.projects__content}>
          {projects.map((project) => (
            <div
              className={styles.projects__content__item}
              style={{ background: project.bg }}
            >
              <h3
                style={{ color: project.nameColor }}
                className={styles.projects__content__item__title}
              >
                {project.name}
              </h3>
              <div className={styles.projects__content__item__technologies}>
                {project.technologies.map((tech) => (
                  <span
                    style={{ color: project.color }}
                    className={
                      styles.projects__content__item__technologies__span
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
                className={styles.projects__content__item__link}
                href={`${project.link}`}
              >
                Перейти
              </Link>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default ProjectsPage;
