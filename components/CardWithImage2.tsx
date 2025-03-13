import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import tw from 'twrnc';

const CardWithImage2 = ({ title, desc, image }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={tw`p-2 flex-1`}>
        <Image source={image} style={styles.image} />
        <View style={tw`justify-start items-start mx-2`}>
          <Text style={styles.textTitle}>{title}</Text>
          <Text style={styles.textDesc}>{desc}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CardWithImage2;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#D9D9D9',
    width: 300, 
    height: 'auto',
  },
  textTitle: {
    fontSize: 15,
    fontWeight: '700',
    marginTop: 2,
    color: '#0086FF',
    textAlign: 'left',
  },
  textDesc: {
    fontSize: 10,
    fontWeight: '400',
    marginTop: 5,
    textAlign: 'left',
    flexWrap: 'wrap',
    color: '#909090',
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});
