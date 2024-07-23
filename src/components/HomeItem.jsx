import { useDispatch, useSelector } from "react-redux";
import { addToBag,removeFromBag } from "../store/bagSlice";
import { GrAddCircle } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { showProductDescription,removeProduct } from "../store/productSlice";
import { useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const HomeItem = ({ item }) => 
{
  const dispatch = useDispatch();

  const bagItems = useSelector((store) => store.bag);

  const elementFound = bagItems.indexOf(item.id) >=0;




  const handleAddToBag = () => {
   
    
    toast.success("Added to Bag");

    dispatch(addToBag(item.id));
   
  };
  


  const handleRemove = () => {
   
    toast.error("Removed from Bag");
    dispatch(removeFromBag(item.id));
   
  };


  const handleOnimageClick=()=>{

    dispatch(showProductDescription(item.id));


  }

  useEffect(() => {
    const timer = setTimeout(() => 
    {

      dispatch(removeProduct(item.id));

    }, 10); 

    return () => clearTimeout(timer);
  
}, []);




  return (
    <div className="item-container">
      
      <Link to="/description">
      <div className="image" onClick={handleOnimageClick}>
      <img className="item-image " src={item.image} alt="item image" />
      
      </div>
      </Link>
      

      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>

      {elementFound ? (
        <button
          type="button"
          className="btn btn-add-bag btn-danger"
          onClick={handleRemove}
        >
          <AiFillDelete /> Remove
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-add-bag btn-success"
          onClick={handleAddToBag}
        >
          <GrAddCircle /> Add to Bag
        </button>
      )}
    </div>
  );
};

export default HomeItem;
