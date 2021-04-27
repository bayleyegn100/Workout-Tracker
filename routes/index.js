// creating a fresh router 
const router = require("express").Router();
const apiRoutes = require("./apiRoutes")
const htmlRoutes = require("./htmlRoutes")
// path handler
router.use("/api", apiRoutes);
router.use("/", htmlRoutes);
module.exports = router;
