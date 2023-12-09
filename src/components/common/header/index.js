import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="max-width header">
      <img
        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*"
        alt="zomoto-logo"
        className="header-logo"
      />
      <div className="header-right">
        <div className="header-location-search-container">
          <div className="location-wrapper">
            <div className="location-icon-name">
              <i className="fi fi-rr-marker absolute-center location-icon"></i>
              <div>Banglore</div>
            </div>
            <i class="fi fi-rr-caret-down absolute-center"></i>
          </div>
          <div className="location-search-seperator"></div>
          <div className="header-searchBar">
            <i className="fi fi-rr-search absolute-center search-icon"></i>
            <input
              placeholder="Search for restaurant, cuisine or a dish"
              className="search-input"
            ></input>
          </div>
        </div>
        <div className="profile-wrapper">
          <img
            src="https://thumbs.dreamstime.com/b/coffee-cup-12202597.jpg"
            alt="profile-img"
            className="header-profile-image"
          />
          <span className="header-username">Shuvam</span>
          <i className="fi fi-rr-angle-small-down absolute-center profile-option-icon"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
