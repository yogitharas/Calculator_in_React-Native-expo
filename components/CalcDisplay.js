import React from 'react';
import {Text,View,StyleSheet} from 'react-native'

export default class CalcDisplay extends React.Component{
    
    static propTypes = {
        display:"",
    }
    
    render(){
        return(

            <View style = {styles.container}>
                <Text style = {styles.display}>{this.props.display}</Text>
            </View>
            
            )
    }
}

const styles = StyleSheet.create({
    container:{display:"flex", padding:10},
    display:{ fontSize:70, color:"white", textAlign:"right"},})