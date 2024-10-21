import { configureStore } from "@reduxjs/toolkit";
import flowSlice  from "./flow-slice/flowSlice"

const store = configureStore({
    reducer: {
        flow: flowSlice
    }
})

export default store