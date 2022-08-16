import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { RootState } from "../store";

type Pizza = {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  size: number;
  type: number;
  count: number;
};

export type SearchPizzaParams = {
  order: string;
  sortBy: string;
  category: string;
  search: string;
  pageCount: number;
};

export const fetchPizza = createAsyncThunk<Pizza[], SearchPizzaParams>(
  "users/fetchPizzaStatus",
  async (params) => {
    const { order, sortBy, category, search, pageCount } = params;
    const { data } = await axios.get<Pizza[]>(
      `https://62a09da9a9866630f81374d1.mockapi.io/pizzas?page=${pageCount}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
    );

    return data;
  }
);

interface PizzaState {
  items: Pizza[];
  status: "loading" | "seccess" | "error";
}

const initialState: PizzaState = {
  items: [],
  status: "loading",
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchPizza.pending, (state, action) => {
      state.status = "loading";
      state.items = [];
    });
    builder.addCase(fetchPizza.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = "seccess";
    });
    builder.addCase(fetchPizza.rejected, (state, action) => {
      state.status = "error";
      state.items = [];
    });
  },
});

export const selectPizza = (state: RootState) => state.pizza;

export const { setItems } = pizzaSlice.actions;
export default pizzaSlice.reducer;
