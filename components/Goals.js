import React from 'react'
import {View, Text, StyleSheet, FlatList, TouchableOpacity, Button} from "react-native"

function Goals({goals, setGoals, setNewGoal}) {
  function deleteGoal(id){
    setGoals(currGoals=>currGoals.filter(goal=>goal.key!==id))
  }
  return <View style={styles.textContainer}>
    <View style={styles.button}>
      <Button title="Add new goal" onPress={()=>setNewGoal(true)} />
    </View>
    <FlatList data={goals} 
      renderItem={({item})=>{
      return <TouchableOpacity onPress={()=>deleteGoal(item.key)}>
        <View style={styles.goal}>
          <Text>{item.val}</Text>
        </View>
      </TouchableOpacity>
    }}/>
  </View>
}

const styles=StyleSheet.create({
  textContainer: {
    alignItems: "flex-start",
    width: "80%",
    marginTop: 70
  },
  goal: {
    borderWidth: 2,
    width: 310,
    marginVertical: 10,
    padding: 10,
    marginRight: 20,
    backgroundColor: "lightgrey"
  },
  button: {
    width: "100%"
  }
})

export default Goals
