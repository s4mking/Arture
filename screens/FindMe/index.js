import React, {Component} from 'react';
import {Text, View,TouchableOpacity,StyleSheet,Dimensions} from 'react-native';
import {Constants,Location} from 'expo';
import MapView from 'react-native-maps';
import {Permissions} from 'expo-permissions';
class FindMe extends Component {
    state={
        location: null,
        errorMessage: null,
        markers : [
            {
              latitude: 49.158950,
              longitude: 2.442906,
              title: 'New place',
              subtitle: 'My new place'
            }
          ]
    };
    constructor(props) {
        super(props);
        this.findCurrentLocation();
      }
    findCurrentLocation = () =>{
        navigator.geolocation.getCurrentPosition(
            position => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                this.setState({
                    latitude,
                    longitude
                });
            },
            { enableHighAccuracy: true , timeout: 20000, maximumAge: 1000 }
        );
    };
    
    findCurrentLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if(status !== 'granted'){
            this.setState({
                errorMessage: 'Permission non accordé'
            });
        }

        let location = await Location.getCurrentPositionAsync({});
        this.setState({ location });
    }
   
    render(){
        let text = '';
        if(this.state.errorMessage){
            text = this.state.errorMessage;
        }else if(this.state.location){
            text = JSON.stringify(this.state.location)
        }
        return(
            <View>
            <MapView style={styles.mapStyle} 
                initialRegion={{
          latitude: this.state.latitude,
          longitude: this.state.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
            > 
              <MapView.Marker
            coordinate={{latitude: 49.166539,
            longitude: 2.435575}}
            title={"title"}
            pinColor={"green"}
            description={"description"}
         />
         </MapView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    mapStyle: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  });
export default FindMe;  
