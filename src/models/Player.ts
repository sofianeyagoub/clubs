import { Season } from "./Season";

export interface PlayerStatistics {
    goalsScored: number;    // Number of goals scored by the player
    matchesPlayed: number;  // Number of matches played by the player
  }
  
  export interface ClubHistoryEntry {
    clubId: string;              // ID of the club
    season: Season;              // Season object for that period
    jerseyNumber: number;        // Player's jersey number in the club
    statistics: PlayerStatistics;  // Player's statistics for that club and season
  }
  
  export interface Player {
    id: string;                   // Unique identifier for the player
    firstName: string;            // Player's first name
    lastName: string;             // Player's last name
    clubHistory: ClubHistoryEntry[];  // Array of historical club associations
    clubId: string; // This is the id of the club the player belongs to
    jerseyNumber: number;
  }