import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { removeFromWishlist } from "../store/wishlistSlice";
import { ToastContainer, toast } from 'react-toastify';
import { addToBag } from "../store/bagSlice";

const WishlistItem = ({ item }) => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRemoveItem = () => {
    toast.error("Item removed from Wishlist");
    dispatch(removeFromWishlist(item.id));
    setIsModalOpen(false);
  };

  const handleMoveToBag = () => {
    toast.success("Item moved to Bag");
    dispatch(addToBag(item.id));
    dispatch(removeFromWishlist(item.id));
    setIsModalOpen(false);
  };

  return (
    <div className={`wishlist-item-container ${theme}`}>
      <div className="wishlist-item-left-part">
        <img className="wishlist-item-img" src={item.image} />
      </div>
      <div className={`wishlist-item-right-part ${theme}`}>
        <div className="company">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price-container">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount-percentage">
            ({item.discount_percentage}% OFF)
          </span>
        </div>
        <div className="return-period">
          <span className="return-period-days">{item.return_period} days return available</span>
        </div>
        <div className="delivery-details">
          Delivery by
          <span className="delivery-details-days"> {item.delivery_date}</span>
        </div>
      </div>

      <div className="remove-from-wishlist" onClick={() => setIsModalOpen(true)}>
        <RiDeleteBin5Fill className="action_name" />
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2 className="remove_item_message">Remove Item</h2>
            <button className="bag-button" onClick={handleMoveToBag}>Move to Bag</button>
            <button className="remove-button" onClick={handleRemoveItem}>Remove</button>
            <button className="cancel-button" onClick={() => setIsModalOpen(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WishlistItem;
