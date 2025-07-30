import express from "express";
const app = express();
export default app;

import path from 'path';
import { fileURLToPath } from "url";
import { dirname } from "path";

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);

import usersRouter from "#api/users";
import getUserFromToken from "#middleware/getUserFromToken";
import handlePostgresErrors from "#middleware/handlePostgresErrors";
import cors from "cors";
import morgan from "morgan";
import trainersRouter from "#api/trainers";
import programsRouter from "#api/programs";

app.use(cors({ origin: process.env.CORS_ORIGIN ?? /localhost/ }));

app.use("/images", express.static(path.join(_dirname, 'images')))
console.log(`STATIC IMAGE PATH: `, path.join(_dirname, `images`));

app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(getUserFromToken);

app.get("/", (req, res) => res.send("Hello, World!"));

app.use("/users", usersRouter);
app.use("/trainers", trainersRouter);
app.use("/programs", programsRouter);


app.use(handlePostgresErrors);
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Sorry! Something went wrong.");
});
