import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Circle from './Circle'
const Circles = (props) => {
     const[types, setTypes] = useState({"Ambiguity": [0, "#B56B9A"], "Fear": [0, "#E3C6DF"], "Goals": [0, "#5DACCE"], "Rundown": [0, "#5C83CE"]});
      const [current, setCurrent] = useState("current");

      useEffect(() => {
        let total = props.ambig + props.fear + props.goals + props.rundown 
        let ambig = (props.ambig / total) * 300
        let fear = (props.fear / total) * 300
        let goals = (props.goals / total) * 300
        let rundown = (props.rundown / total) * 300
        let tempTypes = {"Ambiguity": [ambig, "#B56B9A"], "Fear": [fear, "#E3C6DF"], "Goals": [goals, "#5DACCE"], "Rundown": [rundown, "#5C83CE"]}
        setTypes(tempTypes)
      }, [current])

      let handleTriggerDetails = ({ triggerName }) => {
         setCurrent(triggerName);
       };

   return (
      <View  style={{display: "flex", flexWrap: "wrap", flexDirection: "row", justifyContent: "center", alignItems: "center", marginBottom: 150}} onPress={() => handleTriggerDetails({triggerName: "current"})}>
        {current === "current" && <View style={styles.mainViz}>
           <View style={{width: 400, height: 400, borderWidth: 1, backgroundColor: "#E5E5E5", borderColor: "white", borderRadius: 200, justifyContent: "center", alignItems: "center", position: "relative"}}>
            <View style={{width: 230, height: 230, borderWidth: 1, backgroundColor: "white", borderColor: "#E5E5E5", borderRadius: 200, justifyContent: "center", alignItems: "center", position: "relative"}}>
               <Text style={styles.centerText}>Feelings</Text>
               <Text style={styles.centerText}>{props.total}</Text>
            </View>
            <View style={{width: 400, flexWrap: "wrap", flexDirection: "row", justifyContent: "center", alignItems: "center", position: "absolute", elevation:10}}>
               {Object.keys(types).map((type) => (
                  <View key={type} style={{width: 150, height: 150, display: "flex", justifyContent: "center", alignItems: "center"}}>
                     <Circle name={type} size={types[type][0]} color={types[type][1]} setCurrentTrigger={handleTriggerDetails}/>
                  </View>
               )
               )}
            </View>
         </View>
         </View>
         }
         {current !== "current" && <View >
               <TouchableOpacity style={{ backgroundColor: types[current][1], borderRadius: 260 / 2, width: 260, height: 260, display:"flex", justifyContent: "center", alignItems: "center", marginTop: 40}} onPress={() => setCurrent("current")}>
                  <Text style={{fontSize: 10, fontWeight: "bold", color: "white", marginBottom: 10}}>{((types[current][0] / 300) * props.total).toFixed(0)} stories recorded</Text>
                  <Text style={{fontSize: 30, fontWeight: "bold", color: "white", marginBottom: 20}}>{current}</Text>
                  <Text style={{fontSize: 12, color: "white", marginBottom: 10, textAlign: "center"}}>Fear refers to the irrational status that is caused by an unpleasant condition.</Text>
                  <TouchableOpacity>
                     <Text style={{fontSize: 12, fontWeight: "bold", color: "#6FE1E9"}}>Learn More</Text>
                  </TouchableOpacity>
               </TouchableOpacity>
         </View>}
      </View>
   );
}
export default Circles;

const styles = StyleSheet.create({
   centerText: {
       justifyContent: "center",
       alignItems: "center",
       fontSize: 20,
       fontWeight: "bold"
     },
      mainViz: {
         display: "flex",
         justifyContent: "center",
         alignItems: "center",
         marginBottom: 150
      }
   });