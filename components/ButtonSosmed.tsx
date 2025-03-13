import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import tw from "twrnc";
import { Ionicons } from '@expo/vector-icons';

const ButtonSosmed = ({title, image}) => {
  return (
    <TouchableOpacity style={tw`bg-white p-2 rounded-lg flex-row justify-center items-center gap-2`}>
      <Image source={image} style={tw`w-10 h-10`} resizeMode='contain'/>
      <Text style={tw`text-[#666666] font-black text-center`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default ButtonSosmed