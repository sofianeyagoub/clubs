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

## Usage

1. **Navigate to Home Screen: Start by viewing the available clubs and players.**
2. **Add Player to Club: Use the "Add Club Club" feature in the Home screen to add a specific club.**
3. **View Player History: Go to PlayerHistory to view a player’s club history and statistics for each season.**

## Screens

1. **Home: Displays an overview of clubs and players.**
2. **ClubDetails: Displays details about a selected club and its players.**
3. **PlayerHistory: Shows a player’s club history across different seasons.**

## Redux Architecture

### State Structure
