import React from "react";
import {Text,StyleSheet,View} from "react-native";

const BoxScreen = () =>{
    return(
        <View style={{flex :1,
        flexDirection:"column",
        justifyContent:"center",
        alignContent:"center",
        alignItems:"center",
        flexWrap:"wrap"
        }}>
            <View style={{height:250,width:500,backgroundColor:"powderblue",alignSelf:"flex-start"}}><Text style={{alignItems:"center",fontSize:50,fontColor:"white",alignSelf:"center",justifyContent:"center"}}>Flex Box</Text></View>
            <View style={{height:250,width:500,backgroundColor:"skyblue",alignSelf:"flex-end"}}><Text style={{alignItems:"center",fontSize:50,fontColor:"white",alignSelf:"center",justifyContent:"center"}}>Flex Box</Text></View>
            <View style={{height:250,width:500,backgroundColor:"steelblue",alignSelf:"auto"}}><Text style={{alignItems:"center",fontSize:50,fontColor:"white",alignSelf:"center",justifyContent:"center"}}>Flex Box</Text></View>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        borderWidth:1,
        borderColor:"Red",
        margin:20,
    },
    viewStyle: {
        borderWidth: 3,
        borderColor: "Green",
    }
});

export default BoxScreen;