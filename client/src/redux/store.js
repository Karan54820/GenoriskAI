import { configureStore } from "@reduxjs/toolkit";
import {alertSlice} from "./features/alertSlice"; // Corrected path

export default configureStore({
    reducer:{
        alerts:alertSlice.reducer,
    },
});

