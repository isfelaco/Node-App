var contentMap = {
	"/": "<h1>Hey there</h1>",
	"/hi": "<h1>hi</h1>",
};

function showPage(response, pathname) {
	if (contentMap[pathname]) {
		response.writeHead(200, { "Content-Type": "text/html" });
		response.write(contentMap[pathname]);
		response.end();
	} else {
		response.writeHead(404, { "Content-Type": "text/html" });
		response.write("404 Page not found");
		response.end();
	}
}
exports.showPage = showPage;
