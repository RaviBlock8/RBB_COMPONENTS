import React, { Component } from "react";
import {
  View,
  Image,
  ScrollView,
  Dimensions,
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import CarousleItem from "../carouselItem/CarousleItem";
import CarouselItem2 from "../carouselItem/CarouselItem2";
import CarouselItem3 from "../carouselItem/CarouselItem3";
import CarouselItem4 from "../carouselItem/CarouselItem4";
import CarouselItem5 from "../carouselItem/CarouselItem5";
import CarouselItem6 from "../carouselItem/CarouselItem6";
//width of my phone window without that soft navbar in bottom
const { width, height } = Dimensions.get("window");

const dummyData = [1, 2, 3, 4, 5, 6];

const Heading = () => {
  return (
    <View style={styles.HeaderContainer}>
      <View style={styles.Header}>
        <Text style={styles.headerText}>Contracts{"   "}</Text>
        <View style={styles.contractAmount}>
          <Text style={{ fontWeight: "bold" }}>{dummyData.length}</Text>
        </View>
      </View>
      <View style={styles.ImageContainer}>
        <TouchableOpacity>
          <Image source={require("../../images/Shape.png")} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default class Slideshow extends React.Component {
  scrollX = new Animated.Value(0); // this will be the scroll location of our ScrollView

  render() {
    // position will be a value between 0 and photos.length - 1 assuming you don't scroll pass the ends of the ScrollView
    /**In this I have put a fixed value of 325 as for now this is the size of carousel
     * Ideally I wanted to put percentage , but it is not possible to use it inside ScrolView
     * also I can just assign Dimension.get("window").width to it
     * because the cards are not of full width , they are little smaller then the whole width
     * other option will be to calculate card width using Dimensions width
     * and calculate percentage of width from it for the contract card
     * and then use Dimension.width-(margins from left and right)
     * This will give us a better approximation
     */
    let carouselItemWidth = (width * 90) / 100;
    let position = Animated.divide(this.scrollX, carouselItemWidth);

    return (
      <View style={styles.OuterContainer}>
        <Heading />
        <View
          // this will bound the size of the ScrollView to be a square because
          // by default, it will expand regardless if it has a flex value or not
          style={styles.scrollViewContainer}
        >
          <ScrollView
            horizontal={true}
            /**The reason I have put it to false is because carousel is not able to align card in center properly as we are swiping
             * This is because fixed card width and due to being smaller than screen size , it is not able to get
             * correct estimate of content offset
             * But I think this can be improved after I start calculating width using Dimension API
             */
            style={{ paddingHorizontal: (width * 6) / 100 }}
            pagingEnabled={false} // animates ScrollView to nearest multiple of it's own width
            showsHorizontalScrollIndicator={false}
            //this is done to push last item of list to the center in container
            contentContainerStyle={{ paddingRight: (width * 6) / 100 }}
            // the onScroll prop will pass a nativeEvent object to a function
            onScroll={Animated.event(
              // Animated.event returns a function that takes an array where the first element...
              [{ nativeEvent: { contentOffset: { x: this.scrollX } } }] // ... is an object that maps any nativeEvent prop to a variable
            )} // in this case we are mapping the value of nativeEvent.contentOffset.x to this.scrollX
            scrollEventThrottle={16} // this will ensure that this ScrollView's onScroll prop is called no faster than 16ms between each function call
          >
            {/* {dumyyData.map((source, i) => {
              // for every object in the photos array...
              return <CarousleItem key={i} />;
            })} */}
            <CarousleItem key={1} />
            <CarouselItem2 key={2} />
            <CarouselItem3 key={3} />
            <CarouselItem4 key={4} />
            <CarouselItem5 key={5} />
            <CarouselItem6 key={6} />
          </ScrollView>
        </View>
        <View
          style={styles.dotIndicatorContainer} // this will layout our dots horizontally (row) instead of vertically (column)
        >
          {dummyData.map((_, i) => {
            // the _ just means we won't use that parameter
            let opacity = position.interpolate({
              inputRange: [i - 1, i, i + 1], // each dot will need to have an opacity of 1 when position is equal to their index (i)
              outputRange: [0.3, 1, 0.3], // when position is not i, the opacity of the dot will animate to 0.3
              // inputRange: [i - 0.50000000001, i - 0.5, i, i + 0.5, i + 0.50000000001], // only when position is ever so slightly more than +/- 0.5 of a dot's index
              // outputRange: [0.3, 1, 1, 1, 0.3], // is when the opacity changes from 1 to 0.3
              extrapolate: "clamp", // this will prevent the opacity of the dots from going outside of the outputRange (i.e. opacity will not be less than 0.3)
            });
            return (
              <Animated.View // we will animate the opacity of the dots so use Animated.View instead of View here
                key={i} // we will use i for the key because no two (or more) elements in an array will have the same index
                style={{
                  opacity,
                  height: i === dummyData.length - 1 ? 4 : 6,
                  width: i === dummyData.length - 1 ? 4 : 6,
                  backgroundColor: "#7C7E81",
                  margin: 2,
                  borderRadius: 5,
                }}
              />
            );
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  OuterContainer: {
    // flex: 1,
    //reason we have to give height is because we can't define height of ScrollContainer
    //so we are using this outer container to contain it's height
    //will have to see how to handle this height when card will expand otherwise it will expand
    //and overflow
    height: (height * 40) / 100,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 5,
    backgroundColor: "#ffffff",
    // paddingLeft: (width * 6) / 100,
  },
  dotIndicatorContainer: {
    flexDirection: "row",
    //need to adjust this
    height: 20,
    alignItems: "center",
  },
  scrollViewContainer: { width, height: (height * 25) / 100 },
  HeaderContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    width: (width * 86) / 100,
    marginBottom: 17,
    marginTop: 26,
  },
  Header: {
    width: "87%",
    padding: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: {
    fontSize: 18,
    lineHeight: 20,
    fontWeight: "bold",
  },
  ImageContainer: {
    width: "13%",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingHorizontal: 7,
  },
  contractAmount: {
    width: 27,
    height: 22,
    backgroundColor: "#f1f3f6",
    borderRadius: 7,
    alignItems: "center",
  },
});
