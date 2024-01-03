import "./Footer.css"
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                 <h1 className="footer__title">NI-_-RABBI</h1> 

                 <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#about" className="footer__link">Projects</a>
                    </li>
                    <li>
                        <a href="#about" className="footer__link">Testimonials</a>
                    </li>
                    
                 </ul>  

                <div className="footer__social">
                <a href="" className="footer__social-icon" target="_blank">
               <i className="ri-instagram-line"></i>
             </a>

            <a href="" className="footer__social-icon" target="_blank">
               <i className="ri-facebook-line"></i>
            </a>

            <a href="" className="footer__social-icon" target="_blank">
               <i className="ri-github-line"></i>
            </a>

            <a href="" className="footer__social-icon" target="_blank">
               <i className="ri-twitter-line"></i>
            </a>
                </div>  

                <span className="footer__copy">&#169;Copyright . Developer By NI-RABBI 2024</span>          
            </div>
        </footer>
    );
};

export default Footer;