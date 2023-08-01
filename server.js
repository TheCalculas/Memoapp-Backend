const express = require("express");
const app = express();
var cors = require("cors");
// const bodyParser = require("body-parser");
require("./database");
const port = 5000;
var whitelist = ["https://memoapp-backend.vercel.app"];
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Something went wrong"));
    }
  },
};

app.use(cors(corsOptions));
app.use(express.json());
// isme saare routes honge for project
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`listening on port ${port} `);
});
