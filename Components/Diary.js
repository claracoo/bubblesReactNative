import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DiaryEntry from './DiaryEntry'
const Diary = (props) => {
    // useEffect(() => {
    //     console.log(props.records)
    // })
   return (
    <View style={{ marginTop: 20, backgroundColor: "#F9F9F9", borderRadius: 10, display: "flex", justifyContent: "center", alignItems: "center"}}>
        <Text style={{textAlign: "left", marginTop: 20, marginLeft: 70, alignSelf: "flex-start", fontWeight: "bold"}}>My Stories</Text>
        <View style={{width: 250, justifyContent: "center", alignItems: "center"}}>
            {props.records.map((record, i) => (
                <DiaryEntry key={i} title={record.title} trigger={record.trigger} date={record.day} story={record.story} colors={props.colors} changeScreen={props.handleScreenChange}/>
            ))}
        </View>
    </View>
   );
}
export default Diary;

const styles = StyleSheet.create({
   });