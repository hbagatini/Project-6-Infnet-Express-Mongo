const express = require("express");
const router = express.Router();

router.get("/", async(req, res) => {
    res.send("Olá pessoal!!!")
})

module.exports = router;