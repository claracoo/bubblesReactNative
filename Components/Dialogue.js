import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
const Dialogue = (props) => {
    useEffect(() => {
        console.log(props.records)
    })
   return (
    <View>
        <Text>Woo</Text>
    </View>
   );
}
export default Dialogue;

const styles = StyleSheet.create({
   });