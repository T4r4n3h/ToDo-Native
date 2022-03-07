import React, {useState} from 'react';
import { StyleSheet, Text,View, TextInput, Button} from 'react-native';

export default function AddTodo({submitHandler}) {
    const[text, setText] = useState ('');
    const changeHandler = (val) => {

        setText(val);

    }
    


    return(

        <View style={{
            // backgroundColor:'yellow',
            marginHorizontal:40,
            marginTop:50,
            
        }}>
            <TextInput
            style={styles.input}
            placeholder='new todo...'
            onChangeText= {changeHandler}
            />
            <View
            style={styles.btn}
            >
                <Button
                onPress={() => submitHandler(text)}
                title="Add Todo"
                color="coral"
                accessibilityLabel="Learn more about this purple button"
                />
            </View>
                    
           
        </View>
    )
}

const styles = StyleSheet.create({
  input:{
      marginTop: 20,
      marginBottom: 10,
      paddingHorizontal: 6,
      paddingVertical: 16, 
      borderBottomWidth:1,
      borderBottomColor: '#ddd'
  }, 
//   btn:{
      paddingHorizontal:40,
//   }
})