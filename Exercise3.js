import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, FlatList, SectionList, TouchableOpacity, Alert, Image, Button} from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';


const datasource = [
  {
    data: [
      {name: 'Blastoise', card: '200'},
      {name: 'Poliwhirl', card: '176'},
    ],
    header: "Water",
    bgcolor: 'skyblue',
    icon: 'droplet',
    iconColor: 'steelblue',
  },
  {
    data: [
      {name: 'Charizard', card: '199'},
      {name: 'Ninetales', card: '38'},
    ],
    header: "Fire",
    bgcolor: 'red',
    icon: 'fire',
    iconColor: 'orange',
  },

];

const renderItem = ({item, index, section}) => {
  return (
      <TouchableOpacity style={styles.opacityStyle}
                        onPress={ ()=> {Alert.alert(item.name +" selected",
                            "Card number: " + item.card + "\nElement: " + section.header) } }>
        <Text style={styles.textStyle}>{item.name}</Text>
        <Image source={{uri: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_' + item.card + '-2x.png'}}
               style={{width:200, height: 300}}/>
      </TouchableOpacity>
  );
};

export default function App() {
  return (
      <View style={styles.container}>
        <Text style={{fontSize: 30}}>L10 Pokemon</Text>
        <Button title="Add Pokemon" onPress={() => Alert.alert("Coming soon")} />
        <SectionList sections={datasource}
                     contentContainerStyle={{padding: 10}}
                     renderItem={renderItem}
                     renderSectionHeader={({section:{title, bgcolor, icon, iconColor}}) =>(
                         <Text style={[styles.headerText, {backgroundColor:bgcolor}]}> <FontAwesome6 name={icon} size={20} color={iconColor} />{title}</Text>
                     )}/>
        <StatusBar style="auto"/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 20,
    marginBottom: 20,
  },
  opacityStyle: {
    borderWidth: 1,
    flexDirection: 'row',
    backgroundColor: '#E6E6FA',
    alignItems: 'center',
    paddingVertical: 10,
    paddingRight: 10,
  },
  textStyle: {
    flex: 1,
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
  },
  headerText: {
    fontSize:25,
    marginTop: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    borderWidth: 1
  }

});
