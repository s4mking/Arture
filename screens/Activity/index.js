import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Platform,
    PermissionsAndroid,
    Dimensions,
    ActivityIndicator,
    FlatList,
    Button
  } from "react-native";
import {Constants,Location} from 'expo';
import films from '../../Helpers/filmsData'

export default function Activity() {
    
    function handleClick(e) {
        e.preventDefault();
        onChangeShowHide(!showhideValue);
      }
   
    return (
      <View style={styles.container}>
         <ActivityIndicator size="large" color="#0000ff"/>
         <FlatList
            data={films}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => <Text style={[styles.red, styles.green]}>{item.title}</Text>}
        />
          <Button
        title={'Modif style'}
        onPress= {handleClick}
      />
     </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    flex:1
  },
  red: {
    color: 'red'
},
green: {
    color: 'green',
},
});
// export default Activity;  
