const Crochet = require("../models/crochet");

module.exports = {
  create,
  crochetProject,
};

async function create(req, res) {
  console.log(req.user);
  try {
    await Crochet.create(req.body);
    crochetBikes(req, res);
  } catch (err) {
    res.json({ err });
  }
}

async function crochetProject(req, res) {
  const chrochets = await crochet.find({})
  res.json(scores);
}