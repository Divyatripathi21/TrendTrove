import HomeItem from "../components/HomeItem";
import { useSelector } from "react-redux";
import ProductDescription from "../components/ProductDescription";
import CarosalSlide from "../components/CarouselSlide";
import styles from '../components/CarouselSlide.module.css'
import { useLocation } from "react-router-dom";





const Home = () => {
  const items = useSelector((store) => store.items);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchValue = searchParams.get('search');



  // console.log(searchValue);


  return (
    <main className="">
    {searchValue ? (
      <div className="items-container">
        {items.filter((item) => {
          return searchValue.toLowerCase() === '' ? item : item.item_name.toLowerCase().includes(searchValue.toLowerCase()) || item.company.toLowerCase().includes(searchValue.toLowerCase());
        }).length > 0 ? (
          items.filter((item) => {
            return searchValue.toLowerCase() === '' ? item : item.item_name.toLowerCase().includes(searchValue.toLowerCase()) ||  item.company.toLowerCase().includes(searchValue.toLowerCase());
          }).map((item) => (
            <HomeItem key={item.id} item={item} />
          ))
        ) : (
          <h2 className="no-results">No results found!</h2>
        )}
      </div>
    ) : (
      <>
        <div className={styles.carousal}>
          <CarosalSlide />
        </div>
        <div className="items-container">
          {items.map((item) => (
            <HomeItem key={item.id} item={item} />
          ))}
        </div>
      </>
    )}
  </main>
  );
};

export default Home;

