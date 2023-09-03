import { createSlice } from "@reduxjs/toolkit";
import { _StepState } from "../interfaces/interfaces";
import { AppState } from "./store";

const initialState: _StepState = {
  active: {
    info: true,
    amount: false,
    contact: false,
    payment: false
  },
  completed: {
    info: false,
    amount: false,
    contact: false,
    payment: false
  }
};

export const stepSlice = createSlice({
  name: "step",
  initialState,
  reducers: {
    setActiveState(state, action) {
      switch (action.payload) {
        case "info":
          state.active = {
            info: true,
            amount: false,
            contact: false,
            payment: false
          }

          state.completed = {
            info: false,
            amount: false,
            contact: false,
            payment: false
          }
        break;
        case "amount":
          state.active = {
            info: false,
            amount: true,
            contact: false,
            payment: false
          }

          state.completed = {
            info: true,
            amount: false,
            contact: false,
            payment: false
          }
        break;
        case "contact":
          state.active = {
            info: false,
            amount: false,
            contact: true,
            payment: false
          }

          state.completed = {
            info: true,
            amount: true,
            contact: false,
            payment: false
          }
        break;
        case "payment":
          state.active = {
            info: false,
            amount: false,
            contact: false,
            payment: true
          }

          state.completed = {
            info: true,
            amount: true,
            contact: true,
            payment: false
          }
      }
    }
  }
});

export const {
  setActiveState
} = stepSlice.actions;

export const selectActiveState = (state: AppState) => state.step.active;
export const selectCompletedState = (state: AppState) => state.step.completed;

export default stepSlice.reducer;
