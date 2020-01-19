import React, {Component} from 'react'
import {View, Text, Alert} from 'react-native'

export default class LovelypayScreen extends Component {
    render() {
        Alert.alert(
            '러블리 페이',
            '프리미엄 회원 서비스',
            [{text : '홈으로', onPress : () => this.props.navigation.navigate("Home")}],
            {cancelable : false}
        )
        return (
            <View></View>
        )
    }
}