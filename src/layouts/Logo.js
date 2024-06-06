import React from "react";
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className="col-4" style={{ padding: "18px 0", color: "#d2d2d2" }}>
      <Link to="/">
        <img
          src={require("../assets/images/dis_logo.png")}
          style={{ width: "80px", verticalAlign: "middle" }}
          alt="logo"
        />
      </Link>
    </div>
  );
};

export default Logo;
