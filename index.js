var express = require("express");
var app = express();

// mongoose
var mongoose = require("mongoose");

// connection
mongoose.connect("mongodb://127.0.0.1:27017/tb28").then((data) => {
  console.log("Connection Established");
});

// Schema
var adminSchema = new mongoose.Schema({
  name: String,
  mobile: Number,
});

// model
var adminModel = mongoose.model("admin_model", adminSchema);

// // Example  schema model
// var studentSchema = new mongoose.Schema({
//   name: String,
//   mobile: String,
// });

// var studentModel = mongoose.model("student_model", studentSchema);

// url
app.get("/", async function (req, res) {
  // //Object data
  //   var data = {
  //     name: "pqrs",
  //     mobile: 6546546,
  //   };
  //   var newData = new adminModel(data);
  //   var data = await newData.save();
  //   res.send(data);

  //   // Select All
  //   var data = await adminModel.find();
  //   res.send(data);

  // Select One
  var data = await adminModel.findOne({ name: "abcd" });
  res.send(data);
});

app.listen(1000);
