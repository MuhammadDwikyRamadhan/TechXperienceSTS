import { TouchableOpacity, Text } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { Octicons } from '@expo/vector-icons';

const ButtonSurvey = ({ title, icon, isSelected, onPress }) => {
  return (
    <TouchableOpacity
      style={tw.style(
        'bg-[#292929] p-2 rounded-lg flex-row justify-between',
        isSelected && 'border-2 border-blue-500'
      )}
      onPress={onPress}
    >
      <Text style={tw`text-white font-black text-center`}>{title}</Text>
      <Octicons
        name={isSelected ? 'check-circle-fill' : icon}
        size={24}
        color="white"
      />
    </TouchableOpacity>
  );
};

export default ButtonSurvey;
