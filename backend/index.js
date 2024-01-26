import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import db from "./db.js";
import noteRoutes from "./routes/notes.js";


const app = express();
const port = 8000;

db.connect();


app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/notes", noteRoutes);

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
