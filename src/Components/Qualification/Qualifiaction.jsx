
import { useState } from "react";
import "./Qualification.css";

const Qualifiaction = () => {
    const [toggleState, setToggleState] = useState(1);

    const ToggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <section className="qualifiaction section">
            <h2 className="section__title">Qualifiaction</h2>
            <span className="section__subtitle">My personel journey</span>

            <div className="qualifiaction__container container">
                <div className="qualifiaction__tabs">
                    <div className={
                        toggleState === 1 
                        ? "qualifiaction__button qualifiaction__active button--flex" 
                        : "qualifiaction__button  button--flex" 
                        }
                        onClick={() => ToggleTab(1)}
                        >
                        <i className="bx bxs-graduation qualifiaction__icon"></i>Education
                    </div>

                    <div className={
                        toggleState === 2 
                        ? "qualifiaction__button qualifiaction__active button--flex" 
                        : "qualifiaction__button  button--flex" 
                        }
                        onClick={() => ToggleTab(2)}
                        >
                        <i className="bx bxs-briefcase qualifiaction__icon"></i>Experience
                    </div>
                </div>

                <div className="qualifiaction__sections">

                    <div className={
                        toggleState === 1 
                        ? "qualifiaction__content     qualifiaction__content-active" 
                        : "qualifiaction__content"}>

                        <div className="qualifiaction__data">
                            <div>
                                <h3 className="qualifiaction__title">Web Developer</h3>
                                <span className="qualifiaction__subtitle">Spain - Institute</span>
                                <div className="qualifiaction__calender">
                                <i className='bx bxs-calendar'></i> 2021 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualifiaction__rounder"></span>
                                <span className="qualifiaction__line"></span>
                            </div>
                        </div>

                        <div className="qualifiaction__data">
                            <div></div>
                            <div>
                                <span className="qualifiaction__rounder"></span>
                                <span className="qualifiaction__line"></span>
                            </div>
                            <div>
                                <h3 className="qualifiaction__title">Art Director</h3>
                                <span className="qualifiaction__subtitle">Spain - Institute</span>
                                <div className="qualifiaction__calender">
                                <i className='bx bxs-calendar'></i> 2021 - Present
                                </div>
                            </div>

                            
                        </div>

                        <div className="qualifiaction__data">
                            <div>
                                <h3 className="qualifiaction__title">Web Developer</h3>
                                <span className="qualifiaction__subtitle">Spain - Institute</span>
                                <div className="qualifiaction__calender">
                                <i className='bx bxs-calendar'></i> 2021 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualifiaction__rounder"></span>
                                <span className="qualifiaction__line"></span>
                            </div>
                        </div>

                        <div className="qualifiaction__data">
                            <div></div>
                            <div>
                                <span className="qualifiaction__rounder"></span>
                                <span className="qualifiaction__line"></span>
                            </div>
                            <div>
                                <h3 className="qualifiaction__title">Art Director</h3>
                                <span className="qualifiaction__subtitle">Spain - Institute</span>
                                <div className="qualifiaction__calender">
                                <i className='bx bxs-calendar'></i> 2021 - Present
                                </div>
                            </div>

                            
                        </div>
                    </div>


                    <div className={
                        toggleState === 2 
                        ? "qualifiaction__content     qualifiaction__content-active" 
                        : "qualifiaction__content"}>

                        <div className="qualifiaction__data">
                            <div>
                                <h3 className="qualifiaction__title">Web Developer</h3>
                                <span className="qualifiaction__subtitle">Spain - Institute</span>
                                <div className="qualifiaction__calender">
                                <i className='bx bxs-calendar'></i> 2021 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualifiaction__rounder"></span>
                                <span className="qualifiaction__line"></span>
                            </div>
                        </div>

                        <div className="qualifiaction__data">
                            <div></div>
                            <div>
                                <span className="qualifiaction__rounder"></span>
                                <span className="qualifiaction__line"></span>
                            </div>
                            <div>
                                <h3 className="qualifiaction__title">Art Director</h3>
                                <span className="qualifiaction__subtitle">Spain - Institute</span>
                                <div className="qualifiaction__calender">
                                <i className='bx bxs-calendar'></i> 2021 - Present
                                </div>
                            </div>

                            
                        </div>

                        <div className="qualifiaction__data">
                            <div></div>
                            <div>
                                <span className="qualifiaction__rounder"></span>
                                <span className="qualifiaction__line"></span>
                            </div>
                            <div>
                                <h3 className="qualifiaction__title">Art Director</h3>
                                <span className="qualifiaction__subtitle">Spain - Institute</span>
                                <div className="qualifiaction__calender">
                                <i className='bx bxs-calendar'></i> 2021 - Present
                                </div>
                            </div>

                            
                        </div>

                        <div className="qualifiaction__data">
                            <div></div>
                            <div>
                                <span className="qualifiaction__rounder"></span>
                                <span className="qualifiaction__line"></span>
                            </div>
                            <div>
                                <h3 className="qualifiaction__title">Art Director</h3>
                                <span className="qualifiaction__subtitle">Spain - Institute</span>
                                <div className="qualifiaction__calender">
                                <i className='bx bxs-calendar'></i> 2021 - Present
                                </div>
                            </div>

                            
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Qualifiaction;