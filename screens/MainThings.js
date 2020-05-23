import React from 'react';
import { TouchableOpacity, StyleSheet, Dimensions, ScrollView, View, Image, Text, ImageBackground } from 'react-native';
import { Block, theme } from 'galio-framework';

import argonTheme from '../constants/Theme';
import { Card, Input } from '../components';
import articles from '../constants/articles';
const { width } = Dimensions.get('screen');

import Dars from "./Dars";



const pen = require('../assets/icons/pen.png')
const text_fields = require('../assets/icons/text_fields.png')
const notification = require('../assets/icons/notification.png')
const school = require('../assets/icons/school.png')
const ellipse = require('../assets/icons/Ellipse.png')
const bg = require('../assets/icons/menuItem.png')
const image = require('../assets/icons/naqsh.png')

const data = require('../assets/darslar.json')

class MainThings extends React.Component {
    renderMainThings = () => {
        const { navigation } = this.props;

        var items = [];
        data.map((item, index) => {
            items.push(
                <TouchableOpacity key={index} onPress={() => navigation.navigate("Dars")} style={styles.menuItem}>
                    <View>
                        <ImageBackground source={image} style={styles.menuItemImage}>
                            <Text style={styles.menuItemIndexText}>{index + 1}</Text>
                        </ImageBackground>

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

    renderSearch = () => {
        const { navigation } = this.props;
        return (
            <Input
                right
                color="black"
                style={styles.search}
                placeholder="Qalbingizni tinglang ..."
                placeholderTextColor={'#8898AA'}
                onFocus={() => navigation.navigate('Pro')}
                iconContent={
                    // <Icon size={16} color={theme.COLORS.MUTED} name="search-zoom-in" family="ArgonExtra" />
                    <Image source={require('../assets/icons/search.png')} style={{ width: 25, height: 25 }}></Image>
                }
            />
        );
    }

    render() {
        return (
            <Block flex center style={styles.home}>
                {this.renderSearch()}
                {this.renderMainThings()}
            </Block>
        );
    }
}

const styles = StyleSheet.create({
    home: {
        // width: width,
        backgroundColor: "#E0E0E0",
    },
    articles: {
        width: width - theme.SIZES.BASE * 2,
        // width: "90%"
        // paddingHorizontal: 10,
    },
    menu: {
        flex: 1,
        flexDirection: 'column',
        // backgroundColor: "#000",
        paddingHorizontal: 3
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "flex-start",
        backgroundColor: '#fff',
        borderColor: "#2D9CDB",
        borderBottomWidth: 3,
        padding: 5,
        marginVertical: 4,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 4,


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
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        width: 90,
        resizeMode: "contain",
        alignItems: "center",
        justifyContent: "center"
    },
    menuItemText: {
        flexBasis: "70%",
        marginHorizontal: 8,
        fontSize: 20,
        // textAlign: 'center',
        color: '#4F4F4F',
        marginVertical: 5
    },
    menuItemIndexText: {
        fontSize: 20,
        textAlign: 'center',
        color: '#828282',
    },
    search: {
        height: 48,
        width: width - 32,
        marginHorizontal: 16,
        borderRadius: 3,
        borderWidth: 0,
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
});

export default MainThings;
