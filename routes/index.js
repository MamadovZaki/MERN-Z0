const express = require("express");

/* Create an express router object */
const router = express.Router();

// todo: Login/Landing Page -- @route: GET/
router.get("/", (request, response) => {
  response.render("login");
});

//todo: Dashboard -- @route: GET/
router.get("/dashboard", (request, response) => {
  response.render("dashboard");
});

module.exports = router;
