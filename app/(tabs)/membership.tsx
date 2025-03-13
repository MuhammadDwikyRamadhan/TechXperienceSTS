import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import { AntDesign } from '@expo/vector-icons'
import Fitur from '@/components/Fitur'
import Durasi1 from '@/components/Durasi1'
import Durasi2 from '@/components/Durasi2'
import PrimaryButton from '@/components/PrimaryButton'
import { useRouter } from 'expo-router'

const membership = () => {

  const navigation = useRouter();

  const fiturData = [
    { image: require('@/assets/images/fitur1.png'), desc: 'Akses ke Semua Modul Pembelajaran' },
    { image: require('@/assets/images/fitur2.png'), desc: 'Jalur Pembelajaran yang dirancang oleh mentor' },
    { image: require('@/assets/images/fitur3.png'), desc: 'Mentoring sebulan 4x pertemuan' },
    { image: require('@/assets/images/fitur4.png'), desc: 'Mendapatkan sertifikat dan keuntungan lainnya' },
  ]

  const paketData1 = [
    {bulan: 12, totalHarga: 'Rp 599.000,00', status: 'Save 42%', hpm: 'Rp 12.475,00'},
  ]

  const paketData2 = [
    {bulan: 4, totalHarga: 'Rp 260.000,00', hpm: 'Rp 16.250,00'},
    {bulan: 1, totalHarga: 'Rp 85.000,00', hpm: 'Rp 21.250,00'},
  ]

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={tw`justify-end items-end`}>
          <TouchableOpacity>
            <AntDesign name="close" size={24} color="white" style={tw`m-4`} />
          </TouchableOpacity>
        </View>
        <View style={tw`pb-10 justify-center items-center`}>
          <Text style={tw`text-xl text-white font-semibold`}>Start Your 7-Free Trial Today!</Text>
          <Text style={tw`text-xs text-[#FFFFFFCC] font-medium`}>Buka Fitur Eksklusif dengan Techxperience Membership</Text>
        </View>
        <View style={tw`mt-8 bg-[#D8D8D8] rounded-t-lg`}>
          <View>
            <Text style={tw`text-black text-lg text-center font-semibold p-4`}>Kamu akan mendapatkan:</Text>
            {fiturData.map((fitur, index) => (
              <Fitur key={index} image={fitur.image} desc={fitur.desc} />
            ))}
          </View>
          <View style={tw`my-6`}>
            {paketData1.map((paket, index) => (
              <Durasi1 key={index} bulan={paket.bulan} totalHarga={paket.totalHarga} status={paket.status} hpm={paket.hpm} />
            ))}
            {paketData2.map((paket, index) => (
              <Durasi2 key={index} bulan={paket.bulan} totalHarga={paket.totalHarga} hpm={paket.hpm} />
            ))}
          </View>
          <View style={tw`mx-6`}>
            <PrimaryButton title='Ikut Kelas' warnaBtn='[#0086FF]' rute={() => navigation.push('/(tabs)/membership')} />
          </View>
          <View style={tw`flex-row justify-center items-center gap-4 mb-4`}>
            <Text style={tw`text-xs text-center`}>Terms & Conditions</Text>
            <Text style={tw`text-xs text-center`}>Privacy Policy</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default membership