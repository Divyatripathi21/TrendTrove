import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addInitialItems } from "../store/itemsSlice";
import { markFetchDone,markFetchingStarted,markFetchingFinished } from "../store/fetchStatusSlice";

const FetchItems = () => {

  const fetchStatus = useSelector((store) => store.fetchStatus);

  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    

    dispatch(markFetchingStarted());
    
    fetch("https://dummybackend-1.onrender.com/items")
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(markFetchDone());
        dispatch(markFetchingFinished());
        dispatch(addInitialItems(items[0]));
      
      });

   
  }, [fetchStatus]);

  return <></>;
};

export default FetchItems;
