const express = require('express');
const multer = require('multer');
const upload = multer({dest: './uploads'})
const router = express.Router();

router.post('/', upload.single('upfile'), (req,res,next) => {
    res.json({
        name: req.file.originalname,
        type: req.file.mimetype,
        size: req.file.size
    });
});

module.exports = router;