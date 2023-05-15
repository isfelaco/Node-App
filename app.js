const express = require("express");
const app = express();
var path = require("path");
const router = express.Router();

const siteMap = {
	"/": "/views/index.html",
	"/about": "/views/about.html",
};

for (const [key, value] of Object.entries(siteMap)) {
	router.get(key, function (req, res) {
		res.sendFile(path.join(__dirname + value));
	});
}

app.use(express.static(path.join(__dirname, "/public")));
app.use("/", router);
app.listen(process.env.port || 3000);

console.log("Running at Port 3000");
