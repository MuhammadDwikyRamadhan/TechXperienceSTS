import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Link } from 'expo-router';
import tw from "twrnc";

const CardWithImage1 = ({title, desc, image, start}: any) => {
    return (
        <View style={styles.container}>
          <Image source={image} style={styles.image} />
          <View style={tw`mx-2`}>
            <Text style={styles.TextJudul}>{title}</Text>
            <Text style={styles.TextDesc}>{desc}</Text>
          </View>
          <TouchableOpacity>
            <View style={tw`flex-row justify-end items-center mx-2 gap-2`}>
              <Text style={styles.TextStart}>{start}</Text>
              <TouchableOpacity style={tw``}>
                <AntDesign name='play' size={16} color='white'/>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </View>
    );
};

export default CardWithImage1;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#292929',
    width: '50%',
    height: 'auto',
  },
  TextJudul: {
    fontSize: 12,
    fontWeight: '700',
    marginTop: 2,
    color: 'white',
    textAlign: 'left',
  },
  TextDesc: {
    fontSize: 10,
    fontWeight: 400,
    marginTop: 5,
    textAlign: 'left',
    flexWrap: 'wrap',
    flex: 1,
    color: 'white',
  },
  TextStart: {
    fontSize: 12,
    fontWeight: '700',
    marginTop: 10,
    marginBottom: 10,
    color: 'white',
  },
  image: {
    width: 'auto',
    height: 115,
    resizeMode: 'contain',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});