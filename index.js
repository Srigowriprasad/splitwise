import cors from "cors";
import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3002;

app.use(cors());
app.use(bodyParser.json());

app.listen(port, () => {
  console.log("Running on port " + port);
});
