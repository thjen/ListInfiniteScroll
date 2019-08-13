import React from 'react';
import {View, Text, Image} from 'react-native';

export default class Item extends React.Component {
  render() {
    return (
      <View style={{marginTop: 25}}>
        <Text style={{backgroundColor: 'coral', height: 100}}>{this.props.item.classroom_id}</Text>
        <Text style={{backgroundColor: 'coral', height: 100}}>{this.props.item.user_name}</Text>
        <Text style={{backgroundColor: 'yellow', height: 100}}>{this.props.item.name}</Text>
      </View>
    );
  }
}