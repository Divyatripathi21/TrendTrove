import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import itemsSlice from "./itemsSlice";
import fetchStatusSlice from "./fetchStatusSlice";
import bagSlice from "./bagSlice";
import productSlice from "./productSlice";
import themeSlice from "./themeSlice";
import wishlistSlice from './wishlistSlice';

const rootReducer = combineReducers({
  items: itemsSlice.reducer,
  fetchStatus: fetchStatusSlice.reducer,
  bag: bagSlice.reducer,
  Product: productSlice.reducer,
  theme:themeSlice.reducer,
  wishlist: wishlistSlice.reducer
});

const persistConfig = {
  key: "root",
  storage,
  version: 1,
  blacklist: ["fetchStatus"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const myntraStore = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(myntraStore);
