import React, { Component } from 'react'
import { View, StyleSheet, Image, Dimensions } from 'react-native'
import Carousel from 'react-native-snap-carousel'

const styles = StyleSheet.create({
    carouselContainer: {
        height: 200,
        width:'100%'
    },
    carousel: {
        marginBottom: 0
    }
});
var carouselSlider= Dimensions.get('window').width
var carouselItem = Dimensions.get('window').width
export class Carouselcomponent extends Component<any, any> {
    constructor(props) {
        super(props)

        this.state = {
            activeIndex: 0,
            carouselItems: [
                {
                    title: "https://images.meesho.com/images/marketing/1649760423313.jpg"
                },
                {
                    title: "https://images.meesho.com/images/marketing/1649759799809.jpg"
                },
                {
                    title: "https://images.meesho.com/images/marketing/1649760442043.jpg"
                },
                {
                    title: "https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg"
                },
                {
                    title: 'https://images.meesho.com/images/marketing/1649759774600.jpg'
                },
            ]
        }
    }

    _renderItem({ item, index }) {
        return (
            <Image source={{ uri: item.title }} resizeMode='stretch' style={{
                height: '100%',
                width: '100%'
            }} />

        )
    }
    render() {
        return (
            <>
                    <View style={styles.carouselContainer}>
                        <Carousel
                            layout={"default"}
                            slideStyle={styles.carousel}
                            enableMomentum={false}
                            // lockScrollWhileSnapping={true}
                            loop={true}
                            enableSnap={true}
                            autoplay={true}
                            // ref={ref => this.carousel = ref}
                            data={this.state.carouselItems}
                            renderItem={this._renderItem}
                            sliderWidth={carouselSlider}
                            itemWidth={carouselItem}
                            onSnapToItem={index => this.setState({ activeIndex: index })}
                        />
                    </View>
            </>
        )
    }
}

export default Carouselcomponent

