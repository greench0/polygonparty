const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const polygonSchema = new Schema({

  info: type: String,
  cssData: type: String,
  pData: [0, 250, 500, 750, 1000],
  color0: type: String,
  color1: type: String,
  date: { type: Date, default: Date.now },
  blockData : [{ bData : String, rData : String }]
});

const Polygon = mongoose.model("Polygon", polygonSchema);

module.exports = Polygon;




// { 
//   info: { type: String, required: true },
//   cssData: { type: String, required: true },
//   pData: [0, 250, 500, 750, 1000],
//   color0: type: String,
//   color1: type: String,
//   date: { type: Date, default: Date.now },
//   blockData : [{ bData : String, rData : String }]
// },


