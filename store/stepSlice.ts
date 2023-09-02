import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";

export interface StepState {
  active: {},
  completed: {},
  dirty: {}
}

const initialState: StepState = {
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
  },
  dirty: {
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

          state.dirty = {
            ...state.dirty,
            info: true
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

          state.dirty = {
            ...state.dirty,
            amount: true
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

          state.dirty = {
            ...state.dirty,
            contact: true
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

          state.dirty = {
            ...state.dirty,
            payment: true
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
export const selectDirtyState = (state: AppState) => state.step.dirty;

export default stepSlice.reducer;
