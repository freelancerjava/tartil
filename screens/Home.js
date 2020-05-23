import React from 'react';
import { TouchableOpacity, StyleSheet, Dimensions, ScrollView, View, Image, Text, ImageBackground } from 'react-native';
import { Block, theme } from 'galio-framework';

import { withNavigation } from '@react-navigation/compat';

import { Card } from '../components';
import articles from '../constants/articles';
const { width } = Dimensions.get('screen');


const pen = require('../assets/icons/pen.png')
const text_fields = require('../assets/icons/text_fields.png')
const notification = require('../assets/icons/notification.png')
const school = require('../assets/icons/school.png')
const ellipse = require('../assets/icons/Ellipse.png')
const bg = require('../assets/icons/menuItem.png')
const kalima = require('../assets/icons/kalima.png')

const data = [
  {
    title: "Алифбо",
    image: pen,
    url: "Alifbo"
  },
  {
    title: "Асосий тушунчалар",
    image: text_fields,
    url: "MainThings"
  },
  {
    title: "Ҳарфларни ўрганиш",
    image: notification
  },
  {
    title: "Тажвид қоидалар",
    image: school
  },
  {
    title: "Иймон калималари",
    image: kalima
  },

  {
    title: "Қисқа\nсуралар",
    image: pen
  },
  {
    title: "Энг муҳим дуолар",
    image: pen
  },
  {
    title: "Намоздаги лафзлар",
    image: pen
  },
  {
    title: "Иймон калималари",
    image: pen
  }
]

class Home extends React.Component {
  renderArticles = () => {

    const { navigation} = this.props;
    var itemsC = 9;

    var items = [];

    data.map((item, index) => {

      items.push(
          <TouchableOpacity key={index} onPress={() => navigation.navigate(item.url)} style={styles.menuItem}>
            <View style={styles.menuItemImageWrapper}>
              <Image style={styles.menuItemImage} source={item.image} />
            </View>
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
        {this.renderArticles()}
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
    paddingVertical: theme.SIZES.BASE,
    paddingHorizontal: 7,
    paddingTop: 0
  },
  menu: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  menuItem: {
    flexBasis: "30%",
    height: 135,
    padding: 3,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    marginHorizontal: 6,
    marginVertical: 6,
    borderRadius: 5,
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
    // padding: 15,
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
    elevation: 5,
  },
  menuItemImage: {
    height: 36,
    width: 36,
    resizeMode: "contain"

  },
  menuItemText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#4F4F4F',
    paddingTop: 10,
    paddingBottom: 10
  },
});

export default Home
