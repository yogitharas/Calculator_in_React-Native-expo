import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';

export default class CalcButton extends React.Component {
    
    static defaultProps = {
        onPress: function() {},
        title: "",
        color:"white",
        backgroundColor:"black",
        flex:"1",

    }
   


    render()
   {  var bc = this.props.backgroundColor;

        return (
           <TouchableOpacity onPress={this.props.onPress} style={[styles.container, {backgroundColor:bc}, {flex: this.props.flex}]}>
               <Text style={[styles.text, {color: this.props.color}]}>{this.props.title}</Text>
           </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {alignItems:"center",justifyContent:"center",
                height:80,width:80,borderRadius:40,
                margin:5},
    text: {fontSize:"2em",fontFamily:"Arial",fontWeight:"bold"},
})