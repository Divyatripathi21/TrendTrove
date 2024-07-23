import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Bag from "./routes/Bag.jsx";
import Home from "./routes/Home.jsx";
import { Provider } from "react-redux";
import {myntraStore,persistor} from "./store/index.js";
import ProductDescription from "./components/ProductDescription.jsx";
import {PersistGate} from 'redux-persist/integration/react'
import ThemeProvider from "./components/ThemeProvider.jsx";
import Wishlist from "./routes/Wishlist.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/bag",
        element: <Bag />,
      },

      {
        path:"/wishlist", element:<Wishlist /> 
      },

      
      {
        path:"/description",
        element:<ProductDescription/>
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <PersistGate persistor={persistor}>
  <React.StrictMode>
    <Provider store={myntraStore}>
    <ThemeProvider>
      <RouterProvider router={router} />
  </ThemeProvider>
    </Provider>
  </React.StrictMode>
  </PersistGate>
);
