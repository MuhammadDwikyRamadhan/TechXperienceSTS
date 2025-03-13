import { View, Text, ScrollView, TextInput } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { SafeAreaView } from 'react-native-safe-area-context'
import CardWithImage2 from '@/components/CardWithImage2'
import CardTitle from '@/components/CardTitle'
import Berita from '@/components/Berita'

const news = () => {

  const newsData1 = [
    { title: 'India sebar developernya keseluruh dunia, dengan bayaran murah', desc: '23 Februari 2025', image: require('@/assets/images/BapakPidato.png') },
    { title: 'India sebar developernya keseluruh dunia, dengan bayaran murah', desc: '23 Februari 2025', image: require('@/assets/images/BapakPidato.png') },
  ]

  const newsData2 = [
    { title: 'India sebar developernya keseluruh dunia, dengan bayaran murah', desc: '23 Februari 2025', image: require('@/assets/images/BapakPidato.png') },
    { title: 'India sebar developernya keseluruh dunia, dengan bayaran murah', desc: '23 Februari 2025', image: require('@/assets/images/BapakPidato.png') },
    { title: 'India sebar developernya keseluruh dunia, dengan bayaran murah', desc: '23 Februari 2025', image: require('@/assets/images/BapakPidato.png') },
    { title: 'India sebar developernya keseluruh dunia, dengan bayaran murah', desc: '23 Februari 2025', image: require('@/assets/images/BapakPidato.png') },
  ]


  const eventData = [
    { title: 'Design Web' },
    { title: 'Technologies' },
    { title: 'Government' },
    { title: 'Workshop' },
  ]

  const data = [
    { image: require('@/assets/images/Hackathon.png'), title: 'Keuangan bisnis', desc: 'Introduction of Financial Statement I' },
    { image: require('@/assets/images/Hackathon.png'), title: 'Investasi Usaha', desc: 'Introduction of Venture Capital' },
    { image: require('@/assets/images/Hackathon.png'), title: 'Branding', desc: 'Importance of Branding' },
    { image: require('@/assets/images/Hackathon.png'), title: 'Marketing', desc: 'How to Use Sales Promotion' },
    { image: require('@/assets/images/Hackathon.png'), title: 'Keuangan bisnis', desc: 'Introduction of Financial Statement II' },
    { image: require('@/assets/images/Hackathon.png'), title: 'Keuangan Pribadi', desc: 'Personal Finance Management' },
  ]

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={tw`mx-4 my-4 pb-4`}>
          <Text style={tw`text-2xl text-white font-normal`}>News</Text>
        </View>
        <View style={tw`mx-4 my-2`}>
          <TextInput style={tw`border border-gray-400 rounded-lg p-3 bg-[#292929]`} placeholder="Mau cari berita apa hari ini?" />
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={tw`flex-row gap-4 m-4`}>
            {newsData1.map((news, index) => (
              <CardWithImage2 key={index} title={news.title} desc={news.desc} image={news.image} />
            ))}
          </View>
        </ScrollView>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={tw`flex-row mx-2`}>
            {eventData.map((item, index) => (
              <CardTitle key={index} title={item.title} />
            ))}
          </View>
        </ScrollView>
        <View style={tw``}>
            {newsData2.map((news, index) => (
              <Berita key={index} title={news.title} desc={news.desc} image={news.image} />
            ))}
          </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default news