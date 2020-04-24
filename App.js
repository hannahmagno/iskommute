import * as React from 'react';
//import { Text, Button, StyleSheet, View, FlatList, TextInput, ActivityIndicator, Image} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import Colors from './constants/colors';
//import React, { Component } from 'react';
import { StyleSheet, Text, Button, View, ScrollView, TouchableOpacity, Image, Alert, ActivityIndicator, TextInput, FlatList } from 'react-native';
import SearchInput, { createFilter } from 'react-native-search-filter';
import emails from './mails';
const KEYS_TO_FILTERS = ['item.place', 'details'];
import { ListItem } from 'react-native-elements';
import Unorderedlist from 'react-native-unordered-list';

const DrawerContent = (props) => (
  <View>
    <View
      style={{
        backgroundColor: '#fe4e4e',
        height: 240,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Image
        source={require('./assets/logo2.png')}
        style={{ width: 190, height: 210 }}
      />


    </View>
    <DrawerItems {...props} />
  </View>
)

const transportationList = [
  {
    title: 'Jeeps'
  },
  {
    title: 'Buses'
  },
  {
    title: 'Trains'
  },
  {
    title: 'Tricycles'
  },
]

const jeeps = [
  {
    name: 'Ikot Jeep',
    avatar_url: 'https://i.ibb.co/Dr4sGCY/school-bus.png',
    subtitle: 'Color: Yellow'
  },
  {
    name: 'Toki Jeep',
    avatar_url: 'https://i.ibb.co/Dr4sGCY/school-bus.png',
    subtitle: 'Color: Yellow'
  },
  {
    name: 'Katipunan Jeep',
    avatar_url: 'https://i.ibb.co/Dr4sGCY/school-bus.png',
    subtitle: 'Color: Red'
  },
  {
    name: 'Pantranco Jeep',
    avatar_url: 'https://i.ibb.co/Dr4sGCY/school-bus.png',
    subtitle: 'Color: Green'
  },
  {
    name: 'SM North Edsa Jeep',
    avatar_url: 'https://i.ibb.co/Dr4sGCY/school-bus.png',
    subtitle: 'Color: Red'
  },
]

const buses = [
  {
    name: 'P2P Bus (From UPTC to Glorietta 4)',
    avatar_url: 'https://i.ibb.co/SB8xfrG/bus.png',
    subtitle: 'At UPTC'
  }
]


const trains = [
  {
    name: 'MRT3',
    avatar_url: 'https://i.ibb.co/1mkpNBR/train.png'
  },
  {
    name: 'LRT1',
    avatar_url: 'https://i.ibb.co/1mkpNBR/train.png'
  },
  {
    name: 'LRT2',
    avatar_url: 'https://i.ibb.co/1mkpNBR/train.png'
  },
]


const tricycles = [
  {
    name: 'Tricycle Terminal 1',
    avatar_url: 'https://i.ibb.co/fGbgxMt/tricycle.jpg',
    subtitle: 'At GT-Toyota Asian Center Auditorium'
  },
  {
    name: 'Tricycle Terminal 2 ',
    avatar_url: 'https://i.ibb.co/fGbgxMt/tricycle.jpg',
    subtitle: 'At Krus Na Ligas'
  }
]

const mrt3 = [
  {
    name: 'North Avenue',
    avatar_url: 'https://i.ibb.co/CV9Rf1s/mrt3.png'
  },
  {
    name: 'Quezon Avenue',
    avatar_url: 'https://i.ibb.co/CV9Rf1s/mrt3.png'
  },
  {
    name: 'GMA Kamuning',
    avatar_url: 'https://i.ibb.co/CV9Rf1s/mrt3.png'
  },
  {
    name: 'Araneta Center Cubao',
    avatar_url: 'https://i.ibb.co/CV9Rf1s/mrt3.png'
  },
  {
    name: 'Santolan Annapolis',
    avatar_url: 'https://i.ibb.co/CV9Rf1s/mrt3.png'
  },
  {
    name: 'Ortigas',
    avatar_url: 'https://i.ibb.co/CV9Rf1s/mrt3.png'
  },
  {
    name: 'Shaw Boulevard',
    avatar_url: 'https://i.ibb.co/CV9Rf1s/mrt3.png'
  },
  {
    name: 'Boni',
    avatar_url: 'https://i.ibb.co/CV9Rf1s/mrt3.png'
  },
  {
    name: 'Guadalupe',
    avatar_url: 'https://i.ibb.co/CV9Rf1s/mrt3.png'
  },
  {
    name: 'Buendia',
    avatar_url: 'https://i.ibb.co/CV9Rf1s/mrt3.png'
  },
  {
    name: 'Ortigas',
    avatar_url: 'https://i.ibb.co/CV9Rf1s/mrt3.png'
  },
  {
    name: 'Ayala',
    avatar_url: 'https://i.ibb.co/CV9Rf1s/mrt3.png'
  },
  {
    name: 'Magallanes',
    avatar_url: 'https://i.ibb.co/CV9Rf1s/mrt3.png'
  },
  {
    name: 'Taft Avenue',
    avatar_url: 'https://i.ibb.co/CV9Rf1s/mrt3.png'
  },
]

const lrt1 = [
  {
    name: 'Baclaran',
    avatar_url: 'https://i.ibb.co/WDXxGfS/lrt.png'
  },
  {
    name: 'EDSA',
    avatar_url: 'https://i.ibb.co/WDXxGfS/lrt.png'
  },
  {
    name: 'Libertad',
    avatar_url: 'https://i.ibb.co/WDXxGfS/lrt.png'
  },
  {
    name: 'Gil Puyat',
    avatar_url: 'https://i.ibb.co/WDXxGfS/lrt.png'
  },
  {
    name: 'Vito Cruz',
    avatar_url: 'https://i.ibb.co/WDXxGfS/lrt.png'
  },
  {
    name: 'Quirino Avenue',
    avatar_url: 'https://i.ibb.co/WDXxGfS/lrt.png'
  },
  {
    name: 'Pedro Gil',
    avatar_url: 'https://i.ibb.co/WDXxGfS/lrt.png'
  },
  {
    name: 'U.N. Avenue',
    avatar_url: 'https://i.ibb.co/WDXxGfS/lrt.png'
  },
  {
    name: 'Central Terminal',
    avatar_url: 'https://i.ibb.co/WDXxGfS/lrt.png'
  },
  {
    name: 'Carriedo',
    avatar_url: 'https://i.ibb.co/WDXxGfS/lrt.png'
  },
  {
    name: 'Doroteo Jose',
    avatar_url: 'https://i.ibb.co/WDXxGfS/lrt.png'
  },
  {
    name: 'Bambang',
    avatar_url: 'https://i.ibb.co/WDXxGfS/lrt.png'
  },
  {
    name: 'Tayuman',
    avatar_url: 'https://i.ibb.co/WDXxGfS/lrt.png'
  },
  {
    name: 'Blumentrit',
    avatar_url: 'https://i.ibb.co/WDXxGfS/lrt.png'
  },
  {
    name: 'Abad Santos',
    avatar_url: 'https://i.ibb.co/WDXxGfS/lrt.png'
  },
  {
    name: '5th Avenue',
    avatar_url: 'https://i.ibb.co/WDXxGfS/lrt.png'
  },
  {
    name: 'Monumento',
    avatar_url: 'https://i.ibb.co/WDXxGfS/lrt.png'
  },
]

const lrt2 = [
  {
    name: 'Santolan',
    avatar_url: 'https://i.ibb.co/WDXxGfS/lrt.png'
  },
  {
    name: 'Katipunan',
    avatar_url: 'https://i.ibb.co/WDXxGfS/lrt.png'
  },
  {
    name: 'Anonas',
    avatar_url: 'https://i.ibb.co/WDXxGfS/lrt.png'
  },
  {
    name: 'Cubao',
    avatar_url: 'https://i.ibb.co/WDXxGfS/lrt.png'
  },
  {
    name: 'Betty Go',
    avatar_url: 'https://i.ibb.co/WDXxGfS/lrt.png'
  },
  {
    name: 'Gilmore',
    avatar_url: 'https://i.ibb.co/WDXxGfS/lrt.png'
  },
  {
    name: 'J. Ruiz',
    avatar_url: 'https://i.ibb.co/WDXxGfS/lrt.png'
  },
  {
    name: 'V. Mapa',
    avatar_url: 'https://i.ibb.co/WDXxGfS/lrt.png'
  },
  {
    name: 'Pureza',
    avatar_url: 'https://i.ibb.co/WDXxGfS/lrt.png'
  },
  {
    name: 'Legarda',
    avatar_url: 'https://i.ibb.co/WDXxGfS/lrt.png'
  },
  {
    name: 'C.M. Recto',
    avatar_url: 'https://i.ibb.co/WDXxGfS/lrt.png'
  },
]


class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('./assets/logo.png')}
        style={{ width: 115, height: 50 }}
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
          placeholder="Type a location in UP to search"
        />
        <ScrollView>
          {filteredEmails.map(email => {
            return (
              <TouchableOpacity onPress={() => alert(email.details)} key={email.id} style={styles.emailItem}>
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
  
  /*
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity style={styles.transportationStyle} activeOpacity={0.5} onPress={() => this.props.navigation.navigate('Transportation')}>
          <Image
            source={require('./assets/road.png')}
            style={styles.imageIconStyle}
          />
          <Text style={styles.textStyle}> Transportation </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.searchStyle} activeOpacity={0.5} onPress={() => this.props.navigation.navigate('Search')}>
          <Image
            source={require('./assets/search.png')}
            style={styles.imageIconStyle}
          />
          <Text style={styles.textStyle}> Search </Text>
        </TouchableOpacity>

      </View>
    );
  }*/
}

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./assets/search.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    ),
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
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
      <View>
        <Text style={styles.textAboutStyle}>Description:
        Iskommute is a mobile application that will provide help in navigating around UP Diliman. This application can provide suggestions and directions regarding transportation.
      </Text>
      </View>
    );
  }
}

