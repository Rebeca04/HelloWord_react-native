import React from 'react';
import { Button, View, Text } from 'react-native';
class Profile extends React.Component {
    static navigationOptions = {
        title: 'Profile'
    };
    render() {
        const {navigate} = this.props.navigation;
        return (
        <View style={{ 
        flex: 1,
        alignItems:'center',
        justifyContent:'center'
        }}>
        <Button title="Go to Home screen"
            onPress={() => navigate('Home')}
        />
        </View>
        );
    }
}
export default Profile;