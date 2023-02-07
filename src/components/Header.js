import React from "react";
import Logo from "../assets/ColosseumLogo.png";
import Bg from "../assets/Colosseum.png";
import { Container } from "react-bootstrap";

const Header = () => {
  return (
    <Container>
      <div className="d-flex flex-column align-items-center">
        <img src={Logo} alt="" style={{ width: "4rem" }} />
        <hr className="mt-2 mb-5" style={{ border: "0.75px solid #000000", width: "100%" }} />
      </div>
      <div className="d-flex justify-content-center">
        <img src={Bg} alt="" style={{ maxWidth: "26rem" }} />
      </div>
    </Container>
  );
};

export default Header;
