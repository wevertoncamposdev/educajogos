const express = require('express');
const router = express.Router()

router.get("/", (req, res) => { res.render("index") })
router.get("/dev", (req, res) => { res.render("dev") })
router.get("/login", (req, res) => { res.render("login") })
router.get("/gameone", (req, res) => { res.render("gameone") })
router.get("/gametwo", (req, res) => { res.render("gametwo") })
router.get("/gamethree", (req, res) => { res.render("gamethree") })

module.exports = router