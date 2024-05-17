//Este arquivo define as rotas para manipular as Recipes. CRUD 
const Recipes = require("../model/Recipe")
const router = require("express").Router();
const mongoose = require("mongoose");

const verifyAdmin = require("../middleware/auth");


// get all recipes 
router.get("/", async (req,res)=> {
    const all_recipes = await Recipes.find();
    if(all_recipes){
        return res.status(200).json({recipes : all_recipes});
    }
    res.status(500).json({error: "não foi possível carregar as receitas"});
});

// get a recipe 
router.get("/:id", async (req,res)=> {
    const ObjectId = mongoose.Types.ObjectId;
    if(!req.params.id || !ObjectId.isValid(req.params.id) ){
        return res.status(400).json({message: "ID invalido"});
    }

    try {
        const recipe = await Recipes.findById(req.params.id);
        
        return res.status(200).json({
            message: recipe ? recipe : "receita nao encontrado"
        });
    } catch (error) {
        return res.status(500).json({message: error});    }

})

// add a recipe 
router.post("/add", verifyAdmin, async(req,res)=> {
    
    const newRecipe = new Recipes({
         name : req.body.name,
         ingredients: req.body.ingredients,
         price: req.body.price,
         type: req.body.type
    }); 
    
    try {
        await newRecipe.save();
        res.status(201).json(newRecipe);
      } catch (err) {
        console.error(err)
        res.status(500).json(err);
      }
    
});

// delete a recipe 
router.delete("/delete/:id", verifyAdmin, async(req,res)=> {
    const ObjectId = mongoose.Types.ObjectId;

    if(!req.params.id || !ObjectId.isValid(req.params.id) ){
        return res.status(400).json({message: "Id invalido"});
    }

    try {
        const toDeleteRecipe = await Recipes.findByIdAndDelete(req.params.id);
        res.status(200).json({recipe :  toDeleteRecipe });
    } catch (error) {
        res.status(500).json({error: "nao foi possivel deletar"});
    }
});



module.exports = router;