import PrimaryButton from '@/components/PrimaryButton';
import Video from '@/components/Video';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';

const Detail = () => {
  const navigation = useRouter();
  const videoId = 'r459I7A-Rds'; // Replace with your actual video ID

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={tw`flex-row justify-between items-center p-4`}>
          <TouchableOpacity onPress={() => navigation.push('/(tabs)/akademi')}>
            <AntDesign name="arrowleft" size={24} color="white" />
          </TouchableOpacity>
          <Text style={tw`text-white text-lg font-medium`}>Details</Text>
          <View></View>
        </View>
        <View style={tw`flex-1`}>
          <Video videoId={videoId} />
        </View>
        <View style={tw`my-4 mx-8`}>
          <Text style={tw`text-white font-bold text-xl text-[#0086FF]`}>Mahir Menjadi Frontend Dev</Text>
          <Text style={tw`text-white text-xs my-4`}>Bergabung dengan kelar mahir menjadi frontend dev, maka kamu sudah mendapatkan fundamental menjadi seorang programmer, dan pada kelas ini kamu akan mendalami itu.</Text>
          <View style={tw`flex-row gap-6 items-center`}>
            <Text style={tw`text-[#909090] text-[10px]`}>⭐ 4.5 (823)</Text>
            <Text style={tw`text-[#909090] text-[10px]`}>4 Module</Text>
            <Text style={tw`text-[#909090] text-[10px]`}>Programmer</Text>
          </View>
        </View>
        <View style={tw`bg-[#D9D9D9] m-4 py-4 rounded-xl`}>
          <View style={tw`flex-row justify-between items-center border-b-2 border-[#E6E6E6] pb-4 px-4`}>
            <View>
              <Text style={tw`text-[9px] font-bold`}>Module 1</Text>
              <Text style={tw`text-base`}>Fundamentals for Programmer</Text>
              <Text>30 minutes</Text>
            </View>
            <AntDesign name="checkcircleo" size={24} color="black" />
          </View>
          <View style={tw`px-8`}>
            <View style={tw`flex-row gap-6 pt-4 border-b-2 border-[#E6E6E6] pb-4`}>
              <FontAwesome name="circle" size={36} color='gray' />
              <View style={tw`gap-2 justify-between`}>
                <Text style={tw`text-[9px] font-bold`}>Lesson 1  -  Identifying the Need: Market Research Essentials</Text>
                <Text style={tw`text-[9px]`}>Video</Text>
              </View>
            </View>
            <View style={tw`flex-row gap-6 pt-4 border-b-2 border-[#E6E6E6] pb-4`}>
              <FontAwesome name="circle" size={36} color='gray' />
              <View style={tw`gap-2 justify-between`}>
                <Text style={tw`text-[9px] font-bold`}>Lesson 2  - Building a Solid Business Model Canvas</Text>
                <Text style={tw`text-[9px]`}>Video</Text>
              </View>
            </View>
            <View style={tw`flex-row gap-6 pt-4 border-b-2 border-[#E6E6E6] pb-4`}>
              <FontAwesome name="circle" size={36} color='gray' />
              <View style={tw`gap-2 justify-between`}>
                <Text style={tw`text-[9px] font-bold`}>Lesson 3</Text>
                <Text style={tw`text-[9px]`}>Attachment</Text>
              </View>
            </View>
            <View style={tw`flex-row gap-6 pt-4 border-b-2 border-[#E6E6E6] pb-4`}>
              <FontAwesome name="circle" size={36} color='gray' />
              <View style={tw`gap-2 justify-between`}>
                <Text style={tw`text-[9px] font-bold`}>Lesson 4</Text>
                <Text style={tw`text-[9px]`}>Quiz</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={tw`mx-4`}>
          <PrimaryButton title='Ikut Kelas' warnaBtn='[#0086FF]' rute={() => navigation.push('/detail')} />
        </View>
      </ScrollView>
    </SafeAreaView>

  );
};

export default Detail;
