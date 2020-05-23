import React from 'react';
import {
    Modal,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Button,
    TouchableHighlight,
    StyleSheet,
    Dimensions,
    ScrollView,
    View,
    Image,
    Text,
    ImageBackground,
    ImageBackgroundBase
} from 'react-native';
import { Block, theme } from 'galio-framework';
import { LinearGradient } from 'expo-linear-gradient';


import { withNavigation } from '@react-navigation/compat';
import Carousel from 'react-native-snap-carousel';

import { Card } from '../components';
import articles from '../constants/articles';

import { BlurView } from 'expo-blur';
import images from "../assets/images"

const { width } = Dimensions.get('screen');


const pen = require('../assets/icons/pen.png')
const text_fields = require('../assets/icons/text_fields.png')
const notification = require('../assets/icons/notification.png')
const school = require('../assets/icons/school.png')
const ellipse = require('../assets/icons/Ellipse.png')
const bg = require('../assets/icons/menuItem.png')
const kalima = require('../assets/icons/kalima.png')
const sound = require('../assets/icons/sound.png')
const play = require('../assets/icons/play.png')

const data = require('../assets/darslar.json')



class Dars extends React.Component {

    state = {
        isModalVisible: false,
    };

    openModal = () => {
        this.setState({ isModalVisible: true });
        // alert(this.state.isModalVisible)
    };

    closeModal = () => {
        this.setState({ isModalVisible: false });
        // alert(this.state.isModalVisible)
    };

    renderMashq = (mashq) => {

        var items = [];
        mashq.items.map((item, index) => {
            items.push(
                <TouchableOpacity style={styles.mashqItem}>
                    <Text style={styles.mashqItemText}>{item.text}</Text>
                </TouchableOpacity>
            )
        })
        return (
            <>
                <Text style={styles.titleMashq}>{mashq.title}</Text>
                <View style={styles.mashq}>
                    {items}
                </View>
            </>
        )
    }

    renderTopshiriq = (topshiriq) => {

        var items = [];
        topshiriq.items.map((item, index) => {
            items.push(
                <TouchableOpacity style={styles.mashqItem}>
                    <Text style={styles.mashqItemText}>{item.text}</Text>
                </TouchableOpacity>
            )
        })
        return (
            <>
                <Text style={styles.titleMashq}>{topshiriq.title}</Text>
                <Text style={styles.titleMashq}>{topshiriq.text}</Text>
                <View style={styles.mashq}>
                    {items}
                </View>
            </>
        )
    }

