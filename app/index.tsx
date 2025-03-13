import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import ButtonMulai from '@/components/ButtonMulai'
import { useRouter } from 'expo-router'
import PrimaryButton from '@/components/PrimaryButton'

const index = () => {

    const navigation = useRouter();

    return (
        <SafeAreaView>
            <View style={tw`h-full mx-8 mt-20`}>
                <View style={tw`items-center`}>
                    <Image source={require('@/assets/images/Techxperience.png')} style={tw`w-80 h-20 mx-auto mt-44`} resizeMode='contain' />
                    <Text style={tw`text-xl font-medium text-white text-center mt-28 mb-4 mx-12`}>Belajar Technology &amp; Dapatkan Pengalamannya</Text>
                    <Text style={tw`text-sm font-normal text-white text-center mb-28 mx-2`}>Belajar di Techxperience ini kamu dapat belajar berbagai bidang teknologi seperti pemrograman, desain grafis, dan jaringan.</Text>
                </View>
                <View style={tw`gap-3`}>
                    <ButtonMulai title='Mulai Belajar Sekarang' warnaBtn='[#000]' rute={() => navigation.push('/auth/signup')} />
                    <PrimaryButton title='Masuk' warnaBtn='[#4285F4]' rute={() => navigation.push('/auth/signin')} />
                </View>
                <Text style={tw`text-white text-center`}>&#35;Dari 1 Baris Pertama, Sampai 1 Project Pertama</Text>
            </View>
        </SafeAreaView>
    )
}

export default index