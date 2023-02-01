/* eslint-disable jsx-a11y/anchor-is-valid */
import Aos from "aos";
import React from "react";
import { useEffect } from "react";
import "./style.css";

const About = () => {
  useEffect(() => {
    Aos.init({
      once: true,
    });
  }, []);

  return (
    <section id="about" className="flex py-32 px-20 max-lg:px-2 max-lg:flex-col">
      <div className="w-1/2 flex flex-col justify-center items-center text-center px-5 max-lg:flex-col max-lg:w-full">
        <div className="flex flex-col">
          <h2
            className="title -mb-10 max-lg:text-6xl max-lg:text-center"
            data-aos="slide-down"
            data-aos-duration="1000"
          >
            Discover
          </h2>
          <h2
            className="subtitle z-20 max-lg:text-5xl max-lg:mt-1"
            data-aos="slide-up"
            data-aos-duration="500"
          >
            Our Store
          </h2>
        </div>
        <p
          className="mt-8 text-gray-400"
          data-aos="fade-up"
          data-aos-duration="950"
        >
          * * *
        </p>
        <p
          className="mt-4 text-center text-gray-400 leading-relaxed max-lg:text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Resto kami berdiri sejak tahun 2000 di Jakarta, kami membangun resto ini dengan sepenuh
          hati dan dengan dedikasi tinggi agar para pelanggan kami puas menikmati masakan kami.
          Dengan mendatangkan 5 koki dari berbagai negara dan ada 2 cabang di Indonesia, kami berhara
          anda bisa dengan mudah mencapai hidangan terbaik kami, dengan kualitas yang terbaik
        </p>
        <p
          data-aos="fade-up"
          data-aos-duration="1050"
          data-aos-delay="300"
          className="mt-6 uppercase text-lg text-black"
        >
          <a className="underline" href="#">
            About Us
          </a>
        </p>
      </div>
      <div
        className="w-1/2 flex justify-center max-lg:w-full max-lg:mt-10"
        data-aos="zoom-in-up"
        data-aos-duration="950"
      >
        <img
          src="https://demos.onepagelove.com/html/resto/img/img_1.jpg"
          alt="About img"
        />
      </div>
    </section>
  );
};

export default About;
