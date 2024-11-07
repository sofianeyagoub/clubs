import { Club } from "../models/Club";
import { Player } from "../models/Player";

  
export interface ClubsState {
clubs: Club[];
}
  
  export interface PlayersState {
    players: Player[];
  }
  
  // Combine states if needed
  export interface RootState {
    clubs: ClubsState;
    players: PlayersState;
  }