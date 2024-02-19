const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const Listing = require("../models/listing")
const { isloggedIn, isowner, validateListings } = require("../middleware");

const listingsController = require("../controllers/listings.js");
const multer  = require('multer');
const {storage} = require("../cloudConfig.js");
const upload = multer({storage});


router.route("/")
    .get(wrapAsync(listingsController.index))
    .post(isloggedIn,upload.single('listing[image]'),validateListings, wrapAsync(listingsController.createListing));



//New Route
router.get("/new", isloggedIn, listingsController.renderNewForm);


router.route("/:id")
    .get(wrapAsync(listingsController.showListings))
    .put(isloggedIn, isowner, validateListings, wrapAsync(listingsController.updateListings))
    .delete(isloggedIn, isowner, wrapAsync(listingsController.destroyListing))


//Edit Route
router.get("/:id/edit", isloggedIn, isowner, wrapAsync(listingsController.renderEditForm));


module.exports = router;