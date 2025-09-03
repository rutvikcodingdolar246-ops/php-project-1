const Wishlist = require("../models/wishlistModel");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHandler = require("../utils/errorHandler");

// Add a product to wishlist
exports.addToWishlist = catchAsyncErrors(async (req, res, next) => {
  const { productId } = req.body;

  let wishlist = await Wishlist.findOne({ user: req.user._id });

  if (!wishlist) {
    wishlist = await Wishlist.create({
      user: req.user._id,
      products: [{ product: productId }],
    });
  } else {
    // Check if product already exists in wishlist
    const productExists = wishlist.products.find(
      (item) => item.product.toString() === productId
    );

    if (productExists) {
      return next(new ErrorHandler("Product already in wishlist", 400));
    }

    wishlist.products.push({ product: productId });
    await wishlist.save();
  }

  res.status(200).json({
    success: true,
    message: "Product added to wishlist",
    wishlist,
  });
});

// Get wishlist items
exports.getWishlist = catchAsyncErrors(async (req, res, next) => {
  const wishlist = await Wishlist.findOne({ user: req.user._id }).populate({
    path: "products.product",
    select: "name price images",
  });

  if (!wishlist) {
    return res.status(200).json({
      success: true,
      products: [],
    });
  }

  res.status(200).json({
    success: true,
    products: wishlist.products,
  });
});

// Remove from wishlist
exports.removeFromWishlist = catchAsyncErrors(async (req, res, next) => {
  const { productId } = req.params;

  const wishlist = await Wishlist.findOne({ user: req.user._id });

  if (!wishlist) {
    return next(new ErrorHandler("Wishlist not found", 404));
  }

  wishlist.products = wishlist.products.filter(
    (item) => item.product.toString() !== productId
  );

  await wishlist.save();

  res.status(200).json({
    success: true,
    message: "Product removed from wishlist",
  });
}); 