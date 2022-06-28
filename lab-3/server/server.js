const express = require("express");
const bodyParser = require('body-parser')
const sessions = require('express-session');
const cors = require("cors");
const fs = require('fs');
const config = require('../data.json');

let session;

const app = express();

let corsOptions = {
  origin: "http://localhost:8080"
};

app.use(cors(corsOptions));

 app.use(express.json());

const oneSess = 1000 * 60 * 60 * 24;
app.use(sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized: true,
    cookie: { maxAge: oneSess },
    resave: false 
}));

app.use(bodyParser.urlencoded({extended: true,}));
app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.send(config);
});

app.post("/addConfig", (req, res) => {
    config.profile.push(req.body);
    console.log(config);

    let data = JSON.stringify(config, null, 2); 
 
    fs.writeFile('./data.json', data, (err) => { 
        if (err) throw err; 
        console.log('Data written to file'); 
    });
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
