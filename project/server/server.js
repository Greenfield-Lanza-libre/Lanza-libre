require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./models");
const bcrypt = require("bcrypt");
const jws = require("jsonwebtoken");

// const router = require("./routes/lanza.routes");

const app = express();

db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to lanza-libre application." });
});

// set port, listen for requests
require("./routes/lanza.routes")(app);

const PORT = process.env.PORT || 8080;
// app.use('/api', router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

//// testing////
users = [];
//get the posts from a specific user that has thz specific token we're lookin for
app.get("/posts", authenticationToken, (req, res) => {
  res.json(posts.filter((post) => post.email === req.user.email));
});

app.post("/users", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = { email: req.body.email, password: hashedPassword };
    users.push(user);
    res.status(200).send("your data is safe with me ");
  } catch {
    res.status(500).send("error has been accured");
  }
});

app.post("/users/register", async (req, res) => {
  const user = users.find((user) => user.name === req.body.email);
  if (!user) {
    res.status(500).send("user not found");
  }
  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      res.send("you good");
    } else {
      res.send("you no good");
    }
  } catch {
    res.status(500).send("error has been accured");
  }
});

app.post("/login", (req, res) => {
  const userName = req.body.password;
  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
  res.json({ accessToken });
});

const authenticationToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.sendSatus(401);
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendSatus(403, "no token no access");
    req.user = user;
    next();
  });
};
