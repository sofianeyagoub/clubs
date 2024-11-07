import React, { useEffect } from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import Header from '../components/Header'
import BackButton from '../components/BackButton'
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';
import { StackNavigationProp } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { selectClubNameById, selectPlayersById } from '../redux/selectors';
import { COLORS, SIZES } from '../constants';


type PlayerHistoryScreenRouteProp = RouteProp<RootStackParamList, 'PlayerHistory'>;
type PlayerHistoryScreenNavigationProp = StackNavigationProp<RootStackParamList, 'PlayerHistory'>;

interface Props {
  route: PlayerHistoryScreenRouteProp; // Explicitly type the route prop
  navigation: PlayerHistoryScreenNavigationProp; 
}


const PlayerHistory = ({navigation,route}:Props) => {
    const { playerId } = route.params; // Get the playerId passed from the navigation
    // Use the memoized selector to get players for the club
    const selectedPlayer = useSelector((state: RootState) => selectPlayersById(state, playerId));
    // Map each entry in the player's history to include club names
    const clubHistoryWithNames = selectedPlayer?.clubHistory.map((entry) => {
      const clubName = useSelector((state: RootState) => selectClubNameById(state, entry.clubId));
      return { ...entry, clubName };
    });
    // Fetch the club name for the player's current clubId
    const currentClubName = useSelector((state: RootState) =>
      selectedPlayer ? selectClubNameById(state, selectedPlayer.clubId) : ''
    );


    function renderMainContent (){
      return(
        <View>
          {/* Player Details */}
          <View style={styles.playerDetails}>
            <Text style={styles.playerName}>{selectedPlayer?.firstName} {selectedPlayer?.lastName}</Text>
            <Text style={styles.playerClub}>Club: {currentClubName}</Text>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: SIZES.base}}>
              <Text style={styles.playerJersey}>Jersey Number:</Text>
              <View  style={styles.jerseyNumberHolder}>
                <Text style={[styles.statValue,{color: COLORS.lightBlue}]}>{selectedPlayer?.jerseyNumber}</Text>
              </View>

            </View>
          </View>

          {/* Club History Title */}
          <Text style={styles.historyTitle}>Career Club History</Text>

          {/* Club History List */}
          <FlatList
            data={clubHistoryWithNames}
            keyExtractor={(item, index) => `${item.clubId}-${index}`}
            renderItem={({ item }) => (
              <View style={styles.historyCard}>
                <View style={styles.cardHeader}>
                  <Text style={styles.clubText}>Club: {item.clubName}</Text>
                  <Text style={styles.seasonText}>{item.season.startYear} - {item.season.endYear}</Text>
                </View>
                <View style={styles.cardBody}>
                  <View style={styles.statRow}>
                    <Text style={styles.statLabel}>Jersey #:</Text>
                    <View  style={styles.jerseyNumberHolder}>
                      <Text style={[styles.statValue,{color: COLORS.lightBlue}]}>{item.jerseyNumber}</Text>
                    </View>
                  </View>
                  <View style={styles.statRow}>
                    <Text style={styles.statLabel}>Goals:</Text>
                    <View  style={[styles.jerseyNumberHolder, {borderColor: COLORS.lightGreen}]}>
                      <Text style={[styles.statValue,{color: COLORS.lightGreen}]}>{item.statistics.goalsScored}</Text>
                    </View>
                  </View>
                  <View style={styles.statRow}>
                    <Text style={styles.statLabel}>Matchs played:</Text>
                    <View  style={[styles.jerseyNumberHolder, {borderColor: COLORS.primary}]}>
                      <Text style={[styles.statValue,{color: COLORS.primary}]}>{item.statistics.matchesPlayed}</Text>

                    </View>
                  </View>
                </View>
              </View>
            )}
            contentContainerStyle={styles.listContainer}
          />
        </View>
      )
    }
    return (
        <SafeAreaView style={styles.container}>
            <Header title={'Statistics'} leftIcon={<BackButton pressAction={() => navigation.goBack()}/>} rightIcon={<View></View>}/>
            {selectedPlayer ? (
                <>
                {renderMainContent()}
                </>
            ) :(
                <View  style={styles.notFound}>
                    <Text  style={styles.notFoundText}>No player's data available!</Text>
                </View>
            )} 
        </SafeAreaView>
        
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  jerseyNumberHolder:{
    width: 25,
    height: 25,
    borderColor: COLORS.lightBlue,
    borderWidth: 1,
    borderRadius: SIZES.base,
    alignItems: "center",
    justifyContent: "center",
  },
  playerDetails: {
    padding: 20,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  playerName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  playerClub: {
    fontSize: 16,
    color: COLORS.lightGreen,
    marginTop: 4,
  },
  playerJersey: {
    fontSize: 16,
    color: COLORS.lightBlue,
    marginTop: 4,
  },
  historyTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: '#333',
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  historyCard: {
    backgroundColor: COLORS.white,
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  clubText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  seasonText: {
    fontSize: 14,
    color: '#999',
  },
  cardBody: {
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 10,
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SIZES.base,
    alignItems: 'center'
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
  },
  statValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  notFound:{
    justifyContent: 'center',
    alignItems: "center",
    flex: 1,
  },
  notFoundText:{
    textAlign: "center",
    color: COLORS.black,
    fontSize: SIZES.h3
  }
});
export default PlayerHistory