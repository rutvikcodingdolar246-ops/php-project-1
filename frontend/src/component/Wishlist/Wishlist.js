import React, { Fragment, useEffect } from "react";
import "./Wishlist.css";
import { useSelector, useDispatch } from "react-redux";
import { getWishlist, removeFromWishlist, clearErrors } from "../../actions/wishlistAction";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import MetaData from "../layout/MetaData";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";

const Wishlist = () => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { loading, error, wishlistItems } = useSelector((state) => state.wishlist);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getWishlist());
  }, [dispatch, error, alert]);

  const deleteWishlistItem = (id) => {
    dispatch(removeFromWishlist(id));
    alert.success("Item Removed from Wishlist");
  };

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="Wishlist" />
          {wishlistItems && wishlistItems.length > 0 ? (
            <div className="wishlistPage">
              <div className="wishlistHeader">
                <p>Product</p>
                <p>Price</p>
                <p>Action</p>
              </div>

              {wishlistItems &&
                wishlistItems.map((item) => (
                  <div className="wishlistContainer" key={item.product._id}>
                    <div className="wishlistInput">
                      <Link to={`/product/${item.product._id}`}>
                        <img src={item.product.images[0].url} alt="Product" />
                      </Link>
                      <Link to={`/product/${item.product._id}`}>
                        <p>{item.product.name}</p>
                      </Link>
                    </div>
                    <p className="wishlistPrice">₹{item.product.price}</p>
                    <p
                      className="wishlistDeleteBtn"
                      onClick={() => deleteWishlistItem(item.product._id)}
                    >
                      Remove
                    </p>
                  </div>
                ))}
            </div>
          ) : (
            <div className="emptyWishlist">
              <RemoveShoppingCartIcon />
              <Typography>No Items In Wishlist</Typography>
              <Link to="/products">View Products</Link>
            </div>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Wishlist; 