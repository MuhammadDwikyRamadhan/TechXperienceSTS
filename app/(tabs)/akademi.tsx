import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import { useRouter } from 'expo-router'
import Akademi from '@/components/Akademi'

const akademi = () => {
  const navigation = useRouter();

  const data = [
    {image: require('@/assets/images/Hackathon.png'), status: 'Free', title: 'Keuangan bisnis', desc: 'Introduction of Financial Statement I', module: 4, rating: '4.5 (1000)', rute: () => navigation.push('/detail')},
    {image: require('@/assets/images/Hackathon.png'), status: 'Pro', title: 'Investasi Usaha', desc: 'Introduction of Venture Capital', module: 4, rating: '4.5 (823)', rute: () => navigation.push('/detail')},
    {image: require('@/assets/images/Hackathon.png'), status: 'Pro', title: 'Branding', desc: 'Importance of Branding', module: 5, rating: '4.5 (26783)', rute: () => navigation.push('/detail')},
    {image: require('@/assets/images/Hackathon.png'), status: 'Pro', title: 'Marketing', desc: 'How to Use Sales Promotion', module: 5, rating: '4.5 (351)', rute: () => navigation.push('/detail')},
    {image: require('@/assets/images/Hackathon.png'), status: 'Pro', title: 'Keuangan bisnis', desc: 'Introduction of Financial Statement II', module: 4, rating: '4.5 (7892)', rute: () => navigation.push('/detail')},
    {image: require('@/assets/images/Hackathon.png'), status: 'Pro', title: 'Keuangan Pribadi', desc: 'Personal Finance Management', module: 4, rating: '4.5 (254)', rute: () => navigation.push('/detail')},
  ]

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={tw`mx-4 my-4`}>
          <Text style={tw`text-2xl text-white font-bold`}>📖 Akademi</Text>
        </View>
        <View>
          {data.map((item, index) => (
            <Akademi key={index} image={item.image} status={item.status} title={item.title} description={item.desc} module={item.module} rating={item.rating} rute={item.rute}/>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default akademi