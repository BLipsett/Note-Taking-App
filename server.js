const express = require("express");
let PORT = process.env.PORT || 8088;
let path = require("path")

const app = express();
app.use(express.static("./Develope/public"));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./Routes/apiRoutes")(app);
require("./Routes/htmlRoutes")(app);

// app.get("/", function (req, res) {
//     res.sendFile(path.join(__dirname, "./public/index.html"));
// });


// app.get("/notes", function (req, res) {
//     res.sendFile(path.join(__dirname, "./public/notes.html"))
// });

app.listen(PORT, function () {
    console.log(`Hello word ha not world at ${PORT}`);
});



