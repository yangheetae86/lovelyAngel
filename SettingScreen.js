import React, {Component} from 'react'
import {View, Text, FlatList, StyleSheet} from 'react-native'

export default class SettingScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data : [
                {key : "러블리 엔젤 채팅 설정"},
                {key : "알림"},
                {key : "나의 돌보미 이력"},
                {key : "돌보미(후기) 보기"},
                {key : "러블리 페이 충전 & 사용 내역"},
                {key : "Help"},
            ]
        }
    }

    _renderItem = ({item}) => {
        return( 
            <Text style = {styles.row}>
                {item.key}
            </Text>
        )
    };

    render() {
        return (
            <View style = {styles.container}>
                <FlatList 
                    data = {this.state.data}
                    renderItem = {this._renderItem}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        alignItems : "stretch",
        justifyContent : "center",
        backgroundColor : "#FFF"
    },
    row : {
        flex : 1,
        fontSize : 20,
        padding : 20,
        borderWidth : 1,
        borderColor : "#DDDDDD"
    }
});