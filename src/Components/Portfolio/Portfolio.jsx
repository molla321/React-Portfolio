import './Portfolio.css';
import Img1 from "../../assets/work1.jpg"
import Img2 from "../../assets/work2.jpg"
import Img3 from "../../assets/work3.jpg"
import Img4 from "../../assets/work4.jpg"
import Img5 from "../../assets/work5.jpg"
import Img6 from "../../assets/Screen Shot 2024-01-01 at 21.20.10.png"

const Portfolio = () => {
    return (
        <section id='Portfolio'>
            <h2 className="section__title">My Recent Work</h2>
            <span className="section__subtitle">Portfolio</span>
            
            


            <div className="container portfolio__container">

                <article className="portfolio__item">
                    <div className="portfolio__item-img">
                        <img src={Img1} alt="" />
                    </div>
                    <h3>This Is a Portfolio Item</h3>
                    <div className="portfolio__item-cta">
                       <a href="#" className='btn '>GitHub</a>
                       <a href="#" className='btn '>Live Demo</a>
                    </div>
                </article>

                <article className="portfolio__item">
                    <div className="portfolio__item-img">
                        <img src={Img2} alt="" />
                    </div>
                    <h3>This Is a Portfolio Item</h3>
                    <div className="portfolio__item-cta">
                       <a href="#" className='btn '>GitHub</a>
                       <a href="#" className='btn '>Live Demo</a>
                    </div>
                </article>

                <article className="portfolio__item">
                    <div className="portfolio__item-img">
                        <img src={Img3} alt="" />
                    </div>
                    <h3>This Is a Portfolio Item</h3>
                    <div className="portfolio__item-cta">
                       <a href="#" className='btn'>GitHub</a>
                       <a href="#" className='btn'>Live Demo</a>
                    </div>

                </article>

                <article className="portfolio__item">
                    <div className="portfolio__item-img">
                        <img src={Img4} alt="" />
                    </div>
                    <h3>This Is a Portfolio Item</h3>
                    <div className="portfolio__item-cta">
                       <a href="#" className='btn'>GitHub</a>
                       <a href="#" className='btn'>Live Demo</a>
                    </div>

                </article>

                <article className="portfolio__item">
                    <div className="portfolio__item-img">
                        <img src={Img5} alt="" />
                    </div>
                    <h3>This Is a Portfolio Item</h3>
                    <div className="portfolio__item-cta">
                       <a href="#" className='btn'>GitHub</a>
                       <a href="#" className='btn'>Live Demo</a>
                    </div>
                </article>

                <article className="portfolio__item">
                    <div className="portfolio__item-img">
                        <img src={Img6} alt="" />
                    </div>
                    <h3>This Is a Portfolio Item</h3>
                    <div className="portfolio__item-cta">
                       <a href="#" className='btn'>GitHub</a>
                       <a href="#" className='btn'>Live Demo</a>
                    </div>
                </article>



            </div>
        </section>
    );
};

export default Portfolio;