import React from 'react';
import { TouchableOpacity, StyleSheet, Dimensions, ScrollView, View, Image, Text, ImageBackground } from 'react-native';
import { Block, theme } from 'galio-framework';

import { Card } from '../components';
import articles from '../constants/articles';
const { width } = Dimensions.get('screen');


const pen = require('../assets/icons/pen.png')
const text_fields = require('../assets/icons/text_fields.png')
const notification = require('../assets/icons/notification.png')
const school = require('../assets/icons/school.png')
const ellipse = require('../assets/icons/Ellipse.png')
const bg = require('../assets/icons/menuItem.png')

const data = [
    {title:"ج", mp3:""},
    {title:"ث", mp3:""},
    {title:"ت", mp3:""},
    {title:"ب", mp3:""},
    {title:"ا", mp3:""},
    {title:"ر", mp3:""},
    {title:"ذ", mp3:""},
    {title:"د", mp3:""},
    {title:"خ", mp3:""},
    {title:"ح", mp3:""},
    {title:"ض", mp3:""},
    {title:"ص", mp3:""},
    {title:"ش", mp3:""},
    {title:"س", mp3:""},
    {title:"ز", mp3:""},
    {title:"ف", mp3:""},
    {title:"غ", mp3:""},
    {title:"ع", mp3:""},
    {title:"ظ", mp3:""},
    {title:"ط", mp3:""},
    {title:"ن", mp3:""},
    {title:"م", mp3:""},
    {title:"ل", mp3:""},
    {title:"ك", mp3:""},
    {title:"ق", mp3:""},
    {title:"ي", mp3:""},
    {title:"و", mp3:""},
    {title:"ه", mp3:""},
]

class Alifbo extends React.Component {
  renderAlifbo = () => {
    const { navigation} = this.props;
    
    var items = [];
    data.map((item, index) => {
      items.push(
          <TouchableOpacity onPress={() => navigation.navigate("Alifbo")} style={styles.menuItem}>            
            <Text style={styles.menuItemText}>{item.title}</Text>
          </TouchableOpacity>
      )
    })
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}>
        <View style={styles.menu}>
          {items}
        </View>
      </ScrollView>
    )
  }

  render() {
    return (
      <Block flex center style={styles.home}>
        {this.renderAlifbo()} 
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,
    backgroundColor: "#E0E0E0",
  },
  articles: {
    // width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE * 2,
    paddingHorizontal: 0,
    height: "100%",
  },
  menu: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  menuItem: {
    flexBasis: "15%",
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 6,
    marginVertical: 6,
    borderColor: "#2D9CDB",
    borderRadius: 5,
    borderBottomWidth: 7,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  menuItemImageWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 63,
    width: 63,
    backgroundColor: '#2D9CDB',
    borderRadius: 31,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  menuItemImage: {
    height: 36,
    width: 36,
    resizeMode: "contain"

  },
  menuItemText: {
    fontSize: 50,
    textAlign: 'center',
    lineHeight: 80,
    color: '#4F4F4F',
    // paddingVertical: 2,

  },
});

export default Alifbo;
