import Image from "next/image";
import React from "react";
import aboutimg from "../../../assets/about.jpg";

const About = () => {
  return (
    <section className="flex justify-between  flex-col text-fz mt-186px w-full h-screen">
      <p className="text-blue text-fz-44 text-center leading-lh-58">
        Who am I?
      </p>
      <h3 className="text-fz-56 leading-lh-74 text-center text-white pt-pt-40">
        About me
      </h3>
      <div className="flex justify-between  ">
        <div>
          <Image src={aboutimg} alt="aboutimg" />
        </div>
        <div className="max-w-778">
          <p className="text-white text-fz-34 text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the
          </p>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default About;
