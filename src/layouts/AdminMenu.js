import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const AdminMenu = () => {
  const [dropDown, setDropDown] = useState(null);

  // 로그인 여부에 따라 메뉴의 드랍다운 기능을 처리한다.
  useEffect(() => {
    if (sessionStorage.getItem("login") !== null) {
      setDropDown("dropdown");
    } else {
      setDropDown(null);
    }
  }, [sessionStorage.getItem("login")]);

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
          <div className="h4" data-bs-toggle={dropDown}>
            <a href="#!" className="blackLink">
              사업분야
            </a>
          </div>
          <ul className="dropdown-menu mt-3">
            <li>
              <div className="dropdown-item blackLink">
                <Link to="/addProducts" state={{ area: "signage" }}>
                  사이니지 디지털게시판
                </Link>
              </div>
            </li>
            <li>
              <div className="dropdown-item blackLink">
                <Link to="/addProducts" state={{ area: "school" }}>
                  학내 맞춤솔루션
                </Link>
              </div>
            </li>
            <li>
              <div className="dropdown-item blackLink">
                <Link to="/addProducts" state={{ area: "parking" }}>
                  주차관제
                </Link>
              </div>
            </li>
            <li>
              <div className="dropdown-item blackLink">
                <Link to="/addProducts" state={{ area: "customSignage" }}>
                  맞춤형 사이니지
                </Link>
              </div>
            </li>
          </ul>
        </div>
        <div className="mx-3">
          <Link to="/delivery" className="h4 blackLink">
            납품현황
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminMenu;
