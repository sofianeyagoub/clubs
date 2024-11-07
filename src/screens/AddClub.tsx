import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addClub } from '../redux/slices/clubsSlice'; 
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid'; 
import { RootStackParamList } from '../navigation/types';
import { StackNavigationProp } from '@react-navigation/stack';
import Header from '../components/Header';
import AddClubForm from '../components/AddClubForm';
import { AddClubFormData } from '../models/Club';
import BackButton from '../components/BackButton';



type AddClubScreenNavigationProp = StackNavigationProp<RootStackParamList, 'AddClub'>;

interface Props {
  navigation: AddClubScreenNavigationProp; 
}


const AddClub = ({ navigation }: Props) => {
    const dispatch = useDispatch();
    const { control, handleSubmit, formState: { errors }  } = useForm<AddClubFormData>();

    const onSubmit = (data: AddClubFormData) => {
        const club = {
            id: uuidv4(), // Generate a unique id using uuid
            ...data, // Spread the form data
        };
        dispatch(addClub(club)); // Dispatch the action to add the club
        navigation.goBack(); // Navigate back to the home screen
    };


  return (
    <SafeAreaView style={styles.container}>
        <Header title='Add Club' leftIcon={<BackButton  pressAction={() => navigation.goBack()}/>} rightIcon={<View></View>}/>
        <AddClubForm
            control={control}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            errors={errors}
        />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
    // justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
});

export default AddClub;
