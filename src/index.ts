import express from "express";

const app = express();

app.listen(7000, () => {
  console.log("Server is now running at port " + 7000);
});
