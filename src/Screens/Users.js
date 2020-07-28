import React, { Component } from 'react';
import { ActivityIndicator, FlatList, Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Axios from 'axios';

export default class UsersScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true
    };
  }

  componentDidMount() {
    Axios.get('https://randomuser.me/api/?results=10')
      .then(res => {
        const data = res.data.results;
        this.setState({ data });
        // if(res){console.warn(data)} 
      })
      .catch(error => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  render() {
    const { data, isLoading } = this.state;
    return (
      <View style={styles.MainContainer}>
        {isLoading ?
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size='large' color='#330066' animating />
          </View>
          :
          (
            <FlatList
              data={data}
              keyExtractor={({ email }, index) => email}
              ItemSeparatorComponent={this.renderSeperator}
              renderItem={this.renderItem}
            />
          )
        }
      </View>
    );
  }

  // nava = () => { 
  //   const { navigate } = this.props.navigation;
  //   navigate('Details', item)
  // }

  renderItem = ({ item }) => {

    return (

      <TouchableOpacity style={{ flex: 1, flexDirection: 'row', }}

        onPress={() => this.props.navigation.navigate('Details', { item })}>
        <Image
          style={styles.imageThumbnail}
          source={{ uri: item.picture.large }} />

        <View style={{ flex: 1, justifyContent: 'center', }}>

          <Text style={styles.text}>FirstName: {item.name.first}</Text>
          <Text style={styles.text}>LastName: {item.name.last}</Text>
          <Text style={styles.text}>Gender: {item.gender}</Text>

        </View>

      </TouchableOpacity>
    )
  }

  renderSeperator = () => {
    return (
      <View
        style={{ height: 1, width: '100%', backgroundColor: 'black', }}  >
      </View>
    )
  }

}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: 10,
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    width: 70,
    borderRadius: 50,
  },
  text: {
    fontSize: 13,
    fontWeight: 'bold',
    marginLeft: 5,

  }
});