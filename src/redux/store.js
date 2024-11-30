import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice';

const store = configureStore({
    reducer: {
        counter: counterReducer,  // Make sure this key matches the slice name
    },
});

export default store;