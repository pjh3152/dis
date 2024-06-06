import axios from "axios";
import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const AddProducts = () => {
  let area = null;
  const location = useLocation();

  // 참조 (리액트 여러개의 input 상태관리로 검색)
  // https://hihiha2.tistory.com/18
  const [input, setInput] = useState({
    title: "",
    coverFile: [],
    contentFile: [],
  });

  const [formView, setFormView] = useState(false);
  const [list, setList] = useState([]);

  // 초기화를 위해 input 들을 ref 배열로 관리한다.
  // ref={(el) => (inputRef.current[0] = el)}
  const inputRef = useRef([]);
  const checkRef = useRef([]);

  switch (location.state.area) {
    case "signage":
      area = "사이니지 디지털게시판";
      break;
    case "school":
      area = "학내 맞춤솔루션";
      break;
    case "parking":
      area = "주차관제";
      break;
    case "customSignage":
      area = "맞춤형 사이니지";
      break;
    default:
      area = "사이니지 디지털게시판";
      break;
  }

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, [location.state.area]);

  // 목록 불러오기
  const getData = async () => {

    checkRef.current.forEach((c) => {if(c) {c.checked = false}});

    const result = await axios.get("/addProducts", {
      params: { area: location.state.area },
    });
    setList(result.data);
  };

  // state 의 setInput 같은 함수를 setter 함수라고 한다.
  const inputChanged = (e) => {
    if (e.target.id === "title") {
      setInput({ ...input, [e.target.id]: e.target.value });
    } else {
      setInput({ ...input, [e.target.id]: e.target.files });
    }
  };

  // 저장
  const saveBtnClicked = async () => {
    // 구조분해할당
    const { title, coverFile, contentFile } = input;

    if (!title || coverFile.length <= 0 || contentFile.length <= 0) {
      return;
    }

    const form = new FormData();

    form.append("area", location.state.area);
    form.append("title", title);

    // 유사배열을 배열로 변환하기 위해 Array.from 을 사용한 후 form 에 append 한다.
    Array.from(coverFile).forEach((file) => form.append("files", file));
    Array.from(contentFile).forEach((file) => form.append("files", file));

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const result = await axios
      .post("/addProducts", form, config)
      .catch((err) => {
        console.log(err);
      });

    if (result.data !== "success") {
      console.log(result.data);
    }

    setInput({
      ...input,
      title: "",
      coverFile: [],
      contentFile: [],
    });

    // input 들을 초기화한다.
    inputRef.current.map((ref) => (ref.value = ""));

    getData();
  };

  const formViewChanged = () => {
    if (formView) {
      setFormView(false);
    } else {
      setFormView(true);
    }
  };

  // 항목 이동 (앞으로, 뒤로이동)
  const moveProduct = async (dir) => {
    let count = 0;
    let num = 0;
    let checkedIdx = 0;

    checkRef.current.forEach((c) => {
      if (c.checked) count += 1;
    });

    if (count > 1) {
      alert("이동할 항목을 하나만 선택해 주세요!");
      return;
    }

    checkRef.current.forEach((c, idx) => {
      if (c.checked) {
        num = c.value;
        checkedIdx = idx;
      }
    });

    if (dir === "forward") {
      if (checkedIdx - 1 < 0) return;
      checkedIdx -= 1;
    } else {
      if (checkedIdx + 1 > checkRef.current.length - 1) return;
      checkedIdx += 1;
    }

    if (num > 0) {
      const result = await axios.post("/moveProduct", {
        area: location.state.area,
        num,
        dir,
      });

      if (result.data === "success") {
        getData();

        // 이동된 항목에 체크
        checkRef.current.forEach((c, idx) => {
          if (checkedIdx === idx) c.checked = true;
        });
      }
    }
  };

  const checkItem = (idx) => {
    checkRef.current[idx].checked = !checkRef.current[idx].checked;
  };

  return (
    <section className="bg-light">
      <div className="container">
        <div className="mt-4">
          <h4
            className="fw-bold text-center text-muted mb-5 py-2 bg-primary bg-opacity-25 w-50 m-auto rounded-3 shadow"
            onClick={formViewChanged}
            style={{ webkitUserSelect: "none", cursor: "pointer" }}
          >
            {area}
          </h4>

          {/* 입력폼 */}

          {formView && (
            <div className="row w-50 m-auto justify-content-center py-4 mb-5 border shadow rounded-3">
              <div className="col col-md-7 col-xl-7">
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    id="title"
                    placeholder="제목"
                    maxLength="40"
                    style={{
                      height: "70px",
                      resize: "none",
                      overflow: "hidden",
                    }}
                    onChange={inputChanged}
                    ref={(el) => (inputRef.current[0] = el)}
                  />
                  <label htmlFor="title">제목</label>
                </div>
              </div>
              <div className="col-12 col-md-7 col-xl-7">
                <label htmlFor="coverFile" className="form-label mt-4 ms-2">
                  커버 이미지 선택
                </label>
                <input
                  type="file"
                  id="coverFile"
                  className="form-control"
                  onChange={inputChanged}
                  ref={(el) => (inputRef.current[1] = el)}
                />
              </div>
              <div className="col-12 col-md-7 col-xl-7">
                <label htmlFor="contentFile" className="form-label mt-3 ms-2">
                  내용 이미지 선택
                </label>
                <input
                  type="file"
                  id="contentFile"
                  className="form-control"
                  onChange={inputChanged}
                  ref={(el) => (inputRef.current[2] = el)}
                />
              </div>
              <div className="col-12 col-xl-7 text-center">
                <button
                  className="btn btn-primary mt-4 w-25"
                  onClick={saveBtnClicked}
                >
                  저 장
                </button>
              </div>
            </div>
          )}
        </div>

        {/* 이동버튼 */}

        <p className="text-center mb-4">
          <button
            className="btn btn-primary me-5"
            onClick={() => moveProduct("forward")}
          >
            Forward
          </button>
          <button
            className="btn btn-primary"
            onClick={() => moveProduct("backward")}
          >
            Backward
          </button>
        </p>

        {/* 목록 */}

        <div className="row justify-content-center">
          {list.map((d, idx) => {
            return (
              <div
                className="col-lg-4 d-flex flex-column align-items-center justify-content-center mb-3"
                key={d.d_num}
              >
                <input
                  type="checkbox"
                  ref={(el) => (checkRef.current[idx] = el)}
                  value={d.d_num}
                  style={{
                    zoom: "1.5",
                    marginRight: "5px",
                    marginBottom: "10px",
                    cursor: "pointer",
                  }}
                />
                <ProductCard data={d} idx={idx} checkItem={checkItem} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AddProducts;