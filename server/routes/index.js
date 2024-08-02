var express = require("express");
var router = express.Router();

const pool = require("../data/dbconfig.js");
/* GET home page. */
router.get("/", function (req, res, next) {
	res.render("index", { title: "Express" });
});

// GET all users
router.get("/test", async function (req, res, next) {
	try {
		const result = await pool.query("SELECT NOW()");
		res.send(result.rows);
	} catch (err) {
		console.error(err);
		res.status(500).send("Database error");
	}
});

module.exports = router;
