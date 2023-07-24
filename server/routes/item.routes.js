const router = require('express').Router();
const { selectAll, post, update, deleteOne } = require("../controllers/item.controller.js")

router.get("/", selectAll);
router.post("/post", post)
router.put("/:id", update)
router.delete("/:id", deleteOne)

module.exports = router;
