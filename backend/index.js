const express = require("express");
const app = express();
const port = 8000;
const { query } = require("./query");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

// multer 는 한글파일명이 깨지지 않도록 1.4.4 버전으로 설치한다.
// npm i multer@1.4.4

// 폴더가 업을경우 생성
!fs.existsSync("./Upload") && fs.mkdirSync("./Upload");

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "./Upload");
  },
  filename(req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, path.basename(file.originalname, ext) + Date.now() + ext); // basename 은 확장자포함 파일명 여기에 두번째 인자로 확장자를 넣어주면 파일명만 돌려준다.
  },
});

const upload = multer({ storage: storage });

const multerMiddleware = upload.array("files");

// 정적파일 경로를 static 함수를 통해 설정한다 (이미지를 보여주기 위해)
app.use("/Upload", express.static("Upload"));
app.use(express.json());
app.use(multerMiddleware);

app.get("/", (req, res) => {
  res.send("server is started..");
});

// 관리자 로그인
app.get("/login", async (req, res) => {
  res.send(await query.login(req));
});

// 사업분야 등록 (관리자)
app.post("/addProducts", async (req, res) => {
  // console.log("here2");
  res.send(await query.addProducts(req));
});

// 사업분야 목록 (관리자)
app.get("/addProducts", async (req, res) => {
  res.send(await query.getProducts(req));
});

// 사업분야 항목이동 (관리자)
app.post("/moveProduct", async (req, res) => {
  res.send(await query.moveProduct(req));
})

app.listen(port, () => {
  console.log("server is started..");
});
