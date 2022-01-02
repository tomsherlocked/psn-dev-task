require('dotenv').config()
const fetch = require("node-fetch");
const fs = require("fs")

const API_URL = process.env.API_URL

const downloadVideoData = async () => {
  let res = await fetch(API_URL);
  const videoJSON = await res.json();
  fs.writeFileSync('./src/utils/allVideoData.json', JSON.stringify( videoJSON));

};
downloadVideoData();
