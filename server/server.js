const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const notes = require("./routes/notes");

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/notes", notes);

const port = process.env.PORT || "3042";

app.listen(port, () => {
  console.log("Server started on port", port);
});
