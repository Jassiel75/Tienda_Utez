import { StyleSheet, View, ScrollView, Text } from 'react-native'
import { Image, AirbnbRating } from "@rneui/base";
import React, { useLayoutEffect } from 'react'
import PagerView from 'react-native-pager-view';
import { map } from 'lodash';
export default function DetailProduct(props) {
  const { product } = props.route.params;
  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: product.name
    })
  }, [props.navigation])
  return (
    <View style={styles.container}>
      <ScrollView>
        <PagerView style={styles.pagerView} initialPage={0}>
          {map(product.images, (image, index) => {
            return (
              <View style={styles.page} key={index}>
                <Image source={{ uri: image }} style={{ width: '100%', height: "100%" }} resizeMode='cover' />
              </View>
            )
          })}
        </PagerView>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 16, marginVertical: 8 }}>
          <Text style={{ fontWeight: 'bold' }}>{product.name}</Text>
          <AirbnbRating
            count={5}
            defaultRating={product.rating / product.count}
            size={20}
            showRating={false}
            isDisabled={true}
          />
        </View>
        <Text style={{color:"gray", margin: 16}}>{product.description}</Text>
      </ScrollView>


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  pagerView: {
    height: 256,
  },
  page: {
    width: "100%",
    height: 256
  },
})