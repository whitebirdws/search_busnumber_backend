const express = require("express");
const router = express.Router();

const request = require("request");
const coverter = require("xml-js");
const fs = require("fs");
let url;

router.post("/", (req, res) => {
  let num = req.body.title;

  url = `http://apis.data.go.kr/6410000/busrouteservice/getBusRouteList?serviceKey=u3calhfXxcLyp0fzko4lPw4ybr4E0mKGj8ck315istEGGw6jB5OR0c%2BKJ488FDRhCvDflmOPn3z98SBN0e%2FpLg%3D%3D&keyword=${num}`;
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
