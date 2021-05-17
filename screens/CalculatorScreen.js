import React from 'react';
import {View, StyleSheet, Text,TouchableOpacity} from 'react-native';
import {CalcButton,CalcDisplay} from "./../components"

require("./../lib/swisscalc.lib.format.js")
require("./../lib/swisscalc.lib.operator.js")
require("./../lib/swisscalc.lib.operatorCache.js")
require("./../lib/swisscalc.lib.shuntingYard.js")
require("./../lib/swisscalc.display.memoryDisplay.js")
require("./../lib/swisscalc.display.numericDisplay.js")
require("./../lib/swisscalc.display.fixedPointDisplay.js")
require("./../lib/swisscalc.calc.calculator.js")


export default class CalculatorScreen extends React.Component{

    constructor(props){
        super(props);
    
        this.state = {
            display:"0",
                }

this.oc = global.swisscalc.lib.operatorCache;
this.calc = new global.swisscalc.calc.calculator();
	}

onDigitPress = (digit) => {
    this.calc.addDigit(digit);
    this.setState({display: this.calc.getMainDisplay()});
}
onClearPress = () =>{
    this.calc.clear();
    this.setState({display: this.calc.getMainDisplay()});
}

onEqualPress=()=>{
    this.calc.equalsPressed();
    this.setState({display: this.calc.getMainDisplay()});
}
onPlusMinusPress=()=>{
    this.calc.negate()
    this.setState({display: this.calc.getMainDisplay()});
}
onBinaryOperaterPress=(operator)=>{
    this.calc.addBinaryOperator(operator);
    this.setState({display: this.calc.getMainDisplay()});
}
onUnaryOperaterPress=(operator)=>{
    this.calc.addUnaryOperator(operator);
    this.setState({display: this.calc.getMainDisplay()});
}
onBackSpacePress=()=>{
    this.calc.backspace();
    this.setState({display: this.calc.getMainDisplay()});
}

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.displayContainer}>
                    <CalcDisplay display={this.state.display} />
                </View>
                <View style={{alignItems:"flex-end"}}>
                <TouchableOpacity style={{color:"black",fontWeight:"bold",fontSize:20,backgroundColor:"yellow",width:50,borderRadius:20,alignItems:"center",justifyContent:"center",margin:1}} onPress={()=>{this.onBackSpacePress()}}>&#8592;</TouchableOpacity>
                </View>
                
                <View style={styles.buttonContainer}>
                <View style={styles.buttonRow}>
                    <CalcButton onPress={()=>{this.onClearPress()}} title='C' color='white' backgroundColor='#689F38'/>
                    <CalcButton onPress={()=>{this.onPlusMinusPress()}} title='+/-' color='white' backgroundColor='#689F38'/>
                    <CalcButton onPress={()=>{this.onUnaryOperaterPress(this.oc.PercentOperator)}} title='%' color='white' backgroundColor='#689F38'/>
                    <CalcButton onPress={()=>{this.onBinaryOperaterPress(this.oc.DivisionOperator)}} title='/' color='white' backgroundColor='#F48FB1'/>
                </View>
                <View style={styles.buttonRow}>
                    <CalcButton onPress={()=>{this.onDigitPress("7")}} title='7' color='white' backgroundColor='rgb(96,125,139)'/>
                    <CalcButton onPress={()=>{this.onDigitPress("8")}} title='8' color='white' backgroundColor='rgb(96,125,139)'/>
                    <CalcButton onPress={()=>{this.onDigitPress("9")}} title='9' color='white' backgroundColor='rgb(96,125,139)'/>
                    <CalcButton onPress={()=>{this.onBinaryOperaterPress(this.oc.MultiplicationOperator)}} title='X' color='white' backgroundColor='#F48FB1'/>
                </View>
                <View style={styles.buttonRow}>
                    <CalcButton onPress={()=>{this.onDigitPress("4")}} title='4' color='white' backgroundColor='rgb(96,125,139)'/>
                    <CalcButton onPress={()=>{this.onDigitPress("5")}} title='5' color='white' backgroundColor='rgb(96,125,139)'/>
                    <CalcButton onPress={()=>{this.onDigitPress("6")}} title='6' color='white' backgroundColor='rgb(96,125,139)'/>
                    <CalcButton onPress={()=>{this.onBinaryOperaterPress(this.oc.SubtractionOperator)}} title='-' color='white' backgroundColor='#F48FB1'/>
                </View>
                <View style={styles.buttonRow}>
                    <CalcButton onPress={()=>{this.onDigitPress("1")}} title='1' color='white' backgroundColor='rgb(96,125,139)'/>
                    <CalcButton onPress={()=>{this.onDigitPress("2")}} title='2' color='white' backgroundColor='rgb(96,125,139)'/>
                    <CalcButton onPress={()=>{this.onDigitPress("3")}} title='3' color='white' backgroundColor='rgb(96,125,139)'/>
                    <CalcButton onPress={()=>{this.onBinaryOperaterPress(this.oc.AdditionOperator)}} title='+' color='white' backgroundColor='#F48FB1'/>
                </View>
                <View style={styles.buttonRow}>
                    <CalcButton onPress={()=>{this.onDigitPress("0")}} title='0' color='white' backgroundColor='rgb(96,125,139)' flex='2'/>
                    <CalcButton  onPress={()=>{this.onDigitPress(".")}} title='.' color='white' backgroundColor='rgb(96,125,139)'/>
                    <CalcButton onPress={()=>{this.onEqualPress()}} title='=' color='white' backgroundColor='#F48FB1'/>
                </View>
                </View>
            </View>)
    }
}

const styles = StyleSheet.create({
    container:{flex:1, backgroundColor:"black"},
    displayContainer:{flex:1, justifyContent:'flex-end'},
    buttonRow:{flexDirection:"row", justifyContent:'space-between'},
    buttonContainer:{padding:10},
})