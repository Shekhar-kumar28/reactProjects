const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review");

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        type: String,
        default: "https://images.unsplash.com/photo-1698115467904-5f05d51a1785?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        set: function (v) {
            // Check if the value is an empty string, null, or undefined
            if (!v || v.trim() === "") {
                return "https://images.unsplash.com/photo-1698115467904-5f05d51a1785?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
            }
            return v;
        },
    },
    price: Number,
    location: String,
    country: String,
    reviews :[
        {
            type:Schema.Types.ObjectId,
            ref:"Review",
        },
    ],
});

listingSchema.post("findOneAndDelete",async (listing) => {
    if(listing){
        await Review.deleteMany({_id:{$in:listingSchema.reviews}});
    };
});




const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;