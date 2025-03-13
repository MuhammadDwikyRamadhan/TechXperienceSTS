import React, { useState, useRef, useEffect } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, TextInput, FlatList, Dimensions } from 'react-native';
import tw from 'twrnc';
import { Video } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';

const { height } = Dimensions.get('window');

const videos = [
  { id: 1, source: require('@/assets/video/Vid1.mp4') },
  { id: 2, source: require('@/assets/video/Vid2.mp4') },
  { id: 3, source: require('@/assets/video/Vid3.mp4') },
  { id: 4, source: require('@/assets/video/Vid4.mp4') }
];

const Reels = () => {
  const videoRefs = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentIndex) {
          video.playAsync();
        } else {
          video.pauseAsync();
        }
      }
    });
  }, [currentIndex]);

  const handleViewableItemsChanged = ({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  };

  const viewabilityConfigCallbackPairs = useRef([
    { viewabilityConfig: { viewAreaCoveragePercentThreshold: 50 }, onViewableItemsChanged: handleViewableItemsChanged }
  ]);

  return (
    <SafeAreaView style={tw`flex-1 bg-black`}>
      <FlatList
        data={videos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <View style={{ height, width: '100%' }}>
            <TouchableOpacity
              style={{ width: '100%', height: '100%' }}
              onPress={() => {
                if (videoRefs.current[index]) {
                  videoRefs.current[index].getStatusAsync().then(status => {
                    if (status.isPlaying) {
                      videoRefs.current[index].pauseAsync();
                    } else {
                      videoRefs.current[index].playAsync();
                    }
                  });
                }
              }}
            >
              <Video
                ref={(el) => (videoRefs.current[index] = el)}
                source={item.source}
                style={{ width: '100%', height: '100%' }}
                resizeMode="contain"
                isLooping
                shouldPlay={index === currentIndex}
              />
            </TouchableOpacity>
          </View>
        )}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        snapToAlignment="start"
        snapToInterval={height}
        decelerationRate="fast"
      />

      {/* Search Bar (Tetap di tempat) */}
      {currentIndex === 0 && (
        <View style={tw`absolute top-9 left-4 right-4 bg-white rounded-xl flex-row items-center px-4 border border-gray-500`}>
          <TextInput placeholder="For You Page" style={tw`flex-1 ml-2`} placeholderTextColor="gray" />
        </View>
      )}

      {/* Teks Informasi (Tetap di layar) */}
      <View style={tw`absolute bottom-16 left-4 bg-black/50 p-4 mx-5 rounded-xl`}>
        <Text style={tw`text-white font-bold text-lg mb-1`}>Kamu akan mendapatkan:</Text>
        <Text style={tw`text-white`}>Mendapatkan sertifikat dan keuntungan lainnya</Text>
      </View>

      {/* Ikon Actions (Tetap di layar) */}
      <View style={tw`absolute bottom-24 right-4 space-y-6 items-center`}>
        <TouchableOpacity>
          <Ionicons name="heart-sharp" size={36} color="white" />
        </TouchableOpacity>
        <Text style={tw`text-white text-xs`}>10,4K</Text>

        <TouchableOpacity>
          <Ionicons name="chatbox-ellipses" size={36} color="white" />
        </TouchableOpacity>
        <Text style={tw`text-white text-xs`}>8,2K</Text>

        <TouchableOpacity>
          <Ionicons name="arrow-redo-sharp" size={36} color="white" />
        </TouchableOpacity>
        <Text style={tw`text-white text-xs`}>100K</Text>

        <TouchableOpacity>
          <Ionicons name="bookmark" size={36} color="white" />
        </TouchableOpacity>
        <Text style={tw`text-white text-xs`}>1K</Text>
      </View>
    </SafeAreaView>
  );
};

export default Reels;