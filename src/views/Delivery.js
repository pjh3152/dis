import React, { useState } from "react";
import axios from "axios";

const Delivery = () => {

  const [dirName, setDirName] = useState(null);
  const [dvList, setDvList] = useState([]);

  const selCategory = async (dir) => {

    // 선택한 카테고리 (사이니지, 학내 맞춤솔루션..)
    setDirName(dir);

    // 한글 파라미터 인코딩
    const result = await axios.get(`/delivery/${encodeURIComponent('./delivery/' + dir)}`).catch(err => {console.log(err);});
    if(!result) return;

    setDvList(result.data);
  };

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-2 my-5">
          <ul className="list-unstyled my-4">
            <li className="pb-4">
              <div
                className="h4 text-dark"
                onClick={() => {
                  selCategory("사이니지");
                }}
                style={{ cursor: "pointer" }}
              >
                <i className="bi bi-tv" style={{ margin: "0 7px 0 7px" }}></i>
                <b>사이니지</b>
              </div>
            </li>

            <li className="pb-4">
              <div
                className="h4 text-dark"
                onClick={ () => {selCategory('학내 맞춤솔루션') } }
                style={{cursor:'pointer'}}
              >
                <i
                  className="bi bi-file-earmark"
                  style={{ margin: "0 7px 0 7px" }}
                ></i>
                <b>학내 맞춤솔루션</b>
              </div>
            </li>

            <li className="pb-4">
              <div
                className="h4 text-dark"
                onClick={ () => {selCategory('주차관제') } }
                style={{cursor:'pointer'}}
              >
                <i className="bi bi-truck" style={{ margin: "0 7px 0 7px" }}></i>
                <b>주차관제</b>
              </div>
            </li>

            <li className="pb-4">
              <div
                className="h4 text-dark"
                onClick={ () => {selCategory('LED 전광판') } }
                style={{cursor:'pointer'}}
              >
                <i className="bi bi-border-style" style={{ margin: "0 7px 0 7px" }}></i>
                <b>LED 전광판</b>
              </div>
            </li>
          </ul>
        </div>

        {/* 내용 */}
        <div className="col-lg-10">

          { dirName }

          <div className="row">
            {
              dvList.map((path, idx) => {

                return(
                <div className="col-md-4" key={idx}>
                  /delivery/{dirName}/{path}/cover.jpg<br/>
                  
                  <img src={`/delivery/${dirName}/${path}/cover.jpg`} alt="cover" />
           
                </div>
                )                  
              })
            }

          </div>


        </div>
      </div>
    </div>
  );
};

export default Delivery;
