import React from "react";
import Footer from "../layouts/Footer";
import OurServices from "../components/OurServices";

const About = () => {
  return (
    <div>
      <section className="py-5" style={{ backgroundColor: "#59ab6e" }}>
        <div className="container">
          <div className="row align-items-center py-5">
            <div className="col-md-8 text-white">
              <h1>
                <b>About Us</b>
              </h1>
              <br />
              <h4>
                <b>디지털 사이니지 전문 기업, DIS</b>
              </h4>
              <br />
              <h5>
                <p>
                  공공기관, 학교, 기업, 쇼핑몰 등 다양한 공간과 특성에 맞는
                  디스플레이 구축과,
                </p>
                <p>
                  맞춤 솔루션 기획, 소프트웨어 개발까지 최고의 서비스 가치
                  실현을 약속 드립니다.
                </p>
                <p>
                  고객의 요구사항에 맞춰 제품개발부터 제작, 설치와 인테리어까지
                  전 과정을 책임집니다.
                </p>
                <p>
                  다년간의 노하우를 바탕으로 고객의 요구사항에 맞는 가장 적합한
                  소프트웨어 및 시스템
                </p>
                <p>구성을 제안합니다.</p>
              </h5>
            </div>
            <div className="col-md-4">
              <img
                className="img-fluid"
                src={require("../assets/images/about.png")}
                alt="about"
              />
            </div>
          </div>
        </div>
      </section>

      <OurServices />

      <Footer />
    </div>
  );
};

export default About;
