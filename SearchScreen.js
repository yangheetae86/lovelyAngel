import React, {Component} from 'react'
import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native'
import MultiSlider from '@ptomasroos/react-native-multi-slider'
import DatePicker from 'react-native-datepicker'

export default class SearchScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            startdate : new Date(),
            enddate : new Date(),
            values : [10000, 20000],
            values2 : [2, 4]
        }
    }

    multiSliderValueChange = (values) => {
        this.setState({
            values,
        })
    }

    multiSliderValueChange2 = (values2) => {
        this.setState({
            values2,
        })
    }

    render() {
        const {startDate, endDate, displayedDate} = this.state;
        return (
            <ScrollView>
                <View style = {styles.form}>
                    <Text>찾는 돌보미 성별</Text>
                    
                    <View style = {{ alignItems : "center", justifyContent : "space-around", flexDirection : 'row', marginVertical : 16}}>
                        <TouchableOpacity style = {styles.touchbutton}>
                            <Text style = {{fontSize : 24, color : 'white', marginHorizontal : 16}}>여성</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style = {styles.touchbutton}>
                            <Text style = {{fontSize : 24, color : 'white', marginHorizontal : 16}}>남성</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style = {styles.touchbutton}>
                            <Text style = {{fontSize : 24, color : 'white', marginHorizontal : 16}}>여성</Text>
                        </TouchableOpacity>
                    </View>

                    <Text>자녀의 나이 (만)</Text>
                    
                    <View style = {{ alignItems : "center", justifyContent : "space-around", flexDirection : 'row', marginVertical : 16}}>
                        <TouchableOpacity style = {styles.touchbutton}>
                            <Text style = {{fontSize : 24, color : 'white', marginHorizontal : 8}}>0살</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style = {styles.touchbutton}>
                            <Text style = {{fontSize : 24, color : 'white', marginHorizontal : 8}}>1살</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style = {styles.touchbutton}>
                            <Text style = {{fontSize : 24, color : 'white', marginHorizontal : 8}}>2살</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style = {styles.touchbutton}>
                            <Text style = {{fontSize : 24, color : 'white', marginHorizontal : 8}}>3살</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style = {styles.touchbutton}>
                            <Text style = {{fontSize : 24, color : 'white', marginHorizontal : 8}}>그 외</Text>
                        </TouchableOpacity>
                    </View>

                    <Text>자녀의 성별</Text>
                        <View style = {{ alignItems : "center", justifyContent : "space-around", flexDirection : 'row', marginVertical : 16}}>
                            <TouchableOpacity style = {styles.littlebutton}>
                                <Text style = {{fontSize : 24, color : 'white', marginHorizontal : 8}}>여아</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style = {styles.littlebutton}>
                                <Text style = {{fontSize : 24, color : 'white', marginHorizontal : 8}}>남아</Text>
                            </TouchableOpacity>
                        </View>

                    <Text>찾는 돌보미 성별</Text>
                    
                        <View style = {{ alignItems : "center", justifyContent : "space-around", flexDirection : 'row', marginVertical : 16}}>
                            <TouchableOpacity style = {styles.touchbutton}>
                                <Text style = {{fontSize : 24, color : 'white', marginHorizontal : 16}}>한국인</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style = {styles.touchbutton}>
                                <Text style = {{fontSize : 24, color : 'white', marginHorizontal : 16}}>외국인</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style = {styles.touchbutton}>
                                <Text style = {{fontSize : 24, color : 'white', marginHorizontal : 16}}>무관</Text>
                            </TouchableOpacity>
                        </View>

                    <Text>지불할 페이(1시간 기준)</Text>
                        <MultiSlider
                            values = {[this.state.values[0], this.state.values[1]]}
                            sliderLength = {200}
                            onValuesChange = {this.multiSliderValueChange}
                            min = {0}
                            max = {30000}
                            step = {1000}
                        />
                        
                    <Text style={styles.text}>{this.state.values[0]}원 ~ {this.state.values[1]}원</Text>

                    <View style = {{marginTop : 32}}>
                        <Text>시간 선택(1일 기준 최소 1시간)</Text>
                    </View>
                        <MultiSlider
                            values = {[this.state.values2[0], this.state.values2[1]]}
                            sliderLength = {200}
                            onValuesChange = {this.multiSliderValueChange2}
                            min = {1}
                            max = {12}
                            step = {1}
                        />
                    
                    <View style = {{marginBottom : 32}}>
                        <Text style={styles.text}>{this.state.values2[0]}시간 ~ {this.state.values2[1]}시간</Text>
                    </View>

                    <Text>기간 선택</Text>

                    <View style = {{ alignItems : "center", justifyContent : "space-around", flexDirection : 'row', marginTop : 16}}>
                        <DatePicker
                        style = {{width : 150}}
                        date = {this.state.startdate}
                        mode = "date"
                        placeholder = "select date"
                        format = "DD-MM-YYYY"
                        minDate = "01-01-2019"
                        maxDate = "31-12-2020"
                        confirmBtnText = "Confirm"
                        cancelBtnText = "Cancel"
                        onDateChange={(date) => {this.setState({startdate: date})}}
                        />

                        <DatePicker
                        style = {{width : 150}}
                        date = {this.state.enddate}
                        mode = "date"
                        placeholder = "select date"
                        format = "DD-MM-YYYY"
                        minDate = "01-01-2019"
                        maxDate = "31-12-2020"
                        confirmBtnText = "Confirm"
                        cancelBtnText = "Cancel"
                        onDateChange={(date) => {this.setState({enddate: date})}}
                        />
                    </View>
                </View>


                <View style = {{marginVertical : 32}}>
                    <TouchableOpacity style={styles.button} onPress = {() => this.props.navigation.navigate("SitterList")}>
                        <Text style = {{color:"#FFF", fontWeight: "500"}}>돌보미 검색</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
    form : {
        marginTop : 16,
        marginBottom : 48,
        marginHorizontal: 30
    },
    touchbutton : {
        marginHorizontal : 30,
        backgroundColor: "#ffd9ad",
        borderRadius : 5,
        height : 48,
        alignItems : "center",
        justifyContent : "center"
    },
    littlebutton : {
        marginHorizontal : 30,
        backgroundColor: "#ffd9ad",
        borderRadius : 50,
        height : 48,
        alignItems : "center",
        justifyContent : "center"
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