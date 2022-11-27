const router = require('express').Router();
const express = require('express');

const GalleryController = require('../controllers/gallery_Controller');

router.post('/CreateImage', GalleryController.newImg);

router.get('/GetAllImage', GalleryController.GetAllImage);


module.exports = router;
