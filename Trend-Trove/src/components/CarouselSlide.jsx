import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from './CarouselSlide.module.css';

const CarousalSlide = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <Carousel className={styles.carousel} responsive={responsive}>
      <div className={styles.carouselItem}>
        <img
          className={styles.productImage}
          src="https://cdna.lystit.com/photos/2011/04/26/polo-ralph-lauren-rl2000-red-classic-fit-mesh-polo-shirt-red-product-1-667669-122634788.jpeg"
          alt="Item 1"
        />
        <div className={styles.productDetails}>
          <p className={styles.productName}>Classic Polo T-Shirt</p>
          <p className={styles.productPrice}>₹1599</p>
        </div>
      </div>
      <div className={styles.carouselItem}>
        <img
          className={styles.productImage}
          src="https://www.styledbysally.com.au/wp-content/uploads/2018/01/Classic-Blue-Men-Jeans-Pant-Cotton-Slim-Fit-Men-s-Denim-Pants-Stretch-Fashion-Mens-Clothes.jpg"
          alt="Item 2"
        />
        <div className={styles.productDetails}>
          <p className={styles.productName}>Denim Jeans</p>
          <p className={styles.productPrice}>₹2999</p>
        </div>
      </div>
      <div className={styles.carouselItem}>
        <img
          className={styles.productImage}
          src="https://pngimg.com/uploads/leather_jacket/leather_jacket_PNG3.png"
          alt="Item 3"
        />
        <div className={styles.productDetails}>
          <p className={styles.productName}>Leather Jacket</p>
          <p className={styles.productPrice}>₹4000</p>
        </div>
      </div>
      <div className={styles.carouselItem}>
        <img
          className={styles.productImage}
          src="https://improb.com/wp-content/uploads/2018/03/best-waterproof-running-shoes-for-Men-1.jpg"
          alt="Item 4"
        />
        <div className={styles.productDetails}>
          <p className={styles.productName}>Running Shoes</p>
          <p className={styles.productPrice}>₹2000</p>
        </div>
      </div>
      <div className={styles.carouselItem}>
        <img
          className={styles.productImage}
          src="https://cdn.thecoolist.com/wp-content/uploads/2017/06/1Face-Unisex-C1105-digital-watch.jpg"
          alt="Item 5"
        />
        <div className={styles.productDetails}>
          <p className={styles.productName}>Digital Watch</p>
          <p className={styles.productPrice}>₹6000</p>
        </div>
      </div>
      <div className={styles.carouselItem}>
        <img
          className={styles.productImage}
          src="https://cdna.lystit.com/photos/6962-2013/12/15/ray-ban-black-matte-mirrored-aviator-sunglasses-product-1-16195281-0-065805035-normal.jpeg"
          alt="Item 6"
        />
        <div className={styles.productDetails}>
          <p className={styles.productName}>Aviator Sunglasses</p>
          <p className={styles.productPrice}>₹3000</p>
        </div>
      </div>
      <div className={styles.carouselItem}>
        <img
          className={styles.productImage}
          src="https://i.pinimg.com/originals/4b/29/cf/4b29cf6903151ab86ecbad21d6e7f768.png"
          alt="Item 7"
        />
        <div className={styles.productDetails}>
          <p className={styles.productName}>Casual Sneakers</p>
          <p className={styles.productPrice}>₹15000</p>
        </div>
      </div>
      <div className={styles.carouselItem}>
        <img
          className={styles.productImage}
          src="https://images-na.ssl-images-amazon.com/images/I/715fjbcihnL._SL1050_.jpg"
          alt="Item 8"
        />
        <div className={styles.productDetails}>
          <p className={styles.productName}>Backpacke</p>
          <p className={styles.productPrice}>₹3500</p>
        </div>
      </div>
    </Carousel>
  );
};

export default CarousalSlide;
