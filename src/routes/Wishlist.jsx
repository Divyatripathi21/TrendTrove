import WishlistItem from "../components/WishlistItem";
import { useSelector } from "react-redux";
import EmptyWishlist from "../components/EmptyWishlist";

const Wishlist = () => {
  const wishlistItems = useSelector((state) => state.wishlist);
  const items = useSelector((state) => state.items);
  // console.log(items);
  const finalItems = items.filter((item) => {
    const itemIndex = wishlistItems.indexOf(item.id);
    return itemIndex >= 0;
  });

  return (
    <main>
      <div className="wishlist-page">
        {finalItems.length > 0 ? (
          <>
            <div className="wishlist-items-container">
              
              {finalItems.map((item) => (
                <WishlistItem key={item.id} item={item} />
              ))}
            </div>
           
          </>
        ) : (<EmptyWishlist/>
        )}
      </div>
    </main>
  );
};

export default Wishlist;
