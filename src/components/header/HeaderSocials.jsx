import React from 'react';
import { BsLinkedin, BsGithub, BsFacebook } from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="http://linkenin.com" target="_">
        <BsLinkedin />
      </a>
      <a href="http://github.com" target="_">
        <BsGithub />
      </a>
      <a href="http://facebook.com" target="_">
        <BsFacebook />
      </a>
    </div>
  );
};

export default HeaderSocials;
