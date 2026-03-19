import React from "react";
import {View,Text,StyleSheet,FlatList,TouchableOpacity,Image} from "react-native";
import data from "../data/shop.json";
const imageMap = {
  "assets/jordan1.jpg": require("../assets/jordan1.jpg"),
  "assets/jordan3.jpg": require("../assets/jordan3.jpg"),
  "assets/jordan4.jpg": require("../assets/jordan4.jpg"),
  "assets/jordan5.jpg": require("../assets/jordan5.jpg"),
  "assets/jordan10.jpg": require("../assets/jordan10.jpg"),
  "assets/jordan11.jpg": require("../assets/jordan11.jpg"),
  "assets/jordan13.jpg": require("../assets/jordan13.jpg"),
};
class ShopScreen extends React.Component{
   constructor(props){
    super(props);
    this.state = {
        shop: [],
    };
}
    componentDidMount(){
        this.setState({shop: data});
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.screenTitle}>Shop Screen</Text>
                <FlatList
                    data={this.state.shop}
                    style={styles.list}
                    contentContainerStyle={{ paddingBottom: 20 }}
                    keyExtractor={shop => shop.id.toString()}
                    renderItem={({item}) => (
    <View style={styles.cardWrapper}>
        <Text>{item.name}</Text>

        <Image 
          source={imageMap[item.images[0]]}
          style={{ width: 120, height: 120 }}
        />

        <Text>{item.category}</Text>
        <Text>${item.price.toFixed(2)}</Text>
        <Text>{item.stock > 0 ? "In Stock" : "Out of Stock"}</Text>
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

export default ShopScreen;