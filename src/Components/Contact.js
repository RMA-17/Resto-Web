/* eslint-disable jsx-a11y/anchor-is-valid */
import Aos from "aos";
import React from "react";
import { useEffect } from "react";
import "./style.css";

const Contact = () => {
  useEffect(() => {
    Aos.init({
      once: true,
    });
  }, []);

  return (
    <section id="contact" className="flex py-32 max-lg:flex-col max-lg:py-20">
      <div className="w-1/2 px-10 max-lg:w-full max-lg:px-5">
        <div className="flex flex-col">
          <h2
            className="title -mb-12 text-center"
            data-aos="slide-down"
            data-aos-duration="1000"
          >
            Contact
          </h2>
          <h2
            className="subtitle z-20 text-center"
            data-aos="slide-up"
            data-aos-duration="500"
          >
            Let's Chat
          </h2>
        </div>
        <p
          className="mt-4 text-center text-gray-400 leading-relaxed"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Voluptatibus quaerat laboriosam fugit non Ut consequatur animi est
          molestiae enim a voluptate totam natus modi debitis dicta impedit
          voluptatum quod sapiente illo saepe explicabo quisquam perferendis
          labore et illum suscipit
        </p>
      </div>
      <div className="w-1/2 px-10 max-lg:w-full max-lg:px-5 max-lg:py-10">
        <form>
          <div
            className="input-form flex flex-col"
            data-aos="fade-left"
            data-aos-duration="900"
            data-aos-delay="300"
          >
            <label className="text-start text-gray-400">Your Name</label>
            <input type="text" className="border-gray-400 rounded-md" />
          </div>
          <div
            className="input-form flex flex-col my-5"
            data-aos="fade-left"
            data-aos-duration="900"
            data-aos-delay="300"
          >
            <label className="text-start text-gray-400">Your Email</label>
            <input type="text" className="border-gray-400 rounded-md" />
          </div>
          <div
            className="input-form flex flex-col"
            data-aos="fade-left"
            data-aos-duration="900"
            data-aos-delay="300"
          >
            <label className="text-start text-gray-400">Your Message</label>
            <textarea
              className="border-gray-400 rounded-md"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div
            className="btn-send text-left py-5 max-lg:text-center"
            data-aos="fade-left"
            data-aos-duration="900"
            data-aos-delay="300"
          >
            <button className="uppercase py-2 px-5 rounded-full bg-orange-400 text-white">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
