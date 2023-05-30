var express = require("express");
var router = express.Router();

const { getPelanggan, RegisterPelanggan, LoginPelanggan, token, Logout } = require("./controller");
const VerifyToken = require("../../middleware/VerifyToken.js");

/* GET home page. */
router.get("/pelanggan", VerifyToken, getPelanggan);
router.post("/register", RegisterPelanggan);
router.post("/login", LoginPelanggan);
router.get("/token", token);
router.delete("/logout", Logout);

module.exports = router;
