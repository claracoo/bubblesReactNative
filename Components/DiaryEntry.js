import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
const DiaryEntry = (props) => {

   return (
       <View style={{backgroundColor: "white", marginTop: 20, padding: 20, borderRadius: 10}} onPress={() => props.changeScreen({screen: "Story", story: props.story})}>
           <Text style={{color: props.colors[props.trigger], fontSize: 16, marginBottom: 5}}>{props.title}</Text>
           <Text style={{color: "grey", fontSize: 10, marginBottom: 5}}>{props.trigger} &middot; {props.date}</Text>
           <Text style={{fontSize: 14}}>{props.story.substring(0, 90)}...</Text>
       </View>

   );
}
export default DiaryEntry;

// const styles = StyleSheet.create({
//     entryContainer: {
//         backgroundColor: 
//       },
    
//     });