// express 모듈
const express = require("express");
const cors = require("cors");
const app = express();

// dotenv 모듈
const dotenv = require("dotenv");
dotenv.config();

// CORS 설정
const corsOptions = {
  origin: ["http://localhost:3000", "http://localhost:3001", "http://localhost:3002", 'http://localhost:9988'], // 클라이언트 도메인
  credentials: true, // withCredentials: true를 허용
};

app.use(cors(corsOptions));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization, Set-Cookie, set-cookie"
  );
  next();
});

app.listen(process.env.PORT);

const userRouter = require("./routes/users");
const bookRouter = require("./routes/books");
const categoryRouter = require("./routes/category");
const likeRouter = require("./routes/likes");
const cartRouter = require("./routes/carts");
const orderRouter = require("./routes/orders");

app.use("/users", userRouter);
app.use("/books", bookRouter);
app.use("/category", categoryRouter);
app.use("/likes", likeRouter);
app.use("/carts", cartRouter);
app.use("/orders", orderRouter);
