const express = require('express');
const router = express.Router()

router.get("/", (req, res) => { res.render("index") })
router.get("/gameone", (req, res) => { res.render("gameone") })
router.get("/gametwo", (req, res) => { res.render("gametwo") })

module.exports = router