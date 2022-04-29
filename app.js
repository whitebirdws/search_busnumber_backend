const express = require("express");
const app = express();
const busNumberRouter = require("./routes/busNumberInfo");
const busAreaOfOperationRouter = require("./routes/busStationList");
const busComprehensiveInfoRouter = require("./routes/busComprehensiveInfo");
const busarrivalserviceRouter = require("./routes/busarrivalservice");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("build"));
app.set("build", (req, res) => {
  res.sendFile(path.join(__dirname, "/build/index.html"));
});
app.set("port", process.env.PORT || 5001);

app.use("/busNumberInfo", busNumberRouter);
app.use("/busStationList", busAreaOfOperationRouter);
app.use("/comprehensiveInfo", busComprehensiveInfoRouter);
app.use("/busarrivalservice", busarrivalserviceRouter);

app.listen(app.get("port"), () => {
  console.log(app.get("port") + "번에서 대기중입니다.");
});
