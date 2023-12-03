const express = require("express");
const createError = require("http-errors");
const requestTime = require("./middleware/request-time");
const path = require("path");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));

const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV === "development") {
  const livereload = require("livereload");
  const connectLivereload = require("connect-livereload");

  const liveReloadServer = livereload.createServer();
  liveReloadServer.watch(path.join(__dirname, "static"));
  liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
      liveReloadServer.refresh("/");
    }, 100);
  });
  app.use(connectLivereload());
}

app.use(express.static(path.join(__dirname, "static")));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "static")));

const rootRoute = require("./routes/root");
app.use("/", rootRoute);

app.use((request, response, next) => {
  next(createError(404));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
