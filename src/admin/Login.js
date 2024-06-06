import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const [input, setInput] = useState({
    id: "",
    pwd: "",
    msg: "",
  });

  const {id, pwd, msg} = input;

  useEffect(() => {
    if (sessionStorage.getItem("login") === null) {
      inputRef.current.focus();
    }
  }, [sessionStorage.getItem("login")]);

  const inputKeyDown = (e) => {
    if (e.key !== "Enter") return;

    loginBtnClicked();
  };

  const changedInput = (e) => {
    setInput({...input, [e.target.id]: e.target.value});
  };

  // 로그인 처리
  const loginBtnClicked = async () => {

    if (!id || !pwd) return;

    const result = await axios.get("/login", {
      params: { id, pwd },
    });

    if (result.data.length <= 0) {
      setInput({...input, msg: "입력한 정보가 올바르지 않습니다!"});
      return;
    }

    sessionStorage.setItem("login", result.data[0].d_id);
    setInput({...input, msg:""});
    navigate("/admin");   // 관리자 메뉴 활성화를 위해 처리
  };

  // 로그아웃
  const logoutBtnClicked = () => {
    sessionStorage.removeItem("login");
    setInput({...input, msg:""});
    navigate("/admin");   // 관리자 메뉴 비활성화를 위해 처리
  };

  const cancelBtnClicked = () => {
    navigate("/");
  };

  return (
    <div className="container d-flex justify-content-center">
      <div className="bg-light mt-5 py-4 text-center border rounded-3 shadow" style={{width:'350px'}}>
        <p className="text-danger">{input.msg}</p>
        <p>
          <i className="bi bi-lock me-2"></i>관리자 로그인
        </p>

        {sessionStorage.getItem("login") !== null ? (
          <div>
            <p className="mt-5 mb-3">로그인 되었습니다.</p>
            <p>
              <button
                className="btn btn-success rounded-3 shadow mt-3"
                style={{ width: "95px" }}
                onClick={logoutBtnClicked}
              >
                로그아웃
              </button>
            </p>
          </div>
        ) : (
          <span>
            <p>
              <input
                type="text"
                ref={inputRef}
                id="id"
                placeholder="아이디"
                autoComplete="off"
                onChange={changedInput}
                onKeyDown={inputKeyDown}
              />
            </p>
            <p>
              <input
                type="password"
                id="pwd"
                placeholder="비밀번호"
                onChange={changedInput}
                onKeyDown={inputKeyDown}
              />
            </p>
            <p>
              <button
                className="btn btn-success rounded-3 shadow mt-3"
                style={{ width: "80px" }}
                onClick={loginBtnClicked}
              >
                로그인
              </button>
              <button
                className="btn btn-success rounded-3 shadow mt-3 ms-4"
                style={{ width: "80px" }}
                onClick={cancelBtnClicked}
              >
                취 소
              </button>
            </p>
          </span>
        )}
      </div>
    </div>
  );
};

export default Login;
