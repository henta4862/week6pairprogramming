const express = require("express");
const router = express.Router();
const { loginUser, signupUser } = require("../controllers/userController");
const requireAuth = require('../middleware/requireAuth')

// login route
router.post("/login", loginUser);
  
// signup route
router.post("/signup", signupUser);

// require auth for all workout routes
router.use(requireAuth)
module.exports = router;