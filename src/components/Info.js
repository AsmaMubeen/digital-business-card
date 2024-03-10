import logo from "../Rectangle 90.png";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Info() {
  return (
    <div className="Info">
      <img src={logo} className="photo" alt="profile" />
      <items className="items">
      <h3 className="name">Laura Smith</h3>
      <h4 className="Designation">Frontend Developer</h4>
      <p className="ProfileLink">laurasmith.website</p>
      </items>
      <buttons className="buttons">
        <button className="button email-button" >
        <FontAwesomeIcon icon={faEnvelope} className="info--icon" />
            Email</button>
        <button className="button LinkedIn-button">
        <FontAwesomeIcon icon={faLinkedin} className="info--icon" />
            LinkedIn</button>
      </buttons>
    </div>
  );
}

export default Info;
