import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const PrimaryButton = ({title, warnaBtn, rute}: {title: string, warnaBtn: string, rute: () => void}) => {
    return (
        <TouchableOpacity style={tw`bg-${warnaBtn} p-4 rounded-lg`} onPress={rute}>
            <Text style={tw`text-white font-black text-center`}>{title}</Text>
        </TouchableOpacity>
    )
}

export default PrimaryButton