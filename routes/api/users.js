const express = require("express");
const router = express.Router();

// GET api/users/test
// test users route
// access public

router.get("/test", (req, res) => {
  res.json({ message: "users works" });
});

module.exports = router;