import { createSlice } from "@reduxjs/toolkit";



const productSlice=createSlice({
  name:'product',
  initialState:[],
  reducers:{
    showProductDescription:(state,action)=>{
     state.push(action.payload);
    },
    removeProduct: (state, action) => {
      return state.filter(itemId => itemId !== action.payload);
    },
  }
});


export const {showProductDescription,removeProduct}=productSlice.actions;

export const productActions=productSlice.actions;

export default productSlice;