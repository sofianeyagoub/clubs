import { Club } from "../models/Club";
import { Player } from "../models/Player";

export const testClubs: Club[] = [
    { id: '1', name: 'FC Barcelona', logo: 'https://w7.pngwing.com/pngs/551/575/png-transparent-fc-barcelona-museum-fc-barcelona-handbol-fc-barcelona-femeni-uefa-champions-league-fc-barcelona-logo-text-lionel-messi-area-thumbnail.png', country: 'Spain' },
    { id: '2', name: 'Manchester United', logo: 'https://w7.pngwing.com/pngs/566/397/png-transparent-manchester-united-logo-text-sign-signage.png', country: 'England' },
    { id: '3', name: 'Atletico Madrid', logo: 'https://upload.wikimedia.org/wikipedia/fr/thumb/9/93/Logo_Atl%C3%A9tico_Madrid_2017.svg/1200px-Logo_Atl%C3%A9tico_Madrid_2017.svg.png', country: 'Spain' },
    { id: '4', name: 'Chelsea', logo: 'https://upload.wikimedia.org/wikipedia/sco/thumb/c/cc/Chelsea_FC.svg/1024px-Chelsea_FC.svg.png', country: 'England' },
    { id: '5', name: 'Liverpool', logo: 'https://upload.wikimedia.org/wikipedia/hif/b/bd/Liverpool_FC.png', country: 'England' },
    { id: '6', name: 'Manchester City', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/1200px-Manchester_City_FC_badge.svg.png', country: 'England' },
    { id: '7', name: 'Real Madrid', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj7fFBiCw0ACBfMiTn6n8Gy6sVOBFutZMcEQ&s', country: 'Spain' },
    { id: '8', name: 'Seville', logo: 'https://upload.wikimedia.org/wikipedia/fr/thumb/f/f1/Logo_Sevilla_FC.svg/1200px-Logo_Sevilla_FC.svg.png', country: 'Spain' },
    { id: '9', name: 'Milan', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Logo_of_AC_Milan.svg/1200px-Logo_of_AC_Milan.svg.png', country: 'Italy' },
    { id: '10', name: 'Inter Milan', logo: 'https://w7.pngwing.com/pngs/1017/137/png-transparent-inter-milan-2021-hd-logo-thumbnail.png', country: 'Italy' },
    { id: '11', name: 'Juventus', logo: 'https://w7.pngwing.com/pngs/177/345/png-transparent-juventus-logo-juventus-f-c-serie-a-juventus-stadium-football-uefa-champions-league-football-text-sport-team-thumbnail.png', country: 'Italy' },
  ];


export const testPlayers: Player[] = [
    {
      id: '1',
      firstName: 'Lionel',
      lastName: 'Messi',
      clubHistory: [
        {
          clubId: '1',
          season: { startYear: 2020, endYear: 2021 },
          jerseyNumber: 10,
          statistics: { goalsScored: 28, matchesPlayed: 11 },
        },
        {
          clubId: '2',
          season: { startYear: 2021, endYear: 2022 },
          jerseyNumber: 30,
          statistics: { goalsScored: 18, matchesPlayed: 9 },
        },
      ],
      clubId: '1',
      jerseyNumber: 10,
    },
    {
      id: '2',
      firstName: 'Bruno',
      lastName: 'Fernandes',
      clubHistory: [
        {
          clubId: '2',
          season: { startYear: 2020, endYear: 2021 },
          jerseyNumber: 18,
          statistics: {  goalsScored: 18, matchesPlayed: 12 },
        },
        {
          clubId: '3',
          season: { startYear: 2021, endYear: 2022 },
          jerseyNumber: 18,
          statistics: { goalsScored: 15, matchesPlayed: 10 },
        },
      ],
      clubId: '2',
      jerseyNumber: 18,
    },
    // Additional players...
    ...Array.from({ length: 98 }, (_, i) => ({
      id: (i + 3).toString(),
      firstName: [
        'Cristiano', 'Neymar', 'Kylian', 'Kevin', 'Robert', 'Sadio', 'Mohamed', 'Virgil', 'Sergio', 'Alisson', 
        'Karim', 'Raheem', 'Joshua', 'Luka', 'Trent', 'Thibaut', 'Jan', 'Paul', 'Eden', 'Antoine'
      ][i % 20],
      lastName: [
        'Ronaldo', 'Junior', 'Mbappé', 'De Bruyne', 'Lewandowski', 'Mané', 'Salah', 'van Dijk', 'Ramos', 'Becker',
        'Benzema', 'Sterling', 'Kimmich', 'Modric', 'Alexander-Arnold', 'Courtois', 'Oblak', 'Pogba', 'Hazard', 'Griezmann'
      ][i % 20],
      clubHistory: [
        {
          clubId: (Math.floor(Math.random() * 11) + 1).toString(),
          season: { startYear: 2019, endYear: 2020 },
          jerseyNumber: Math.floor(Math.random() * 99) + 1,
          statistics: {
            
            goalsScored: Math.floor(Math.random() * 15),
            matchesPlayed: Math.floor(Math.random() * 10),
          },
        },
        {
          clubId: (Math.floor(Math.random() * 11) + 1).toString(),
          season: { startYear: 2020, endYear: 2021 },
          jerseyNumber: Math.floor(Math.random() * 99) + 1,
          statistics: {
            
            goalsScored: Math.floor(Math.random() * 15),
            matchesPlayed: Math.floor(Math.random() * 10),
          },
        },
        {
          clubId: (Math.floor(Math.random() * 11) + 1).toString(),
          season: { startYear: 2021, endYear: 2022 },
          jerseyNumber: Math.floor(Math.random() * 99) + 1,
          statistics: {
            
            goalsScored: Math.floor(Math.random() * 15),
            matchesPlayed: Math.floor(Math.random() * 10),
          },
        },
      ],
      clubId: (Math.floor(Math.random() * 11) + 1).toString(),
      jerseyNumber: Math.floor(Math.random() * 99) + 1,
    })),
  ];