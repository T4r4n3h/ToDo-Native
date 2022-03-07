import React, {useState} from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header'
import TodoItem from './components/todoItem'
import AddTodo from './components/addTodo'
import Sandbox from './components/sandbox'
export default function App() {

  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' }
  ]);

  const pressHandler =  (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    });
  }

  const submitHandler = (text) => {
      if(text.length > 3){

        setTodos((prevTodos) => {
          return [
            {text:text, key:Math.random().toString()},
            ...prevTodos
          ];
        });
      } else {
        Alert.alert('OOPS!', 'Todos must be over 3 chars long', [
          {text:'understood', onPress:() => console.log('alert closed')}
        ])
      }
  }

    return (
    // <Sandbox/>

      <TouchableWithoutFeedback
          onPress={() => {
            console.log('dismissed keyboard')

          }}
      >
        <SafeAreaView style={styles.container}>
          {/* header */}
          <Header/>
          <AddTodo submitHandler={submitHandler}/>
          <View style={styles.content}>
          {/* ToDo Form */}
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem = {({ item }) => (
                <TodoItem item ={item} pressHandler={pressHandler}/>
              ) }
        
            />
          </View>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'pink',
   
  },
  content:{
    backgroundColor: 'red',
    padding:40,
  },
  list:{
    marginTop:10,
    // backgroundColor:'blue'
  }
});
