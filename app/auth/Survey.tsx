import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';
import ButtonSurvey from '@/components/ButtonSurvey';
import { useRouter } from 'expo-router';
import PrimaryButton from '@/components/PrimaryButton';

const Survey = () => {
  const navigation = useRouter();
  const [selectedOption, setSelectedOption] = useState(null);

  const SurveyData = [
    { title: 'Co-Founders', icon: 'circle' },
    { title: 'Instagram', icon: 'circle' },
    { title: 'Tiktok', icon: 'circle' },
    { title: 'YouTube', icon: 'circle' },
    { title: 'Website', icon: 'circle' },
    { title: 'Lainnya', icon: 'circle' },
  ];

  const handlePress = (title) => {
    setSelectedOption(title);
  };

  return (
    <SafeAreaView>
      <View style={tw`mt-12 mx-6`}>
        <Text style={tw`text-white text-sm`}>
          Bagaimana kamu tahu tentang Techxperience?
        </Text>
        <View style={tw`gap-4 mt-4`}>
          {SurveyData.map((item, index) => (
            <ButtonSurvey
              key={index}
              title={item.title}
              icon={item.icon}
              isSelected={selectedOption === item.title}
              onPress={() => handlePress(item.title)}
            />
          ))}
        </View>
        <View style={tw`mt-4`}>
          <PrimaryButton
            title="Masuk"
            warnaBtn="[#0086FF]"
            rute={() => navigation.push('/(tabs)/home')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Survey;
