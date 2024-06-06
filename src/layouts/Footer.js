import React from "react";

const Footer = () => {
  return (
    <div className="bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-md-4 pt-5">
            <h2 className="h2 border-bottom pb-4 border-light fw-bold" style={{color:'#59ab6e'}}>
              DIS
            </h2>
            <ul className="list-unstyled text-light footer-link-list">
              <li className="mt-4 mb-3">
                <i className="bi bi-geo-alt-fill me-2"></i>
                대구광역시 달서구 야외음악당로41길 6
              </li>
              <li className="my-3">
                <i className="bi bi-telephone-fill me-2"></i>
                <a className="whiteLink" href="tel:053-558-5959">
                  053-558-5959
                </a>
              </li>
              <li>
                <i className="bi bi-envelope-fill me-2"></i>
                <a
                  className="whiteLink"
                  href="mailto:mydis119@naver.com"
                >
                  mydis119@naver.com
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-4 pt-5">
            <h2 className="h2 text-light border-bottom pb-4 border-light">
              사업분야
            </h2>
            <ul className="list-unstyled text-light footer-link-list">
              <li className="mt-4 mb-3">
                <a href="/product_detail.aspx?product=signage/riccoboard" className="whiteLink">
                  RiccoBoard (릭코보드)
                </a>
              </li>
              <li className="my-3">
                <a href="/product_detail.aspx?product=signage/kiosk" className="whiteLink">
                  KIOSK (키오스크)
                </a>
              </li>
              <li className="my-3">
                <a href="/product_detail.aspx?product=signage/videowall" className="whiteLink">
                  비디오월
                </a>
              </li>
              <li className="my-3">
                <a href="/product_detail.aspx?product=school/studycafe" className="whiteLink">
                  스터디카페
                </a>
              </li>
              <li className="my-3">
                <a href="/product_detail.aspx?product=school/inout" className="whiteLink">
                  기숙사 입퇴실관리
                </a>
              </li>
              <li>
                <a href="/product_detail.aspx?product=school/meal" className="whiteLink">식수관리</a>
              </li>
            </ul>
          </div>

          <div className="col-md-4 pt-5">
            <h2 className="h2 text-light border-bottom pb-4 border-light">
              &nbsp;
            </h2>
            <ul className="list-unstyled text-light footer-link-list">
              <li className="my-3">
                <a href="/product_detail.aspx?product=parking/vsignage" className="whiteLink">
                  세로형 사이니지
                </a>
              </li>
              <li className="my-3">
                <a href="/product_detail.aspx?product=parking/led" className="whiteLink">
                  LED 전광판형
                </a>
              </li>
              <li className="my-3">
                <a href="/product_detail.aspx?product=customsignage/customkiosk" className="whiteLink">
                  맞춤형 KIOSK (키오스크)
                </a>
              </li>
              <li className="my-3">
                <a href="/product_detail.aspx?product=customsignage/twoway" className="whiteLink">
                  맞춤형 (가로 세로)
                </a>
              </li>
              <li>
                <a href="/product_detail.aspx?product=customsignage/desk" className="whiteLink">
                  맞춤형 (데스크)
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="row text-light mb-4">
          <div className="col-12 mb-3">
            <div className="w-100 my-3 border-top border-light"></div>
          </div>
          <div className="col-auto me-auto">
            <ul className="list-inline text-left footer-icons">
              <li className="list-inline-item">
                <a
                  className="text-light"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://facebook.com/"
                >
                  <i className="bi bi-facebook whiteLink"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  className="text-light"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/"
                >
                  <i className="bi bi-instagram whiteLink"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  className="text-light text-decoration-none"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com/"
                >
                  <i className="bi bi-twitter-x whiteLink"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  className="text-light text-decoration-none"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/"
                >
                  <i className="bi bi-linkedin whiteLink"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-auto">
            <button
              type="button"
              className="btn btn-success btn-lg px-3"
              href="/contact.aspx"
            >
              구매문의
            </button>
          </div>
        </div>
      </div>

      <div className="w-100 bg-black py-3">
          <div className="container">
            <div className="row pt-2">
              <div className="col-12">
                <p className="text-left text-light">
                  Copyright &copy; 2024 DIS | Developed & Designed by{" "}
                  <a
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/pjh3152/"
                    target="_blank"
                    className="whiteLink"
                    style={{textDecoration:'underline'}}
                  >
                    Jaehyung Park
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Footer;
