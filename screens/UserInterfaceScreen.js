import React,{Component} from 'react';
import {Text, View, TouchableOpacity, TextInput} from 'react-native';
import {ListItem} from 'react-native-elements'
import db from '../config';

export default class UserInterfaceScreen extends Component{
    constructor(){
        super()
        this.state={
            emailId: ''
        }
    }
renderItem = ( {item, i} ) =
    <ListItem
        key={i}
        title = {item.emailId}
        rightElement={
            <TouchableOpacity
                style = {[
                    styles.button,
                {backgroundColor : '#696969'}]}
                <TouchableOpacity/>
        }
        /*onPress = {()=>{
            
          }}*/
         >

    
    />
    </ListItem>
    }