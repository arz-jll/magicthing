const path = require("path");
const express = require('express')
const index = require("./templates/index.pug")
const login = require("./templates/login.pug")
const app = express()
const port = 80

app.use("/static",express.static(path.join(__dirname,'./static'),{
}));
app.get('/', (req, res) => {
    const username = req.query.name ?? "Todd ssssssTML"
    res.send(index({name:username}))
})
app.get('/login',(req, res) => {
    let msg = req.query?.msg ?? "";
    res.send(login({msg}))
})
app.listen(port, () => {
    console.log("Up!");
})