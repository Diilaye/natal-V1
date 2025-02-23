import { configureStore } from "@reduxjs/toolkit";
import BookmarkHeaderSlice from "./Reducers/BookmarkHeaderSlice";
import LayoutSlice from "./Reducers/LayoutSlice";
import AddProductSlice from "./Reducers/Ecommerce/AddProductSlice";
import FilterSlice from "./Reducers/Ecommerce/FilterSlice";
import ProductSlice from "./Reducers/Ecommerce/ProductSlice";
import CartSlice from "./Reducers/Ecommerce/CartSlice";
import BookmarkTabSlice from "./Reducers/BookmarkTabSlice";
import ThemeCustomizerReducer from "./Reducers/ThemeCustomizerReducer";

const Store = configureStore({
  reducer: {
    layout: LayoutSlice,
    bookmarkHeader: BookmarkHeaderSlice,
    addProduct: AddProductSlice,
    filterData: FilterSlice,
    product: ProductSlice,
    cartData: CartSlice,
    bookmarkTab: BookmarkTabSlice,
    themeCustomizer: ThemeCustomizerReducer,
  },
});

export default Store;

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
