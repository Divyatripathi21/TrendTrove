import { useSelector } from "react-redux";
const Footer = () => {



  const { theme } = useSelector((state) => state.theme);

  return (
    <footer className="">   
      <div className={`footer_container  ${theme}`}>
        <div className="footer_column">
          <h3 className="header footer_header_dark">ONLINE SHOPPING</h3>

          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Kids</a>
          <a href="#">Home & Living</a>
          <a href="#">Beauty</a>
          <a href="#">Gift Card</a>
          <a href="#">TrendTrove Insider</a>
        </div>

        <div className="footer_column">
          <h3 className="footer_header_dark">ONLINE SHOPPING</h3>

          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Kids</a>
          <a href="#">Home & Living</a>
          <a href="#">Beauty</a>
          <a href="#">Gift Card</a>
          <a href="#">TrendTrove Insider</a>
        </div>

        <div className="footer_column ">
          <h3  className="footer_header_dark" >ONLINE SHOPPING</h3>

          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Kids</a>
          <a href="#">Home & Living</a>
          <a href="#">Beauty</a>
          <a href="#">Gift Card</a>
          <a href="#">TrendTrove Insider</a>
        </div>
      </div>
      <hr />
      <div className="copyright">
        © 2024 www.TrendTrove.com. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
