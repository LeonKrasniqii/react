import React from "react";
import {View,Text,StyleSheet,FlatList,TouchableOpacity} from "react-native";
import data from "../data/countries.json";

class CountriesScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            countries:[],
        };
    }
    componentDidMount(){
        this.setState({countries: data});
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.screenTitle}>Countries Screen</Text>
                <FlatList
                    data={this.state.countries}
                    style={styles.list}
                    contentContainerStyle={{ paddingBottom: 20 }}
                    keyExtractor={countries => countries.id.toString()}
                    renderItem={({item}) => (
                        <View style={styles.cardWrapper}>
                            <Text>{item.name}</Text>
                            <Text>{item.country}</Text>
                            <Text>{item.description}</Text>
                        </View>
                    )}
                />
                <View style={styles.buttonContainer}> 
                    <TouchableOpacity
                        onPress={() => this.props.navigation.goBack()}
                        style={styles.backButton}
                        >
                        <Text style={styles.buttonText}>Back</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    screenTitle:{
        fontSize:24,
        fontWeight:"bold",
        marginBottom:20,
        textAlign:"center"
    },
    cardWrapper:{
        backgroundColor:"#f0f0f0",
        padding:15,
        marginBottom:10,
        borderRadius:5
    },
    backButton:{
        backgroundColor:"#007bff",
        padding:10,
        borderRadius:5,
        alignItems:"center",
        marginTop:20
    },
    buttonText:{
        color:"#fff",
        fontSize:16,
        fontWeight:"bold"

    },
    container:{
        flex:1,
        padding:20,
        backgroundColor:"#fff"
    },
    list:{
       flex:1,
    },
    buttonContainer:{
        alignItems:"center",
        justifyContent:"center",
            marginBottom: 20,

    },

});

export default CountriesScreen;