import React from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { AddClubFormData } from '../models/Club';
import { Controller, Control, SubmitHandler } from 'react-hook-form';
import { COLORS, SIZES } from '../constants';



// Define props for AddClubForm component
interface AddClubFormProps {
    control: Control<AddClubFormData>; // Type for control
    handleSubmit: (callback: SubmitHandler<AddClubFormData>) => () => void; // Type for handleSubmit
    onSubmit: SubmitHandler<AddClubFormData>; // Type for onSubmit
    errors: Record<string, any>; // Type for errors
}

const AddClubForm: React.FC<AddClubFormProps>  = ({
    control,
    handleSubmit,
    onSubmit,
    errors
}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Add New Club</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={{marginBottom: SIZES.padding}}>
            <TextInput
              style={styles.input}
              placeholder="Club Name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
            {errors?.name && <Text style={styles.errorText}>{errors.name.message}</Text>}
          </View>
        )}
        name="name"
        rules={{ required: 'Club name is required' }}
      />
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={{marginBottom: SIZES.padding}}>
            <TextInput
              style={styles.input}
              placeholder="Logo (uri)"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
            {errors?.logo && <Text style={styles.errorText}>{errors?.logo.message}</Text>}
          </View>
        )}
        name="logo"
        rules={{ required: 'Logo uri is required' }}
      />
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={{marginBottom: SIZES.padding}}>
            <TextInput
              style={styles.input}
              placeholder="Country"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
            {errors?.country && <Text style={styles.errorText}>{errors.country.message}</Text>}
          </View>
        )}
        name="country"
        rules={{ required: 'Country is required' }}
      />
      <Button title="Add Club" onPress={handleSubmit(onSubmit)} />
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      paddingTop: SIZES.padding2,
      paddingHorizontal: SIZES.padding
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
    },
    errorText: {
        color: COLORS.red, 
    },
});
export default React.memo(AddClubForm)