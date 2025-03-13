import React from 'react';
import { View, Dimensions } from 'react-native';
import YouTube from 'react-native-youtube-iframe';
import tw from 'twrnc';

const Video = ({ videoId }) => {
    const { width } = Dimensions.get('window');
    const height = (width * 9) / 16;

    return (
        <View style={tw`flex-1`}>
            <YouTube
                videoId={videoId}
                height={height}
                width={width * 1}
            />
        </View>
    );
};

export default Video;
