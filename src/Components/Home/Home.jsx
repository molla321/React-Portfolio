
import Date from "./Date.jsx";
import "./Home.css"
import Scroll from "./Scroll.jsx";
import Soical from "./Soical.jsx"



const Home = () => {
    return (

        <section className="home section" id="Home">
           <div className="home__container container grid">
               <div className="home__content grid">
                  <Soical />

                  <div className="home__img"></div>
                  <Date />
                </div>

               <Scroll />
            </div>
        </section> 

    );
};

export default Home;
