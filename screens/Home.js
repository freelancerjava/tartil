import React from 'react';
import { StyleSheet, Dimensions, ScrollView, View, Image, Text, ImageBackground } from 'react-native';
import { Block, theme } from 'galio-framework';

import { Card } from '../components';
import articles from '../constants/articles';
const { width } = Dimensions.get('screen');


const pen = require('../assets/icons/pen.png')
const ellipse = require('../assets/icons/Ellipse.png')
const bg = require('../assets/icons/menuItem.png')

class Home extends React.Component {
  renderArticles = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}>
        <View style={styles.menu}>
          <ImageBackground source={bg} style={styles.menuItem}>
            <ImageBackground source={ellipse} style={styles.menuItemImageWrapper}>
              <Image style={styles.menuItemImage} source={pen} />
            </ImageBackground>
            <View style={styles.menuItemTextWrapper}>
              <Text style={styles.menuItemText}>Алифбо</Text>
            </View>
          </ImageBackground>
          <ImageBackground source={bg} style={styles.menuItem}>
            <ImageBackground source={ellipse} style={styles.menuItemImageWrapper}>
              <Image style={styles.menuItemImage} source={pen} />
            </ImageBackground>
            <View style={styles.menuItemTextWrapper}>
              <Text style={styles.menuItemText}>Алифбо</Text>
            </View>
          </ImageBackground>
          <ImageBackground source={bg} style={styles.menuItem}>
            <ImageBackground source={ellipse} style={styles.menuItemImageWrapper}>
              <Image style={styles.menuItemImage} source={pen} />
            </ImageBackground>
            <View style={styles.menuItemTextWrapper}>
              <Text style={styles.menuItemText}>Алифбо</Text>
            </View>
          </ImageBackground>
          <ImageBackground source={bg} style={styles.menuItem}>
            <ImageBackground source={ellipse} style={styles.menuItemImageWrapper}>
              <Image style={styles.menuItemImage} source={pen} />
            </ImageBackground>
            <View style={styles.menuItemTextWrapper}>
              <Text style={styles.menuItemText}>Алифбо</Text>
            </View>
          </ImageBackground>
          <ImageBackground source={bg} style={styles.menuItem}>
            <ImageBackground source={ellipse} style={styles.menuItemImageWrapper}>
              <Image style={styles.menuItemImage} source={pen} />
            </ImageBackground>
            <View style={styles.menuItemTextWrapper}>
              <Text style={styles.menuItemText}>Алифбо</Text>
            </View>
          </ImageBackground>

          <ImageBackground source={bg} style={styles.menuItem}>
            <ImageBackground source={ellipse} style={styles.menuItemImageWrapper}>
              <Image style={styles.menuItemImage} source={pen} />
            </ImageBackground>
            <View style={styles.menuItemTextWrapper}>
              <Text style={styles.menuItemText}>Алифбо</Text>
            </View>
          </ImageBackground>

          <ImageBackground source={bg} style={styles.menuItem}>
            <ImageBackground source={ellipse} style={styles.menuItemImageWrapper}>
              <Image style={styles.menuItemImage} source={pen} />
            </ImageBackground>
            <View style={styles.menuItemTextWrapper}>
              <Text style={styles.menuItemText}>Алифбо</Text>
            </View>
          </ImageBackground>

          <ImageBackground source={bg} style={styles.menuItem}>
            <ImageBackground source={ellipse} style={styles.menuItemImageWrapper}>
              <Image style={styles.menuItemImage} source={pen} />
            </ImageBackground>
            <View style={styles.menuItemTextWrapper}>
              <Text style={styles.menuItemText}>Алифбо</Text>
            </View>
          </ImageBackground>

          <ImageBackground source={bg} style={styles.menuItem}>
            <ImageBackground source={ellipse} style={styles.menuItemImageWrapper}>
              <Image style={styles.menuItemImage} source={pen} />
            </ImageBackground>
            <View style={styles.menuItemTextWrapper}>
              <Text style={styles.menuItemText}>Алифбо</Text>
            </View>
          </ImageBackground>


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
    backgroundColor: "#E0E0E0"
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
  menu: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  menuItem: {
    flexBasis: "30%",
    padding: 3,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#fff',
    marginHorizontal: 1,
    marginVertical: 5
  },
  menuItemImageWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 63,
    width: 63
  },
  menuItemImage: {

  },
  menuItemTextWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2D9CDB',
    color: '#fff',
    paddingHorizontal: 25,
    paddingVertical: 12,
    borderRadius: 10
  },
  menuItemText: {
    color: '#fff',
  },
});

export default Home;
