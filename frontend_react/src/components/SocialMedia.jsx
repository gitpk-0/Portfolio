import React from "react";
import { BsInstagram, BsGithub } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
// import { BsTwitter } from "react-icons/bs";
// import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      {/* <div>
        <BsTwitter />
      </div> */}
      {/* <div>
        <FaFacebookF />
      </div> */}
      {/* Github link */}
      <div>
        <a href="https://github.com/gitpk-0" target="_blank" rel="noreferrer">
          <BsGithub />
        </a>
      </div>
      {/* Email Link */}
      <div>
        <a
          href="mailto:hello@patrick-kell.com"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineMail />
        </a>
      </div>
      {/* Instagram link */}
      <div>
        <a
          href="https://www.instagram.com/_patrick_kell/"
          target="_blank"
          rel="noreferrer"
        >
          <BsInstagram />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
