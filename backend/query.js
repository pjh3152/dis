const db = require("./database");
const fs = require("fs");

const query = {
  // 관리자 로그인
  login: async (req) => {
    return await db.execute(
      "SELECT d_id FROM t_admin WHERE d_id = ? AND d_pwd = ?",
      [req.query.id, req.query.pwd]
    );
  },
  // 사업분야 등록, 수정 (관리자)
  addProducts: async (req) => {
    const d = req.body;
    const f = req.files;
    let num = 1;

    // 신규등록
    if (d.num <= 0) {
      const result = await db.execute(
        "SELECT d_num FROM t_product WHERE d_area = ? ORDER BY d_Num DESC LIMIT 1",
        [d.area]
      );

      if (result.length > 0) {
        num = parseInt(result[0].d_num) + 1;
      }

      try {
        await db.execute(
          "INSERT INTO t_product(d_area, d_num, d_title, d_cover, d_content)VALUES(?,?,?,?,?)",
          [d.area, num, d.title, f[0].filename, f[1].filename]
        );
        return "success";
      } catch (err) {
        return err;
      }

      // 수정
    } else {
      num = Number(d.num);

      let query = "UPDATE t_product SET d_title = '" + d.title + "'";

      if(!f && !f[0]) {query += ",d_cover = '" + f[0].filename + "'";}
      if(!f && !f[1]) {query += ",d_content = '" + f[1].filename + "'";}

      query += " WHERE d_area = '" + d.area + "' AND d_num = " + num;
      
      try {
        await db.execute(query);
        return "success";
      } catch (err) {
        return err;
      }
    }
  },
  // 사업분야 목록 (관리자)
  getProducts: async (req) => {
    return await db.execute(
      "SELECT * FROM t_product WHERE d_area = ? ORDER BY d_Num DESC",
      [req.query.area]
    );
  },
  // 사업분야 항목이동 (관리자)
  moveProduct: async (req) => {
    const d = req.body;
    let result = null;
    let number = 0;

    if (d.dir === "forward") {
      result = await db.execute(
        "SELECT d_num FROM t_product WHERE d_area = ? AND d_num > ? ORDER BY d_num ASC LIMIT 1",
        [d.area, d.num]
      );
    } else {
      result = await db.execute(
        "SELECT d_num FROM t_product WHERE d_area = ? AND d_num < ? ORDER BY d_num DESC LIMIT 1",
        [d.area, d.num]
      );
    }
    if (result.length > 0) {
      // 이동할 곳의 번호
      number = result[0].d_num;
      // 이동할 곳의 번호를 임의로 0으로 변경
      await db.execute(
        "UPDATE t_product SET d_num = 0 WHERE d_area = ? AND d_num = ?",
        [d.area, number]
      );
      // 이동
      await db.execute(
        "UPDATE t_product SET d_num = ? WHERE d_area = ? AND d_num = ?",
        [number, d.area, d.num]
      );
      // 0으로 변경했던 것을 이동한 곳의 번호로 변경
      await db.execute(
        "UPDATE t_product SET d_num = ? WHERE d_area = ? AND d_num = 0",
        [d.num, d.area]
      );

      return "success";
    }
  },
  // 사업분야 삭제 (관리자)
  deleteProduct: async (req) => {
    const d = req.body;
    let result = null;

    d.items.forEach(async (num) => {
      num = Number(num);

      result = await db.execute(
        "SELECT d_cover, d_content FROM t_product WHERE d_area = ? AND d_num = ?",
        [d.area, num]
      );

      // 파일삭제
      if (result) {
        result.forEach(async (file) => {
          if (fs.existsSync("./Upload/" + file.d_cover)) {
            fs.unlinkSync("./Upload/" + file.d_cover);
          }
          if (fs.existsSync("./Upload/" + file.d_content)) {
            fs.unlinkSync("./Upload/" + file.d_content);
          }
        });
      }

      // 데이터삭제
      try {
        await db.execute(
          "DELETE FROM t_product WHERE d_area = ? AND d_num = ?",
          [d.area, num]
        );
        await db.execute(
          "UPDATE t_product SET d_num = d_num - 1 WHERE d_area = ? AND d_num > ?",
          [d.area, num]
        );
        return "success";
      } catch {
        return "failed";
      }
    });
  },
  // 사업분야 상세보기 (수정을 위해)
  detailProduct: async (req, res) => {
    return await db.execute(
      "SELECT * FROM t_product WHERE d_area = ? AND d_num = ?",
      [req.query.area, req.query.num]
    );
  },
};

module.exports = { query };
