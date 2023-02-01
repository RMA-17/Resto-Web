import React from "react";
import Aos from "aos";
import "./style.css";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    Aos.init({
      duration: 200,
      once: false,
    });
  }, []);

  return (
    <section id="home">
      <div className="bg-home">
        <div className="flex justify-center items-center flex-col">
          <h2
            className="title -mb-8 max-lg:text-6xl"
            data-aos-duration="800"
            data-aos-delay="300"
            data-aos="slide-down"
            data-aos-once="false"
          >
            Welcome
          </h2>
          <h4
            className="subtitle text-white z-10 max-lg:text-5xl max-lg:mt-1"
            data-aos-delay="150"
            data-aos-duration="400"
            data-aos="fade-up"
            data-aos-once="false"
          >
            Mamang Resto
          </h4>
          <p
            className="minititle max-lg:text-sm max-lg:text-center max-lg:px-4"
            data-aos-duration="1000"
            data-aos-delay="200"
            data-aos="slide-up"
            data-aos-once="false"
          >
            Menyajikan berbagai macam makanan mancanegara dari berbagai daerah di belahan dunia
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
