var express = require('express');
var bodyParser = require('body-parser');
var app = express();
const cors = require('cors')

app.use(cors())

var subscriptionRouter = require("./routers/subscriptionRouter");
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
app.get("",(req, res)=>{
    res.send("hi")
})

app.use("/api/subscriptions",subscriptionRouter);


let port = process.env.PORT || 4000;
app.listen(port, ()=>{
    console.log("Listening on port "+port);
})


module.exports = app;