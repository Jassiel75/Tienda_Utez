import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../config/utils/firebaseConnection";
import { useEffect, useState } from "react";
import Loading from "../../../kernel/components/Loading";
import ListProducts from "../../../kernel/components/ListProducts";
import { FlatList } from "react-native";
export default function Home(props) {
  const { navigation } = props;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    //Funcion anonima autoejecutable asincrona
    (async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "productos"));
        const productArray = [];
        querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data()}`);
          productArray.push(doc.data());
        });
        setProducts(productArray);
      } catch (error) {
        console.log("Error gettin documents: ", error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  if (loading) {
    return (
      <Loading
        isVisible={true}
        size={64}
        color="#4abfa4"
        title="Cargando los productos"
      />
    );
  } else {
    return (
      <View style={styles.container}>
        <FlatList
          data={products}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          renderItem={({ item }) => (
            <View style={styles.cardContainer}>
              <ListProducts
                images={item.images}
                name={item.name}
                description={item.description}
                price={item.price}
                rating={item.rating}
                count={item.count}
                navigation={navigation}
              />
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  cardContainer: {
    flex: 1,
    margin: 8,
  },
});
