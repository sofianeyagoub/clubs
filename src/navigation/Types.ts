export type RootStackParamList = {
    Home: undefined; // No parameters passed to Home screen
    AddClub: undefined; // No parameters passed to AddClub screen
    ClubDetails: { clubId: string }; // Add params for ClubDetails
    PlayerHistory: { playerId: string }; 
  };
  