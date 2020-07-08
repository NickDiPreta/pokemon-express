const express = require("express");
const router = express.Router();
const pokemon = require("../models/pokemon");

router.get("/", (req, res) => {
  res.send(pokemon);
});

router.get("/:id", (req, res) => {
  res.send(pokemon[req.params.id]);
});

router.post("/", (req, res) => {
  //get data from the user/client
  //we get data from the request object

  const newData = req.body;
  pokemon.push(newData);
  res.send("data received");
});

router.delete("/:id", (req, res) => {
  const deletedPokemon = pokemon.splice(req.params.id, 1);
  res.send(deletedPokemon);
});

router.put("/:id", (req, res) => {
    pokemon[req.params.id] = req.body;
    res.send(req.body);
  });

module.exports = router;


