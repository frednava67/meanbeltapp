const express = require("express");
const app = express();
const bodyParser = require('body-parser');

// configure body-parser to read JSON
app.use(bodyParser.json());
app.use(express.static( __dirname + '/public/dist/public' ));

// app.all("*", (req,res,next) => {
//     res.sendFile(path.resolve("./public/dist/public/index.html"))
// });

//your ejs configuratioins lines MUST come before your require("routes")(app)
app.set("views", __dirname+"/views");
app.set("view engine", "ejs");

require("./config/routes")(app);

app.listen(8000, ()=>{
    console.log("Listening on port 8000")
})