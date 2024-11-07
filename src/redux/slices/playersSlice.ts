// src/redux/slices/playersSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Player, ClubHistoryEntry } from '../../models/Player';
import { PlayersState } from '../Types';


const initialState: PlayersState = {
  players: []
};

// Create the players slice
const playersSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {
    addPlayer: (state, action: PayloadAction<Player>) => {
      state.players.push(action.payload);
    },
    addPlayerToClub: (
      state,
      action: PayloadAction<{ playerId: string; clubHistoryEntry: ClubHistoryEntry }>
    ) => {
      const { playerId, clubHistoryEntry } = action.payload;
      const player = state.players.find((p) => p.id === playerId);
      if (player) {
        player.clubHistory.push(clubHistoryEntry);
      }
    },
    initializePlayers: (state, action: PayloadAction<Player[]>) => {
      state.players = action.payload;
    }
  }
});

export const { addPlayer, addPlayerToClub, initializePlayers } = playersSlice.actions;
export default playersSlice.reducer;
