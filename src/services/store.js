import { configureStore } from "@reduxjs/toolkit";
import { articlApi } from "./article";

export const store = configureStore({
    reducer: {
        [articlApi.reducerPath]: articlApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articlApi.middleware)
})