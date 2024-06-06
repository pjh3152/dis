import React from "react";

const OurServices = () => {
  return (
    <div>
      <section className="container py-5">
        <div className="row text-center pt-5 pb-3">
          <div className="col-lg-6 m-auto">
            <h1 className="h1">Our Services</h1>
            <p>
              기술ㆍ미디어ㆍ공간을 하나로 연결하는 디지털 라이프를 선사합니다.
              <br />
              고객 맞춤 솔루션을 제공하기 위한 체계적인 가이드라인을 제시합니다.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-3 pb-5">
            <div className="h-100 py-5 services-icon-wap shadow rounded-3">
              <a href="product.aspx">
                <div className="h1 text-success text-center">
                  <i className="bi bi-badge-4k"></i>
                </div>
                <h2 className="h5 mt-4 text-center">사이니지 디지털게시판</h2>
              </a>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 pb-5">
            <div className="h-100 py-5 services-icon-wap shadow rounded-3">
              <a href="product.aspx">
                <div className="h1 text-success text-center">
                  <i className="bi bi-file-earmark"></i>
                </div>
                <h2 className="h5 mt-4 text-center">학내 맞춤솔루션</h2>
              </a>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 pb-5">
            <div className="h-100 py-5 services-icon-wap shadow rounded-3">
              <a href="product.aspx">
                <div className="h1 text-success text-center">
                  <i className="bi bi-truck"></i>
                </div>
                <h2 className="h5 mt-4 text-center">주차관제</h2>
              </a>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 pb-5">
            <div className="h-100 py-5 services-icon-wap shadow rounded-3">
              <a href="product.aspx">
                <div className="h1 text-success text-center">
                  <i className="bi bi-border-style"></i>
                </div>
                <h2 className="h5 mt-4 text-center">맞춤형 사이니지</h2>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurServices;
