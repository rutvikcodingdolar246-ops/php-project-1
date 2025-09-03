const express = require("express");
const { isAuthenticatedUser } = require("../middleware/auth");
const {
  addToWishlist,
  getWishlist,
  removeFromWishlist,
} = require("../controllers/wishlistController");

const router = express.Router();

router.route("/wishlist").get(isAuthenticatedUser, getWishlist);
router.route("/wishlist/add").post(isAuthenticatedUser, addToWishlist);
router
  .route("/wishlist/remove/:productId")
  .delete(isAuthenticatedUser, removeFromWishlist);

module.exports = router; 