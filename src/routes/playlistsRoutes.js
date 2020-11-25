require('dotenv-safe').config();

const express = require("express");
const router = express.Router();
const controller = require("../controllers/playlistsController");

router.get("/", controller.getAll);
router.get("/playlists", controller.getAll);
router.get("/:id", controller.getById);
router.post("/", controller.postPlaylists);
router.delete("/:id", controller.deletePlaylists);
router.put("/:id", controller.putTarefa);

module.exports = router;