const { MongoClient } = require("mongodb");

const client = MongoClient();
const myDB = client.db("myDB");
const myColl = myDB.collection("fruits");

module.exports = (app) => {
	app.get("/api/todo", async (req, res) => {
		const toDo = await myColl.find(req);

		res.send(toDo);
	});
	app.post("/api/todo", async (req, res) => {
		const { name, todo } = req.body;
		const toDo = myColl.insertOne({
			name,
			todo,
			date: Date.now(),
		});
	});
};