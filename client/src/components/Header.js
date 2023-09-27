import React from "react";
import { connect } from "react-redux";

const Header = ({ auth }) => {
  const renderContent = () => {
    switch (auth) {
      case null:
        return "Still deciding";
      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      default:
        return (
          <li>
            <a href="">Logout</a>
          </li>
        );
    }
  };
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="/" className="left brand-logo">
          Emaily
        </a>
        <ul className="right">{renderContent()}</ul>
      </div>
    </nav>
  );
};

const mapStateToProps = ({ auth }) => {
  return {
    auth,
  };
};

export default connect(mapStateToProps)(Header);
