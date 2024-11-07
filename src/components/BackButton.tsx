import React from 'react'
import { TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

interface Props {
    pressAction: any;
  }


const BackButton = ({pressAction}:Props) => {
  return (
    <TouchableOpacity onPress={() => pressAction()}>
        <Ionicons name="arrow-back" size={25} color="#000" />
    </TouchableOpacity>
  )
}

export default BackButton