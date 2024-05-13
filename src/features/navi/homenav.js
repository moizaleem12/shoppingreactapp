import { createSlice, combineReducers } from "@reduxjs/toolkit";
const gettingdata = JSON.parse(localStorage.getItem("producttoinfo"));
const cartingdata = JSON.parse(localStorage.getItem("infotocart"));

const gotocart = createSlice({
    name: "gocart",
    initialState: {
        gets: gettingdata ? gettingdata : [], //men products to productinfo
        data:  cartingdata ? cartingdata.map(item => ({ ...item, quantity: item.quantity || 1 })) : [], //data to cart
        text: "", //search filter
        sorting: "featured", //sorting
        total: cartingdata ?cartingdata.reduce((acc, curr) => acc + curr.price * curr.quantity, 90) : 90, //addtotal
        cartnum: cartingdata ? cartingdata.length : 0, //cart;
    },
    reducers: {
        //men to info
        adding(state, action) {
            state.gets = [];
            state.gets.push(action.payload);
            localStorage.setItem("producttoinfo", JSON.stringify(state.gets));
            return state;
        },
        //info to cart
        productscollection(state, action) {
          const duplication = state.data.find(
            (items) => items.id === action.payload.id
          );
          if (!duplication) {
            const newItem = { ...action.payload, quantity: 1 };
            state.data.push(newItem);
            state.total += parseInt(action.payload.price);
            state.cartnum += 1;
            localStorage.setItem("infotocart", JSON.stringify(state.data));
          } else {
            console.log("duplication");
          }
        },
        //increase
        increase(state, action) {
          const selectedItem = state.data.find(
            (item) => item.id === action.payload.id
          );
          if (selectedItem) {
            const updatedData = state.data.map((item) =>
              item.id === action.payload.id
                ? { ...item, quantity: (item.quantity || 1) + 1 }
                : item
            );
            localStorage.setItem("infotocart", JSON.stringify(updatedData));
            return {
              ...state,
              data: updatedData,
              total: updatedData.reduce((acc, curr) => acc + curr.price * curr.quantity, 90)
            };
          } else {
            console.log("Item not found in cart");
            return state;
          }
        },
        decreaseed(state, action) {
          const selectedItem = state.data.find(
            (item) => item.id === action.payload.id
          );
          if (selectedItem && selectedItem.quantity > 1) {
            const updatedData = state.data.map((item) =>
              item.id === action.payload.id
                ? { ...item, quantity: (item.quantity || 1) - 1 }
                : item
            );
            localStorage.setItem("infotocart", JSON.stringify(updatedData));
            return {
              ...state,
              data: updatedData,
              total: updatedData.reduce((acc, curr) => acc + curr.price * curr.quantity, 90)
            };
          } else {
            console.log("Item not found in cart or quantity is already at minimum");
            return state;
          }
        },
       
       
        //search
        usertext(state, action) {
            state.text = action.payload;
        },
        //cart delete items
        deleteitems(state, action) {
          const deletedItem = state.data[action.payload];
          const updatedTotal = state.total - deletedItem.price * deletedItem.quantity;
          state.total = updatedTotal > 90 ? updatedTotal : 90;
          state.cartnum -= 1;
          state.data.splice(action.payload, 1);
          localStorage.setItem("infotocart", JSON.stringify(state.data)); // Update local storage
          console.log("deleted", action.payload);
        },
        
        //empty cart
        emptydata(state, action) {
            localStorage.removeItem("infotocart");
            return {
                ...state,
                data: [],
                total: 90,
                cartnum: 0,
            };
        },
        //sorting
        sortingproducts(state, action) {
            return {...state, sorting: action.payload };
        },
    },
});

const rootReducer = combineReducers({
    gotocart: gotocart.reducer,
});
export const {
    adding,
    sortingproducts,
    increase,
    decreaseed,
    productscollection,
    deleteitems,
    emptydata,
    quantity,
    usertext,
} = gotocart.actions;
console.log(gotocart.actions);
export default rootReducer;