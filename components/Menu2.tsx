import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { FontAwesome6, Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'

const Menu2 = ({icon, title}) => {
    return (
        <View>
            <TouchableOpacity>
                <View style={tw`flex-row rounded-xl bg-[#1a1a1a] items-center gap-4 border-l-4 border-solid border-[#4285F4] w-50 h-15`}>
                    <View style={tw`rounded-full bg-[#292929] p-2 ml-3`}>
                        <Ionicons name={icon} size={20} color={'white'} style={tw`bg-[#2D2C2C]`}/>
                    </View>
                    <Text style={tw`text-sm text-white`}>{title}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Menu2