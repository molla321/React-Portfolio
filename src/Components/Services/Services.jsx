import { useState } from "react";
import "./Services.css"



const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const ToggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <section className="services section" id="Services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What a Offer</span>

            <div className="services__container container grid">

                <div className="services__content">
                    <div>
                        <i className='bx bx-edit services__icon'></i>
                        <h3 className="services__title">Product <br/> Designer</h3>
                    </div>


                    <span className="services__button" onClick={() => {ToggleTab(1)}}>View More<i className='bx bx-right-arrow-alt services__button-icon'></i></span>

                    <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i className="bx bx-timer services__modal-close" onClick={()=> ToggleTab(0)}></i>

                            <h3 className="services__modal-title">Product Designer</h3>
                            <p className="services__modal-description">Service with more than 3 years of experience.Providing quality work to clients and companies.</p>

                            <ul className="services__modal-services grid">

                                <li className="services__modal-service">
                                   <i className='bx bxs-check-circle'></i>
                                   <p className="services__modal-info">I develop the user interface.</p>
                                </li>

                                <li className="services__modal-service">
                                   <i className='bx bxs-check-circle'></i>
                                   <p className="services__modal-info">Web page development.</p>
                                </li>

                                <li className="services__modal-service">
                                   <i className='bx bxs-check-circle'></i>
                                   <p className="services__modal-info">I create ux element interactions.</p>
                                </li>

                                <li className="services__modal-service">
                                   <i className='bx bxs-check-circle'></i>
                                   <p className="services__modal-info">I position your company brand.</p>
                                </li>

                                <li className="services__modal-service">
                                   <i className='bx bxs-check-circle'></i>
                                   <p className="services__modal-info">Design and mockups of products for companies.</p>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>


                <div className="services__content">
                    <div>
                        <i className='bx bx-edit services__icon'></i>
                        <h3 className="services__title">Ui/Ux <br/> Designer</h3>
                    </div>


                    <span className="services__button" onClick={() => {ToggleTab(2)}}>View More<i className='bx bx-right-arrow-alt services__button-icon'></i></span>

                    <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i className="bx bx-timer services__modal-close" onClick={()=> ToggleTab(0)}></i>

                            <h3 className="services__modal-title">Ui/Ux Designer</h3>
                            <p className="services__modal-description">Service with more than 3 years of experience.Providing quality work to clients and companies.</p>

                            <ul className="services__modal-services grid">

                                <li className="services__modal-service">
                                   <i className='bx bxs-check-circle'></i>
                                   <p className="services__modal-info">I develop the user interface.</p>
                                </li>

                                <li className="services__modal-service">
                                   <i className='bx bxs-check-circle'></i>
                                   <p className="services__modal-info">Web page development.</p>
                                </li>

                                <li className="services__modal-service">
                                   <i className='bx bxs-check-circle'></i>
                                   <p className="services__modal-info">I create ux element interactions.</p>
                                </li>

                                <li className="services__modal-service">
                                   <i className='bx bxs-check-circle'></i>
                                   <p className="services__modal-info">I position your company brand.</p>
                                </li>

                                <li className="services__modal-service">
                                   <i className='bx bxs-check-circle'></i>
                                   <p className="services__modal-info">Design and mockups of products for companies.</p>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className='bx bx-edit services__icon'></i>
                        <h3 className="services__title">Visual <br /> Designer</h3>
                    </div>


                    <span className="services__button" onClick={()=> ToggleTab(3)}>View More<i className='bx bx-right-arrow-alt services__button-icon'></i></span>

                    <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i className="bx bx-timer services__modal-close" onClick={() => {ToggleTab(0)}}></i>

                            <h3 className="services__modal-title">Visual Designer</h3>
                            <p className="services__modal-description">Service with more than 3 years of experience.Providing quality work to clients and companies.</p>

                            <ul className="services__modal-services grid">

                                <li className="services__modal-service">
                                   <i className='bx bxs-check-circle'></i>
                                   <p className="services__modal-info">I develop the user interface.</p>
                                </li>

                                <li className="services__modal-service">
                                   <i className='bx bxs-check-circle'></i>
                                   <p className="services__modal-info">Web page development.</p>
                                </li>

                                <li className="services__modal-service">
                                   <i className='bx bxs-check-circle'></i>
                                   <p className="services__modal-info">I create ux element interactions.</p>
                                </li>

                                <li className="services__modal-service">
                                   <i className='bx bxs-check-circle'></i>
                                   <p className="services__modal-info">I position your company brand.</p>
                                </li>

                                <li className="services__modal-service">
                                   <i className='bx bxs-check-circle'></i>
                                   <p className="services__modal-info">Design and mockups of products for companies.</p>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </section>



    );
};

export default Services;




// export default function Counter() {
//     const [count, setCount] = useState(0);
  
//     useEffect(() => {
//       const intervalId = setInterval(() => {
//         setCount(c => c + 1); // ✅ Pass a state updater
//       }, 1000);
//       return () => clearInterval(intervalId);
//     }, []); // ✅ Now count is not a dependency
  
//     return <h1>{count}</h1>;
//   }
  