import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";

export interface DonationState {
  deceased: {
    name:string,
    lifespan:string,
    city:string,
    message:string,
    funeral:string
  },
  donator: {
    firstname:string,
    lastname:string,
    address:string,
    street:string,
    postal:string,
    city:string,
    email:string,
    phone:string,
    social:string
  },
  amount:string,
  icon:string,
  modal:boolean,
  active: {},
  completed: {},
  dirty: {}
}

const initialState: DonationState = {
  deceased: {
    name: '',
    lifespan: '',
    city: '',
    funeral: '',
    message: '',
  },
  donator: {
    firstname: "",
    lastname: "",
    address: "",
    street: "",
    postal: "",
    city: "",
    email: "",
    phone: "",
    social: ""
  },
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
  },
  amount: "",
  icon: "ros",
  modal: false
};

export const donationSlice = createSlice({
  name: "donation",
  initialState,
  reducers: {
    setDeceasedState(state, action) {
      state.deceased = action.payload;
    },
    setDonatorState(state, action) {
      state.donator = action.payload;
    },
    setAmountState(state, action) {
      state.amount = action.payload;
    },
    setIconState(state, action) {
      state.icon = action.payload;
    },
    setModalState(state, action) {
      state.modal = action.payload;
    },
    setActiveState(state, action) {
      state.active = action.payload
    },
    setCompletedState(state, action) {
      state.completed = action.payload
    },
    setDirtyState(state, action) {
      state.completed = action.payload
    },
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      console.log("HYDRATE", action.payload);
      return {
        ...state,
      };
    },
  },
});

export const {
  setDeceasedState,
  setDonatorState,
  setAmountState,
  setIconState,
  setModalState,
  setActiveState,
  setCompletedState,
  setDirtyState
} = donationSlice.actions;

export const selectDeceasedState = (state: AppState) => state.donation.deceased;
export const selectDonatorState = (state: AppState) => state.donation.donator;
export const selectAmountState = (state: AppState) => state.donation.amount;
export const selectIconState = (state: AppState) => state.donation.icon;
export const selectModalState = (state: AppState) => state.donation.modal;
export const selectActiveState = (state: AppState) => state.donation.active;
export const selectCompletedState = (state: AppState) => state.donation.completed;
export const selectDirtyState = (state: AppState) => state.donation.completed;

export default donationSlice.reducer;
