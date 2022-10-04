import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import { images } from "../../constants";
import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const sections = [
    "home",
    "work",
    "skills",
    "about",
    "testimonials",
    "contact",
  ];

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.patrickKellLogo2} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {/* nav links for all sections */}
        {sections.map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      {/* mobile navbar menu */}
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {/* if toggle is true - render mobile navbar */}
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            {/* nav links for all sections */}
            <ul>
              {sections.map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
