import React, {Component} from 'react'
import {View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity} from 'react-native'

export default class SitterListScreen extends Component {
    render() {
        return (
            <ScrollView>
                <View style = {{marginTop : 32}}>

                    <TextInput
                        style = {styles.input} placeholder = "검색어 입력 (예 : 야간)" autoCapitalize = "none" onChangeText={name => this.setState({name})}
                    />

                </View>
                <View style = {styles.form}>
                    <View style = {{marginTop : 16}}>
                        <Text>검색결과</Text>
                    </View>

                    <View style = {{marginTop : 60}}>
                        <Text>돌보미1       돌보미2     돌보미3</Text>
                        <Text>돌보미4       돌보미5     돌보미6</Text>
                    </View>
                </View>

                <View style = {{marginTop : 32}}>
                    <TouchableOpacity style = {styles.button}  onPress = {() => this.props.navigation.navigate("Home")}>
                    <Text style = {{color:"#FFF", fontWeight: "500"}}>홈으로</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        borderBottomColor : "#8A8F9E",
        // borderBottomWidth : StyleSheet.hairlineWidth,
        borderWidth : 0.5,
        marginHorizontal : 32,
        height : 40,
        fontSize : 15,
        color : "#161F3D"
    },
    form: {
        marginBottom : 24,
        marginHorizontal: 30
    },
    button : {
        marginHorizontal : 30,
        backgroundColor: "#0C00AF",
        borderRadius : 4,
        height : 48,
        alignItems : "center",
        justifyContent : "center"
    }
})