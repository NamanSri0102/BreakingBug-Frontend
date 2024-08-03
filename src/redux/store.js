import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './userSlice';

const store = configureStore({
    reducer:{ // SYNTEX ERROR IS HERE AS  = WAS USED IN PLACE OF :
        user: userReducer,
    }
});

export default store;
