// src/redux/slices/clubsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Club } from '../../models/Club';
import { ClubsState } from '../Types';



const initialState: ClubsState = {
  clubs: []
};

// Create the clubs slice
const clubsSlice = createSlice({
  name: 'clubs',
  initialState,
  reducers: {
    addClub: (state, action: PayloadAction<Club>) => {
      state.clubs.push(action.payload);
    },
    initializeClubs: (state, action: PayloadAction<Club[]>) => {
      state.clubs = action.payload;
    }
  }
});

export const { addClub, initializeClubs } = clubsSlice.actions;
export default clubsSlice.reducer;
