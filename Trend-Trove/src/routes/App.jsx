import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import FetchItems from "../components/Fetchitems";
import { useSelector } from "react-redux";
import LoadingSpinner from "../components/LoadingSpinner";

import { ToastContainer } from "react-toastify";
import ThemeProvider from "../components/ThemeProvider";


function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);

  return (
    <>
    <ThemeProvider>
      <ToastContainer/>
      <Header />
      <FetchItems />
      {fetchStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet />}
      <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
