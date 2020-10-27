import React from "react";
import { StyleSheet,Image} from 'react-native';

const ImageProfileField = ()=> {
    return (
        <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
    );
  }
  
const styles = StyleSheet.create({
    tinyLogo: {
        width: 50,
        height: 50,
      },
  });

  export default ImageProfileField;