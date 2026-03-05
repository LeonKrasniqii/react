import React from "react";
import{View,Text,Image,TouchableOpacity,StyleSheet,ScrollView} from 'react-native';

const Project = ({images}) =>{
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>PROJECTS</Text>
                <TouchableOpacity>
                    <Text style={styles.viewAll}>View All</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}