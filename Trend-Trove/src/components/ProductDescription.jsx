import { useDispatch, useSelector } from "react-redux";

import styles from "./ProductDescription.module.css"
import { Link } from "react-router-dom";
import { addToBag } from "../store/bagSlice";
import { IoArrowForward } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';


const ProductDescription=()=>{
  
const product=useSelector((state)=>state.Product);

const dispatch=useDispatch();



const items=useSelector((state)=>state.items);


// console.log(items);           


const item=items.filter((x)=>{
  const itemIndex=product.indexOf(x.id);

  return itemIndex>=0;
})


const bagItems = useSelector((state) => state.bag);

const elementFound = bagItems.indexOf(item[0].id) >=0;






const handleAddtoBagButton=()=>{
  toast.success("Added to Bag");
  dispatch(addToBag(item[0].id));
}

  return (
    <main>

<div className={styles.container}>
      
      
      <div className={styles.imageContainer}>
      
      <img className={styles.image} src={item[0].image} alt="item image" />
      
      </div>
      
  
       <div>
      
       <div className={styles.companyName}>
        <b>{item[0].company}</b>
        </div>
   
        <div className={styles.rating}>
        {item[0].rating.stars} ⭐ | {item[0].rating.count}
      </div>
  
  
      <div className={styles.itemName}>{item[0].item_name}</div>
  
  
  
      <div className={styles.price}>
        <span className={styles.currentPrice}><b>Rs {item[0].current_price}</b></span>
        <span className="original-price">Rs {item[0].original_price}</span>
        <span className="discount">({item[0].discount_percentage}% OFF)</span>
        <p className={styles.tax}><b>inclusive of all taxes</b></p>
      </div>
  
  
   <div>
  <b><p className={styles.selectSizes}>SELECT SIZE</p></b>
   <div className={styles.sizeSelector}>
    <div className={styles.size}>XS</div>
    <div className={styles.size}>S</div>
    <div className={styles.size}>M</div>
    <div className={styles.size}>L</div>
    <div className={styles.size}>XL</div>
    <div className={styles.size}>XXL</div>
  </div>  
  
   </div>
       </div>



      <div className={styles.buttonContainer}> 
      {elementFound?
      <Link to ="/bag">
      <div className={styles.GoToBagButton}>
      <button type="button" className={`btn btn-primary btn-lg  ${styles.bagButton}`}>Go to Bag   <IoArrowForward /></button>
      </div>
      </Link>
      : <div className={styles.addTobagButton}>
      <button onClick={handleAddtoBagButton}type="button" className={`btn btn-primary btn-lg ${styles.btn1}`}>Add item to Bag</button>
      </div>} 
       <div className={styles.continue}>
       <Link to="/">
       <button type="button" className="btn btn-secondary btn-lg">Continue Shopping</button>
       </Link>
       </div>
      </div>



    </div>

    </main>
  )
}


export default ProductDescription;










