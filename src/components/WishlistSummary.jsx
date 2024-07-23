import { useSelector } from "react-redux";

const WishlistSummary = () => {
  const wishlistItemIds = useSelector((state) => state.wishlist);
  const items = useSelector((state) => state.items);
  const finalItems = items.filter((item) => {
    const itemIndex = wishlistItemIds.indexOf(item.id);
    return itemIndex >= 0;
  });

  const CONVENIENCE_FEES = 10;
  let totalItem = wishlistItemIds.length;
  let totalMRP = 0;
  let totalDiscount = 0;

  finalItems.forEach((wishlistItem) => {
    totalMRP += wishlistItem.original_price;
    totalDiscount += wishlistItem.original_price - wishlistItem.current_price;
  });

  let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;

  return (
    <div className="wishlist-summary">
      <div className="wishlist-details-container">
        <div className="price-header">PRICE DETAILS ({totalItem} Items) </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹{totalDiscount}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">₹10</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value price-item-final">₹{finalPayment}</span>
        </div>
      </div>
      <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </div>
  );
};

export default WishlistSummary;
