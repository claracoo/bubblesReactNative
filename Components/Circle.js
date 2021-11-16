import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
const Circle = (props) => {

   return (
       <View>
       <TouchableOpacity style={{ backgroundColor: props.color, borderRadius: 300 / 2, width: props.size, height: props.size, display:"flex", justifyContent: "center", alignItems: "center"}} onPress={() => props.setCurrentTrigger({triggerName: props.name})}>
           <Text style={styles.bubbleName}>{props.name}</Text>
       </TouchableOpacity>
       </View>

   );
}
export default Circle;

const styles = StyleSheet.create({
bubbleName: {
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 10
  },

});