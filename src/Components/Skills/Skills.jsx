
import Backend from "./Backend";
import Frontend from "./Frontend";
import "./Skills.css"


const Skills = () => {
    return (
        <section className="about section" id="Skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My technical level</span>

            <div className="skills__container container grid">
                <Frontend />

                <Backend />
            </div>
        </section>
    );
};

export default Skills;