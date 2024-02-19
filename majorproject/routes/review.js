const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync");
const Review = require('../models/review')
const Listing = require("../models/listing")
const {validateReview, isloggedIn,isReviewAuthor} = require('../middleware.js')

const reviewController = require("../controllers/reviews.js");

//Reviews Post Route

router.post("/",validateReview,isloggedIn ,wrapAsync(reviewController.createReview));
  
  // Delete Review Route
  
  router.delete("/:reviewId",isloggedIn ,isReviewAuthor,wrapAsync(reviewController.destroyReview));


  module.exports = router;