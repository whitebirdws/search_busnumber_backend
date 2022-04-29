const express = require("express");
const router = express.Router();

const request = require("request");
const coverter = require("xml-js");
const fs = require("fs");
let url;
router.post("/", (req, res) => {
  let data = {
    stationId: req.body.stationId,
    routeId: req.body.routeId,
    stationOrder: req.body.stationOrder,
  };

  url = `http://apis.data.go.kr/6410000/busarrivalservice/getBusArrivalItem?serviceKey=u3calhfXxcLyp0fzko4lPw4ybr4E0mKGj8ck315istEGGw6jB5OR0c%2BKJ488FDRhCvDflmOPn3z98SBN0e%2FpLg%3D%3D&stationId=${data.stationId}&routeId=${data.routeId}&staOrder=${data.stationOrder}`;
  request(
    {
      url: url,
      method: "GET",
    },
    (error, response, body) => {
      const xmlToJson = coverter.xml2json(body, {
        compact: true,
        spaces: 4,
      });

      res.send(xmlToJson);
    }
  );
});

module.exports = router;
