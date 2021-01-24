const express = require("express");
const passport = require("passport");
/* Create an express router object */
const router = express.Router();

// todo: Login/Auth with google --
// @route: GET /auth/google/
router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

//todo: Google auth callback
//@route: GET /auth/google/callback
router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/",
  }),
  (request, response) => {
    response.redirect("/dashboard");
  }
);

module.exports = router;
