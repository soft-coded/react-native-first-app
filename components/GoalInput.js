import React, {useState} from 'react'
import {StyleSheet, View, TextInput, Button, Modal} from "react-native"

function GoalInput({setGoals, newGoal, setNewGoal}) {
    const [entered,setEntered]=useState("")
    function handlePress(){
        setGoals(goals=>[...goals, {key: Date.now().toString() , val: entered}])
        setEntered("")
        setNewGoal(false)
    }
    return <Modal visible={newGoal} animationType="slide"> 
        <View style={styles.header}>
            <TextInput style={styles.text} placeholder="Enter text here" value={entered} onChangeText={text=>setEntered(text)} defaultValue={entered}/>
            <View style={styles.buttonContainer}>
                <Button title="ADD" onPress={handlePress}/>
                <Button title="Cancel" color="red" onPress={()=>setNewGoal(false)}/>
            </View>
        </View>
    </Modal>
}

const styles=StyleSheet.create({
    header: {
        marginTop: 50,
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        borderWidth: 2,
        width: "80%",
        height: 50,
        marginBottom: 30,
        paddingLeft: 10
    },
    buttonContainer: {
        flexDirection: "row"
    }
})

export default GoalInput
