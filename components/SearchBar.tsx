import { icons } from "@/constants/icons";
import React from "react";
import { Image, TextInput, View } from "react-native";

interface Props {
  onPress?: () => void;
  placeholder: string;
}

const SearchBar = (props: Props) => {
  const { onPress, placeholder } = props;
  return (
    <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-4">
      <Image
        source={icons.search}
        className="size-5"
        resizeMode="contain"
        tintColor="#ab8bff"
      />
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value=""
        onChangeText={() => {}}
        placeholderTextColor="#a8b5db"
        className="flex-1 ml-2 text-white"
      />
    </View>
  );
};

export default SearchBar;

// api access token
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NzE4NDNmODE2NTlmMTZiMmE4MTZiYzJhOGUwZDRiOSIsIm5iZiI6MTc1MzAwNzk2NS4wLCJzdWIiOiI2ODdjYzc1Y2U1MGUzYmNjNTUxNjllMTciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.V1aA0bnVOMY3a_W_nmgc2fUdApwhudYs6D6RMkKX2Xo

// 
// 671843f81659f16b2a816bc2a8e0d4b9