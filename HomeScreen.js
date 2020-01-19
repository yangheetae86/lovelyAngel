import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import * as firebase from 'firebase'

export default class HomeScreen extends Component {
    render() {
        return (
            <View style = {styles.container}>
                
                <View style = {styles.item1}>
                    <TouchableOpacity style = {styles.touch} onPress = {() => this.props.navigation.navigate("Search")}>
                        <Text style = {styles.title}>돌보미 찾기</Text>
                    </TouchableOpacity>
                </View>

                
                <View style = {styles.item2}>
                    <TouchableOpacity style = {styles.touch} onPress = {() => this.props.navigation.navigate("Information")}>
                        <Text style = {styles.title}>아이 {`&`} 나의 정보</Text>
                    </TouchableOpacity>
                </View>

                
                <View style = {styles.item3}>
                    <TouchableOpacity style = {styles.touch} onPress = {() => this.props.navigation.navigate("Setting")}>
                        <Text style = {styles.title}>설정 {`&`} 돌보미 이력관리</Text>
                    </TouchableOpacity>
                </View>

                <View style = {styles.item4}>
                    <TouchableOpacity style = {styles.touch} onPress = {() => this.props.navigation.navigate("Lovelypay")}>
                        <Text style = {styles.title}>러블리 페이</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent : 'center'
    },
    item1: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent : 'center',
        alignItems : 'center'
    },
    item2: {
        flex: 1,
        backgroundColor: '#fff7ed',
        justifyContent : 'center',
        alignItems : 'center'
    },
    item3: {
        flex: 1,
        backgroundColor: '#ffedd9',
        justifyContent : 'center',
        alignItems : 'center'
    },
    item4: {
        flex: 1,
        backgroundColor: '#ffd9ad',
        justifyContent : 'center',
        alignItems : 'center'
    },
    title : {
        fontSize : 24
    },
    touch : {
        marginHorizontal : 0,
        marginVertical : 0
    }
});