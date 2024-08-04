var express = require("express");
var router = express.Router();
var fs = require("fs");
var path = require("path");

const pool = require("../data/dbconfig.js");
console.log("POOL: ", pool.options);

const usersFilePath = path.join(__dirname, "../data/users.json");

console.log("usersFilePath: ", usersFilePath);

function readUsersFromFile(callback) {
	fs.readFile(usersFilePath, (err, data) => {
		if (err) {
			callback(err, null);
		} else {
			try {
				const jsonData = JSON.parse(data);
				callback(null, jsonData.users);
			} catch (parseErr) {
				callback(parseErr, null);
			}
		}
	});
}

function writeUsersToFile(users, callback) {
	const data = JSON.stringify({ users }, null, 2);
	fs.writeFile(usersFilePath, data, (err) => {
		callback(err);
	});
}

// GET all users
router.get("/", async function (req, res, next) {
	try {
		const result = await pool.query("SELECT * FROM public.users");
		console.log(typeof result.rows);
		res.send(result.rows);
	} catch (err) {
		console.error(err);
		res.status(500).send("Database error");
	}
});

// GET single user by ID
router.get("/api/users/:id", (req, res) => {
	readUsersFromFile((err, users) => {
		if (err) {
			return res.status(500).send("Failed to read users data");
		}
		const user = users.find((u) => u.id === parseInt(req.params.id));
		res.json(user || {});
	});
});

// ADD a new user
router.post("/api/users", (req, res) => {
	readUsersFromFile((err, users) => {
		if (err) {
			return res.status(500).send("Failed to read users data");
		}
		users.unshift(req.body); // add new user at the beginning of the array
		writeUsersToFile(users, (writeErr) => {
			if (writeErr) {
				return res.status(500).send("Failed to update users data");
			}
			res.json(users);
		});
	});
});

// DELETE a user
router.delete("/api/users/:id", (req, res) => {
	readUsersFromFile((err, users) => {
		if (err) {
			return res.status(500).send("Failed to read users data");
		}
		users = users.filter((u) => u.id !== parseInt(req.params.id));
		writeUsersToFile(users, (writeErr) => {
			if (writeErr) {
				return res.status(500).send("Failed to update users data");
			}
			res.send("User deleted!");
		});
	});
});

module.exports = router;
