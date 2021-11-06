//TODO change project architecture, create services, move all unnecessary stuff from app.js
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const environments = require("./environment.js");
const { Server } = require("socket.io");

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
  next();
});
const server = app.listen(3000, function() {
  console.log("Sitecall app listening on port 3000!");
  console.log(environments)
});

app.use(bodyParser.text());
app.use(bodyParser.json());

// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX DIALER CONFIGURATION XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

const login = environments.login
const password = environments.password
const url = environments.url;
const number = environments.number;

const dialer = require("dialer").Dialer;

var _bridge = null;

const realConfig = { login: login, password: password, url: url };
const fakeConfig = null;

dialer.configure(realConfig);
fake = false
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX ROUTES XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

app.post("/call", call);

app.get("/status:id", getCallStatus);

app.post("/fakeapi", toogleFakeApi );

app.get("/apistatus", getApiStatus);

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX VARIABLES USED IN ROUTES LOGIC DECLARATION XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

//const io = require("socket.io")(server, {origins: "http://localhost:8080"}); 
const io = new Server(server, {
  cors: {
    origin: "http://localhost:8080",
    methods: ["GET", "POST", "OPTIONS"],
  }
})
const gen = idMaker(); //generator for unique call id's
let id = gen.next().value;

let currentStatus; //call status

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX ROUTES LOGIC XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

async function getCallStatus(req, res) {
  let status = await _bridge.getStatus();
  res.json({ id: id, status: status });
}
async function getApiStatus(req, res) {
  res.json({ isApiFake: fake });
}

async function call(req, res) {
  id = gen.next().value;
  let data = req.body;
  _bridge = await dialer.call(number, data.number);

  let interval = setInterval(async () => {
    let status = await _bridge.getStatus();
    console.log({ status });
    if (currentStatus !== status) {
      currentStatus = status;
      io.emit("status", status);
      console.log({ status });
    }
    if (
      currentStatus === "ANSWERED" ||
      currentStatus === "FAILED" ||
      currentStatus === "BUSY" ||
      currentStatus === "NO ANSWER"
    ) {
      console.log("stop");
      clearInterval(interval);
    }
  }, 500);
  res.json({ id: id, status: _bridge.STATUSES.NEW });
}

function* idMaker() {
  var index = 0;
  while (true) yield index++;
}

async function toogleFakeApi(req, res) {
  let data = req.body;
  isApiFake = data.isApiFake;
  if (isApiFake) {
    dialer.configure(fakeConfig);
    fake = true;
    console.log("Api is in fake mode")
  } else {
    dialer.configure(realConfig);
    fake = false;
    console.log("Api is in real mode")
  }
  res.json({ isApiFake: fake });
}

