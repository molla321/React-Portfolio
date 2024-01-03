
import "./Footer.css";
import Wave from "../../assets/wave.png";
// import Insta from "@iconscout/react-unicons/icons/uil-instagram";
// import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
// import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>naimulislamrabbi@gmail.com</span>
        <div className="f-icons">
          {/* <Insta color="white" size={"3rem"} />
          <Facebook color="white" size={"3rem"} />
          <Gitub color="white" size={"3rem"} /> */}
          <i className='bx bxl-instagram' style={{fontSize: "3rem"}} ></i>
          <i className='bx bxl-facebook' style={{fontSize: "3rem"}} ></i>
          <i className='bx bxl-gitub' style={{fontSize: "3rem"}} ></i>
        </div>
      </div>
    </div>
  );
};

export default Footer;
