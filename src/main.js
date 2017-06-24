import React, { Component } from 'react';
import { Text,
    View, StyleSheet,
 } from 'react-native';
 class Main extends Component {
     state = {  }
     render() {
         return (
             <View style={styles.container}></View>
         );
     }
 }
 
 const styles = StyleSheet.create({
     container:{
         flex:1
     }
 });
 export default Main;