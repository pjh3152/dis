const db = require("./database");

const query = {
  // 관리자 로그인
  login: async (req) => {
    return await db.execute(
      "SELECT d_id FROM t_admin WHERE d_id = ? AND d_pwd = ?",
      [req.query.id, req.query.pwd]
    );
  },
  // 사업분야 등록 (관리자)
  addProducts: async (req) => {
    const d = req.body;
    const f = req.files;
    let num = 1;

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
};

module.exports = { query };
