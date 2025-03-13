import { View, Text, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const Fitur = ({ image, desc }) => {
    return (
        <View style={tw`flex-row gap-4 justify-start items-center flex-1 py-2 px-6`}>
            <Image source={image} style={tw`w-12 h-12 rounded-full`}/>
            <Text style={tw`text-sm font-medium`}>{desc}</Text>
        </View>
    )
}

export default Fitur