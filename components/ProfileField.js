import React from "react";
import { StyleSheet,Text} from 'react-native';
import TextProfileField from "../components/TextProfileField.js";
import ImageProfileField from "../components/ImageProfileField.js";
import InputProfileField from "../components/InputProfileField.js";

const ProfileField = ()=> {
  const [agevalue, onChangeTextAge] = React.useState('Age');
  const [notevalue, onChangeTextNote] = React.useState('Note');
  const [namevalue, onChangeTextName] = React.useState('Name');
  const [darkvalue, onChangeTextDark] = React.useState('Vador');
    return (
        <div>
            <ImageProfileField/>
            <TextProfileField title="Name" value={namevalue} onChangeText={onChangeTextName}/>
            <TextProfileField title="Vador" value={darkvalue} onChangeText={onChangeTextDark}/>
            <InputProfileField title="Age" value={agevalue} onChangeText={onChangeTextAge}/>
            <InputProfileField title="Note" value={notevalue} onChangeText={onChangeTextNote}/>

        </div>
    );
  }

const styles = StyleSheet.create({
    baseText: {
      fontWeight: 'bold'
    },
  });

  export default ProfileField;