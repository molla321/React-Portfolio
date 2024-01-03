
import { useState } from "react";
import "./Header.css"

const Header = () => {
    /*=============== Toggle Menu ===============*/
    const [Toggle, showMenu] = useState(false);
    return (

        <>
            <header className="header">
                <nav className="nav container">
                    <a href="#" className="nav__logo">NI-RABBI</a>

                    <div className={Toggle ? "nav__menu show__menu" : "nav__menu"}>

                        <ul className=" nav__list grid ">
                            <li className="nav__item">
                                <a href="#Home" className="nav__link active-link">
                                <i className="ri-home-7-fill nav__icon"></i> Home
                                </a>
                            </li>


                      
                            <li className="nav__item">
                                <a href="#About" className="nav__link">
                                    <i className="ri-user-line nav__icon"></i> About
                                </a>
                            </li>

                       

                            <li className="nav__item">
                                <a href="#Skills" className="nav__link">
                                    <i className="ri-file-4-fill nav__icon"></i> Skills
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#Services" className="nav__link">
                                    <i className="ri-briefcase-line nav__icon"></i> Services
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#Protfolio" className="nav__link">
                                    <i className="ri-projector-line nav__icon"></i> Protfolio
                                </a>
                            </li>


                            <li className="nav__item">
                                <a href="#Contact" className="nav__link">
                                    <i className="ri-chat-1-fill nav__icon"></i> Contact
                                </a>
                            </li>
                        </ul>
                        < i className="ri-close-line nav__close" onClick={() => showMenu (!Toggle)}></i>
                    </div>

                    <div className="nav__toggle" onClick={() => showMenu (!Toggle)}>
                        <i className="ri-apps-line"></i>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;