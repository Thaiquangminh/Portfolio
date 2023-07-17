import Actions from './Actions';
import ME from '../../assets/me.png';
import ME_SMALL from '../../assets/me_small.png';
import HeaderSocials from './HeaderSocials';
import './header.css';

const Header = () => {
  const handleScrollBottom = () => {
    console.log(document.body);
    window.scrollTo(0, document.body.scrollHeight);
  };
  console.log(window.scrollX);
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Thai Quang Minh</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <Actions />
        <HeaderSocials />

        <div className="me">
          <div
            className="blur__image"
            style={{ backgroundImage: `url(${ME_SMALL})` }}></div>
          <img src={ME} alt="" loading="lazy" />
        </div>

        <a
          href="#contact"
          className="scroll__down"
          onClick={handleScrollBottom}>
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
