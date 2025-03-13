import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import { useRouter } from 'expo-router'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import ButtonSosmed from '@/components/ButtonSosmed'
import PrimaryButton from '@/components/PrimaryButton'

const signup = () => {

    const navigation = useRouter();

    return (
        <SafeAreaView>
            <View style={tw`mt-24`}>
                <View style={tw`mx-8`}>
                    <Image source={require('@/assets/images/Techxperience.png')} style={tw`w-40 h-10 mb-6`}/>
                    <View style={tw`gap-3 mb-2`}>
                        <TextInput style={tw`border border-gray-400 rounded-lg p-4 bg-[#292929]`} placeholder="Masukan Nama Lengkap" />
                        <TextInput style={tw`border border-gray-400 rounded-lg p-4 bg-[#292929]`} placeholder="Masukkan Email" />
                        <TextInput style={tw`border border-gray-400 rounded-lg p-4 bg-[#292929]`} placeholder="Masukkan Password" />
                        <TextInput style={tw`border border-gray-400 rounded-lg p-4 bg-[#292929]`} placeholder="Konfirmasi Password" />
                    </View>
                    <View style={tw`flex-row justify-between items-center`}>
                        <View style={tw`flex-row gap-2 items-center`}>
                            <TouchableOpacity>
                                <MaterialCommunityIcons name="checkbox-blank-outline" size={24} color={'#c0c0c0'}/>
                            </TouchableOpacity>
                            <Text style={tw`text-white text-sm`}>Ingat aku ya</Text>
                        </View>
                        <TouchableOpacity>
                            <Text style={tw`text-[#2D53FF] text-sm`}>Lupa Password?</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={tw`my-4`}>
                        <PrimaryButton title='Masuk' warnaBtn='[#0086FF]' rute={() => navigation.push('/auth/Survey')} />
                        <Text style={tw`text-center text-sm text-white`}>Lah udah punya akun? <Text style={tw`text-[#0086FF] font-bold`} onPress={() => navigation.push("/auth/signin")}>Masuk aja!</Text></Text>
                    </View>
                    <View style={tw`items-center border-b border-b-[#323232] mt-12 pb-4`}>
                        <Text style={tw`text-[#e4e4e4]`}>Atau mau masuk melalui?</Text>
                    </View>
                    <View style={tw`gap-4 justify-center my-6`}>
                        <ButtonSosmed title='Masuk dengan Google' image={require('@/assets/images/Google.png')} />
                        <ButtonSosmed title='Masuk dengan Facebook' image={require('@/assets/images/Facebook.png')} />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default signup