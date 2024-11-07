import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { useSelector } from 'react-redux';
import { RootStackParamList } from '../navigation/types';
import { RouteProp } from '@react-navigation/native';
import { RootState } from '../redux/store';
import { selectPlayersByClubId } from '../redux/selectors';
import Header from '../components/Header';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StackNavigationProp } from '@react-navigation/stack';
import { COLORS, SIZES } from '../constants';
import BackButton from '../components/BackButton';



type ClubDetailsScreenRouteProp = RouteProp<RootStackParamList, 'ClubDetails'>;
type ClubDetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'PlayerHistory'>;
interface Props {
  route: ClubDetailsScreenRouteProp; // Explicitly type the route prop
  navigation: ClubDetailsScreenNavigationProp; 
}



const ClubDetails = ({ route, navigation }: Props) => {
  const { clubId } = route.params; // Get the clubId passed from the navigation
  const club = useSelector((state: RootState) => state.clubs.clubs.find(c => c.id === clubId)); // Select the club from the store
  // Use the memoized selector to get players for the club
  const players = useSelector((state: RootState) => selectPlayersByClubId(state, clubId));


 
  return (
    <SafeAreaView style={styles.container}>
      <Header title={club ? club.name : 'Club Details'} leftIcon={<BackButton pressAction={() => navigation.goBack()}/>} rightIcon={<View></View>}/>
      {club ? (
        <View style={styles.content}>
          <Image source={{uri: club?.logo}} style={styles.logo} />
          <Text style={styles.clubName}>{club?.name}</Text>
          <Text style={styles.country}>{club!.country}</Text>
        
          <Text style={styles.playersTitle}>Players:</Text>
          <FlatList
            data={players}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={styles.playerItem}>
                <View style={{flexDirection: 'row', gap: 10}}>
                  <Text style={styles.playerName}>{`${item.firstName} ${item.lastName}`}</Text>
                  <View style={styles.playerNHolder}><Text  style={styles.playerNumber}>{item.jerseyNumber}</Text></View>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('PlayerHistory', {playerId: item.id})}>
                  <Ionicons name="eye-outline" style={{width:25}} size={25} color={COLORS.lightGray} />

                </TouchableOpacity>
                
              </View>
            )}
          />

        </View>

      ):(
        <View  style={styles.notFound}>
          <Text   style={styles.notFoundText}>Club not found!</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: '#fff',
  },
  content:{
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding,
    flex: 1
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
    objectFit: 'contain'
  },
  clubName: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  country: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  playersTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  playerItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    gap: 10,
  },
  playerName: {
    fontSize: 16,
  },
  playerNHolder:{
    width: 25,
    height: 25,
    borderColor: COLORS.lightBlue,
    borderWidth: 1,
    borderRadius: SIZES.base,
    alignItems: "center",
    justifyContent: "center",
  },
  playerNumber:{
    color: COLORS.lightBlue,
    textAlign: "center",
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

export default ClubDetails;
