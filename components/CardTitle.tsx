import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CardTitle = ({title}) => {
    return (
        <View>
            <TouchableOpacity style={styles.container}>
                <Text style={styles.TextJudul}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CardTitle

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 10,
        borderColor: 'white',
        borderWidth: 1,
        marginHorizontal: 10,
        backgroundColor: '#000',
    },
    TextJudul: {
        fontSize: 16,
        fontWeight: '400',
        color: '#FFFFFF'
    },
})