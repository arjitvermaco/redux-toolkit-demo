import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './CounterSlice';
import cakeReducer from './CakeSlice'
import  useReducer  from "./UserSlice";
export const store = configureStore({
    reducer:{
        counter:counterReducer,
        cake:cakeReducer,
        user:useReducer
    }
})

