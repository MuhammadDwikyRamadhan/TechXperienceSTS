import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { useRouter } from 'expo-router'

const Akademi = ({image, status, title, description, module, rating, rute}: any) => {

    const navigation = useRouter();
    return (
        <View>
            <TouchableOpacity style={tw`flex-row p-4`} onPress={rute}>
                <TouchableOpacity style={tw`relative`}>
                    <Image source={image} style={tw`w-50 h-32 rounded-xl`}/>
                    {status && (
                        <View style={[tw`absolute bottom-2 right-2 px-3 py-1 rounded-full`, status === 'Free' ? tw`bg-[#BB1624]` : tw`bg-[#EF980C]`]}>
                            <Text style={tw`text-white text-xs font-bold`}>{status}</Text>
                        </View>
                    )}
                </TouchableOpacity>
                <View style={tw`mx-4 my-2 justify-between flex-1`}>
                    <View>
                        <Text style={tw`text-[9px] text-[#767680] font-normal`}>{title}</Text>
                        <Text style={tw`text-xs text-white font-normal`}>{description}</Text>
                        <Text style={tw`text-[10px] text-[#767680] font-normal`}>{module} Module</Text>
                    </View>
                    <View style={tw`flex-row items-center`}>
                        <Text style={tw`text-[10px] text-[#767680] font-normal`}>⭐ </Text>
                        <Text style={tw`text-[10px] text-[#767680] font-normal`}>{rating}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Akademi