const express = require("express");

/* Create an express router object */
const router = express.Router();

const { ensureAuthentication, ensureGuest } = require("../middleware/auth");

// todo: Login/Landing Page -- @route: GET/
router.get("/", ensureGuest, (request, response) => {
  response.render("login", {
    layout: "login",
  });
});

//todo: Dashboard -- @route: GET/
router.get("/dashboard", ensureAuthentication, (request, response) => {
  response.render("dashboard", {
    name: request.user.firstName,
  });
});

module.exports = router;
