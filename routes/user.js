const express = require("express");
const { login, register, fetchUserData } = require("../controllers/userControllers");
const authMiddleware = require("../middleware/auth");
// const { DiseasePrediction } = require("../client/src/pages/DiseasePrediction.jsx");
// const { DietPrediction } = require("../client/src/pages/DietPrediction.jsx");
// middleware exists
// import DiseasePrediction from "../client/src/pages/DiseasePrediction.jsx";

const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.post("/fetchUserData", authMiddleware, fetchUserData);
// router.post("/disease-prediction", DiseasePrediction);
// router.post("/diet-prediction", DietPrediction);


module.exports = router;
