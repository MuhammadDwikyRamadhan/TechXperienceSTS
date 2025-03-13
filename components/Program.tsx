import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { FontAwesome6, Ionicons } from '@expo/vector-icons'

const Program = ({image, title}: any) => {
    return (
        <View>
            <TouchableOpacity>
                <View style={tw`rounded-xl bg-[#1a1a1a] items-center gap-2 border-r-4 border-solid border-[#4285F4] w-22 h-22`}>
                    <View style={tw`rounded-full bg-[#292929] p-2 mt-2`}>
                        <Image source={image} style={tw`w-6 h-6`}/>
                    </View>
                    <Text style={tw`text-[10px] text-white text-center`}>{title}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Program