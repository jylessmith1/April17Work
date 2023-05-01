const express = require('express');
const router = express.Router();

const fs = require('fs');

const RECIPES_FILE = './data/recipes.json';


  router.get('/', function (req, res, next) {
    fs.readFile(RECIPES_FILE, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('There was a problem reading the file.')
            return;
        }
        res.json(JSON.parse(data));
    });
});
  // res.send('respond with a resource');
  router.get('/:id', (req, res) => {
    fs.readFile(RECIPES_FILE, 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('There was a problem reading the file.')
            return;
        };

        const recipes = JSON.parse(data);

        const recipe = recipe.find(recipe => recipe.id === req.params.id)

        if (!recipe) {
            res.status(404).send('Nothing found')
            return;
        }
        res.json(recipes)
    });
});

module.exports = router;
