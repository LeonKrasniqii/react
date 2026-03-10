import React from "react";
import {Text,View,StyleSheet, TouchableOpacity} from "react-native";
import StudentDetails from "../components/StudentDetails";

const StudentsScreen = ({navigation}) =>{
    return(
        <View>
            <Text style={StyleSheet.text}>Students Screen</Text>
            <TouchableOpacity
               style={styles.profileButton}
               onPress={() => navigation.navigate('Profile')}
               >
            <Text style={styles.buttonText}>View Profile</Text>
            </TouchableOpacity>
            <StudentDetails name="Dion" image={require('../assets/avatar3.png')} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nobis veritatis ut rem quis, fuga ipsa similique iusto quam magnam ipsam praesentium, expedita eum? Nulla quod voluptatem deleniti atque molestiae?"/>
            <StudentDetails name="Fisi" image={require('../assets/avatar2.png')} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nobis veritatis ut rem quis, fuga ipsa similique iusto quam magnam ipsam praesentium, expedita eum? Nulla quod voluptatem deleniti atque molestiae?"/>
            <StudentDetails name="Leon" image={require('../assets/avatar1.png')} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nobis veritatis ut rem quis, fuga ipsa similique iusto quam magnam ipsam praesentium, expedita eum? Nulla quod voluptatem deleniti atque molestiae?"/>
            <StudentDetails name="Jon" image={require('../assets/avatar3.png')} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nobis veritatis ut rem quis, fuga ipsa similique iusto quam magnam ipsam praesentium, expedita eum? Nulla quod voluptatem deleniti atque molestiae?"/>
            <StudentDetails name="Germanium" image={require('../assets/avatar2.png')} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nobis veritatis ut rem quis, fuga ipsa similique iusto quam magnam ipsam praesentium, expedita eum? Nulla quod voluptatem deleniti atque molestiae?"/>
            
        </View>
    );
}

const styles = StyleSheet.create({
    text:{
        textAlign:'center',
        fontSize:20,
        marginVertical:20
    }
})

export default StudentsScreen;