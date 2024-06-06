import React from 'react';

const Product = () => {
  return (
    <div>
      <div className="container py-5">
        {/* <div className="row">
            
            <div className="col-lg-3">
              <h1 className="h3 text-success mb-4"><i className="bi bi-dot"></i>사업분야</h1>
            </div>

            <div className="col-lg-12">

                <div className="row mb-2">
                  <p className="h3 text-secondary"><b><i className="bi bi-folder"></i> 사이니지 디지털게시판</b></p>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <div className="card mb-4 product-wap rounded-3 shadow">
                            <div className="card rounded-3">
                                <a href="/product_detail.aspx?product=signage/riccoboard">
                                  <img className="card-img rounded-3 img-fluid" src={require('../assets/product/사이니지 디지털게시판/RiccoBoard (릭코보드)/cover.jpg')} id="product_pic" alt="img" />
                                  <div className="card-img-overlay rounded-3 product-overlay d-flex align-items-center justify-content-center"></div>
                                </a>
                            </div>
                            <div className="card-text h4 ps-4 pt-3 pb-1">
                                <p>RiccoBoard (릭코보드)</p>
                                <p>사이니지 운영솔루션 (S/W)</p>                              
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card mb-4 product-wap rounded-3 shadow">
                            <div className="card rounded-3">
                                <a href="/product_detail.aspx?product=signage/kiosk">
                                  <img className="card-img rounded-3 img-fluid" src={require('../assets/product/사이니지 디지털게시판/KIOSK (키오스크)/cover.jpg')} id="product_pic" alt="img" />
                                  <div className="card-img-overlay rounded-3 product-overlay d-flex align-items-center justify-content-center"></div>
                                </a>
                            </div>
                            <div className="card-text h4 ps-4 pt-3 pb-1">
                                <p>KIOSK (키오스크)</p>
                                <p>interactive kiosk</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-4">
                        <div className="card mb-4 product-wap rounded-3 shadow">
                            <div className="card rounded-3">
                                <a href="/product_detail.aspx?product=signage/videowall">
                                  <img className="card-img rounded-3 img-fluid" src={require('../assets/product/사이니지 디지털게시판/비디오월/cover.jpg')} id="product_pic" alt="img" />
                                  <div className="card-img-overlay rounded-3 product-overlay d-flex align-items-center justify-content-center"></div>
                                </a>
                            </div>
                            <div className="card-text h4 ps-4 pt-3 pb-1">
                                <p>비디오월</p>
                                <p>Video wall</p>
                            </div>
                        </div>
                    </div>
                </div>
   

                <div className="row mt-5 mb-2">
                  <p className="h3 text-secondary"><b><i className="bi bi-folder"></i> 학내 맞춤솔루션</b></p>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <div className="card mb-4 product-wap rounded-3 shadow">
                            <div className="card rounded-3">
                              <a href="/product_detail.aspx?product=school/studycafe">
                                <img className="card-img rounded-3 img-fluid" src={require('../assets/product/학내 맞춤솔루션/스터디카페/cover.jpg')} id="product_pic" alt="img" />
                                <div className="card-img-overlay rounded-3 product-overlay d-flex align-items-center justify-content-center"></div>
                              </a>
                            </div>
                            <div className="card-text h4 ps-4 pt-3 pb-1">
                                <p>스터디카페</p>
                                <p>study cafe</p>
                            </div>
                        </div>
                    </div>
    
                    <div className="col-md-4">
                        <div className="card mb-4 product-wap rounded-3 shadow">
                            <div className="card rounded-3">
                              <a href="/product_detail.aspx?product=school/inout">
                                <img className="card-img rounded-3 img-fluid" src={require('../assets/product/학내 맞춤솔루션/기숙사 입퇴실관리/cover.jpg')} id="product_pic" alt="img" />
                                <div className="card-img-overlay rounded-3 product-overlay d-flex align-items-center justify-content-center"></div>
                              </a>
                            </div>
                            <div className="card-text h4 ps-4 pt-3 pb-1">
                                <p>기숙사 입퇴실관리</p>
                                <p>entry/exit management</p>
                            </div>
                        </div>
                    </div>
                        
                    <div className="col-md-4">
                        <div className="card mb-4 product-wap rounded-3 shadow">
                            <div className="card rounded-3">
                              <a href="/product_detail.aspx?product=school/meal">
                                <img className="card-img rounded-3 img-fluid" src={require('../assets/product/학내 맞춤솔루션/식수관리/cover.jpg')} id="product_pic" alt="img" />
                                <div className="card-img-overlay rounded-3 product-overlay d-flex align-items-center justify-content-center"></div>
                              </a>
                            </div>
                            <div className="card-text h4 ps-4 pt-3 pb-1">
                                <p>식수관리</p>
                                <p>restaurant management system</p>
                            </div>
                        </div>
                    </div>
                </div>

                   

                <div className="row mt-5 mb-2">
                  <p className="h3 text-secondary"><b><i className="bi bi-folder"></i> 주차관제</b></p>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <div className="card mb-4 product-wap rounded-3 shadow">
                            <div className="card rounded-3">
                              <a href="/product_detail.aspx?product=parking/vsignage">
                                <img className="card-img rounded-3 img-fluid" src={require('../assets/product/주차관제/세로형 사이니지/cover.jpg')} id="product_pic" alt="img" />
                                <div className="card-img-overlay rounded-3 product-overlay d-flex align-items-center justify-content-center"></div>
                              </a>
                            </div>
                            <div className="card-text h4 ps-4 pt-3 pb-1">
                                <p>세로형 사이니지</p>
                                <p>android set-top box</p>
                            </div>
                        </div>
                    </div>
      
                    <div className="col-md-4">
                        <div className="card mb-4 product-wap rounded-3 shadow">
                            <div className="card rounded-3">
                              <a href="/product_detail.aspx?product=parking/led">
                                <img className="card-img rounded-3 img-fluid" src={require('../assets/product/주차관제/LED 전광판형/cover.jpg')} id="product_pic" alt="img" />
                                <div className="card-img-overlay rounded-3 product-overlay d-flex align-items-center justify-content-center"></div>
                              </a>
                            </div>
                            <div className="card-text h4 ps-4 pt-3 pb-1">
                                <p>LED 전광판형</p>
                                <p>interactive kiosk</p>
                            </div>
                        </div>
                    </div>
                </div>

                   

                <div className="row mt-5 mb-2">
                  <p className="h3 text-secondary"><b><i className="bi bi-folder"></i> 맞춤형 사이니지</b></p>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <div className="card mb-4 product-wap rounded-3 shadow">
                            <div className="card rounded-3">
                              <a href="/product_detail.aspx?product=customsignage/customkiosk">
                                <img className="card-img rounded-3 img-fluid" src={require('../assets/product/맞춤형 사이니지/KIOSK (키오스크)/cover.jpg')} id="product_pic" alt="img" />
                                <div className="card-img-overlay rounded-3 product-overlay d-flex align-items-center justify-content-center"></div>
                              </a>
                            </div>
                            <div className="card-text h4 ps-4 pt-3 pb-1">
                                <p>KIOSK (키오스크)</p>
                                <p>interactive kiosk</p>
                            </div>
                        </div>
                    </div>
      
                    <div className="col-md-4">
                        <div className="card mb-4 product-wap rounded-3 shadow">
                            <div className="card rounded-3">
                              <a href="/product_detail.aspx?product=customsignage/twoway">
                                <img className="card-img rounded-3 img-fluid" src={require('../assets/product/맞춤형 사이니지/가로 세로형/cover.jpg')} id="product_pic" alt="img" />
                                <div className="card-img-overlay rounded-3 product-overlay d-flex align-items-center justify-content-center"></div>
                              </a>
                            </div>
                            <div className="card-text h4 ps-4 pt-3 pb-1">
                                <p>가로 세로형</p>
                                <p>horizontal and vertical</p>
                            </div>
                        </div>
                    </div>
                          
                    <div className="col-md-4">
                        <div className="card mb-4 product-wap rounded-3 shadow">
                            <div className="card rounded-3">
                              <a href="/product_detail.aspx?product=customsignage/desk">
                                <img className="card-img rounded-3 img-fluid" src={require('../assets/product/맞춤형 사이니지/데스크형/cover.jpg')} id="product_pic" alt="img" />
                                <div className="card-img-overlay rounded-3 product-overlay d-flex align-items-center justify-content-center"></div>
                              </a>
                            </div>
                            <div className="card-text h4 ps-4 pt-3 pb-1">
                                <p>데스크형</p>
                                <p>desk type</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div> */}
    </div> 
    </div>
  )
}

export default Product