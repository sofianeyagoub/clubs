# Project Overview

This app allows users to manage football players, clubs, and each player’s club history. Users can:

- **View a player’s history of club memberships.**
- **Add players to clubs** with season details and performance statistics.
- **Navigate through different screens** for player and club details.

This app uses:

- **React Native** for mobile UI.
- **Redux** for state management.
- **React Navigation** for screen navigation.

## Features

- **Player and Club Management**: Add, view players and their club history.
- **Detailed Club Information**: View club details, including players associated with the club.
- **Player History Tracking**: Track a player’s history across multiple clubs and seasons.

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/sofianeyagoub/clubs.git
   cd clubs
2. **Install dependencies:**
   ```bash
   yarn install
3. **Install iOS dependencies (MacOS only):**
   ```bash
   cd ios
   pod install
   cd ..
3. **Run the app:**
   ```bash
   npx react-native run-android
   npx react-native run-ios
