import React from "react";
import Aos from "aos";
import { useEffect } from "react";
import './style.css'
import { Divide as Hamburger } from 'hamburger-react'
import { useState } from "react";

const Header = () => {

  const [isOpen, setOpen] = useState(false)

  useEffect(() => {
    Aos.init({
      duration: 500,
      once: true,
    })
  }, [])

  window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    header.classList.toggle("sticky", window.scrollY > 0)
  })

  return (
    <header className="flex fixed py-10 px-20 items-center w-full max-md:px-4" id="header">
      <div className="logo" >
        <h2 className="site-logo">Mamang Resto</h2>
      </div>
      <nav className="nav max-lg:hidden">
        <ul className="menu-list">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hamburger */}
      <div className="hidden max-lg:block ml-auto">
        <Hamburger toggle={setOpen} toggled={isOpen} color="white" rounded />
      </div>
      {
        isOpen? (
          <>
            <ul className="absolute gap-6 w-full flex flex-col left-0 top-24 py-4 px-6 mt-2 bg-white ham-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#contact">Contact</a></li>
            </ul>
          </>
        ): (
          <></>
        )
      }
    </header>
  );
};

export default Header;
