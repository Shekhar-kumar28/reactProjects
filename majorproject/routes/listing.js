const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const Listing = require("../models/listing")
const { isloggedIn,isowner,validateListings } = require("../middleware");




//Index Route
router.get("/", wrapAsync(async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
}));

//New Route
router.get("/new", isloggedIn, (req, res) => {
  res.render("listings/new.ejs");
});

//Show Route
router.get("/:id", wrapAsync(async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id).populate({
    path:"reviews",
    populate:{
      path:"author",
    },
  }).populate("owner");
  if (!listing) {
    req.flash("error", "Listings you requested for does not existed!")
    res.redirect("/listings");
  }
  res.render("listings/show.ejs", { listing });
}))

//create route
router.post("/", isloggedIn, validateListings, wrapAsync(async (req, res, next) => {
  const newListing = new Listing(req.body.listing);
  newListing.owner = req.user._id;
  await newListing.save();
  req.flash("success", "new Listing Created");
  res.redirect("/listings");
}));

//Edit Route
router.get("/:id/edit", isloggedIn,isowner, wrapAsync(async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listings you requested for does not existed!")
    res.redirect("/listings");
  }
  res.render("listings/edit.ejs", { listing });
}));

//Update Route
router.put("/:id", isloggedIn,isowner, validateListings, wrapAsync(async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  req.flash("success", "Listings Updated")
  res.redirect(`/listings/${id}`);
}));

//Delete Route
router.delete("/:id", isloggedIn,isowner, wrapAsync(async (req, res) => {
  let { id } = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  console.log(deletedListing);
  req.flash("success", "Listings Deleted!")
  res.redirect("/listings");
}));


module.exports = router;