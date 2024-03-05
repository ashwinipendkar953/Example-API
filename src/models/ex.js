// const express = require("express")
const mongoose = require("mongoose");

const exSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    trim: true,
  },
  url: {
    type: String,
    require: true,
    trim: true,
  },
});

// creating new collection
const ExCollection = new mongoose.model("ExCollection", exSchema);

module.exports = ExCollection;
