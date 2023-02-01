/* eslint-disable jsx-a11y/anchor-is-valid */
import Aos from "aos";
import axios from "axios";
import React from "react";
import ReactLoading from 'react-loading'
import { useState } from "react";
import { useEffect } from "react";
import "./style.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Contact = () => {

  const [customerName, setCustomerName] = useState("")
  const [customerEmail, setCustomerEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSendingForm, setSendingForm] = useState(false)

  const FormSwal = withReactContent(Swal)

  useEffect(() => {
    Aos.init({
      once: true,
    });
  }, []);

  const scriptUrl =
    "https://script.google.com/macros/s/AKfycbx2yRgSyX0ybkPY5kQrJeRPIlbhykDF_QAy41YJpI8RvPf2tNXigDbN-yVwA9afw-N8wg/exec";
  const bodyFormData = new FormData();

  const sendForm = (e) => {
    setSendingForm(true)
    bodyFormData.append("nama", customerName)
    bodyFormData.append("email", customerEmail)
    bodyFormData.append("pesan", message)
    axios({
      method: "post",
      url: scriptUrl,
      data: bodyFormData,
    })
      .then((res) => {
        console.log(res);
        FormSwal.fire({
          title: "Berhasil!",
          text: "Berhasil mengirimkan feedback!",
          icon: "success",
          allowOutsideClick: false
        }).then((isClicked) => {
          if (isClicked) e.target.reset()
        })
      })
      .catch((res) => {
        console.error(res);
      })
      .finally(() => {
        setSendingForm(false)
      });
  };

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
          Berikan pendapat anda tentang Resto kami, kami menyediakan surel
          kritik agar pelayanan resto kami menjadi lebih baik dan jauh lebih
          bagus dari sebelumnya.
        </p>
      </div>
      <div className="w-1/2 px-10 max-lg:w-full max-lg:px-5 max-lg:py-10">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            sendForm(e);
          }}
          name="submit-form"
        >
          <div
            className="input-form flex flex-col"
            data-aos="fade-left"
            data-aos-duration="900"
            data-aos-delay="300"
          >
            <label className="text-start text-gray-400">Your Name</label>
            <input
              name="nama"
              type="text"
              id="inputNama"
              className="border-gray-400 raounded-md"
              onChange={(e) => setCustomerName(e.target.value)}
            />
          </div>
          <div
            className="input-form flex flex-col my-5"
            data-aos="fade-left"
            data-aos-duration="900"
            data-aos-delay="300"
          >
            <label className="text-start text-gray-400">Your Email</label>
            <input
              name="email"
              type="email"
              className="border-gray-400 rounded-md"
              onChange={(e) => setCustomerEmail(e.target.value)}
            />
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
              name="pesan"
              cols="30"
              rows="10"
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div
            className="btn-send text-left py-5 max-lg:text-center"
            data-aos="fade-left"
            data-aos-duration="900"
            data-aos-delay="300"
          >
            <button className="flex items-center uppercase py-2 px-5 rounded-full bg-orange-400 text-white">
              { isSendingForm?
                <><ReactLoading type="cylon" width={24} height={24} /> Send Message</>
                : "Send Message"
              }
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
