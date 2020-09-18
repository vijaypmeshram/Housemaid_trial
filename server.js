const express = require('express')
const app = express();
const path = require('path');
const port = 8000;
const hostname = '127.0.0.1'

/*app.get('/demo', function (req, res) {
    res.status(200).render('demo', { title: 'Hey vijay', message: 'Hello there!' })
  })
*/
app.use("/public", express.static("public"));
app.use("/images", express.static("images"));

app.set("public", path.join(__dirname, "public"));
app.set("public/images", path.join(__dirname, "public/images"));

app.get(["/", "/home.html"], (req, res) => {
    res.sendFile(__dirname + "/public/home.html");
});
app.get("/css/home.css", (req, res) => {
    res.sendFile(__dirname + "/public/css/home.css");
});
app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/public/about.html");
});
app.get("/css/about.css", (req, res) => {
    res.sendFile(__dirname + "/public/css/about.css");
});
app.get("/css/services.css", (req, res) => {
    res.sendFile(__dirname + "/public/css/services.css");
});
app.get("/services", (req, res) => {
    res.sendFile(__dirname + "/public/services.html");
});

app.listen(port, hostname, () => {
    console.log(`app running on port ${port}`);
});