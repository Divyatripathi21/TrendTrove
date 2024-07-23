import { IoMdSad } from "react-icons/io";
import { Link } from "react-router-dom";

const Dum=()=>{
  return (
    <center className="continue-message-container">
            <div>
            <img
            className="empty_bag"
            src=".\empty_bag.jpg"
            alt="Myntra Home"
          /> 
          </div>

          <div>
          <b className="empty-message">Empty bag {<IoMdSad />}</b>
          </div>


          <Link to="/">       
<button type="button" className="btn btn-primary continue-button">Continue Shopping</button>
</Link>
    </center>
  )
}

export default Dum;