import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import Menu from '@/components/Menu'
import Menu2 from '@/components/Menu2'
import CardWithImage1 from '@/components/CardWithImage1'
import CardTitle from '@/components/CardTitle'
import Program from '@/components/Program'

const home = () => {

  const menuData1 = [
    { icon: 'graduation-cap', title: 'Modul Akademi' },
    { icon: 'people-group', title: 'Community' },
  ]

  const menuData2 = [
    { icon: 'ticket', title: 'Event Hackton' },
    { icon: 'chatbubbles-outline', title: 'Chat CS' },
  ]

  const belajarData1 = [
    { title: 'Fundamental Belajar Design', desc: 'Belajar design tu ga langsung gambar aja tau ada dasar dasarnya, belajar disini', image: require('@/assets/images/DKV.png'), start: 'Mulai Belajar' },
    { title: 'Fundamental Belajar MySql', desc: 'Belajar database tu ga langsung ngoding loh, ada dasar dasarnya, belajar disini', image: require('@/assets/images/MySQL.png'), start: 'Mulai Belajar' },
  ]

  const belajarData2 = [
    { title: 'Fundamental Belajar Jaringan', desc: 'Belajar jaringan tu ga langsung nyambungin kabel ada dasar dasarnya, belajar disini', image: require('@/assets/images/TKJ.png'), start: 'Mulai Belajar' },
    { title: 'Mahir menjadi frontend', desc: 'Kalo kamu udah jago fundamentalnya yuk kita masuk ke spesialistnya menjadi frontend dev', image: require('@/assets/images/FrontEnd.png'), start: 'Mulai Belajar' },
  ]

  const eventData1 = [
    {title: 'Hackathon'},
    {title: 'Design Web'},
    {title: 'Workshop'},
    {title: 'Lomba'},
  ]

  const programData = [
    { image: require('@/assets/images/investment.png'), title: 'Techxperience Career' },
    { image: require('@/assets/images/transfer.png'), title: 'Pengembangan Usaha' },
    { image: require('@/assets/images/money-bag.png'), title: 'Beasiswa Kuliah' },
    { image: require('@/assets/images/accounting.png'), title: 'Techxperience Roadmap' },
  ]


  return (
    <SafeAreaView>
      <ScrollView>
        <View style={tw`mx-4`}>
          <View style={tw`flex-row justify-between items-center`}>
            <Image source={require('@/assets/images/Techxperience.png')} style={tw`w-30 h-20`} resizeMode='contain'/>
            <View style={tw`flex-row justify-center gap-4`}>
              <TouchableOpacity>
                <Ionicons name='search' size={24} color='white' />
              </TouchableOpacity>
              <TouchableOpacity>
                <Ionicons name='notifications-outline' size={24} color='white' />
              </TouchableOpacity>
              <TouchableOpacity>
                <Ionicons name='person-circle-outline' size={24} color='white' />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={tw`flex-row gap-3 mx-4`}>
            <Image source={require('@/assets/images/Hackathon.png')} style={tw`w-90 h-40 rounded-xl`} resizeMode='cover'/>
            <Image source={require('@/assets/images/Hackathon.png')} style={tw`w-90 h-40 rounded-xl`} resizeMode='cover'/>
            <Image source={require('@/assets/images/Hackathon.png')} style={tw`w-90 h-40 rounded-xl`} resizeMode='cover'/>
          </View>
        </ScrollView>
        <View>
          <View style={tw`flex-row justify-between items-center mx-4 my-2`}>
            {menuData1.map((item, index) => (
              <Menu key={index} icon={item.icon} title={item.title}/>
            ))}
          </View>
          <View style={tw`flex-row justify-between items-center mx-4 my-2`}>
            {menuData2.map((item, index) => (
              <Menu2 key={index} icon={item.icon} title={item.title}/>
            ))}
          </View>
        </View>
        <View style={tw`flex-row justify-between items-center p-2 ml-2 mr-4 my-4`}>
          <View style={tw`flex-row gap-4 items-center`}>
            <Text style={tw`text-white font-bold`}>📖 Mau belajar apa ni</Text>
          </View>
          <TouchableOpacity>
            <Text style={tw`text-white`}>Lihat Semua</Text>
          </TouchableOpacity>
        </View>
        <View style={tw`flex-row justify-between items-center mx-2 mb-2`}>
          {belajarData1.map((item, index) => (
            <CardWithImage1 key={index} title={item.title} desc={item.desc} image={item.image} start={item.start}/>
          ))}
        </View>
        <View style={tw`flex-row justify-between items-center mx-2 mb-2`}>
        {belajarData2.map((item, index) => (
            <CardWithImage1 key={index} title={item.title} desc={item.desc} image={item.image} start={item.start}/>
          ))}
        </View>
        <View style={tw`flex-row justify-between items-center p-2 ml-2 mr-4 my-4`}>
          <View style={tw`flex-row gap-4 items-center`}>
            <Text style={tw`text-white font-bold`}>📆 Ikuti Event Terdekat</Text>
          </View>
          <TouchableOpacity>
            <Text style={tw`text-white`}>Lihat Semua</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={tw`flex-row mx-2`}>
            {eventData1.map((item, index) => (
              <CardTitle key={index} title={item.title}/>
            ))}
          </View>
        </ScrollView>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={tw`mt-4`}>
          <View style={tw`flex-row gap-3 mx-4`}>
            <Image source={require('@/assets/images/Hackathon.png')} style={tw`w-90 h-40 rounded-xl`} resizeMode='cover'/>
            <Image source={require('@/assets/images/Hackathon.png')} style={tw`w-90 h-40 rounded-xl`} resizeMode='cover'/>
          </View>
        </ScrollView>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={tw`my-4`}>
          <View style={tw`flex-row gap-3 mx-4`}>
            <Image source={require('@/assets/images/Hackathon.png')} style={tw`w-90 h-40 rounded-xl`} resizeMode='cover'/>
            <Image source={require('@/assets/images/Hackathon.png')} style={tw`w-90 h-40 rounded-xl`} resizeMode='cover'/>
          </View>
        </ScrollView>
        <View style={tw`flex-row justify-between items-center p-2 ml-2 mr-4 my-4`}>
          <View style={tw`flex-row gap-4 items-center`}>
            <Text style={tw`text-white font-bold`}>📆 Program Techxperience</Text>
          </View>
          <TouchableOpacity>
            <Text style={tw`text-white`}>Lihat Semua</Text>
          </TouchableOpacity>
        </View>
        <View>
          <View style={tw`flex-row justify-between items-center mx-4 my-2`}>
            {programData.map((item, index) => (
              <Program key={index} image={item.image} title={item.title}/>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default home