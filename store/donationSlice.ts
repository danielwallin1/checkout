import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";

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
  modal:boolean
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
    }
  }
});

export const {
  setDeceasedState,
  setDonatorState,
  setAmountState,
  setIconState,
  setModalState,
} = donationSlice.actions;

export const selectDeceasedState = (state: AppState) => state.donation.deceased;
export const selectDonatorState = (state: AppState) => state.donation.donator;
export const selectAmountState = (state: AppState) => state.donation.amount;
export const selectIconState = (state: AppState) => state.donation.icon;
export const selectModalState = (state: AppState) => state.donation.modal;

export default donationSlice.reducer;
