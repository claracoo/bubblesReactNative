import React,  {useState, useEffect} from 'react';
import Circles from './Components/Circles'
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
function App() {
   const [totalRecords, setTotalRecords] = useState([])
  const [ambigRecords, setAmbigRecords] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8])
  const [fearRecords, setFearRecords] = useState([0, 1, 2, 3])
  const [goalsRecords, setGoalsRecords] = useState([0, 1, 2])
  const [rundownRecords, setRundownRecords] = useState([0, 1, 2, 3, 4, 5])
   return (
      <View style={styles.container}>
        <View style={styles.hello}>
          <Text style={styles.opening}>Hello Sam,</Text>
          <Text style={styles.opening}>What is your concern today?</Text>
        </View>
          <View style={styles.graph}>
            <Circles total={totalRecords.length} ambig={ambigRecords.length} fear={fearRecords.length} goals={goalsRecords.length} rundown={rundownRecords.length}/>
         </View>
         <TouchableOpacity style={styles.startButton} onPress={() => {alert('You tapped the button!')}}>
            <Text style={styles.startButtonText}> Touch Here </Text>
          </TouchableOpacity>
      </View>
   );
}
export default App;

const styles = StyleSheet.create({
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    hello: {
      height: 100,
      marginLeft: 15,
      marginTop: 40,
      marginBottom:40,
    },
    opening: {
      fontWeight: "bold",
      fontSize: 20
    },
    record: {
      justifyContent: "flex-start"
    },
    graph: {
      height: 200,
      marginBottom: 80
    },
    startButton: {
      width: 280,
      height: 35,
      textTransform: "none",
      backgroundColor: "#3E4449",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 4,
    },
    startButtonText: {
      color: "white"
    }
  });