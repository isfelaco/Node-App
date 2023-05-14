const express = require("express");
const app = express();
var path = require("path");
const router = express.Router();

router.get("/", function (req, res) {
	res.sendFile(path.join(__dirname + "/views/index.html"));
	//__dirname : It will resolve to your project folder.
});

router.get("/about", function (req, res) {
	res.sendFile(path.join(__dirname + "/views/about.html"));
});

router.get("/sitemap", function (req, res) {
	res.sendFile(path.join(__dirname + "/views/sitemap.html"));
});

app.use(express.static(path.join(__dirname, "/public")));
app.use("/", router);
app.listen(process.env.port || 3000);

console.log("Running at Port 3000");
