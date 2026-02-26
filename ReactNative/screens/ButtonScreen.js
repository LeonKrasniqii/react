import React from "react";
import {View,Text,StyleSheet,Button,TouchableOpacity} from 'react-native';

const ButtonScreen = () =>{
    let counter = 0;
    return(
        <View>
            <Text style={StyleSheet.textStyle}>Button Screen</Text>
            <Button
                title="Click me"
                color="cyan"
                onPress={() => console.log('Button Clicked', counter++)}
            />
            
            <TouchableOpacity
            style={styles.touchableBtn}
             onPress={() => console.log('TouchableOpacity:', counter++)}>
                <Text style={styles.btnText}>Click TouchableElement</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        textAlign: 'center',
        marginTop:10,
        fontSize:15,
        marginBottom:10
    },
    touchableBtn:{
        backgroundColor:'black',
        marginVertical:15,
        paddingVertical:20,
        borderRadius:6,
        marginHorizontal:20
    },
    btnText:{
        color: 'white',
        textAlign:'center',
        fontSize:25,
        fontWeight:'bold'
    }
});

export default ButtonScreen;