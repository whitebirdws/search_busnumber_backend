const express = require("express");
const router = express.Router();

const request = require("request");
const converter = require("xml-js");
const fs = require("fs");
let url;
router.post("/", async (req, res) => {
  //버스 종합정보
  try {
    let num = req.body.title;
    url = `http://apis.data.go.kr/6410000/busrouteservice/getBusRouteInfoItem?serviceKey=u3calhfXxcLyp0fzko4lPw4ybr4E0mKGj8ck315istEGGw6jB5OR0c%2BKJ488FDRhCvDflmOPn3z98SBN0e%2FpLg%3D%3D&routeId=${num}`;
    request(
      {
        url: url,
        method: "GET",
      },
      (error, response, body) => {
        const xmlToJson = converter.xml2json(body, {
          compact: true,
          spaces: 4,
        });
        res.send(xmlToJson);
      }
    );
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
