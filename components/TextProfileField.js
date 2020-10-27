import React from "react";
import { StyleSheet,Text,TextInput} from 'react-native';

const TextProfileField = (props)=> {
    return (
      <div>
         <Text style={styles.baseText}>
         {props.title} :   
      </Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => props.onChangeText(text)}
        value={props.value}
        />
      </div>
    );
  }
  
const styles = StyleSheet.create({
    baseText: {
      fontWeight: 'bold'
    },
  });

  export default TextProfileField;