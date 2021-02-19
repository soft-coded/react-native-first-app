import React, {useState} from 'react'
import { StyleSheet, View } from 'react-native'
import GoalInput from "./components/GoalInput"
import Goals from "./components/Goals"

export default function App() {
  
  const [goals,setGoals]=useState([])
  const [newGoal,setNewGoal]=useState(false)
  
  return <View style={styles.container}>
    <GoalInput newGoal={newGoal} setNewGoal={setNewGoal} setGoals={setGoals}/>
    <Goals setNewGoal={setNewGoal} goals={goals} setGoals={setGoals}/>
  </View>
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center"
  }
});
