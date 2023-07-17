import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';
import IMG1_SMALL from '../../assets/portfolio1_small.jpeg';
import IMG2_SMALL from '../../assets/portfolio2_small.jpeg';
import IMG3_SMALL from '../../assets/portfolio3_small.jpeg';
import IMG4_SMALL from '../../assets/portfolio4_small.jpeg';
import IMG5_SMALL from '../../assets/portfolio5_small.png';
import IMG6_SMALL from '../../assets/portfolio6_small.jpeg';
import './portfolio.css';

const data = [
  {
    id: 1,
    image: IMG1,
    image_small: IMG1_SMALL,
    title: 'Nuxt Promote Yourself',
    github: 'https://github.com/Thaiquangminh/nuxt-promote-yourself',
    demo: 'https://github.com/Thaiquangminh',
  },
  {
    id: 4,
    image: IMG4,
    image_small: IMG4_SMALL,
    title: 'Blogs Vue',
    github: 'https://github.com/Thaiquangminh/blogs',
    demo: 'https://github.com/Thaiquangminh/blogs',
  },
  {
    id: 6,
    image: IMG6,
    image_small: IMG6_SMALL,
    title: 'Booking App',
    github: 'https://github.com/Thaiquangminh/booking-app',
    demo: 'https://github.com/Thaiquangminh/booking-app',
  },
  {
    id: 5,
    image: IMG5,
    image_small: IMG5_SMALL,
    title: 'VS Tech (UI)',
    github: 'https://github.com/Thaiquangminh/vs-shop',
    demo: 'https://vs-tech-ui.netlify.app/',
  },
  {
    id: 3,
    image: IMG3,
    image_small: IMG3_SMALL,
    title: 'Pokemon List',
    github: 'https://github.com/Thaiquangminh/pokemonApi',
    demo: 'https://pokemonlst.netlify.app/',
  },
  {
    id: 2,
    image: IMG2,
    image_small: IMG2_SMALL,
    title: 'English Website (UI)',
    github: 'https://github.com/Thaiquangminh/castory',
    demo: 'https://github.com/Thaiquangminh/castory',
  },

];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo, image_small }) => {
          return (
            <article className="portfolio__item" key={id}>
              <div
                className="portfolio__item-image"
                style={{ backgroundImage: `url(${image_small})` }}>
                <img src={image} alt={title} loading="lazy" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__actions">
                <a href={github} className="btn" target="_">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
