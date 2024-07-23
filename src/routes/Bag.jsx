import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";
import { useSelector } from "react-redux";
import Dum from "../components/Dum";



const Bag = () => {
  const bagItems = useSelector((state) => state.bag);
  const items = useSelector((state) => state.items);
  const finalItems = items.filter((item) => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  });


  // console.log(finalItems);

  return (
    <main >
      <div className="bag-page">
          {finalItems.length>0 ? (
            <>
             <div className="bag-items-container">
            {finalItems.map((item) => (
            <BagItem key={item.id} item={item} />
          ))}
          </div>
        <BagSummary />
            </>
          ):<Dum/>} 
      </div>
    </main>
  );
};

export default Bag;