    _renderItem = ({ item, index }) => {
        return (
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.articles}>
                <View style={styles.menuItem}>
                    <View style={styles.mainContent}>
                        <LinearGradient
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            colors={['#ffffff', '#e7e7e7', '#ffffff']} style={{ width: "100%" }} >
                            <Text style={styles.menuItemText}>{item.title}</Text>
                        </LinearGradient>
                        <View style={styles.mediaBtnWrap}>
                            <TouchableOpacity onPress={() => navigation.navigate("Dars")} >
                                <View style={styles.mediaBtn}>
                                    <Image source={require("../assets/icons/sound.png")} style={styles.soundImg} />
                                    <Text style={styles.mediaBtnText}>
                                        {"Дарснинг\nаудио шакли"}
                                    </Text>

                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate("Dars")} >
                                <View style={styles.mediaBtn1}>
                                    <Image source={require("../assets/icons/play.png")} style={styles.soundImg} />
                                    <Text style={styles.mediaBtnText}>
                                        {"Дарснинг\nвидео шакли"}
                                    </Text>

                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.innerContent}>
                            {item.reja && <>
                                <Text style={styles.reja}>{item.reja.text}</Text>
                                {item.reja.items.map((item, index) => {
                                    return (
                                        <Text key={index} style={styles.rejaItem}>{index + 1}.  {item.text}</Text>
                                    )
                                })}
                            </>}




                            {item.tayanchSoz && <>
                                <Text style={styles.tayanchSoz}>{item.tayanchSoz.text}</Text>
                                <View style={styles.tayanchSozContent}>
                                    {item.tayanchSoz.items.map((item, index) => {
                                        return (
                                            <View style={styles.tayanchSozItem}>
                                                <Text style={styles.tayanchSozItemText}>{item.text}</Text>
                                            </View>
                                        )
                                    })}
                                </View>
                            </>}

                            {
                                item.info && <>
                                    {item.info.map((item, index) => {
                                        return (
                                            <>
                                                {(item.type === 'text') && <>
                                                    <View style={styles.infoView}>
                                                        {item.title && <Text style={styles.infoTitle}>{item.title}</Text>}
                                                        {item.img && <Image style={styles.infoViewImg} source={images[item.img]}></Image>}
                                                        <Text style={styles.infoText}>
                                                            {'\t\t\t'}{item.text}
                                                        </Text>
                                                    </View>
                                                </>}
                                                {(item.type === 'eslatma') && <>
                                                    <TouchableOpacity onPress={this.openModal} style={styles.eslatma} >
                                                        < >
                                                            <Image style={styles.eslatmaImg} source={require('../assets/icons/notification.png')} />
                                                            <Text style={styles.eslatmaText}>{item.title}</Text>
                                                        </>
                                                    </TouchableOpacity>
                                                </>}
                                                {(item.type === 'mashq') && this.renderMashq(item)}
                                                {(item.type === 'topshiriq') && this.renderTopshiriq(item)}
                                            </>
                                        )
                                    })}
                                </>
                            }




                        </View>
                    </View>


                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        colors={['#ffffff', '#e7e7e7', '#ffffff']} style={styles.btnWrap} >
                        {/* <View style={styles.btnWrap}> */}

                        <TouchableHighlight
                            underlayColor={"#e5e5e5"}
                            style={styles.btn}
                            onPress={() => {
                                this._carousel.snapToPrev()
                            }}>
                            <View style={styles.prev}>
                                {data[index - 1] && <>
                                    <Image source={require("../assets/icons/prev.png")} style={styles.navImg} />
                                    <Text style={styles.btnText}>{data[index - 1].number}</Text>

                                </>}
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight

                            underlayColor="white"
                            style={styles.btn}
                            onPress={() => {
                                this._carousel.snapToNext()
                            }}>
                            <View style={styles.next}>
                                {data[index + 1] && <>
                                    <Text style={styles.btnText}>{data[index + 1].number}</Text>
                                    <Image source={require("../assets/icons/next.png")} style={styles.navImg} />
                                </>}
                            </View>
                        </TouchableHighlight>

                        {/* </View> */}
                    </LinearGradient>
                </View>


            </ScrollView>

        );
    }



    render() {
        return (
            <>
                <Carousel
                    ref={(c) => { this._carousel = c; }}
                    data={data}
                    renderItem={this._renderItem}
                    sliderWidth={width}
                    itemWidth={width}
                />
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={this.state.isModalVisible}
                    onRequestClose={() => {
                        // alert("Modal has been closed.");
                    }}
                >
                    <BlurView
                        blurType="light"
                        blurAmount={3}
                        // overlayColor="#fffffdb0"
                        intensity={45} style={[StyleSheet.absoluteFill, styles.nonBlurredContent]}
                    >
                        <View style={styles.centeredView}>

                            <View style={styles.modalView}>


                                <View style={styles.modalTop}>

                                    <View style={styles.modalTitle}>
                                        <Image source={require('../assets/icons/notification.png')} style={styles.modalTitleImg} />
                                        <Text style={styles.modalTitleText} >Эслатма</Text>
                                    </View>
                                    <TouchableOpacity
                                        style={{ ...styles.openButton }}
                                        onPress={() => {
                                            this.closeModal();
                                        }}>
                                        <View style={styles.modalClose}>
                                            <Image source={require('../assets/icons/close.png')} style={styles.textStyle} />
                                        </View>
                                    </TouchableOpacity>
                                </View>

                                <Text style={styles.modalContentText}>
                                    {'\t\t'} Аввалги дарсларда араб тилида унлилар асосан учта эканлигини, улар а, и, у қисқа унлилар бўлиб, чўзиқ унлилар айни ўша товушларнинг чўзиқроқ талаффуз этилган шакллари эканини ўрганиб ўтган эдик. Шунингдек, қисқа унлиларнинг ёзувда ҳаракатлар билан, чўзиқ унлиларнинг эса мад ҳарфлари орқали ифодаланишини ҳам билиб олдик. Энди эса ўша унлиларнинг талаффузини ўзлаштиришга киришамиз.

                                    Қисқа ва чўзиқ унли товушлар жавф – ҳалқум ва оғиз бўшлиғидан чиқади. Унлилар соф овоздан иборат товушлар бўлиб, уларнинг талаффузида
                                </Text>

                            </View>
                        </View>
                    </BlurView>
                </Modal>
            </>
        );
    }
}


