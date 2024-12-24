import { Link } from "react-router-dom";
import "./nav.css";
import logo from "../../assets/hv_logo.png";
import home from "../../assets/home.png";
import devHub from "../../assets/devHub.png";
import consentManager from "../../assets/consentManager.png";
import applications from "../../assets/Applications.png";
import analytics from "../../assets/Analytics.png";
import account from "../../assets/Account.png";
import workflow from "../../assets/workflow.png";


const  Navbar = () => {
  return (
    <header className="head-container">
      <div className="hv-logo">
        <img src={logo} alt="" />
      </div>
      <div className="links-container">
        <div className="home">
        <img src={home} alt="" style={{ width: '24px', height: '24px' }} />
          <div>Home</div>
        </div>
        <nav>
          <div className="nav-items">
            <img src={applications} alt="" />
            <span>Applications</span>
          </div>
          <div className="nav-items">
            <img src={analytics} alt="" />
            <span>Analytics</span>
          </div>

          <div className="nav-items">
            <img src={workflow} alt="" />
            <span>Workflows</span>
          </div>

          <div className="nav-items">
            <img src={devHub} alt="" />
            <span>Dev Hub</span>
          </div>

          <div className="nav-items">
            <img src={account} alt="" />
            <span>Account</span>
          </div>
          <div className="nav-items">
            <img src={consentManager} alt="" />
            <span>Consent</span>
            <span>Manager</span>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
