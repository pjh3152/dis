import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Menu = () => {
  return (
    <div className="row justify-content-between align-items-center">
      
      <Logo />

      <div
        className="col-8 d-flex"
        style={{ fontSize: "18px", padding: "0", color: "#666666" }}
      >
        <div className="ms-4 me-3">
          <Link to="/" className="h4 blackLink">
            Home
          </Link>
        </div>
        <div className="mx-3">
          <Link to="/about" className="h4 blackLink">
            회사소개
          </Link>
        </div>

        <div className="mx-3">
          <Link to="/products" className="h4 blackLink">
            사업분야
          </Link>
        </div>
        <div className="mx-3">
          <Link to="/delivery" className="h4 blackLink">
            납품현황
          </Link>
        </div>
        <div className="mx-3">구매문의</div>
        <div className="mx-3">쇼핑몰</div>
      </div>
    </div>
  );
};

export default Menu;
