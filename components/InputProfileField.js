

import React from "react";
import { StyleSheet, Text, TextInput} from 'react-native';

const InputProfileField =(props)=> {
    return (
      <div>
         <Text style={styles.innerText}> {props.title} : </Text>
        <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => props.onChangeText(text)}
        value={props.value}
        />
      </div>
    );
  }

const styles = StyleSheet.create({
    innerText: {
      color: 'red'
    },
  });

  export default InputProfileField;