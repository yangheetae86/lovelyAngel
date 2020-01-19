import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import * as firebase from 'firebase'
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'

//screen
import LoadingScreen from './screen/LoadingScreen'
import LoginScreen from './screen/LoginScreen'
import RegisterparentScreen from './screen/RegisterparentScreen'
import RegisterbabysitterScreen from './screen/RegisterbabysitterScreen'

//homestack
import HomeScreen from './screen/HomeScreen'
import InformationScreen from './screen/InformationScreen'
import SearchScreen from './screen/SearchScreen'
import SettingScreen from './screen/SettingScreen'
import LovelypayScreen from './screen/LovelypayScreen'

import SitterListScreen from './screen/SitterListScreen'

console.disableYellowBox = true;

var firebaseConfig = {
  apiKey: "AIzaSyDMIpQCPVl6AedV5caT3yUO4LqHlgJMtKA",
  authDomain: "react-native-9260c.firebaseapp.com",
  databaseURL: "https://react-native-9260c.firebaseio.com",
  projectId: "react-native-9260c",
  storageBucket: "react-native-9260c.appspot.com",
  messagingSenderId: "531460236620",
  appId: "1:531460236620:web:6bc836dba8b5076b3e5be9",
  measurementId: "G-NYQMK9WD8N"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const Authstack = createStackNavigator({
  Login : LoginScreen,
  RegisterParent : RegisterparentScreen,
  Registerbabysitter : RegisterbabysitterScreen
})

const Homestack = createStackNavigator({
    Home : {
        screen : HomeScreen,
            navigationOptions : {
                headerLeft : <Text style = {{marginLeft : 20}}></Text>,
                headerTitle : <View style={{alignItems: "center", flex : 1}}><Text style = {{fontSize : 24}}>홈</Text></View>,
                headerRight : <TouchableOpacity onPress = {() => {
                    firebase.auth().signOut()
                    }
                }>
                    <Text  style = {{marginRight : 20}}>로그아웃</Text>
                </TouchableOpacity>
            }
    },
    Search : {
        screen : SearchScreen,
            navigationOptions : {
                headerTitle : <View style={{alignItems: "center", flex : 1}}><Text style = {{fontSize : 24}}>돌보미 찾기</Text></View>,
                headerRight : <Text style = {{marginRight : 20}}></Text>
            }
    },
    SitterList : {
        screen : SitterListScreen,
        navigationOptions : {
            headerTitle : <View style={{alignItems: "center", flex : 1}}><Text style = {{fontSize : 24}}>돌보미 목록</Text></View>,
            headerRight : <Text style = {{marginRight : 20}}></Text>
        }
    },
    Information : {
      screen : InformationScreen,
          navigationOptions : {
              headerTitle : <View style={{alignItems: "center", flex : 1}}><Text style = {{fontSize : 24}}>아이 {`&`} 나의 정보</Text></View>,
              headerRight : <Text style = {{marginRight : 20}}></Text>
          }
    },
    Setting : {
      screen : SettingScreen,
          navigationOptions : {
              headerTitle : <View style={{alignItems: "center", flex : 1}}><Text style = {{fontSize : 24}}>설정 {`&`} 돌보미 이력관리</Text></View>,
              headerRight : <Text style = {{marginRight : 20}}></Text>
          }
    },
    Lovelypay : {
      screen : LovelypayScreen,
          navigationOptions : {
              headerTitle : <View style={{alignItems: "center", flex : 1}}><Text style = {{fontSize : 24}}>러블리 페이</Text></View>,
              headerRight : <Text style = {{marginRight : 20}}></Text>
          }
    },

})

export default createAppContainer(
  createSwitchNavigator({
    Loading : LoadingScreen,
    Home : Homestack,
    Auth : Authstack
  },
  {
    initialRouteName : "Loading"
  })
)