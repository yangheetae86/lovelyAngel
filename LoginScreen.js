import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import {Ionicons} from '@expo/vector-icons'
import * as firebase from 'firebase'

export default class LoginScreen extends Component {

    state = {
        email : "",
        password : "",
        errorMessage : null
    }

    handleLogin = () => {
        const {email, password} = this.state;

        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(error => this.setState({errorMessage : error.message}));
    }

    render() {
        return (
            <ScrollView style = {styles.container}>
                <View style = {{alignItems : 'center'}}>
                    <View style = {{marginTop : 16}}>
                        <Text>영유아 전문 돌보미 서비스</Text>
                    </View>

                    <Ionicons name = "ios-bed" size = {100}/>

                    <View style = {{marginBottom : 8}}>
                    <Text style = {{fontSize : 32}}>Lovely Angel</Text>
                    </View>
                    <Text>사랑하는 우리 아기{`\n`}소중하고 안전하게 무럭무럭 자라나세요!</Text>
                </View>

                <View style = {styles.errorMessage}>
                    {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                </View>

                <View style = {styles.form}>
                    <View>
                        <Text style = {styles.inputTitle}>이메일</Text>
                        <TextInput
                            style = {styles.input} autoCapitalize = "none" onChangeText={email => this.setState({email})} value={this.state.email}
                        ></TextInput>
                    </View>

                    <View style = {{marginTop : 32}}>
                        <Text style = {styles.inputTitle}>비밀번호</Text>
                        <TextInput
                            style = {styles.input} secureTextEntry autoCapitalize = "none" onChangeText={password => this.setState({password})} value = {this.state.password}
                        ></TextInput>
                    </View>
                </View>

                <View style = {{marginBottom : 8}}>
                    <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
                        <Text style = {{color:"#FFF", fontWeight: "500"}}>로그인</Text>
                    </TouchableOpacity>
                </View>

                <View style = {{marginBottom : 8}}>
                    <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate("RegisterParent")}>
                        <Text style = {{color:"#FFF", fontWeight: "500"}}>부모 회원가입</Text>
                    </TouchableOpacity>
                </View>

                <View style = {{marginBottom : 32}}>
                    <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate("Registerbabysitter")}>
                        <Text style = {{color:"#FFF", fontWeight: "500"}}>돌보미 회원가입</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex : 1
    },
    errorMessage: {
        height : 72,
        alignItems : "center",
        justifyContent : "center",
        marginHorizontal : 30
    },
    error: {
        color : "#E9446A",
        fontSize : 13,
        fontWeight : "600",
        textAlign : "center"
    },
    form: {
        marginBottom : 48,
        marginHorizontal: 30
    },
    inputTitle: {
        color : "#8A8F9E",
        fontSize : 10,
        textTransform : "uppercase"
    },
    input: {
        borderBottomColor : "#8A8F9E",
        borderBottomWidth : StyleSheet.hairlineWidth,
        height : 40,
        fontSize : 15,
        color : "#161F3D"
    },
    button : {
        marginHorizontal : 30,
        backgroundColor: "#0C00AF",
        borderRadius : 4,
        height : 48,
        alignItems : "center",
        justifyContent : "center"
    }
});