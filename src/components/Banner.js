import React from "react";
import Slider from "react-slick";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    arrows: false,
    centerMode: true,
    centerPadding: "0px",
    pauseOnHover: false,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings} style={{ background: "#efefef" }}>
      <div className="row d-flex">
        <div className="col-md d-flex justify-content-end align-items-center me-5">
          <div className="text-start">
            <h1 className="h1 text-success">
              <b>사이니지 / 디지털게시판</b>
            </h1>
            <h3 className="h2">안드로이드 셋탑 | 키오스크 | 비디오월</h3>
            <p className="h4 mt-3">
              여러 형태의 다양한 디스플레이 제품에 맞는 솔루션 개발.
            </p>
            <p className="h4">시공·관리·유지보수에 편리한 시스템 구축 및 환경을 지원합니다.</p>
          </div>
        </div>
        <div className="col-md">
          <img src={require('../assets/images/signage.png')} className="img-fluid w-75" alt="img" />          
        </div>
      </div>

      <div className="row d-flex">
        <div className="col-md d-flex justify-content-end align-items-center me-5">
          <div className="text-start">
            <h1 className="h1 text-success">
              <b>학내 맞춤솔루션</b>
            </h1>
            <h3 className="h2">스터디카페 | 기숙사 입퇴실관리 | 식수관리</h3>
            <p className="h4 mt-3">
              카드, 지문인식 단말기와 연동하여 실시간 정보를 제공하며 높은
            </p>
            <p className="h4">
              안정성과 편의성을 바탕으로 현장에 최적화된 전용 솔루션을
              제공합니다.
            </p>
          </div>
        </div>
        <div className="col-md">
          <img src={require('../assets/images/school.png')} className="img-fluid w-75" alt="img" />
        </div>
      </div>

      <div className="row d-flex">
        <div className="col-md d-flex justify-content-end align-items-center me-5">
          <div className="text-start">
            <h1 className="h1 text-success">
              <b>주차관제</b>
            </h1>
            <h3 className="h2">세로형 사이니지 | LED 전광판형</h3>
            <p className="h4 mt-3">
              Smart 주차관제 솔루션과 연동하여 정확한 입출차 차량 관제 및 운영.
            </p>
            <p className="h4">
              주차관제와 함께 높은 시인성의 인포메이션 시스템이 통합되어
              있습니다.
            </p>
          </div>
        </div>
        <div className="col-md">
          <img
            src={require('../assets/images/parking_portrait.png')}
            className="img-fluid w-75"
            alt="img"
          />
        </div>
      </div>

      <div className="row d-flex">
        <div className="col-md d-flex justify-content-end align-items-center me-5">
          <div className="text-start">
            <h1 className="h1 text-success">
              <b>맞춤형 사이니지</b>
            </h1>
            <h3 className="h2">키오스크 | 가로, 세로형 | 데스크형</h3>
            <p className="h4 mt-3">
              여러형태의 다양한 디스플레이 제품을 맞춤설계 및 컨설팅 합니다.
            </p>
            <p className="h4">최소한의 비용으로 합리적인 시스템 구축을 지원합니다.</p>
          </div>
        </div>
        <div className="col-md">
          <img src={require('../assets/images/signage2.png')} className="img-fluid w-75" alt="img" />
        </div>
      </div>

      <div className="row d-flex">
        <div className="col-md d-flex justify-content-end align-items-center me-5">
          <div className="text-start">
            <h1 className="h1 text-success">
              <b>소프트웨어 제작의뢰</b>
            </h1>
            <h3 className="h2">맞춤형 | 웹 및 응용프로그램 | DB 연동</h3>
            <p className="h4 mt-3">
              여러 형태의 다양한 디스플레이 제품에 맞는 솔루션 개발.
            </p>
            <p className="h4">고객의 요구사항에 가장 최적화된 S/W를 제공해 드립니다.</p>
          </div>
        </div>
        <div className="col-md">
          <img src={require('../assets/images/software.png')} className="img-fluid w-75" alt="img" />
        </div>
      </div>
    </Slider>
  );
};

export default Banner;
