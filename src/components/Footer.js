import TwitterLogo from "../Twitter Icon.png";
import FacebookLogo from "../Facebook Icon.png";
import InstagramLogo from "../Instagram Icon.png";
import GithubLogo from "../GitHub Icon.png";

import "../App.css";

function Footer() {
  return (
    <div className="Footer">
      <img src={TwitterLogo} className="TwitterLogo" alt="TwitterLogo" />
      <img src={FacebookLogo} className="FacebookLogo" alt="FacebookLogo" />
      <img src={InstagramLogo} className="InstagramLogo" alt="InstagramLogo" />
      <img src={GithubLogo} className="GithubLogo" alt="GithubLogo" />
    </div>
  );
}

export default Footer;
