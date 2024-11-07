// selectors.ts
import { createSelector } from 'reselect';
import { RootState } from './store';
import { Player } from '../models/Player';

// Select the players from the state
const selectPlayers = (state: RootState) => state.players.players;

// Memoized selector to filter players by club ID
export const selectPlayersByClubId = createSelector(
  [selectPlayers, (state: RootState, clubId: string) => clubId],
  (players: Player[], clubId: string) => players.filter(player => player.clubId === clubId)
);
// Memoized selector to filter players by player ID
export const selectPlayersById = createSelector(
  [selectPlayers, (state: RootState, playerId: string) => playerId],
  (players: Player[], playerId: string) => players.find(player => player.id === playerId)
);
// Memoized selector to select club name by ID
export const selectClubNameById = (state: RootState, clubId: string) => {
  const club = state.clubs.clubs.find((c) => c.id === clubId);
  return club ? club.name : 'Unknown Club';
};
