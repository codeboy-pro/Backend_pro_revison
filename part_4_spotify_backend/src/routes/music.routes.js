const express= require('express');
const musicController= require('../controllers/music.controller');
const multer = require('multer');
const router = express.Router();
router.use(express.urlencoded({ extended: true }));
const upload = multer({
    storage: multer.memoryStorage(),
});
router.post('/upload',upload.single('music'), musicController.createMusic);
module.exports = router;