import React from 'react';
import {View, Text, Button, Image} from 'react-native';

export default class AppScreen extends React.Component {
  render() {
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
        <Image
          style={{width: 220, height: 130, margin: 20, backgroundColor: 'transparent'}}
          source={{uri: "http://clipground.com/images/yay-clipart-1.jpg"}}
        />
        <Text
          style={{margin: 20}}
          >
          You are logged in. On successful authentication, "src/AppScreen.js" is rendered. Modify as you like.
        </Text>
        <Button title="Logout" onPress={this.props.logoutCallback}/>
      </View>
    );

  }
}
