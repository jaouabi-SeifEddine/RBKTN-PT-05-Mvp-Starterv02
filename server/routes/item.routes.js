const router = require('express').Router();
const { selectAll, post, update, deleteOnes } = require("../controllers/item.controller.js")

router.get("/", selectAll);
router.post("/post", post)
router.put("/:id", update)
router.delete("/:id", deleteOnes)

module.exports = router;
