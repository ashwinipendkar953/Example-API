const express = require("express");
const router = new express.Router();

const ExCollection = require("../models/ex");

// handle post request to add example
router.post("/examples", async (req, res) => {
  try {
    const addingExampleInfo = new ExCollection(req.body);
    console.log(req.body);
    const insertExample = await addingExampleInfo.save();
    res.status(201).send(insertExample);
  } catch (error) {
    res.status(400).send(error);
  }
});

// handle get request to get example
router.get("/examples", async (req, res) => {
  try {
    const getExamples = await ExCollection.find({});
    res.send(getExamples);
  } catch (error) {
    res.status(400).send(error);
  }
});

// handle get request of individual
router.get("/examples/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getExample = await ExCollection.findById({ _id });
    res.send(getExample);
  } catch (error) {
    res.status(400).send(error);
  }
});

// handle patch request of individual to update
router.patch("/examples/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getExample = await ExCollection.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(getExample);
  } catch (error) {
    res.status(500).send(error);
  }
});

// handle delete request of individual to update
router.delete("/examples/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getExample = await ExCollection.findByIdAndDelete(_id);
    res.send(getExample);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
