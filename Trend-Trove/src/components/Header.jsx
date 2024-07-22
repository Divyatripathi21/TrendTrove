import { BsFillPersonFill } from "react-icons/bs";
import { FaFaceGrinHearts, FaBagShopping, FaMoon,FaSun } from "react-icons/fa6";
import { Link, Navigate, useNavigate ,useLocation} from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import {  useDispatch } from 'react-redux';
import { toggleTheme } from '../store/themeSlice';


const Header = () => {
  const bag = useSelector((store) => store.bag);
  

  const wishlistItems = useSelector((state) => state.wishlist);
  const items = useSelector((state) => state.items);
  const wish = items.filter((item) => {
    const itemIndex = wishlistItems.indexOf(item.id);
    return itemIndex >= 0;
  });



  const [search,setSearch]=useState('');
const navigate=useNavigate();
const location=useLocation();

const dispatch = useDispatch();

const { theme } = useSelector((state) => state.theme);
// console.log(theme);


const handleSearchChange = (e) => {
  const newSearchValue = e.target.value;
  setSearch(newSearchValue); // Update the search state first

  const urlParams = new URLSearchParams(location.search);
  urlParams.set('search', newSearchValue); // Use the new search value
  const searchQuery = urlParams.toString();

  navigate(`/?${searchQuery}`); // Update the URL with the new search value
};




  return (
    <>
    <header className={`header-container ${theme}`}> 
      <div className="logo_container">
        <Link to="/">
          <img
            className="TrendTrove_home"
            src="public\images\TrendTrove_logo.jpg"
            alt="Myntra Home"
          />
        </Link>
      </div>
      <nav className="nav_bar">
        <a className="header_options" href="#">Home</a>
        <a className="header_options" href="#">Categories</a>
        <a className="header_options" href="#">Store</a>
        <a className="header_options" href="#">Deals & Offers</a>
        <a className="header_options" href="#">Brands</a>
        <a className="header_options" href="#">
        Arrivals <sup className="new">New</sup>
        </a>
      </nav>
      <div className="search_bar">
        <span  className="material-symbols-outlined search_icon">search</span>
        <input
            value={search}
            onChange={handleSearchChange}
          
          className="search_input"
          placeholder="Search for products, brands and more"
        />
      </div>
      <div className="action_bar">






      

        {theme==='light'?(
          <button className="theme-container-light"
          
          pill
          onClick={() => dispatch(toggleTheme())}
        >
          {theme === 'light' ?( <FaSun className="sun"/>) : (<FaMoon className="moon"/>)}
        </button>
        ):(<button className="theme-container-dark"
          
          pill
          onClick={() => dispatch(toggleTheme())}
        >
          {theme === 'light' ?( <FaSun className="sun"/>) : (<FaMoon className="moon"/>)}
        </button>)}

      


         {/* <div className="action_container">
          <FaMoon className="action_name"/>
          <span className="action_name">Profile</span>
        </div>  */}






        <Link className="action_container" to="/wishlist">
        
       
          <FaFaceGrinHearts className="action_name"/>
          <span className="action_name wishlist">Wishlist</span>
          {(wish.length!==0)?(<span className="bag-item-count">{wish.length}</span>):(<></>)}

        </Link>

        <Link className="action_container" to="/bag">
          <FaBagShopping className="action_name"/>
          <span className="action_name">Bag</span>
          {(bag.length!==0)?(<span className="bag-item-count">{bag.length}</span>):(<></>)}
        </Link>
      </div>
    </header>
      </>
  );
  };

export default Header;