class ResourcesScreen extends React.Component {
  static navigationOptions = {
    title: 'Resources',
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
      <View style={styles.textResourcesStyle}>
        <Unorderedlist><Text>UP Diliman Campus Map</Text>
        <Unorderedlist><Text>https://upd.edu.ph/~updinfo/nov13/articles/upd_map_2013.pdf</Text>
          </Unorderedlist>
        </Unorderedlist>
        
        <Unorderedlist><Text>MRT3 Stations</Text>
        <Unorderedlist><Text>Metro MRT3 Philippines</Text>
          </Unorderedlist>
        </Unorderedlist>
        
        <Unorderedlist><Text>LRT1 and LRT2 Stations</Text>
        <Unorderedlist><Text>Department of Transportation: Light Rail Transit Authority</Text>
          </Unorderedlist>
        </Unorderedlist>
        
        <Unorderedlist><Text>Vector Icons</Text>
        <Unorderedlist><Text>flaticon.com</Text>
          </Unorderedlist>  
        </Unorderedlist>
      
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
          placeholder="Type a location in UP to search"
        />
        <ScrollView>
          {filteredEmails.map(email => {
            return (
              <TouchableOpacity onPress={() => alert(email.details)} key={email.id} style={styles.emailItem}>
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

class TransportationScreen extends React.Component {
  static navigationOptions = {
    title: 'Transportation',
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
      <View>
        {
          transportationList.map((item, i) => (
            <ListItem onPress={() => this.props.navigation.navigate(item.title)}
              key={i}
              title={item.title}
              leftIcon={{ name: item.icon }}
              bottomDivider
              chevron
            />
          ))
        }
      </View>

    );
  }
}

class JeepScreen extends React.Component {
  static navigationOptions = {
    title: 'Jeeps',
    headerStyle: {
      backgroundColor: Colors.primary,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  keyExtractor = (item, index) => index.toString()

  renderItem = ({ item }) => (
    <ListItem
      title={item.name}

      leftAvatar={{
        source: item.avatar_url && { uri: item.avatar_url },
        title: item.name[0]
      }}
      bottomDivider

    />
  )

  render() {
    return (
      <FlatList
        keyExtractor={this.keyExtractor}
        data={jeeps}
        renderItem={this.renderItem}
      />

    );
  }
}


class IkotJeepScreen extends React.Component {
  static navigationOptions = {
    title: 'Ikot Jeep',
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
      <View>
        <Text>hi</Text>
      </View>

    );
  }
}

class TrainScreen extends React.Component {
  static navigationOptions = {
    title: 'Trains',
    headerStyle: {
      backgroundColor: Colors.primary,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  keyExtractor = (item, index) => index.toString()

  renderItem = ({ item }) => (
    <ListItem onPress={() => this.props.navigation.navigate(item.name)}
      title={item.name}

      leftAvatar={{
        source: item.avatar_url && { uri: item.avatar_url },
        title: item.name[0]
      }}
      bottomDivider
      chevron
    />
  )

  render() {
    return (
      <FlatList
        keyExtractor={this.keyExtractor}
        data={trains}
        renderItem={this.renderItem}
      />

    );
  }
}

class MRT3Screen extends React.Component {
  static navigationOptions = {
    title: 'MRT3 Stations',
    headerStyle: {
      backgroundColor: Colors.primary,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  keyExtractor = (item, index) => index.toString()

  renderItem = ({ item }) => (
    <ListItem onPress={() => this.props.navigation.navigate(item.name)}
      title={item.name}

      leftAvatar={{
        source: item.avatar_url && { uri: item.avatar_url },
        title: item.name[0]
      }}
      bottomDivider

    />
  )

  render() {
    return (
      <FlatList
        keyExtractor={this.keyExtractor}
        data={mrt3}
        renderItem={this.renderItem}
      />

    );
  }
}


class LRT1Screen extends React.Component {
  static navigationOptions = {
    title: 'LRT1 Stations',
    headerStyle: {
      backgroundColor: Colors.primary,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  keyExtractor = (item, index) => index.toString()

  renderItem = ({ item }) => (
    <ListItem onPress={() => this.props.navigation.navigate(item.name)}
      title={item.name}

      leftAvatar={{
        source: item.avatar_url && { uri: item.avatar_url },
        title: item.name[0]
      }}
      bottomDivider
    />
  )

  render() {
    return (
      <FlatList
        keyExtractor={this.keyExtractor}
        data={lrt1}
        renderItem={this.renderItem}
      />

    );
  }
}


class LRT2Screen extends React.Component {
  static navigationOptions = {
    title: 'LRT2 Stations',
    headerStyle: {
      backgroundColor: Colors.primary,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  keyExtractor = (item, index) => index.toString()

  renderItem = ({ item }) => (
    <ListItem onPress={() => this.props.navigation.navigate(item.name)}
      title={item.name}

      leftAvatar={{
        source: item.avatar_url && { uri: item.avatar_url },
        title: item.name[0]
      }}
      bottomDivider
      chevron

    />
  )

  render() {
    return (
      <FlatList
        keyExtractor={this.keyExtractor}
        data={lrt2}
        renderItem={this.renderItem}
      />

    );
  }
}



class BusScreen extends React.Component {
  static navigationOptions = {
    title: 'Buses',
    headerStyle: {
      backgroundColor: Colors.primary,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  keyExtractor = (item, index) => index.toString()

  renderItem = ({ item }) => (
    <ListItem
      title={item.name}

      leftAvatar={{
        source: item.avatar_url && { uri: item.avatar_url },
        title: item.name[0]
      }}
      bottomDivider

    />
  )

  render() {
    return (
      <FlatList
        keyExtractor={this.keyExtractor}
        data={buses}
        renderItem={this.renderItem}
      />

    );
  }
}

class TricycleScreen extends React.Component {
  static navigationOptions = {
    title: 'Trains',
    headerStyle: {
      backgroundColor: Colors.primary,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  keyExtractor = (item, index) => index.toString()

  renderItem = ({ item }) => (
    <ListItem
      title={item.name}
      subtitle={item.subtitle}

      leftAvatar={{
        source: item.avatar_url && { uri: item.avatar_url },
        title: item.name[0]
      }}
      bottomDivider

    />
  )

  render() {
    return (
      <FlatList
        keyExtractor={this.keyExtractor}
        data={tricycles}
        renderItem={this.renderItem}

      />

    );
  }
}


const AppNavigator = createStackNavigator(
  {
    Iskommute: HomeScreen,
    About: AboutScreen,
    Search: SearchScreen,
    Transportation: TransportationScreen,
    'Jeeps': JeepScreen,
    Buses: BusScreen,
    Trains: TrainScreen,
    Tricycles: TricycleScreen,
    'Ikot Jeep': IkotJeepScreen,
    Resources: ResourcesScreen,
    MRT3: MRT3Screen,
    LRT1: LRT1Screen,
    LRT2: LRT2Screen
  },
  {
    initialRouteName: 'Iskommute',
  },
);

const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: AppNavigator,
  },
  Transportation: {
    screen: TransportationScreen,
  },
  About: {
    screen: AboutScreen,
  },
  Resources: {
    screen: ResourcesScreen,
  },

},
  {
    contentComponent: DrawerContent,
  }
);


const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: 'center',
    flex: 1,
    marginTop: 40,
    padding: 16,
  },
  textAboutStyle: {
    padding: 20,
    marginBottom: 4,
    marginRight: 10,
    textAlign: 'justify',
  },
  textResourcesStyle: {
    padding: 20,
    marginBottom: 4,
    marginRight: 10,
    textAlign: 'justify',
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
  emailItem: {
    borderBottomWidth: 0.5,
    borderColor: 'rgba(0,0,0,0.3)',
    padding: 10
  },
  emailSubject: {
    color: 'rgba(0,0,0,0.5)'
  },
  searchInput: {
    padding: 10,
    borderColor: '#CCC',
    borderWidth: 1
  },
  imageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
  },
  textStyle: {
    color: '#fff',
    marginBottom: 4,
    marginRight: 20,
  },
  transportationStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fe4e4e',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 40,
    width: 145,
    borderRadius: 5,
    margin: 5,
  },
  searchStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fe4e4e',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 40,
    width: 92,
    borderRadius: 5,
    margin: 5,
  },
  jeepStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#5ab95b',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 40,
    width: 92,
    borderRadius: 5,
    margin: 5,
  },
  busStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#5ab95b',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 40,
    width: 92,
    borderRadius: 5,
    margin: 5,
  },
  trainStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#5ab95b',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 40,
    width: 92,
    borderRadius: 5,
    margin: 5,
  },

  icon: {
    width: 24,
    height: 24,
  },
});

//export default createAppContainer(AppNavigator);
export default createAppContainer(MyDrawerNavigator);
