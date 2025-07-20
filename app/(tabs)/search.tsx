import React, { useEffect, useState } from "react";
import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";

const search = () => {
  const [count, setcount] = useState<number>(0);
  const [text, setText] = useState<string>("john");

  useEffect(() => {
    const interval = setInterval(() => {
      setcount((prev) => prev + 1);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const handleText = () => {
    setText("isaac");
  };

  return (
    <View className="flex-1">
      <Text className="text-white">search</Text>
      <Image
        className="w-14 h-32 flex justify-center items-center mx-auto rounded-[100%] mt-10"
        source={require("../images/isaac-2.jpeg")}
      />
      <TextInput
        value={text}
        className="border border-black w-32 py-6 mx-auto bg-slate-500"
        placeholder="enter your name"
      />
      <Text className="text-black text-2xl">{text}</Text>
      {/* <Text className="text-black">{count}</Text> */}
      <Button
        disabled={text === "isaac"}
        title="change name"
        onPress={handleText}
      />
    </View>
  );
};

export default search;

const styles = StyleSheet.create({});
