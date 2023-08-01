
const Item = require('../database-mongo/Item.model.js');

const selectAll = async function (req, res) {
  try {
    const items = await Item.find({});
    res.status(200).send(items);
  } catch (error) {
    res.status(200).send(error);
  }
};

const post = async function (req, res) {
  try {
    const toCreat = await Item.create({
      exercice : req.body.exercice,
      sets : req.body.sets,
      reps : req.body.reps,
      weight : req.body.weight
    })
    res.status(200).send(req.body)
  }
  catch (err) {
    console.error(err)
  }
}

const update = async function (req, res) {
  try {
     const toUpdate = await Item.updateOne({_id: req.params.id}, {exercice: req.body.exercice, sets: req.body.sets, reps: req.body.reps, weight : req.body.weight})
     res.status(200).send(req.body)
    }
    catch(err){
      console.error(err)
    }
}

const deleteOnes = async function (req, res) {
  try {
  const toDelete = await Item.deleteOne({_id:req.params.id})
  res.status(200).send(req.body)
  }
  catch (err) {
    console.error(err)
  }
}


module.exports = { selectAll, post, update, deleteOnes };
