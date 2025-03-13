import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const Durasi2 = ({bulan, totalHarga, hpm}) => {
  return (
    <View>
      <TouchableOpacity style={tw`my-2 px-6`}>
        <View style={tw`bg-white rounded-xl`}>
          <View style={tw`px-3 pb-2`}>
            <Text style={tw`text-lg font-bold`}>{bulan} Bulan</Text>
          </View>
          <View style={tw`flex-row justify-between items-center px-3 pb-2`}>
            <Text style={tw`text-xs font-bold`}>{totalHarga}</Text>
            <Text style={tw`text-xs font-bold`}>{hpm} / minggu</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default Durasi2