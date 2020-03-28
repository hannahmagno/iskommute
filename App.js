import * as React from 'react';
//import { Text, Button, StyleSheet, View, FlatList, TextInput, ActivityIndicator, Image} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Colors from './constants/colors';
//import React, { Component } from 'react';
import { StyleSheet, Text, Button, View, ScrollView, TouchableOpacity, Image, Alert} from 'react-native';
import SearchInput, { createFilter } from 'react-native-search-filter';
import emails from './mails';
const KEYS_TO_FILTERS = ['item.place', 'details'];

class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('./assets/3.png')}
        style={{ width: 115, height: 50}}
      />
    );
  }
}
class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTitle: () => <LogoTitle />,
    headerStyle: {
      backgroundColor: Colors.primary,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        
        <Button color='#5ab95b'
          title="Search"
          onPress={() => this.props.navigation.navigate('Search')}
        />

      </View>
    );
  }
}


class AboutScreen extends React.Component {
  static navigationOptions = {
    title: 'About',
    headerStyle: {
      backgroundColor: Colors.primary,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>About</Text>


        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

class SearchScreen extends React.Component {
  static navigationOptions = {
    title: 'Search',
    headerStyle: {
      backgroundColor: Colors.primary,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    }
  }
  searchUpdated(term) {
    this.setState({ searchTerm: term })
  }
  render() {
    const filteredEmails = emails.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
    return (
      <View style={styles.container}>
        <SearchInput 
          onChangeText={(term) => { this.searchUpdated(term) }} 
          style={styles.searchInput}
          placeholder="Type a message to search"
          />
        <ScrollView>
          {filteredEmails.map(email => {
            return (
              <TouchableOpacity onPress={()=>alert(email.details)} key={email.id} style={styles.emailItem}>
                <View>
                  <Text>{email.item.place}</Text>
                
                </View>
              </TouchableOpacity>
            )
          })}
        </ScrollView>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Iskommute: HomeScreen,
    About: AboutScreen,
    Search: SearchScreen
  },
  {
    initialRouteName: 'Iskommute',
  }
); 

const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: 'center',
    flex: 1,
    marginTop: 40,
    padding: 16,
  },
  textStyle: {
    padding: 10,
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 10,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start'
  },
  emailItem:{
    borderBottomWidth: 0.5,
    borderColor: 'rgba(0,0,0,0.3)',
    padding: 10
  },
  emailSubject: {
    color: 'rgba(0,0,0,0.5)'
  },
  searchInput:{
    padding: 10,
    borderColor: '#CCC',
    borderWidth: 1
  },


});

export default createAppContainer(AppNavigator);