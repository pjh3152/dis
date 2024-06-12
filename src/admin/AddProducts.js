import axios from "axios";
import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Swal from "sweetalert2";

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
  const [selNum, setSelNum] = useState(0);
  const [saveBtn, setSaveBtn] = useState("저 장");

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
    checkRef.current.forEach((c) => {
      if (c) {
        c.checked = false;
      }
    });

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

    // 신규등록
    if (selNum <= 0) {
      if (!title || coverFile.length <= 0 || contentFile.length <= 0) {
        return;
      }
    } else {
      if (!title) return;
    }

    const form = new FormData();

    form.append("area", location.state.area);
    form.append("title", title);
    form.append("num", selNum); // selNum 이 있을경우 수정으로 처리한다.

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

    setSelNum(0);
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

  // 비우기
  const clearBtnClicked = () => {
    setSelNum(0);
    setInput({
      ...input,
      title: "",
      coverFile: [],
      contentFile: [],
    });

    // input 들을 초기화한다.
    inputRef.current.map((ref) => (ref.value = ""));
    setSaveBtn("저 장");
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
      Swal.fire({ title: "이동할 항목을 하나만 선택해 주세요!" });
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

  // 상세보기
  const detailItem = async () => {
    let count = 0;
    let num = 0;

    checkRef.current.forEach((c) => {
      if (c.checked) {
        count += 1;
        num = c.value;
      }
    });

    if (count > 1) {
      Swal.fire({ title: "수정할 항목은 하나만 선택해 주세요!" });
      return;
    }

    if (num <= 0) return;

    const result = await axios.get("/detailProduct", {
      params: { area: location.state.area, num },
    });

    if (result.data.length > 0) {
      setSelNum(num);
      setInput({ ...input, title: result.data[0].d_title });
      setSaveBtn("수 정");
      setFormView(true);
    }
  };

  // 삭제
  const deleteItem = () => {
    let count = 0;
    let selectedItems = [];

    checkRef.current.forEach((c) => {
      if (c && c.checked) {
        count += 1;
        selectedItems.push(c.value);
      }
    });

    if (count <= 0) return;

    Swal.fire({
      title: "정말 삭제하시겠습니까?777",
      text: "삭제한 데이터는 복구할 수 없습니다!",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then(async (result) => {
      if (result.isConfirmed) {
        // data 로 보내면 body 로 받을 수 있음 (기본적으로 delete 에는 body 가 없음)
        await axios.delete("/deleteProduct", {
          data: {
            area: location.state.area,
            items: selectedItems,
          },
        });

        getData();
      }
    });
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
                    value={input.title}
                  />
                  <label htmlFor="title">제목</label>
                </div>
              </div>
              <div className="col-12 col-md-7 col-xl-7">
                <label
                  htmlFor="coverFile"
                  className="form-label mt-4 ms-2"
                  style={{ cursor: "pointer" }}
                >
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
                <label
                  htmlFor="contentFile"
                  className="form-label mt-3 ms-2"
                  style={{ cursor: "pointer" }}
                >
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
                  className="btn btn-primary mt-4 w-25 me-4"
                  onClick={saveBtnClicked}
                >
                  {saveBtn}
                </button>
                <button
                  className="btn btn-primary mt-4 w-25"
                  onClick={clearBtnClicked}
                >
                  비우기
                </button>
              </div>
            </div>
          )}
        </div>

        {/* 이동, 수정, 삭제버튼 */}

        <p className="text-center mb-4">
          <button
            className="btn btn-primary me-4"
            onClick={() => moveProduct("forward")}
          >
            Forward
          </button>
          <button
            className="btn btn-primary me-4"
            onClick={() => moveProduct("backward")}
          >
            Backward
          </button>
          <button className="btn btn-primary me-4" onClick={detailItem}>
            Edit
          </button>
          <button className="btn btn-primary me-4" onClick={deleteItem}>
            Delete
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
