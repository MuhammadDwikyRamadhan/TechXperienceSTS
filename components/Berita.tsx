import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { useRouter } from 'expo-router'

const Berita = ({ title, desc, image }: any) => {

    return (
        <View>
            <TouchableOpacity style={tw`flex-row p-4`}>
                <Image source={image} style={tw`w-20 h-20`} />
                <View>
                    <View style={tw`justify-between items-start mx-3 flex-1`}>
                        <Text style={styles.textTitle}>{title}</Text>
                        <Text style={styles.textDesc}>{desc}</Text>
                    </View>

                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Berita

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#D9D9D9',
        width: '80%',
        height: 'auto',
        marginRight: 10,
    },
    textTitle: {
        fontSize: 15,
        fontWeight: '700',
        marginTop: 2,
        color: '#0086FF',
        textAlign: 'left',
        flexWrap: 'wrap',
        width: '60%',
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
