import React from "react";
import Logo from "../assets/ColosseumLogo.svg";
import Bg from "../assets/Group.png";
import Logo2 from "../assets/ColosseumPlainLogo.svg";
import './Header.css'
import { Container } from "react-bootstrap";

const Header = () => {
  return (
    <Container>
      <div className="d-flex flex-column align-items-center mb-4 mb-lg-0 mb-md-0">
        <img src={Logo} className="headerLogo" alt="" style={{ width: "4rem" }} />
        <hr className="mt-2 mb-5" style={{ border: "0.75px solid #000000", width: "100%" }} />
      </div>
      <div className="pb-5 d-flex justify-content-center">
        <img src={Bg} alt="" className="position-absolute img" style={{ maxWidth: "26rem",minWidth:'9rem',zIndex:'-20' }} />
        <div className=" bg-white d-flex align-items-center justify-content-center centerImg"
          style={{ width: "14.8rem", height: "10rem", borderRadius: "11px",marginTop:'8rem' }}>
          <img src={Logo2} className="centerLogo" style={{ width: "8rem" }} alt="" />
        </div>
      </div>
    </Container>
  );
};

export default Header;
