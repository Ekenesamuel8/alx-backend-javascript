const express = require("express");
const app = express();
const PORT = 7865;

app.get("/", (req, res) => {
	res.send("Welcome to the payment system");
});

app.get("/cart/:id", (req, res) => {
	const id = req.params.id;
	// validate that id is a number
	if (!/^\d+$/.test(id)) {
		return res.status(404).send("Not Found");
	}
	res.send(`Payment methods for cart ${id}`);
});
app.listen(PORT, () => {
	console.log(`API available on localhost port ${PORT}`);
});