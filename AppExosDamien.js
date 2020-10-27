import React,{ useState } from 'react';
import { StyleSheet, View, Button ,Text, TouchableHighlight, Alert} from 'react-native';
import ProfileField from "./components/ProfileField.js";

export default function App() {

  const [showhideValue, onChangeShowHide] = React.useState(false);
  const [count, setCount] = useState(0);
  const onPress = () => setCount(count + 1);

  function handleClick(e) {
    e.preventDefault();
    onChangeShowHide(!showhideValue);
  }

  return (
    <View style={styles.container}>
    
    {showhideValue && <ProfileField/> }

        <Button
        title={showhideValue ? 'Hide' : 'Show'}
        onPress= {handleClick}
      />
       <TouchableHighlight onPress={onPress}>
        <View style={styles.button}>
        <Text>Touch Here</Text>
        </View>
      </TouchableHighlight>
      <Text style={styles.countText}>
          {count ? count : null}
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  baseText: {
    fontWeight: 'bold'
  },
  innerText: {
    color: 'red'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
});
