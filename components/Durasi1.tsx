import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const Durasi1 = ({bulan, totalHarga, status, hpm}) => {
  return (
    <View>
      <TouchableOpacity style={tw`my-2 px-6`}>
        <View style={tw`bg-white border border-4 border-[#0086FF] rounded-xl`}>
          <View style={tw`px-3 pb-2`}>
            <Text style={tw`text-lg font-bold`}>{bulan} Bulan</Text>
            {status && (
              <View style={[tw`absolute bottom-4 right-0 px-3 py-1 rounded-full`, status === 'Save 42%' ? tw`bg-[#0086FF]` : tw`bg-[#0086FF]`]}>
                  <Text style={tw`text-white text-[10px] font-bold`}>{status}</Text>
              </View>
            )}
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

export default Durasi1