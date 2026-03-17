import React from "react";
import {View,Text,StyleSheet,FlatList} from "react-native";

class TodoScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            posts: []
        }
    }
    async componentDidMount(){
        const data = await fetch("https://jsonplaceholder.typicode.com/todos");
        const jsonData = await data.json();
        this.setState({ posts: jsonData });
    }
    render(){
        const {posts} = this.state
        return(
            <View>
                 <Text style={styles.title}>User Screen</Text>
                <FlatList style={styles.list}
                horizontal={false}
                keyExtractor={posts => posts.id}
                data={posts} renderItem ={({item})=> (
                    <View style={styles.container}>
                        <Text style={styles.id}>{item.id}</Text>
                        <Text style={styles.name}>{item.title}</Text>
                        <Text style={styles.email}>{item.completed}</Text>
                        <Text style={styles.username}>{item.userId}</Text>
                        <Text style={styles.phone}>{item.id}</Text>
                        <Text style={styles.street}>{item.title}</Text>
                        <Text style={styles.zipcode}>{item.completed}</Text>

                    </View>
                )}
                />
               
            </View>
        )
    }
}

const styles = StyleSheet.create({
list:{
    marginBottom: 20,

},
container:{
    alignItems: 'flex-start',
    alignSelf:'center',
    padding:10,
    width: '90%',
    height: 150,
    display:'flex',
    flexDirection: 'column',
    borderRadius:20,
    shadowRadius: 10,
    shadowColor: 'green',
    shadowOpacity: 0.5,
    marginTop:15,
    backgroundColor: '#f0f0f0',
},
id:{
    fontWeight: 'bold',
    color: 'Muted Navy Blue',
    fontStyle:'italic'
},
name:{
    fontSize: 22,
    shadowColor: 'green',
    fontStyle: 'italic',
    shadowOpacity: 0.5,
    color:'#1F2937',
},
email:{
    color: 'brown',
    shadowColor: 'green',
    fontSize: 12,
    shadowOpacity: 0.5,
},
username:{
    fontStyle: 'italic',
    shadowColor: 'green',
    shadowOpacity: 0.5,
    fontSize: 12,
},
phone:{
    fontStyle: 'italic',
    shadowColor: 'green',
    shadowOpacity: 0.5,
    fontSize: 12,
},
street:{
    fontWeight: 'bold',
    shadowColor: 'green',
    shadowOpacity: 0.5,
    fontSize: 12,
},
zipcode:{
    fontWeight: 'bold',
    shadowColor: 'green',
    shadowOpacity: 0.5,
    fontSize: 12,

},
title:{
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
}
});

export default TodoScreen;