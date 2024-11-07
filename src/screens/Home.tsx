import React, { useEffect } from 'react'
import { FlatList, Image, ImageSourcePropType, Platform, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Header from '../components/Header'
import { COLORS, images } from '../constants'
import { useDispatch, useSelector } from 'react-redux'
import { initializeClubs } from '../redux/slices/clubsSlice'
import { initializePlayers } from '../redux/slices/playersSlice'
import { testClubs, testPlayers } from '../constants/DummyData'
import { RootState } from '../redux/store'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RootStackParamList } from '../navigation/types';
import { StackNavigationProp } from '@react-navigation/stack';


type AddClubScreenNavigationProp = StackNavigationProp<RootStackParamList, 'AddClub'>;

interface Props {
  navigation: AddClubScreenNavigationProp; // Type the navigation prop here
}


const Home = ({navigation}: Props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        // Initialize test data in Redux
        dispatch(initializeClubs(testClubs));
        dispatch(initializePlayers(testPlayers));
    }, [dispatch]);
    // Fetch clubs from Redux store
    const clubs = useSelector((state: RootState) => state.clubs.clubs);




    // Render each club item
    const renderClubItem = ({ item }: { item: { id: string, name: string, logo: string, country: string } }) => (
        <TouchableOpacity style={styles.clubItem} onPress={() => navigation.navigate('ClubDetails', { clubId: item.id })}>
            <Image source={{uri: item.logo}} style={styles.clubLogo} />
            <View style={styles.clubInfo}>
                <Text style={styles.clubName}>{item.name}</Text>
                <Text style={styles.clubCountry}>{item.country}</Text>
            </View>
        </TouchableOpacity>
    );
    function renderMainContent() {
        return (
            <FlatList
                data={clubs}
                showsVerticalScrollIndicator={false}
                renderItem={renderClubItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.clubList}
            />
        )
    }
    function HeaderLeftIcon(){
        return (
            <TouchableOpacity onPress={() => console.log('search pressed!')}>
                <Ionicons name="menu" size={25} color="#000" />
            </TouchableOpacity>
        )
    }
    function HeaderRightIcon(){
        return (
            <TouchableOpacity onPress={() => navigation.navigate('AddClub')}>
                <Ionicons name="add" size={25} color="#000" />
            </TouchableOpacity>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            <Header title='Clubs' leftIcon={<HeaderLeftIcon/>} rightIcon={<HeaderRightIcon/>}/>
            {renderMainContent()}
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: COLORS.white,
  },
  clubList: {
    padding: 16,
},
clubItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    marginVertical: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    elevation: 3,
},
clubLogo: {
    width: 50,
    height: 50,
    marginRight: 12,
    objectFit: "contain",
},
clubInfo: {
    flex: 1,
},
clubName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
},
clubCountry: {
    fontSize: 14,
    color: '#666',
}
});
export default Home