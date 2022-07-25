import "./Header.css";

import cryptoPunkLogo from "../assets/header/cryptopunk-logo.png";
import searchIcon from "../assets/header/search.png";
import themeSwitchIcon from "../assets/header/theme-switch.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img className="punkLogo" src={cryptoPunkLogo} alt="cryptoPunkLogo" />
      </div>
      <div className="searchBar">
        <div className="searchIconContainer">
          <img src={searchIcon} alt="" />
        </div>
        <input
          placeholder="Collection, item or user"
          className="searchInput"
          type="text"
        />
      </div>
      <div className="headerItems">
        <p>Drops</p>
        <p>Marketplace</p>
        <p>Create</p>
      </div>
      <div className="headerActions">
        <div className="themeSwitchContainer">
          <img src={themeSwitchIcon} alt="themeSwitchIcon" />
        </div>
      </div>
      <div className="loginButton">Get In</div>
    </div>
  );
};

export default Header;
