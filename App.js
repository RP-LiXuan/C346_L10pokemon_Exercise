import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, SectionList, TouchableOpacity, Alert, Image} from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const datasource = [
  {
    data: [
      {name: 'Figure Skating', desc: 'Solo jumps and spins on ice', image: 'https://media1.popsugar-assets.com/files/thumbor/w9oJ8nt7NZdbZqy3405bAdme5KM=/fit-in/4507x3005/top/filters:format_auto():extract_cover():upscale()/2022/02/13/927/n/1922729/13612891674820ef_GettyImages-1369011704.jpg'},
      {name: 'Ice Dancing', desc: 'Ballroom-style couple dance on ice', image: 'https://static01.nyt.com/images/2018/02/12/sports/12briefing-canada/merlin_133678947_56cae417-09ac-41bf-8fc4-947da2cd74a3-superJumbo.jpg'},
    ],
    header: "On Ice",
    bgcolor: 'lightcyan',
    icon: 'snowflake',
    iconColor: 'steelblue',
  },
  {
    data: [
      {name: 'Artistic Swimming', desc: 'Synchronised routines in water', image: 'https://i.cbc.ca/1.6133451.1628342747!/fileImage/httpImage/image.JPG_gen/derivatives/16x9_1180/artistic-swimming-070821.JPG'},
      {name: 'Diving', desc: 'Flips and twists into the pool', image: 'https://www.shutterstock.com/editorial/image-editorial/M9TbQ835N6DaQ521MTk4Njg=/womens-3m-synchronised-springboard-diving-final-yani-440nw-14604243au.jpg'},
    ],
    header: "In Water",
    bgcolor: 'lightblue',
    icon: 'person-swimming',
    iconColor: 'navy',
  },
  {
    data: [
      {name: 'Rhythmic Gymnastics', desc: 'Routines with ribbon, hoop or ball', image: 'https://images.nbcolympics.com/sites/default/files/2021-03/ribbon_0.jpg?impolicy=rect_large_1920_1080'},
      {name: 'Artistic Gymnastics', desc: 'Beam, bars, vault and floor', image: 'https://lede-admin.defector.com/wp-content/uploads/sites/28/2021/08/GettyImages-1332123796.jpg'},
    ],
    header: "On the Mat",
    bgcolor: 'pink',
    icon: 'medal',
    iconColor: 'mediumvioletred',
  },
];

const renderItem = ({item, index, section}) => {
  return (
      <TouchableOpacity style={styles.opacityStyle}
                        onPress={ ()=> {Alert.alert(item.name, item.desc + "\nCategory: " + section.header) } }>
        <View style={styles.textBox}>
          <Text style={styles.textStyle}>{item.name}</Text>
          <Text style={styles.descStyle}>{item.desc}</Text>
        </View>
        <Image source={{uri: item.image}} style={styles.imageStyle}/>
      </TouchableOpacity>
  );
};

export default function App() {
  return (
      <View style={styles.container}>
        <Text style={styles.titleStyle}>Artistic Sports</Text>
        <SectionList sections={datasource}
                     contentContainerStyle={{padding: 10}}
                     renderItem={renderItem}
                     renderSectionHeader={({section:{header, bgcolor, icon, iconColor}}) =>(
                         <Text style={[styles.headerText, {backgroundColor:bgcolor}]}> <FontAwesome6 name={icon} size={20} color={iconColor} /> {header}</Text>
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
  titleStyle: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
  headerText: {
    fontSize: 22,
    marginTop: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    borderWidth: 1,
  },
  opacityStyle: {
    flexDirection: 'row',       // text left, image right
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: '#FFF8F0',
    padding: 10,
  },
  textBox: {
    flex: 1,                  // text takes the space left of the image
  },
  textStyle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  descStyle: {
    fontSize: 14,
    color: 'grey',
    marginTop: 4,
  },
  imageStyle: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
});