const styles = StyleSheet.create({
    mashq: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        paddingVertical: 10
    },
    mashqItemText: {
        fontSize: 60,
        textAlign: 'center',
        lineHeight: 80,
        color: '#4F4F4F',
    },
    mashqItem: {
        minWidth: "15%",
        alignItems: 'center',
        backgroundColor: '#fff',
        marginHorizontal: 6,
        marginVertical: 6,
        borderColor: "#2D9CDB",
        borderRadius: 5,
        paddingTop: 8,
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
    modalContentText: {
        marginTop: 20,
        textAlign: 'justify',
        fontStyle: 'italic',

    },
    modalTop: {
        flexDirection: 'row',
        justifyContent: "center",
        // marginRight: -20,
        // borderWidth: 1,
        // marginHorizontal: -20,

    },
    modalClose: {
        // position: 'absolute',
        // right: 0
        paddingTop: 5,

    },
    modalTitleImg: {
        width: 20,
        height: 20,
    },
    modalTitle: {
        padding: 14,
        paddingVertical: 8,
        backgroundColor: "#F2C94C",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },
    modalTitleText: {
        color: "#fff",
        marginLeft: 7,
        fontSize: 24
    },
    eslatma: {
        paddingVertical: 4,
        paddingHorizontal: 6,
        alignItems: 'center',
        justifyContent: 'center',
        width: '30%',
        flexDirection: 'row',
        backgroundColor: '#F2C94C',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
        borderRadius: 31
    },
    eslatmaText: {
        marginLeft: 5,
        fontSize: 12,
        color: '#ffffff',
    },
    eslatmaImg: {
        height: 15,
        width: 15,
    },
    infoViewImg: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 350,
        width: "100%",
        resizeMode: "contain",
    },
    infoView: {
        justifyContent: "space-around",
        flexDirection: 'column',
    },
    infoViewText: {
        textAlign: 'justify',
    },
    infoText: {
        textAlign: 'justify',
        marginVertical: 6,
    },
    tayanchSoz: {
        textAlign: 'center',
        fontStyle: 'italic',
        fontWeight: '300',
        fontSize: 16,
        marginVertical: 10,
        letterSpacing: 2
    },
    infoTitle: {
        textAlign: 'center',
        fontStyle: 'italic',
        fontWeight: '300',
        fontSize: 16,
        marginVertical: 6,
        letterSpacing: 2
    },
    tayanchSozContent: {
        flexWrap: 'wrap',
        justifyContent: "space-between",
        alignItems: 'center',
        flexDirection: 'row'
    },
    tayanchSozItem: {
        marginVertical: 5,
        backgroundColor: '#2D9CDB',
        paddingVertical: 4,
        paddingBottom: 5,
        paddingHorizontal: 10,
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 17,
    },
    tayanchSozItemText: {
        color: '#ffffff',
        textAlign: 'center'
    },
    innerContent: {
        paddingHorizontal: 27,
        display: 'flex',
    },
    reja: {
        marginTop: 18,
        fontWeight: 'bold',
        fontSize: 16,
        marginVertical: 10,
        color: '#4F4F4F'
    },
    rejaItem: {
        fontSize: 14,
        color: '#4F4F4F'
    },
    mainContent: {
        width: "100%",
    },
    mediaBtnWrap: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 3
    },
    soundImg: {
        width: 20,
        height: 20,
        resizeMode: "contain",

    },
    mediaBtn: {
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "#fff",
        marginVertical: 2,
        marginHorizontal: 5,
        paddingHorizontal: 10,
        paddingBottom: 1,
        borderRadius: 31,
        borderColor: "#F2C94C",
        borderWidth: 5,
        justifyContent: "space-between",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,

    },
    mediaBtn1: {
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "#fff",
        marginVertical: 2,
        marginHorizontal: 5,
        paddingHorizontal: 8,
        paddingBottom: 1,
        borderRadius: 31,
        borderColor: "#FF7E7E",
        borderWidth: 5,
        justifyContent: "space-between",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
    },
    mediaBtnText: {
        textAlign: "left",
        fontSize: 8,
        paddingVertical: 2,
        paddingHorizontal: 5,
        color: "#4F4F4F",
    },
    home: {
        width: width,
        backgroundColor: "#E0E0E0",
    },
    articles: {
        // width: width,//- theme.SIZES.BASE * 2,
        // paddingVertical: theme.SIZES.BASE,
        paddingTop: 0,
        paddingBottom: 0,
        // height: "100%"
    },
    nav: {
        width: "100%"
    },
    prev: {
        marginLeft: 25,
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        padding: 10
    },
    next: {
        marginRight: 25,
        justifyContent: "flex-end",
        alignItems: "center",
        flexDirection: "row",
        padding: 10
    },
    navImg: {
        width: 30,
        height: 30,
        resizeMode: "contain"
    },
    menu: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    btnWrap: {
        flexDirection: 'row',
    },
    btn: {
        flexBasis: "50%"
    },
    menuItem: {
        flexBasis: "100%",
        height: "100%",
        padding: 3,
        paddingVertical: 0,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        marginHorizontal: 6,
        marginVertical: 6,

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
        elevation: 5,

    },
    menuItemImage: {
        height: 36,
        width: 36,
        resizeMode: "contain"
    },
    menuItemText: {
        fontSize: 20,
        textAlign: 'center',
        color: '#4F4F4F',
        paddingTop: 10,
        paddingBottom: 10
    },
    btnText: {
        fontSize: 16,
        textAlign: 'center',
        color: '#4F4F4F',
        paddingTop: 10,
        paddingBottom: 10
    },
    centeredView: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0, 0.5)',
        // padding: 20,
    },
    modalView: {
        margin: 40,
        backgroundColor: "white",
        borderRadius: 31,
        padding: 35,
        paddingTop: 0,
        // paddingHorizontal: 0,
        alignItems: "stretch",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#fff",
        padding: 10,
        paddingRight: 0,
        position: 'absolute',
        right: 0,
        // borderWidth: 1,
        // top: 0
    },
    textStyle: {
        // color: "#F2C94C",
        // fontWeight: "100",
        // textAlign: "center",
        // fontSize: 50,
        // lineHeight: 50,
        width: 30,
        height: 30,
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    titleMashq: {
        fontSize: 18,
        fontStyle: 'italic',
        paddingVertical: 10
    },
});

export default Dars
