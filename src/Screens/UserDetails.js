import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import moment from 'moment';


export default class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  //TODO: Separete Splash n Navigator if possbile !!!
  //REVIEW: Fixed Users !!!
  //NOTE: PULL to Refresh !!!
  render() {
    const { item } = this.props.navigation.state.params;
    return (
      <ScrollView>
        <Text style={styles.heading}>User Info</Text>

        <Image
          style={styles.imageThumbnail}
          source={{ uri: item.picture.large }} />

        <Text style={styles.text}>Title: {item.name.title}</Text>
        <Text style={styles.text}>First Name: {item.name.first}</Text>
        <Text style={styles.text}>Last Name: {item.name.last}</Text>
        <Text style={styles.text}>Gender: {item.gender}</Text>

        <Text style={styles.textTopPad}>Date of Birth: {moment(item.dob.date).format('L')}</Text>
        <Text style={styles.text}>Age: {item.dob.age}</Text>

        <Text style={styles.textTopPad}>Contacts:</Text>
        <Text style={styles.text}>Email: {item.email}</Text>
        <Text style={styles.text}>Phone-01: {item.phone}</Text>
        <Text style={styles.text}>Phone-02: {item.cell}</Text>

        <Text style={styles.textTopPad}>Location:</Text>
        <Text style={styles.text}>Street Name: {item.location.street.name}</Text>
        <Text style={styles.text}>Street No: {item.location.street.number}</Text>
        <Text style={styles.text}>State: {item.location.state}</Text>
        <Text style={styles.text}>Country: {item.location.country}</Text>
        <Text style={styles.text}>PostCode: {item.location.postcode}</Text>

        <Text style={styles.textTopPad}>Co-ordinates:</Text>
        <Text style={styles.text}>Latitude: {item.location.coordinates.latitude}</Text>
        <Text style={styles.text}>Longitude: {item.location.coordinates.longitude}</Text>

        <Text style={styles.textTopPad}>TimeZone:</Text>
        <Text style={styles.text}>Offset: {item.location.timezone.offset}</Text>
        <Text style={styles.text}>Description: {item.location.timezone.description}</Text>

        <Text style={styles.textTopPad}>Registration On: {moment(item.registered.date).format('LL')}</Text>
        <Text style={styles.text}>Registered Time Elapsed: {item.registered.age} Years</Text>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: 25,
  },
  imageThumbnail: {
    // justifyContent: 'center',
    // alignItems: 'center',
    resizeMode: 'contain',
    alignSelf: 'center',
    height: 150,
    width: 150,
    borderRadius: 50,
    marginBottom: 10,
    // marginTop: 10,/
  },
  heading: {
    fontWeight: 'bold',
    letterSpacing: 1,
    textDecorationLine: "underline",
    fontSize: 20,
    marginLeft: 10,

  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 5,

  },
  textTopPad: {
    fontSize: 15,
    paddingTop: 9,
    fontWeight: 'bold',
    marginLeft: 5,
  }
});