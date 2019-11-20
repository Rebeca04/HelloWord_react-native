import React from 'react';
import { Button, View, Text } from 'react-native';
class Home extends React.Component {
  static navigationOptions = {
    title: 'Home'
   };
render() {
    const {navigate} = this.props.navigation;
    return (
        <View style={{ 
        flex: 1,
        alignItems:'center',
        justifyContent:'center'
        }}>
        <Button title="Go to Profile screen"
            onPress={() => navigate('Profile')}
        />
        </View>
    );
}
}
export default Home;