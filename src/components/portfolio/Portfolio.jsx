import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';
import './portfolio.css';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Nuxt Promote Yourself',
    github: 'https://github.com/Thaiquangminh/nuxt-promote-yourself',
    demo: 'https://github.com/Thaiquangminh',
  },
  {
    id: 5,
    image: IMG5,
    title: 'VS Tech (UI)',
    github: 'https://github.com/Thaiquangminh/vs-shop',
    demo: 'https://vs-tech-ui.netlify.app/',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Pokemon List',
    github: 'https://github.com/Thaiquangminh/pokemonApi',
    demo: 'https://pokemonlst.netlify.app/',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Coach management',
    github: 'https://github.com/Thaiquangminh/coach-management',
    demo: 'https://tqcoaches.netlify.app/coaches',
  },
  {
    id: 2,
    image: IMG2,
    title: 'English Website (UI)',
    github: 'https://github.com/Thaiquangminh/castory',
    demo: 'https://github.com/Thaiquangminh/castory',
  },
  {
    id: 6,
    image: IMG6,
    title: 'This is a portfolio item',
    github: 'https://github.com/Thaiquangminh',
    demo: 'https://github.com/Thaiquangminh',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article className="portfolio__item" key={id}>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
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
