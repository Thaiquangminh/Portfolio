import Actions from './Actions';
import ME from '../../assets/me.png';
import HeaderSocials from './HeaderSocials';
import './header.css';

const Header = () => {
  const handleScrollBottom = () => {
    console.log(document.body.scrollHeight);

    window.scrollTo(0, document.body.scrollHeight);
  };
  console.log(window.scrollX);
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Tequyem</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <Actions />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="" />
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
