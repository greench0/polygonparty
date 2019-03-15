const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/polygonDB"
);


const polygonSeed = [
  { 
    info: "post1",
    cssData: "four-up", 
    color0: "grey", 
    color1: "cyan", 
    pData: [0, 250, 500, 750, 1000],
    blockData: [
      {bData: 27 , rData: 90},
      {bData: 23 , rData: 90},
      {bData: 23 , rData: 90},
      {bData: 27 , rData: 180},
      {bData: 23 , rData: 360},
      {bData: 2 , rData: 450},
      {bData: 2 , rData: 540},
      {bData: 23 , rData: 180},
      {bData: 23 , rData: 360},
      {bData: 2 , rData: 360},
      {bData: 2 , rData: 630},
      {bData: 23 , rData: 180},
      {bData: 27 , rData: 360},
      {bData: 23 , rData: 270},
      {bData: 23 , rData: 270},
      {bData: 27 , rData: 270},
    ]
    date: new Date(Date.now())
  },

  { 
    info: "my creation",
    cssData: "four-up", 
    color0: "grey", 
    color1: "#444444", 
    pData: [0, 250, 500, 750, 1000],
    blockData: [
      {bData: 27 , rData: 90},
      {bData: 23 , rData: 90},
      {bData: 23 , rData: 90},
      {bData: 27 , rData: 180},
      {bData: 23 , rData: 360},
      {bData: 16 , rData: 450},
      {bData: 16, rData: 450},
      {bData: 23 , rData: 180},
      {bData: 23 , rData: 360},
      {bData: 1, rData: 90},
      {bData: 1, rData: 90},
      {bData: 23 , rData: 540},
      {bData: 23 , rData: 90},
      {bData: 2 , rData: 900},
      {bData: 2 , rData: 450},
      {bData: 23 , rData: 90},
    ]
    date: new Date(Date.now())
  },

  { 
    info: "cats",
    cssData: "two-up", 
    color0: "white", 
    color1: "green", 
    pData: [0, 250, 500, 750, 1000],
    blockData: [
      {bData: 27 , rData: 90},
      {bData: 27 , rData: 180},
      {bData: 27 , rData: 360},
      {bData: 27 , rData: 270}
    ]
    date: new Date(Date.now())
  },

  { info: "", cssData: "two-up", color0: "white", color1: "green", pData: [0, 250, 500, 750, 1000], blockData: [ {bData: 27 , rData: 90}, {bData: 27 , rData: 180}, {bData: 27 , rData: 360}, {bData: 27 , rData: 270} ] date: new Date(Date.now()) },
  { info: "bee", cssData: "two-up", color0: "white", color1: "green", pData: [0, 250, 500, 750, 1000], blockData: [ {bData: 27 , rData: 90}, {bData: 27 , rData: 180}, {bData: 27 , rData: 360}, {bData: 27 , rData: 270} ] date: new Date(Date.now()) },

];





db.Polygon
  .remove({})
  .then(() => db.Polygon.collection.insertMany(polygonSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
