import React from "react";
import { Link, useLocation } from "react-router-dom";
import Menu from "./Menu";
import AdminMenu from "./AdminMenu";

const Header = () => {
  const path = useLocation().pathname;

  return (
    <div>
      <div className="bg-dark">
        <div className="container">
          <div className="row bg-dark justify-content-between align-items-center">
            <div
              className="col-auto text-light"
              style={{
                padding: "11px 0 11px 0",
              }}
            >
              <a href="mailto:mydis119@naver.com" className="whiteLink">
                <i className="bi bi-envelope-fill me-2"></i>
                mydis119@naver.com
              </a>
              <a href="tel:053-558-5959" className="whiteLink">
                <i className="bi bi-telephone-fill ms-3 me-2"></i>
                053-558-5959
              </a>
            </div>
            <div
              className="col-auto"
              style={{
                fontSize: "10px",
                padding: "11px 0 11px 0",
                color: "#d2d2d2",
              }}
            >
              <a
                href="https://fb.com/templatemo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-facebook me-3 whiteLink"></i>
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-instagram me-3 whiteLink"></i>
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-twitter-x me-3 whiteLink"></i>
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-linkedin me-3 whiteLink"></i>
              </a>
              <Link to="/admin" className="whiteLink">
                <i className="bi bi-key-fill link"></i>
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-white shadow">
          <div className="container">
            {path === "/admin" || path === "/addProducts" || path === "/addDelivery" ? <AdminMenu /> : <Menu />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
