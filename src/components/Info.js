import logo from "../Rectangle 90.png";
import "../App.css";

function Info() {
  return (
    <div className="Info">
      <img src={logo} className="photo" alt="profile" />
      <h3 className="name">Laura Smith</h3>
      <h4 className="Designation">Frontend Developer</h4>
      <p className="ProfileLink">laurasmith.website</p>
      <buttons className="buttons">
        <button className="email-button" >Email</button>
        <button className="LinkedIn-button">LinkedIn</button>
      </buttons>
    </div>
  );
}

export default Info;
