
var path = require("path");
var router = require("express").Router();



// router.get("/", function(req, res) {
//     res.sendfile(path.join(__dirname, "../public/index.html"))
// });


router.get("/exercise", function(req, res) {
    res.sendfile(path.join(__dirname, "../public/exercise.html"))
});

router.get("/stats", function(req, res) {
    res.sendfile(path.join(__dirname, "../public/stats.html"))
});

module.exports = router;